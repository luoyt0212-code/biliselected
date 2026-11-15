// Biliselected 主逻辑：路由、成长系统（经验/等级/能量/徽章）、播放页、小测验、家长页
// 纯浏览器脚本，不需要构建；进度只存在本机浏览器 localStorage 里。
(function () {
  'use strict'

  const D = window.BILI_DATA
  const STORE_KEY = 'biliselected:v1'
  const XP = { video: 10, mission: 30, word: 2, quiz: 5 }
  const $app = document.getElementById('app')
  const $modal = document.getElementById('modal')
  const $toast = document.getElementById('toast')

  // ---------- 存档 ----------
  const emptyState = () => ({
    watched: {},   // bv -> 打卡日期
    opened: {},    // 日期 -> [bv]，用来算今日能量
    missions: {},  // 关卡 key -> 完成日期
    words: {},     // 英文单词 -> true
    quiz: {},      // 'bv#题号' -> { pick, ok }，只记第一次作答
    bonus: {},     // 日期 -> 家长额外奖励的能量
    last: null,    // { id, at } 继续观看
    lastExport: null,
    settings: {}
  })

  function loadState () {
    try {
      const raw = localStorage.getItem(STORE_KEY)
      return raw ? Object.assign(emptyState(), JSON.parse(raw)) : emptyState()
    } catch (e) {
      return emptyState()
    }
  }
  let S = loadState()
  function save () {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)) } catch (e) { /* 隐私模式下存不了，页面照常可用 */ }
  }
  // 请求浏览器把存档标记为「持久」，降低 iPad Safari 自动清理的概率
  try { navigator.storage && navigator.storage.persist && navigator.storage.persist() } catch (e) { /* 不支持就算了 */ }

  // ---------- 工具 ----------
  // 所有模板里的动态文字都必须先经过 esc()；渲染统一走 setHTML()，方便审查
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
  function setHTML (el, html) {
    el.replaceChildren(document.createRange().createContextualFragment(html))
  }
  const pad = (n) => String(n).padStart(2, '0')
  const dateKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
  const today = () => dateKey(new Date())
  const fmtDur = (s) => `${Math.floor(s / 60)}:${pad(s % 60)}`
  const fmtFans = (n) => n >= 10000 ? `${(n / 10000).toFixed(1)} 万粉丝` : `${n} 粉丝`
  const daysSince = (iso) => iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 86400000) : Infinity

  const kidName = () => S.settings.kidName || D.site.kidName || '小探险家'
  const dailyLimit = () => Number(S.settings.dailyLimit || D.site.dailyLimit || 2)
  const quests = () => D.stages.concat(D.sideQuests)
  const findQuest = (key) => quests().find((q) => q.key === key)
  const questOf = (bv) => quests().find((q) => q.items.some((it) => it.id === bv))

  // 小测验选项打乱：同一道题每次顺序一样（按题目文字算种子），但正确答案不总在第一个
  function shuffledOrder (q) {
    let seed = 0
    for (const ch of q.q) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0
    const idx = q.options.map((_, i) => i)
    if (q.type === 'judge') return idx // 判断题固定「对 / 错」顺序
    for (let i = idx.length - 1; i > 0; i--) {
      seed = (seed * 1103515245 + 12345) >>> 0
      const k = seed % (i + 1);
      [idx[i], idx[k]] = [idx[k], idx[i]]
    }
    return idx
  }

  // 英语发音：用系统自带的语音（iPad / Mac 都支持），不需要联网
  function speak (text) {
    try {
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'en-US'
      u.rate = 0.85
      speechSynthesis.cancel()
      speechSynthesis.speak(u)
    } catch (e) { toast('这台设备不支持发音') }
  }

  let toastTimer = null
  function toast (msg) {
    $toast.textContent = msg
    $toast.classList.add('show')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => $toast.classList.remove('show'), 2200)
  }

  // ---------- 成长系统 ----------
  function stageProgress (st) {
    const watched = st.items.filter((it) => S.watched[it.id]).length
    const missionDone = !!S.missions[st.key]
    return { watched, total: st.items.length, missionDone, complete: watched === st.items.length && missionDone }
  }

  // 解锁规则：上一关看完 2/3 以上的视频（向上取整）就解锁下一关；动手任务不卡进度，但完成后才拿徽章。
  // index 是主线关卡序号（0 开始），支线不走这个函数，永远开放。
  function unlockNeed (index) {
    if (index === 0) return 0
    const prev = stageProgress(D.stages[index - 1])
    return Math.max(0, Math.ceil(prev.total * 2 / 3) - prev.watched)
  }
  const isStageUnlocked = (index) => unlockNeed(index) === 0

  const quizCorrect = () => Object.values(S.quiz).filter((r) => r.ok).length

  function totalXP () {
    return Object.keys(S.watched).length * XP.video +
      Object.keys(S.missions).length * XP.mission +
      Object.keys(S.words).length * XP.word +
      quizCorrect() * XP.quiz
  }

  function levelInfo (xp) {
    const lv = D.levels
    let i = 0
    while (i + 1 < lv.length && xp >= lv[i + 1].xp) i++
    const next = lv[i + 1]
    const pct = next ? Math.round((xp - lv[i].xp) / (next.xp - lv[i].xp) * 100) : 100
    return { idx: i, cur: lv[i], next, pct }
  }

  function openedToday () { return S.opened[today()] || [] }
  function energyTotal () { return dailyLimit() + (S.bonus[today()] || 0) }
  function energyLeft () { return Math.max(0, energyTotal() - openedToday().length) }

  function streak () {
    const days = new Set(Object.values(S.watched))
    const d = new Date()
    if (!days.has(dateKey(d))) d.setDate(d.getDate() - 1) // 今天还没看，从昨天往前数
    let n = 0
    while (days.has(dateKey(d))) { n++; d.setDate(d.getDate() - 1) }
    return n
  }

  // 「今天看这条」：主线里第一条没看过、且关卡已解锁的视频；主线都看完了再推荐支线
  function nextUp (exceptId) {
    for (let i = 0; i < D.stages.length; i++) {
      if (!isStageUnlocked(i)) break
      const it = D.stages[i].items.find((x) => !S.watched[x.id] && x.id !== exceptId)
      if (it) return { v: D.videos[it.id], st: D.stages[i] }
    }
    for (const st of D.sideQuests) {
      const it = st.items.find((x) => !S.watched[x.id] && x.id !== exceptId)
      if (it) return { v: D.videos[it.id], st }
    }
    return null
  }

  function allBadges () {
    const list = quests().map((q) => ({ ...q.badge, how: `完成「${q.name.replace(/^.*·\s*/, '')}」全部视频和动手任务`, got: stageProgress(q).complete }))
    const words = Object.keys(S.words).length
    const missions = Object.keys(S.missions).length
    return list.concat([
      { icon: '🌱', name: '第一次打卡', how: '看完第 1 条视频并打卡', got: Object.keys(S.watched).length >= 1 },
      { icon: '🔥', name: '连续 3 天', how: '连续 3 天都有打卡', got: streak() >= 3 },
      { icon: '🔥', name: '连续 7 天', how: '连续 7 天都有打卡', got: streak() >= 7 },
      { icon: '🔤', name: '英语小达人', how: '认识 10 个英语单词', got: words >= 10 },
      { icon: '🌍', name: '英语之星', how: '认识 50 个英语单词', got: words >= 50 },
      { icon: '💡', name: '知识小达人', how: '小测验答对 20 题', got: quizCorrect() >= 20 },
      { icon: '🧪', name: '动手达人', how: '完成 3 个动手任务', got: missions >= 3 },
      { icon: '🏆', name: '主线通关', how: `${D.stages.length} 关主线全部完成`, got: D.stages.every((s) => stageProgress(s).complete) }
    ])
  }

  // ---------- 视图：首页 ----------
  function viewHome () {
    const xp = totalXP()
    const L = levelInfo(xp)
    const left = energyLeft()
    const lastV = S.last && D.videos[S.last.id]
    const done = Object.keys(S.watched).length
    const total = Object.keys(D.videos).length
    const up = nextUp()
    // 继续观看优先于推荐：上次打开但还没打卡的那条
    const hero = lastV && !S.watched[lastV.id] ? { v: lastV, st: questOf(lastV.id), label: '继续观看' } : up && { ...up, label: '今天看这条' }

    const energy = Array.from({ length: energyTotal() }, (_, i) => `<b class="${i < energyTotal() - left ? 'used' : ''}">⚡</b>`).join('')

    let blocked = false // 前面已经有锁着的关卡，后面的关只提示「先通过前面的关卡」
    const map = D.stages.map((st, i) => {
      const p = stageProgress(st)
      const need = unlockNeed(i)
      const unlocked = need === 0 && !blocked
      const lockText = blocked ? '🔒 先通过前面的关卡' : `🔒 上一关再看 ${need} 条就能解锁`
      if (!unlocked) blocked = true
      const cls = !unlocked ? 'locked' : p.complete ? 'done' : ''
      const status = !unlocked ? lockText : p.complete ? '✅ 已通关' : `${p.watched}/${p.total} 条视频 · 任务${p.missionDone ? '✅' : '⬜'}`
      const open = unlocked ? `a href="#/stage/${st.key}"` : 'div aria-disabled="true"'
      const close = unlocked ? 'a' : 'div'
      return `${i ? '<div class="connector"></div>' : ''}
        <${open} class="card stage ${cls}">
          <div class="icon">${st.icon}</div>
          <div><h3>${esc(st.name)}</h3><div class="prog">${status}</div>
            <div class="minibar"><i style="width:${p.watched / p.total * 100}%"></i></div></div>
          <span class="go muted">${unlocked ? '进入 →' : ''}</span>
        </${close}>`
    }).join('')

    const side = D.sideQuests.map((st) => {
      const p = stageProgress(st)
      return `<a class="card stage ${p.complete ? 'done' : ''}" href="#/stage/${st.key}">
        <div class="icon">${st.icon}</div>
        <div><h3>${esc(st.name)}</h3><div class="prog">${p.watched}/${p.total} 条视频${p.complete ? ' · ✅ 已完成' : ''}</div>
          <div class="minibar"><i style="width:${p.watched / p.total * 100}%"></i></div></div>
        <span class="go muted">进入 →</span></a>`
    }).join('')

    const heroCard = left === 0 ? stopBanner() : hero ? `
      <a class="card next" href="#/watch/${hero.v.id}">
        <img src="${esc(hero.v.cover)}" alt="" referrerpolicy="no-referrer">
        <div>
          <div class="chip">${hero.st.icon} ${esc(hero.label)}</div>
          <div class="next-title">${esc(hero.v.title)}</div>
          <div class="small muted">${esc(hero.v.channel)} · ${fmtDur(hero.v.duration)}</div>
          <span class="btn big">▶ 开始看</span>
        </div>
      </a>` : '<section class="card stop"><div class="big">🏆</div><h2>全部视频都看完啦！</h2><p class="muted">你真了不起。去徽章墙看看，还有哪些动手任务没完成？</p></section>'

    setHTML($app, `
      <section class="card">
        <div class="hero">
          <div>
            <div class="muted small">AI 探险家</div>
            <h1>${esc(kidName())} · ${L.cur.icon} ${esc(L.cur.title)}</h1>
            <div class="xpbar"><i style="width:${L.pct}%"></i></div>
            <div class="small muted">${xp} 经验 ${L.next ? `· 再得 ${L.next.xp - xp} 经验升级为「${esc(L.next.title)}」` : '· 已满级！'}</div>
            <div class="small" style="margin-top:10px">今日能量（每看一条新视频用掉 1 格）</div>
            <div class="energy">${energy}</div>
          </div>
          <div class="avatar">${L.cur.icon}</div>
        </div>
        <div class="stats">
          <div class="stat"><strong>${done}/${total}</strong><span class="small muted">已打卡</span></div>
          <div class="stat"><strong>${streak()}🔥</strong><span class="small muted">连续天数</span></div>
          <div class="stat"><strong>${allBadges().filter((b) => b.got).length}</strong><span class="small muted">徽章</span></div>
        </div>
      </section>

      ${heroCard}

      <h2>🗺 主线任务</h2>
      <p class="muted small">先看 AI 有多厉害 → 像科学家一样好奇 → 自己动手 → 数学 → 编程 → 弄懂 AI 怎么学 → AI 会说话、会画画。</p>
      <div class="map">${map}</div>

      <h2>🎯 支线任务</h2>
      <p class="muted small">不用解锁，随时可以看，和主线一样消耗能量。</p>
      <div class="map side">${side}</div>
    `)
  }

  function stopBanner () {
    return `<section class="card stop">
      <div class="big">🌙</div>
      <h2 style="margin-top:6px">今天的能量用完啦！</h2>
      <p class="muted">看视频只是开始。现在去做点真的事：练一会儿剑、打一场匹克球，或者完成一个动手任务。明天能量会自动充满。</p>
    </section>`
  }

  // ---------- 单词卡（关卡页用） ----------
  function wordCards (words) {
    return words.map((w) => `<div class="word ${S.words[w.en] ? 'known' : ''}">
      <button class="say" data-say="${esc(w.en)}" aria-label="朗读 ${esc(w.en)}">🔊</button>
      <div class="w-main"><strong>${esc(w.en)}</strong><span class="muted">${esc(w.zh)}</span>
        ${w.ex ? `<button class="ex" data-say="${esc(w.ex)}">“${esc(w.ex)}” <span class="muted">${esc(w.exZh)}</span></button>` : ''}</div>
      <button class="know" data-word="${esc(w.en)}">${S.words[w.en] ? '✓ 会了' : '我会了'}</button>
    </div>`).join('')
  }

  function bindWords (root) {
    root.querySelectorAll('[data-say]').forEach((b) => { b.onclick = () => speak(b.dataset.say) })
    root.querySelectorAll('[data-word]').forEach((b) => {
      b.onclick = () => {
        const w = b.dataset.word
        const card = b.closest('.word')
        if (S.words[w]) delete S.words[w]
        else { S.words[w] = true; toast(`+${XP.word} 经验，记住了 ${w}！`) }
        save()
        card.classList.toggle('known', !!S.words[w])
        b.textContent = S.words[w] ? '✓ 会了' : '我会了'
      }
    })
  }

  // ---------- 视图：关卡 ----------
  function viewStage (key) {
    const st = findQuest(key)
    if (!st) return go('#/')
    const idx = D.stages.indexOf(st)
    if (idx >= 0 && !isStageUnlocked(idx)) return go('#/')
    const p = stageProgress(st)
    const knownWords = st.words.filter((w) => S.words[w.en]).length

    const cards = st.items.map((it) => {
      const v = D.videos[it.id]
      return `<a class="card vcard" href="#/watch/${v.id}">
        <div class="cover"><img src="${esc(v.cover)}" alt="" referrerpolicy="no-referrer" loading="lazy">
          <span class="dur">${fmtDur(v.duration)}</span>
          ${S.watched[v.id] ? '<span class="stamp">✓ 已打卡</span>' : ''}</div>
        <div class="body">
          <div class="title">${esc(v.title)}</div>
          <div class="meta">${esc(v.channel)}${v.official ? ' · ✔ 认证' : ''}${v.english || v.englishPage ? ' · 🇬🇧 英文原声' : ''}</div>
          <div class="small">${esc(v.reason)}</div>
        </div></a>`
    }).join('')

    const m = st.mission
    setHTML($app, `
      <a href="#/" class="back">← 回到地图</a>
      <h1 style="margin-top:8px">${st.icon} ${esc(st.name)}</h1>
      <p class="muted">${esc(st.goal)}</p>
      <div class="row small"><span class="chip">${p.watched}/${p.total} 已打卡</span>
        <span class="chip ${p.missionDone ? 'ok' : 'warn'}">${p.missionDone ? '任务已完成' : '任务未完成'}</span>
        <span class="chip">🔤 单词 ${knownWords}/${st.words.length}</span>
        ${p.complete ? `<span class="chip ok">${st.badge.icon} 已获得徽章「${esc(st.badge.name)}」</span>` : ''}</div>

      <h2>📺 本关视频</h2>
      <div class="grid">${cards}</div>

      <h2>🛠 动手任务 <span class="small muted">+${XP.mission} 经验</span></h2>
      <section class="card mission">
        <p style="margin-top:0">${esc(m.text)}</p>
        <div class="row">
          ${m.url ? `<a class="btn ghost" href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.label)} ↗</a>` : ''}
          <button class="btn ${p.missionDone ? 'ok' : ''}" id="missionBtn">${p.missionDone ? '✅ 已完成（点一下撤销）' : '我完成了！'}</button>
        </div>
      </section>

      <h2>🔤 本关英语单词 <span class="small muted">点 🔊 听发音，点例句听整句；会了就点「我会了」+${XP.word} 经验</span></h2>
      <div class="words">${wordCards(st.words)}</div>
    `)

    document.getElementById('missionBtn').onclick = () => {
      const before = snapshot()
      if (S.missions[st.key]) delete S.missions[st.key]
      else S.missions[st.key] = today()
      save()
      viewStage(key)
      if (S.missions[st.key]) celebrate(before, `+${XP.mission} 经验，动手任务完成！`)
    }
    bindWords($app)
  }

  // ---------- 视图：播放 ----------
  let timer = null
  function viewWatch (id) {
    const v = D.videos[id]
    if (!v) return go('#/')
    const st = questOf(id)
    const idx = D.stages.indexOf(st)
    if (idx >= 0 && !isStageUnlocked(idx)) return go('#/')

    // 看完就停：今天没打开过的新视频要消耗 1 格能量，能量为 0 时不再播放
    const opened = openedToday()
    if (!opened.includes(id)) {
      if (energyLeft() === 0) {
        setHTML($app, `<a href="#/" class="back">← 回到地图</a>${stopBanner()}`)
        return
      }
      S.opened[today()] = opened.concat(id)
    }
    S.last = { id, at: Date.now() }
    save()

    const hasEn = !!v.englishPage
    const page = v.page || 1
    const src = (p) => `https://player.bilibili.com/player.html?isOutside=true&bvid=${v.id}&p=${p}&autoplay=0&danmaku=0&high_quality=1`
    // 打卡按钮：在页面停留到视频时长的一半（最多 4 分钟）后才能点，防止「点开就打卡」
    const waitSec = Math.min(Math.ceil(v.duration / 2), 240)
    const done = !!S.watched[id]

    setHTML($app, `
      <a href="#/stage/${st.key}" class="back">← ${esc(st.icon)} ${esc(st.name)}</a>
      <h1 class="watch-title">${esc(v.title)}</h1>
      ${hasEn ? `<div class="tabs"><button data-p="${page}" class="on">中文</button><button data-p="${v.englishPage}">🇬🇧 英文原声</button></div>` : ''}
      <div class="player"><iframe id="player" src="${src(page)}" allow="fullscreen; encrypted-media" allowfullscreen></iframe></div>
      <div class="row small muted" style="margin-top:8px">
        <a href="${esc(v.channelUrl)}" target="_blank" rel="noopener">${esc(v.channel)}</a>
        ${v.official ? `<span class="chip">✔ ${esc(v.official)}</span>` : ''}
        <span>${fmtFans(v.fans)}</span><span>${fmtDur(v.duration)}</span>
        ${v.copyright === 2 ? '<span class="chip warn">转载 / 译制</span>' : ''}
        <a href="${esc(v.url)}${page > 1 ? `?p=${page}` : ''}" target="_blank" rel="noopener">去 B 站看高清 ↗</a>
      </div>

      <section class="card" style="margin-top:16px;display:grid;gap:12px">
        <div><strong>为什么看这条：</strong>${esc(v.reason)}</div>
        <div class="think">🤔 <strong>看完想一想：</strong>${esc(v.think)}</div>
        ${v.caution ? `<div class="caution">👨‍👩‍👦 给家长：${esc(v.caution)}</div>` : ''}
        <div class="row">
          <button class="btn big ${done ? 'ok' : ''}" id="doneBtn" ${done ? '' : 'disabled'}>${done ? '✅ 已打卡' : `再看 ${waitSec} 秒就能打卡`}</button>
          <span class="small muted">打卡 +${XP.video} 经验，然后做个小测验 · 今日能量剩 ${energyLeft()} 格</span>
        </div>
      </section>
      <div id="quizBox"></div>
    `)

    $app.querySelectorAll('.tabs button').forEach((b) => {
      b.onclick = () => {
        $app.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b))
        document.getElementById('player').src = src(Number(b.dataset.p))
      }
    })

    if (done) renderQuiz(v)

    const btn = document.getElementById('doneBtn')
    if (!done) {
      let left = waitSec
      timer = setInterval(() => {
        left--
        if (left > 0) { btn.textContent = `再看 ${left} 秒就能打卡`; return }
        clearInterval(timer)
        btn.disabled = false
        btn.textContent = '✓ 我看完了'
      }, 1000)
      btn.onclick = () => {
        const before = snapshot()
        S.watched[id] = today()
        save()
        btn.className = 'btn big ok'
        btn.textContent = '✅ 已打卡'
        btn.onclick = null
        toast(`+${XP.video} 经验！来做个小测验吧`)
        renderQuiz(v)
        document.getElementById('quizBox').scrollIntoView({ behavior: 'smooth', block: 'start' })
        celebrate(before, null)
      }
    }
  }

  // ---------- 小测验（打卡后出现） ----------
  function renderQuiz (v) {
    const box = document.getElementById('quizBox')
    const qs = v.quiz || []
    const allDone = qs.every((_, i) => S.quiz[`${v.id}#${i}`])
    const up = nextUp(v.id)
    const canNext = up && energyLeft() > 0
    const after = allDone ? `
      <div class="row" style="margin-top:14px">
        ${canNext ? `<a class="btn big" href="#/watch/${up.v.id}">下一条：${esc(up.v.title.slice(0, 18))}… ▶</a>` : ''}
        <a class="btn ghost" href="#/stage/${questOf(v.id).key}">回到关卡</a>
      </div>
      ${energyLeft() === 0 ? '<p class="muted">今天的能量用完了。去练剑、打球，或者做一个动手任务吧！明天见 👋</p>' : ''}` : ''

    setHTML(box, `<section class="card quiz">
      <h2 style="margin-top:0">💡 知识小测 <span class="small muted">答对一题 +${XP.quiz} 经验，答错也没关系</span></h2>
      ${qs.map((q, i) => {
        const r = S.quiz[`${v.id}#${i}`]
        const order = shuffledOrder(q)
        return `<div class="q" data-qi="${i}">
          <div class="q-text">${i + 1}. ${q.type === 'judge' ? '判断：' : ''}${esc(q.q)}</div>
          <div class="opts ${q.type}">${order.map((oi) => {
            let cls = ''
            if (r) cls = oi === q.answer ? 'right' : oi === r.pick ? 'wrong' : 'dim'
            return `<button class="opt ${cls}" data-oi="${oi}" ${r ? 'disabled' : ''}>${q.type === 'judge' ? (oi === 0 ? '✔ ' : '✘ ') : ''}${esc(q.options[oi])}</button>`
          }).join('')}</div>
          ${r ? `<div class="explain ${r.ok ? 'ok' : ''}">${r.ok ? '🎉 答对了！' : '🤔 正确答案是「' + esc(q.options[q.answer]) + '」。'}${esc(q.explain)}</div>` : ''}
        </div>`
      }).join('')}
      ${after}
    </section>`)

    box.querySelectorAll('.q').forEach((el) => {
      const i = Number(el.dataset.qi)
      el.querySelectorAll('.opt').forEach((b) => {
        b.onclick = () => {
          const key = `${v.id}#${i}`
          if (S.quiz[key]) return
          const before = snapshot()
          const pick = Number(b.dataset.oi)
          const ok = pick === qs[i].answer
          S.quiz[key] = { pick, ok }
          save()
          if (ok) toast(`+${XP.quiz} 经验，答对了！`)
          renderQuiz(v)
          celebrate(before, null)
        }
      })
    })
  }

  // ---------- 庆祝：升级、新徽章 ----------
  function snapshot () {
    return { level: levelInfo(totalXP()).idx, badges: allBadges().filter((b) => b.got).map((b) => b.name) }
  }

  // msg 为空时，只有升级或获得新徽章才弹窗
  function celebrate (before, msg) {
    const L = levelInfo(totalXP())
    const newBadges = allBadges().filter((b) => b.got && !before.badges.includes(b.name))
    const levelUp = L.idx > before.level
    if (!msg && !levelUp && !newBadges.length) return
    const lines = msg ? [`<p>${esc(msg)}</p>`] : []
    if (levelUp) lines.push(`<p><strong>升级啦！你现在是「${L.cur.icon} ${esc(L.cur.title)}」</strong></p>`)
    newBadges.forEach((b) => lines.push(`<p>获得新徽章：${b.icon} <strong>${esc(b.name)}</strong></p>`))
    const icon = newBadges[0] ? newBadges[0].icon : levelUp ? L.cur.icon : '🎉'
    setHTML($modal, `<div class="modal-back"><div class="card modal">
      <div class="big">${icon}</div>${lines.join('')}
      <button class="btn big" id="closeModal">太棒了</button></div></div>`)
    document.getElementById('closeModal').onclick = () => $modal.replaceChildren()
  }

  // ---------- 视图：徽章墙 ----------
  function viewBadges () {
    const list = allBadges()
    setHTML($app, `
      <h1>🏅 徽章墙</h1>
      <p class="muted">已获得 ${list.filter((b) => b.got).length} / ${list.length} 枚 · 认识 ${Object.keys(S.words).length} 个单词 · 小测验答对 ${quizCorrect()} 题</p>
      <div class="badges">${list.map((b) => `<div class="card badge ${b.got ? '' : 'off'}">
        <div class="b">${b.icon}</div><strong>${esc(b.name)}</strong>
        <div class="small muted">${esc(b.how)}</div></div>`).join('')}</div>
      <h2>⭐ 等级</h2>
      <div class="card"><table><tr><th>等级</th><th>称号</th><th>需要经验</th></tr>
        ${D.levels.map((l, i) => `<tr><td>Lv.${i + 1}</td><td>${l.icon} ${esc(l.title)}</td><td>${l.xp}</td></tr>`).join('')}
      </table><p class="small muted">看完一条 +${XP.video}，动手任务 +${XP.mission}，小测验答对 +${XP.quiz}，认识一个单词 +${XP.word}。</p></div>
    `)
  }

  // ---------- 家长验证：自制数字键盘（iPad 上比系统弹框好用） ----------
  function parentGate () {
    return new Promise((resolve) => {
      const a = 11 + Math.floor(Math.random() * 8)
      const b = 6 + Math.floor(Math.random() * 4)
      let val = ''
      const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '清除', '0', '确定']
      setHTML($modal, `<div class="modal-back"><div class="card modal gate">
        <h3>家长验证</h3><p class="q-text">${a} × ${b} = ?</p>
        <div class="gate-val" id="gateVal">&nbsp;</div>
        <div class="keypad">${keys.map((k) => `<button class="key" data-k="${k}">${k}</button>`).join('')}</div>
        <button class="btn ghost" id="gateCancel" style="margin-top:10px">取消</button>
      </div></div>`)
      const show = document.getElementById('gateVal')
      const finish = (ok) => { $modal.replaceChildren(); resolve(ok) }
      $modal.querySelectorAll('.key').forEach((k) => {
        k.onclick = () => {
          const key = k.dataset.k
          if (key === '清除') val = ''
          else if (key === '确定') {
            if (Number(val) === a * b) return finish(true)
            val = ''
            toast('答案不对，再试一次')
          } else if (val.length < 4) val += key
          show.textContent = val || ' '
        }
      })
      document.getElementById('gateCancel').onclick = () => finish(false)
    })
  }

  // ---------- 视图：家长页 ----------
  function viewParent () {
    const picks = quests().flatMap((q) => q.items.map((it) => ({ q, v: D.videos[it.id] })))
    const backupDays = daysSince(S.lastExport)
    const hasProgress = Object.keys(S.watched).length > 0
    const answered = Object.values(S.quiz)
    setHTML($app, `
      <h1>👨‍👩‍👦 家长页</h1>
      <p class="muted">清单编排于 ${esc(D.site.curatedAt)}，数据核验于 ${esc(D.builtAt)}。所有 BV 号都通过 B 站公开接口核验过，播放使用 B 站官方嵌入播放器。</p>

      ${hasProgress && backupDays > 14 ? `<div class="caution" style="margin-bottom:12px">💾 ${S.lastExport ? `已经 ${backupDays} 天没备份了` : '还没有备份过进度'}。iPad 上的网页数据可能被系统清理，建议点下面的「导出进度」存一份到「文件」App。</div>` : ''}

      <section class="card" style="display:grid;gap:12px">
        <h3>学习概况</h3>
        <div class="stats">
          <div class="stat"><strong>${Object.keys(S.watched).length}</strong><span class="small muted">已看视频</span></div>
          <div class="stat"><strong>${answered.length ? Math.round(answered.filter((r) => r.ok).length / answered.length * 100) : 0}%</strong><span class="small muted">小测正确率（${answered.length} 题）</span></div>
          <div class="stat"><strong>${Object.keys(S.missions).length}</strong><span class="small muted">动手任务</span></div>
        </div>
      </section>

      <section class="card" style="display:grid;gap:12px;margin-top:14px">
        <h3>设置 <span class="small muted">（修改需要家长验证）</span></h3>
        <label class="field">孩子的名字<input type="text" id="kidName" value="${esc(kidName())}"></label>
        <label class="field">每天能看几条新视频（1～5）<input type="number" inputmode="numeric" id="limit" min="1" max="5" value="${dailyLimit()}"></label>
        <div class="row">
          <button class="btn" id="saveSet">保存设置</button>
          <button class="btn ghost" id="bonus">今天额外奖励 1 格能量</button>
        </div>
        <div class="row">
          <button class="btn ghost" id="export">导出进度</button>
          <label class="btn ghost">导入进度<input type="file" id="import" accept="application/json,.json" hidden></label>
          <button class="btn ghost danger" id="reset">清空全部进度</button>
        </div>
        <p class="small muted">在 iPad 上：用 Safari 打开本站 → 点分享按钮 → 「添加到主屏幕」，以后从桌面图标打开，像 App 一样全屏，进度也更不容易丢。</p>
      </section>

      <h2>✅ 入选视频（${picks.length} 条）</h2>
      <div class="card table-wrap"><table>
        <tr><th>关卡</th><th>视频</th><th>UP 主 / 核验信息</th><th>入选原因</th></tr>
        ${picks.map(({ q, v }) => `<tr>
          <td>${q.icon}</td>
          <td><a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.title)}</a><div class="muted">${v.id} · ${fmtDur(v.duration)} · 发布 ${esc(v.pubdate)}</div></td>
          <td>${esc(v.channel)}<div class="muted">${fmtFans(v.fans)}<br>${v.official ? '✔ ' + esc(v.official) : '无认证'}${v.copyright === 2 ? '<br>⚠ 转载稿' : ''}</div></td>
          <td>${esc(v.reason)}${v.caution ? `<div class="muted">提示：${esc(v.caution)}</div>` : ''}</td></tr>`).join('')}
      </table></div>

      <h2>🚫 未入选 / 被替换（${D.rejected.length} 条）</h2>
      <div class="card table-wrap"><table>
        <tr><th>视频</th><th>UP 主</th><th>原因</th></tr>
        ${D.rejected.map((r) => `<tr><td><a href="https://www.bilibili.com/video/${esc(r.id)}" target="_blank" rel="noopener">${esc(r.id)}</a></td>
          <td>${esc(r.who)}</td><td>${esc(r.why)}</td></tr>`).join('')}
      </table></div>
      <p class="small muted">完整记录（含筛选标准）见项目里的 docs/curation-log.md。</p>
    `)

    document.getElementById('saveSet').onclick = async () => {
      if (!await parentGate()) return
      const lim = Math.min(5, Math.max(1, Number(document.getElementById('limit').value) || 2))
      S.settings = { kidName: document.getElementById('kidName').value.trim(), dailyLimit: lim }
      save()
      toast('设置已保存')
      viewParent()
    }
    document.getElementById('bonus').onclick = async () => {
      if (!await parentGate()) return
      S.bonus[today()] = (S.bonus[today()] || 0) + 1
      save()
      toast('今天多了 1 格能量')
    }
    document.getElementById('export').onclick = () => {
      S.lastExport = new Date().toISOString()
      save()
      const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' })
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `biliselected-progress-${today()}.json`
      a.click()
      setTimeout(() => URL.revokeObjectURL(a.href), 1000)
      viewParent()
    }
    document.getElementById('import').onchange = (e) => {
      const f = e.target.files[0]
      if (!f) return
      f.text().then((t) => {
        S = Object.assign(emptyState(), JSON.parse(t))
        save()
        toast('进度已导入')
        viewParent()
      }).catch(() => toast('文件格式不对'))
    }
    document.getElementById('reset').onclick = async () => {
      if (!await parentGate()) return
      if (!confirm('确定清空全部进度吗？此操作不能撤销。')) return
      S = emptyState()
      save()
      viewParent()
    }
  }

  // ---------- 路由 ----------
  function go (hash) { location.hash = hash }

  function route () {
    clearInterval(timer)
    $modal.replaceChildren()
    try { speechSynthesis.cancel() } catch (e) { /* 忽略 */ }
    const [, name, arg] = (location.hash || '#/').split('/')
    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('active', a.dataset.nav === (name || 'home'))
    })
    if (name === 'stage') viewStage(arg)
    else if (name === 'watch') viewWatch(arg)
    else if (name === 'badges') viewBadges()
    else if (name === 'parent') viewParent()
    else viewHome()
    window.scrollTo(0, 0)
  }

  window.addEventListener('hashchange', route)
  route()
})()
