#!/usr/bin/env python3
"""Biliselected 数据构建脚本（只用 Python 标准库）

做三件事：
1. 读 tools/curation.json（人工编排的路线、推荐理由、淘汰记录）
2. 逐条调用 B 站公开接口核验 BV 号，读取标题、UP 主、粉丝数、认证、时长、封面
3. 生成 data.js（网站数据）和 docs/curation-log.md（家长检查用的筛选记录）

用法（在 apps/biliselected 目录下运行）：
  python3 tools/build_data.py            核验全部视频并重新生成
  python3 tools/build_data.py --cache tools/.cache.json   复用缓存，减少请求

规则：任何一个入选视频核验失败（不存在 / 不可见），脚本会报错退出，不写文件。
"""
import argparse
import datetime
import json
import sys
import time
import urllib.request
import http.cookiejar
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36')
API = 'https://api.bilibili.com/x/web-interface/view/detail?bvid='

_jar = http.cookiejar.CookieJar()
_opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(_jar))


def http_get(url):
  req = urllib.request.Request(url, headers={'User-Agent': UA, 'Referer': 'https://www.bilibili.com/'})
  with _opener.open(req, timeout=20) as r:
    return r.read().decode('utf-8', 'replace')


def warmup():
  """先访问一次首页拿到 buvid 等匿名 cookie，否则接口很容易返回 412。"""
  try:
    http_get('https://www.bilibili.com/')
  except Exception:  # noqa: BLE001
    pass


def fetch(bv):
  """请求一条视频详情。被限流（412）或网络抖动时退避重试。"""
  last = None
  for i in range(4):
    time.sleep(1.5 + i * 15)  # 放慢节奏，别给 B 站添麻烦
    try:
      return json.loads(http_get(API + bv))
    except Exception as e:  # noqa: BLE001
      last = e
      print(f'  {bv} 第 {i + 1} 次请求失败：{type(e).__name__}，稍后重试', file=sys.stderr)
  raise RuntimeError(f'{bv} 请求失败：{last}')


def summarize(bv, detail):
  v, c = detail['View'], detail['Card']
  card = c['card']
  return {
    'id': bv,
    'title': v['title'],
    'url': f'https://www.bilibili.com/video/{bv}',
    'channel': v['owner']['name'],
    'mid': v['owner']['mid'],
    'channelUrl': f"https://space.bilibili.com/{v['owner']['mid']}",
    'fans': c.get('follower'),
    'official': (card.get('Official') or {}).get('title', ''),
    'sign': (card.get('sign') or '').strip(),
    'duration': v['duration'],
    'pages': [p['part'] for p in v['pages']],
    'cover': v['pic'].replace('http://', 'https://') + '@480w_270h_1c.webp',
    'copyright': v['copyright'],  # 1 自制 2 转载
    'views': v['stat']['view'],
    'pubdate': datetime.date.fromtimestamp(v['pubdate']).isoformat(),
  }


def verify_all(ids, cache, optional=()):
  out = {}
  warmed = False
  for bv in ids:
    if bv in cache:
      out[bv] = cache[bv]
      continue
    if not warmed:
      warmup()
      warmed = True
    print(f'核验 {bv} …', file=sys.stderr)
    try:
      d = fetch(bv)
    except RuntimeError as e:
      if bv not in optional:
        raise
      out[bv] = {'id': bv, 'error': f'网络请求失败（{e}）'}
      continue
    if d.get('code') != 0:
      out[bv] = {'id': bv, 'error': f"{d.get('code')} {d.get('message')}"}
      continue
    out[bv] = summarize(bv, d['data'])
    cache[bv] = out[bv]
  return out


def fmt_dur(s):
  return f'{s // 60}:{s % 60:02d}'


def fmt_fans(n):
  if n is None:
    return '?'
  return f'{n / 10000:.1f} 万' if n >= 10000 else str(n)


def build_log(cur, info, today):
  lines = [
    '# Biliselected 视频筛选记录',
    '',
    f'> 生成时间：{today}　|　所有 BV 号均通过 B 站公开接口 `x/web-interface/view/detail` 核验，粉丝数、认证信息为核验当天的数据。',
    '',
    '## 筛选标准',
    '',
    '1. **来源优先级**：官方科普机构 > 认证的知名科普 UP 主 > 海外优质频道的官方 B 站号 > 长期专注某领域的原创频道。',
    '2. **必须排除**：搬运号（简介自述或稿件标为转载且无授权说明）、卖课引流（「限时特惠」「全 N 集」「学完就业」）、来源不明的同名杂号、疑似批量 AI 生成内容。',
    '3. **内容排除**：低龄营销向动画、黑色幽默、地缘政治、志怪恐怖、纯数码评测、制造恐慌的标题。',
    '4. **看完就停**：单条尽量 15 分钟以内；长合集只指定某一集。',
    '5. **AI 阶段**：必须真正讲到神经网络 / 机器学习的原理，而不是只讲「AI 很厉害」。',
    '',
    f'## 入选（{sum(len(s["items"]) for s in cur["stages"] + cur["sideQuests"])} 条）',
    '',
    '| 关卡 | BV 号 | 标题 | UP 主 | 粉丝 | 认证 | 时长 | 入选原因 |',
    '|---|---|---|---|---|---|---|---|',
  ]
  for st in cur['stages'] + cur['sideQuests']:
    for it in st['items']:
      v = info[it['id']]
      off = v['official'] or '（无认证）'
      if v['copyright'] == 2:
        off += '｜转载稿'
      lines.append(
        f"| {st['icon']} | [{v['id']}]({v['url']}) | {v['title']} | {v['channel']} | {fmt_fans(v['fans'])} | {off} | {fmt_dur(v['duration'])} | {it['reason']} |"
      )
  lines += [
    '',
    '## 未入选 / 被替换（附原因）',
    '',
    '| BV 号 | UP 主 | 核验结果 | 原因 |',
    '|---|---|---|---|',
  ]
  for r in cur['rejected']:
    v = info.get(r['id'], {})
    if 'error' in v:
      status = f"接口返回 {v['error']}"
    elif v:
      status = f"存在｜粉丝 {fmt_fans(v['fans'])}｜{v['official'] or '无认证'}"
    else:
      status = '未请求'
    lines.append(f"| [{r['id']}](https://www.bilibili.com/video/{r['id']}) | {r['who']} | {status} | {r['why']} |")
  lines += [
    '',
    '## 家长提示',
    '',
    '- 「转载稿」不等于搬运：CrashCourse 字幕组等长期译制组织会注明出处，仍然收录，但在页面上标出。',
    '- 失效检查：重新运行 `python3 tools/build_data.py`，失效视频会让脚本报错，按提示替换即可。',
    '',
  ]
  return '\n'.join(lines)


def main():
  ap = argparse.ArgumentParser()
  ap.add_argument('--cache', help='缓存文件路径（可选）')
  args = ap.parse_args()

  cur = json.loads((ROOT / 'tools' / 'curation.json').read_text(encoding='utf-8'))
  cache_path = Path(args.cache) if args.cache else None
  cache = json.loads(cache_path.read_text()) if cache_path and cache_path.exists() else {}

  picks = [it['id'] for st in cur['stages'] + cur['sideQuests'] for it in st['items']]
  if len(picks) != len(set(picks)):
    sys.exit('curation.json 里有重复的 BV 号')
  rejected = [r['id'] for r in cur['rejected']]
  try:
    info = verify_all(picks + rejected, cache, optional=set(rejected))
  finally:
    if cache_path:
      cache_path.write_text(json.dumps(cache, ensure_ascii=False))

  bad = [bv for bv in picks if 'error' in info[bv]]
  if bad:
    sys.exit('以下入选视频核验失败，请替换后再生成：' + ', '.join(f"{b}（{info[b]['error']}）" for b in bad))

  today = datetime.date.today().isoformat()
  videos = {}
  for st in cur['stages'] + cur['sideQuests']:
    for it in st['items']:
      v = dict(info[it['id']])
      v.update({k: it[k] for k in ('reason', 'think', 'caution', 'page', 'englishPage', 'english', 'quiz') if k in it})
      videos[it['id']] = v
  data = {
    'site': cur['site'],
    'levels': cur['levels'],
    'stages': cur['stages'],
    'sideQuests': cur['sideQuests'],
    'videos': videos,
    'rejected': [dict(r, verified='error' not in info.get(r['id'], {'error': 1})) for r in cur['rejected']],
    'builtAt': today,
  }
  js = ('// 由 tools/build_data.py 自动生成，请改 tools/curation.json 后重新运行脚本，不要手改。\n'
        'window.BILI_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + '\n')
  (ROOT / 'data.js').write_text(js, encoding='utf-8')
  (ROOT / 'docs' / 'curation-log.md').write_text(build_log(cur, info, today), encoding='utf-8')
  print(f'完成：{len(picks)} 条入选、{len(rejected)} 条淘汰记录，已写入 data.js 和 docs/curation-log.md')


if __name__ == '__main__':
  main()
