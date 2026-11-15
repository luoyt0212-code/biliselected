// 由 tools/build_data.py 自动生成，请改 tools/curation.json 后重新运行脚本，不要手改。
window.BILI_DATA = {
  "site": {
    "name": "Biliselected",
    "kidName": "小探险家",
    "audience": "小学四年级（8～10 岁）",
    "dailyLimit": 2,
    "curatedAt": "2026-11-15"
  },
  "levels": [
    {
      "xp": 0,
      "title": "好奇宝宝",
      "icon": "🥚"
    },
    {
      "xp": 60,
      "title": "小小实验员",
      "icon": "🧪"
    },
    {
      "xp": 150,
      "title": "创客学徒",
      "icon": "🔧"
    },
    {
      "xp": 260,
      "title": "数学侦探",
      "icon": "🔍"
    },
    {
      "xp": 400,
      "title": "代码剑士",
      "icon": "⚔️"
    },
    {
      "xp": 560,
      "title": "AI 训练师",
      "icon": "🤖"
    },
    {
      "xp": 740,
      "title": "AI 探险家",
      "icon": "🚀"
    },
    {
      "xp": 900,
      "title": "未来科学家",
      "icon": "🌟"
    }
  ],
  "stages": [
    {
      "key": "wow",
      "icon": "🤩",
      "name": "第 1 关 · 哇，AI 原来这么厉害",
      "goal": "先不管原理，看看 AI 和机器人能做到什么：玩贪吃蛇、学走路、画出以假乱真的动物、像人一样灵活地动。",
      "mission": {
        "text": "和 AI 玩一局「你画我猜」：打开 Quick, Draw!，画 6 张画，数数 AI 猜对了几张。猜错的那张，想想它为什么会猜错。",
        "url": "https://quickdraw.withgoogle.com/",
        "label": "打开 Quick, Draw!"
      },
      "words": [
        {
          "en": "AI",
          "zh": "人工智能",
          "ex": "AI can play games.",
          "exZh": "AI 会玩游戏。"
        },
        {
          "en": "robot",
          "zh": "机器人",
          "ex": "The robot can walk.",
          "exZh": "这个机器人会走路。"
        },
        {
          "en": "smart",
          "zh": "聪明的",
          "ex": "AI is very smart.",
          "exZh": "AI 很聪明。"
        },
        {
          "en": "game",
          "zh": "游戏",
          "ex": "Let's play a game!",
          "exZh": "我们来玩个游戏吧！"
        },
        {
          "en": "snake",
          "zh": "蛇",
          "ex": "The snake is very long.",
          "exZh": "这条蛇很长。"
        },
        {
          "en": "walk",
          "zh": "走路",
          "ex": "I can walk to school.",
          "exZh": "我能走路去上学。"
        },
        {
          "en": "real",
          "zh": "真的",
          "ex": "Is this photo real?",
          "exZh": "这张照片是真的吗？"
        },
        {
          "en": "fake",
          "zh": "假的",
          "ex": "This picture is fake.",
          "exZh": "这张图是假的。"
        }
      ],
      "badge": {
        "icon": "🤩",
        "name": "AI 惊叹者"
      },
      "items": [
        {
          "id": "BV1ag4y1F7x4",
          "reason": "AI 工程师林亦让 AI 自己玩了几百万局贪吃蛇，最后玩到满屏。第一次看到「没人教，AI 自己练出来」。",
          "think": "AI 一开始玩得很烂，后来为什么越来越厉害？它靠的是什么？",
          "caution": "前 1 分半讲用 AutoGPT 写游戏，可以直接拖到 01:37 看 AI 打游戏的部分。",
          "quiz": [
            {
              "type": "choice",
              "q": "AI 刚开始玩贪吃蛇时为什么玩得很差？",
              "options": [
                "电脑太慢了",
                "它还没练习过，不知道怎么做能得分",
                "有人故意让它输"
              ],
              "answer": 1,
              "explain": "AI 不是一出生就会的，要玩很多很多局、根据得分不断调整，才越来越厉害。"
            }
          ]
        },
        {
          "id": "BV1A5QGYCECR",
          "reason": "一个什么都不会的小人，摔了成千上万次才学会走路。用最好笑的方式讲清「强化学习」：做对了加分，做错了扣分。",
          "think": "你学击剑的弓步时，是不是也是一次次做、教练一次次纠正？和 AI 学走路哪里像？",
          "caution": "UP 主在简介里说明视频有不严谨的描述，当作「有趣的引子」看，不用记术语。",
          "quiz": [
            {
              "type": "judge",
              "q": "在强化学习里，AI 做对了会得到「奖励」，做错了会被「扣分」。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "就像玩游戏得分一样，AI 会想办法让奖励越来越多，于是慢慢学会了走路。"
            }
          ]
        },
        {
          "id": "BV1eVtc6hEhn",
          "reason": "研究了 10 年网络生物的无穷小亮，能不能分出哪些动物照片是 AI 画的？AI 厉害到连专家都要仔细看——所以我们要学会「不全信」。",
          "think": "如果在网上看到一张很神奇的动物照片，你会用什么办法判断它是不是 AI 画的？",
          "caution": "12 分钟，节奏快，适合周末和家长一起看、一起猜。",
          "quiz": [
            {
              "type": "choice",
              "q": "在网上看到一张特别神奇的动物照片，最好的做法是？",
              "options": [
                "马上转发给所有人",
                "查查可靠的来源，仔细看看有没有奇怪的细节",
                "照片不会骗人，肯定是真的"
              ],
              "answer": 1,
              "explain": "现在 AI 能画出以假乱真的图片，所以要先查证再相信。"
            }
          ]
        },
        {
          "id": "BV1JYRjYoEzE",
          "reason": "稚晖君团队造的人形机器人，能走、能跳、能和人互动。看 AI 有了「身体」之后能做什么。",
          "think": "机器人要像人一样走路，需要哪些「感觉」？（提示：想想你练击剑时怎么保持平衡）",
          "caution": "12 分钟，有不少技术画面，可以挑机器人动起来的片段看。",
          "quiz": [
            {
              "type": "choice",
              "q": "机器人能保持平衡不摔倒，主要靠什么？",
              "options": [
                "传感器一直测量身体的姿势，程序不停地调整",
                "运气好",
                "穿了很重的鞋子"
              ],
              "answer": 0,
              "explain": "机器人身上有像「内耳」一样的传感器，能感觉到自己往哪边倒，再马上调整动作。"
            }
          ]
        },
        {
          "id": "BV12X4y1R7bA",
          "reason": "上海科技馆官方带你逛「机器人世界」展区：会下棋、会弹琴、会画画的机器人。以后去上海可以去现场看。",
          "think": "你最想要一个会做什么的机器人？它需要学会哪些本领？",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "机器人只能做一件事，永远学不会新本领。",
              "options": [
                "对",
                "错"
              ],
              "answer": 1,
              "explain": "很多机器人可以通过重新编程，或者用 AI 学习，学会新的本领。"
            }
          ]
        }
      ]
    },
    {
      "key": "curious",
      "icon": "🔬",
      "name": "第 2 关 · 像科学家一样好奇",
      "goal": "科学家和 AI 研究员每天做的事，就是：提问题、猜答案、做实验、看结果。先爱上「为什么」。",
      "mission": {
        "text": "冰糖实验：晚上关灯，等眼睛适应黑暗后，用钳子（请家长帮忙）用力夹碎一块冰糖，或两块冰糖互相用力摩擦，看看有没有一闪一闪的蓝光。先猜，再试，把结果画下来。",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "science",
          "zh": "科学",
          "ex": "I love science.",
          "exZh": "我爱科学。"
        },
        {
          "en": "experiment",
          "zh": "实验",
          "ex": "Let's do an experiment.",
          "exZh": "我们来做个实验吧。"
        },
        {
          "en": "question",
          "zh": "问题",
          "ex": "I have a question.",
          "exZh": "我有一个问题。"
        },
        {
          "en": "guess",
          "zh": "猜",
          "ex": "Can you guess the answer?",
          "exZh": "你能猜出答案吗？"
        },
        {
          "en": "why",
          "zh": "为什么",
          "ex": "Why is the sky blue?",
          "exZh": "天空为什么是蓝色的？"
        },
        {
          "en": "toy",
          "zh": "玩具",
          "ex": "This toy can fly.",
          "exZh": "这个玩具会飞。"
        },
        {
          "en": "light",
          "zh": "光",
          "ex": "I can see a blue light.",
          "exZh": "我看到了一道蓝光。"
        },
        {
          "en": "sugar",
          "zh": "糖",
          "ex": "Sugar is sweet.",
          "exZh": "糖是甜的。"
        }
      ],
      "badge": {
        "icon": "🔬",
        "name": "好奇心科学家"
      },
      "items": [
        {
          "id": "BV1KbxC6YE7F",
          "page": 2,
          "englishPage": 1,
          "reason": "前 NASA 工程师 Mark Rober 把超市里买的 4 个玩具拆开，每个里面都藏着一个物理原理。拆玩具也是做科学！",
          "think": "家里有没有坏掉的玩具？拆开之前先猜猜：里面是什么让它动起来的？",
          "caution": "第 2P 是中文配音，第 1P 是英文原声，学英语可以切到第 1P 再看一遍。",
          "quiz": [
            {
              "type": "judge",
              "q": "拆开玩具看看里面是怎么工作的，也是一种科学探索。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "科学家和工程师常常就是这样：拆开看看、想想原理、再自己做一个。"
            }
          ]
        },
        {
          "id": "BV1Yb411J7fT",
          "reason": "中科院物理所官方：厨房里的冰糖被敲碎时竟然会发出蓝光。不到 3 分钟，看完就能自己在家试。",
          "think": "为什么要关灯、等一会儿再做实验？",
          "caution": "做实验时用钳子夹，别用牙咬，别用锤子乱砸。",
          "quiz": [
            {
              "type": "choice",
              "q": "冰糖被敲碎时发出的微弱蓝光，叫什么现象？",
              "options": [
                "摩擦发光",
                "太阳能",
                "镜子反光"
              ],
              "answer": 0,
              "explain": "有些晶体被压碎或摩擦时会发光，叫「摩擦发光」，几百年前就有人发现了。"
            }
          ]
        },
        {
          "id": "BV1wM4y1T7WS",
          "reason": "高铁跑得那么快，车厢里的蚊子为什么不会被甩到车尾？中科院物理所官方用一个日常问题，教你科学家怎么一步步想问题。",
          "think": "如果你在跑动的高铁上原地跳起来，会落回原地吗？先猜，下次坐高铁时试一试。",
          "caution": "后半段有一点受力分析，看不懂可以先跳过，记住「先猜再验证」就好。",
          "quiz": [
            {
              "type": "choice",
              "q": "在平稳匀速行驶的高铁上原地跳起来，你会落在哪里？",
              "options": [
                "差不多落回原地",
                "被甩到车尾",
                "飞到车头"
              ],
              "answer": 0,
              "explain": "你跳起来时，身体本来就和车一起往前跑，会保持这个速度，这叫「惯性」。"
            }
          ]
        },
        {
          "id": "BV1BA4662EfB",
          "reason": "中科院物理所官方：蚊子的嘴竟然被科学家拿来当 3D 打印针头！大自然是最好的老师。2 分钟。",
          "think": "你还能想到哪些动物身上的「好设计」，可以被人类学过来用？",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "科学家向动物学习，模仿它们身上的好设计，这叫「仿生学」。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "比如模仿蚊子嘴做针头、模仿鸟做飞机，都是仿生学。"
            }
          ]
        },
        {
          "id": "BV15NnJ6PEKM",
          "reason": "同济大学物理教授吴姥姥：在玻璃栈道上跳广场舞为什么危险？1 分钟讲清「共振」。",
          "think": "荡秋千时，为什么要在特定的时候用力，才能越荡越高？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "很多人按同一个节奏在桥上跳，可能让桥晃得越来越厉害，这种现象叫？",
              "options": [
                "共振",
                "摩擦",
                "蒸发"
              ],
              "answer": 0,
              "explain": "推力的节奏和桥自己晃动的节奏对上了，就会越晃越大，这就是共振。"
            }
          ]
        },
        {
          "id": "BV1Q84v6XEQk",
          "reason": "中国科学技术馆官方做实验：香蕉为什么能点手机屏幕？手套为什么不行？带你搞懂触摸屏的秘密。",
          "think": "家里还有什么东西能点亮手机屏幕？先猜，再一个个试（别用湿的东西）。",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "手机触摸屏能感觉到手指，主要是因为手指能？",
              "options": [
                "导电",
                "发热",
                "发光"
              ],
              "answer": 0,
              "explain": "常见的触摸屏能感觉到会导电的东西。手指和含水的香蕉能导电，普通手套不行。"
            }
          ]
        }
      ]
    },
    {
      "key": "maker",
      "icon": "🛠",
      "name": "第 3 关 · 自己动手造",
      "goal": "光看不练学不会。工程师把想法变成能动的东西，失败了就改，改了再试。",
      "mission": {
        "text": "用纸盒、吸管、橡皮筋、瓶盖做一辆「橡皮筋动力小车」，量一量它能跑多远。改一个地方（比如轮子大小）再跑 3 次，看看变远还是变近。",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "build",
          "zh": "建造",
          "ex": "Let's build a car.",
          "exZh": "我们来造一辆车吧。"
        },
        {
          "en": "motor",
          "zh": "电机、马达",
          "ex": "The motor makes it move.",
          "exZh": "马达让它动起来。"
        },
        {
          "en": "test",
          "zh": "测试",
          "ex": "Test it three times.",
          "exZh": "测试三次。"
        },
        {
          "en": "tool",
          "zh": "工具",
          "ex": "Use the right tool.",
          "exZh": "用合适的工具。"
        },
        {
          "en": "wheel",
          "zh": "轮子",
          "ex": "A car has four wheels.",
          "exZh": "汽车有四个轮子。"
        },
        {
          "en": "arm",
          "zh": "手臂",
          "ex": "The robot arm can pick it up.",
          "exZh": "机械臂能把它拿起来。"
        },
        {
          "en": "idea",
          "zh": "点子、想法",
          "ex": "I have a great idea!",
          "exZh": "我有个好点子！"
        },
        {
          "en": "magic",
          "zh": "魔术",
          "ex": "Magic uses science.",
          "exZh": "魔术用到了科学。"
        }
      ],
      "badge": {
        "icon": "🛠",
        "name": "小小创客"
      },
      "items": [
        {
          "id": "BV1QUW46oEuT",
          "reason": "手工耿给孩子做了一辆「半飞行」的玩具车。看一个大人怎么从一个好玩的点子开始，焊、拼、试、改，最后真的造出来。",
          "think": "如果让你给这辆车加一个新功能，你想加什么？画一张设计图。",
          "caution": "视频里有电焊、切割等电动工具，只看不模仿，动手一定要大人在旁边。",
          "quiz": [
            {
              "type": "judge",
              "q": "做发明时，第一次失败很正常，工程师会改一改再试。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "几乎所有发明都不是一次就成功的，「失败—改进—再试」就是工程师的日常。"
            }
          ]
        },
        {
          "id": "BV1fV411x72a",
          "reason": "稚晖君花了 4 个月，把一辆自行车改成能自己平衡、自己走的「自动驾驶」自行车。这是造东西 + AI 的结合，也是 B 站最硬核的作品之一。",
          "think": "自行车要「自己不倒」，它需要知道哪些信息？（提示：像你骑车时的眼睛和身体感觉）",
          "caution": "中间有很多电路板和代码画面，看不懂没关系，看他「遇到问题 → 想办法」的过程。",
          "quiz": [
            {
              "type": "choice",
              "q": "要让自行车自己不倒，它首先需要知道什么？",
              "options": [
                "自己正在往哪边倾斜",
                "今天的天气",
                "车是什么颜色"
              ],
              "answer": 0,
              "explain": "先知道自己往哪边倒，才能马上往反方向调整，这和你骑车保持平衡一样。"
            }
          ]
        },
        {
          "id": "BV12341117rG",
          "reason": "稚晖君从零设计一台钢铁侠同款迷你机械臂：画图、3D 打印、写程序、调试。看工程师怎么把一个想法做成真东西。",
          "think": "如果机械臂要帮你递剑，它需要做哪几个动作？按顺序写下来——这就是「程序」。",
          "caution": "16 分钟，偏硬核。默认播正片。",
          "quiz": [
            {
              "type": "choice",
              "q": "把「拿起—移动—放下」按顺序写成机器能执行的步骤，这叫？",
              "options": [
                "程序",
                "图画",
                "故事"
              ],
              "answer": 0,
              "explain": "程序就是一步一步告诉机器该做什么的指令。"
            }
          ]
        },
        {
          "id": "BV1Ljtt6VEAS",
          "reason": "手工耿 3 分钟的「无用发明」：一口能动的大钢牙。好玩的点子不一定要有用，先动手再说！",
          "think": "你有没有一个「没用但好玩」的发明点子？画出来。",
          "caution": "有电焊画面，只看不模仿。",
          "quiz": [
            {
              "type": "judge",
              "q": "只有「有用」的点子才值得动手做。",
              "options": [
                "对",
                "错"
              ],
              "answer": 1,
              "explain": "好玩但「没用」的发明，也能锻炼动手能力和想象力，很多伟大的发明一开始也是玩出来的。"
            }
          ]
        },
        {
          "id": "BV1NH5NzyEaL",
          "reason": "CrunchLabs 官方（Mark Rober 的少年工程频道）：5 个魔术的秘密，原来全是科学原理。",
          "think": "学会其中一个魔术，表演给家人看，再告诉他们背后的原理。",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "很多魔术看起来很神奇，背后其实是科学原理和巧妙的设计。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "魔术师利用光线、力学和人的注意力，让我们「看错」。懂了原理，你也能变。"
            }
          ]
        }
      ]
    },
    {
      "key": "math",
      "icon": "🎲",
      "name": "第 4 关 · 数学是 AI 的语言",
      "goal": "AI 的本质是数学：它其实是在算「哪种可能性最大」。先建立概率和二进制的直觉，不急着学公式。",
      "mission": {
        "text": "三门问题实验：用 3 个杯子藏一颗糖，请爸爸妈妈当主持人。玩 30 次：15 次坚持不换、15 次换，用正字记下各赢几次。结果和你猜的一样吗？",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "number",
          "zh": "数字",
          "ex": "Seven is my lucky number.",
          "exZh": "7 是我的幸运数字。"
        },
        {
          "en": "chance",
          "zh": "机会、可能性",
          "ex": "You have a good chance to win.",
          "exZh": "你很有机会赢。"
        },
        {
          "en": "binary",
          "zh": "二进制",
          "ex": "Computers use binary.",
          "exZh": "电脑使用二进制。"
        },
        {
          "en": "zero",
          "zh": "零",
          "ex": "One, zero, one.",
          "exZh": "一、零、一。"
        },
        {
          "en": "count",
          "zh": "数数",
          "ex": "Let's count to ten.",
          "exZh": "我们数到十吧。"
        },
        {
          "en": "multiply",
          "zh": "乘",
          "ex": "Multiply 56 by 78.",
          "exZh": "用 56 乘以 78。"
        },
        {
          "en": "circle",
          "zh": "圆",
          "ex": "Draw a circle.",
          "exZh": "画一个圆。"
        },
        {
          "en": "door",
          "zh": "门",
          "ex": "Open the door.",
          "exZh": "打开门。"
        }
      ],
      "badge": {
        "icon": "🎲",
        "name": "概率小侦探"
      },
      "items": [
        {
          "id": "BV1xdZJYJE1x",
          "reason": "李永乐老师 4 分钟讲清著名的「三门问题」：为什么换一扇门，赢的机会反而更大？连很多数学家都猜错过。",
          "think": "看完先别急着相信，用杯子和糖亲自玩 30 次验证一下！",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "三门问题里，主持人打开一扇空门后，「换门」赢的机会大约是多少？",
              "options": [
                "1/3",
                "1/2",
                "2/3"
              ],
              "answer": 2,
              "explain": "一开始选中的机会只有 1/3，剩下的 2/3 都「集中」到了另一扇没打开的门上，所以换门更好。"
            }
          ]
        },
        {
          "id": "BV1ypdhBPEjf",
          "reason": "1000 瓶水里有 1 瓶毒药，最少用几只小老鼠就能找出来？答案藏在二进制里——也就是电脑和 AI 说话用的 0 和 1。",
          "think": "用 0 和 1 写出你的年龄（比如 9 岁 = 1001），考考爸爸妈妈能不能读出来。",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "二进制里只用哪两个数字？",
              "options": [
                "0 和 1",
                "1 和 2",
                "0 和 9"
              ],
              "answer": 0,
              "explain": "二进制只有 0 和 1，就像开关只有「关」和「开」。"
            },
            {
              "type": "choice",
              "q": "1000 瓶水里有 1 瓶毒药，最少需要几只小老鼠才能找出来？",
              "options": [
                "10 只",
                "100 只",
                "1000 只"
              ],
              "answer": 0,
              "explain": "10 只老鼠能组合出 2×2×…×2（10 个 2）= 1024 种结果，比 1000 多，所以 10 只就够了。"
            }
          ]
        },
        {
          "id": "BV1A34z6pERE",
          "reason": "央视纪录频道：古人用一把小竹棍，就能算出 56 × 78！四年级正好在学多位数乘法，看看古人的算法。",
          "think": "用竹筷或牙签摆一摆，试着用古人的方法算一道你作业里的乘法。",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "古人用来计算的小竹棍叫什么？",
              "options": [
                "算筹",
                "算盘",
                "筷子"
              ],
              "answer": 0,
              "explain": "算筹是中国古代的计算工具，比算盘还要早。"
            },
            {
              "type": "choice",
              "q": "56 × 78 等于多少？",
              "options": [
                "4368",
                "4268",
                "3468"
              ],
              "answer": 0,
              "explain": "56 × 78 = 56 × 80 − 56 × 2 = 4480 − 112 = 4368。"
            }
          ]
        },
        {
          "id": "BV1nc4J6tEqv",
          "reason": "央视纪录频道：两千年前的古代数学书里，竟然有和今天考试一模一样的题。数学是人类一代代传下来的智慧。",
          "think": "古人没有计算器，他们为什么还要研究这么难的数学题？",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "中国古代很早就有专门的数学书，比如《九章算术》。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "《九章算术》大约在两千年前成书，里面有很多实用的数学题。"
            }
          ]
        },
        {
          "id": "BV1EW411p727",
          "reason": "3Blue1Brown 官方双语：π 这个符号是怎么来的？欧拉差点让 π 等于 6.28！6 分钟数学小故事。",
          "think": "找一个圆的东西（杯子、盘子），用绳子量一量周长和直径，算算周长 ÷ 直径是多少。",
          "caution": "英文原声，五六年级学圆时还可以再看一遍。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "任何一个圆，周长 ÷ 直径，大约等于多少？",
              "options": [
                "3.14",
                "2",
                "10"
              ],
              "answer": 0,
              "explain": "不管圆大还是小，周长 ÷ 直径都约等于 3.14，这个数就叫 π（读作「派」）。"
            }
          ]
        },
        {
          "id": "BV1Zu4y1W7dm",
          "reason": "Ele 实验室用电脑把概率题模拟上万次来验证答案。这正是 AI 研究员的做法：不靠猜，让电脑做实验。",
          "think": "三门问题你用杯子玩了 30 次，电脑能玩 1 万次。哪个结果更可信？为什么？",
          "caution": "12 分钟，后半段偏难，看到三门问题模拟那段就可以停。",
          "quiz": [
            {
              "type": "judge",
              "q": "把一个实验重复做很多次，得到的结果通常比只做几次更可信。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "只做几次容易「碰运气」，做很多次才能看出真正的规律。"
            }
          ]
        }
      ]
    },
    {
      "key": "code",
      "icon": "💻",
      "name": "第 5 关 · 计算机和编程",
      "goal": "弄明白 0 和 1 怎么变成游戏和 AI，再自己写第一个程序。深度学习用的就是程序。",
      "mission": {
        "text": "用 Scratch 做一个「击剑反应测试」：屏幕随机等 1～3 秒后变红，变红的一瞬间按空格，程序显示你用了多少秒。和爸爸比一比，谁的反应快？",
        "url": "https://scratch.mit.edu/projects/editor/",
        "label": "打开 Scratch 编辑器"
      },
      "words": [
        {
          "en": "code",
          "zh": "代码",
          "ex": "I can write code.",
          "exZh": "我会写代码。"
        },
        {
          "en": "computer",
          "zh": "计算机",
          "ex": "This computer is fast.",
          "exZh": "这台电脑很快。"
        },
        {
          "en": "bug",
          "zh": "程序错误（原意小虫子）",
          "ex": "There is a bug in my game.",
          "exZh": "我的游戏里有个 bug。"
        },
        {
          "en": "program",
          "zh": "程序",
          "ex": "Run the program.",
          "exZh": "运行这个程序。"
        },
        {
          "en": "block",
          "zh": "积木",
          "ex": "Drag the block here.",
          "exZh": "把积木拖到这里。"
        },
        {
          "en": "click",
          "zh": "点击",
          "ex": "Click the green flag.",
          "exZh": "点击绿色的旗子。"
        },
        {
          "en": "input",
          "zh": "输入",
          "ex": "Type your input.",
          "exZh": "输入你的内容。"
        },
        {
          "en": "output",
          "zh": "输出",
          "ex": "The output is 10.",
          "exZh": "输出结果是 10。"
        }
      ],
      "badge": {
        "icon": "💻",
        "name": "代码剑士"
      },
      "items": [
        {
          "id": "BV1EW411u7th",
          "reason": "Crash Course 计算机速成课（40 集，字幕组精校）。先看第 1 集「计算机早期历史」，从算盘讲到第一台计算机，英文原声 + 中英字幕。",
          "think": "古时候没有电脑，人们用什么来算很大的数？",
          "caution": "这是字幕组翻译转载的合集，默认播放第 1P。语速快，可以 0.75 倍速看。之后每周最多看 1～2 集。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "在电子计算机出现之前，人们用什么工具帮助计算？",
              "options": [
                "算盘",
                "智能手机",
                "平板电脑"
              ],
              "answer": 0,
              "explain": "算盘、算筹这些工具，都是人类早期的「计算机」。"
            }
          ]
        },
        {
          "id": "BV1bF41187VX",
          "page": 2,
          "reason": "李炎恢老师的 Scratch 入门课，专门为小学 2～4 年级设计。先看第 2P「Scratch 软件入门」，然后就打开 Scratch 自己做。",
          "think": "Scratch 里的「积木」和真正的代码有什么一样的地方？",
          "caution": "共 102P，不要一口气刷。每次看 1P，看完马上动手做出来，再看下一 P。",
          "quiz": [
            {
              "type": "judge",
              "q": "Scratch 是用拖动「积木」的方式来编程的。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "每块积木就是一条指令，把积木拼起来，就是一个程序。"
            }
          ]
        },
        {
          "id": "BV1wCV26qEYt",
          "reason": "龙芯中科官方（做国产电脑芯片的公司）1 分半动画：电脑为什么只认识 0 和 1？",
          "think": "开关灯只有「开」和「关」两种状态。用 3 盏灯最多能表示几种不同的信号？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "十进制的 5，写成二进制是多少？",
              "options": [
                "101",
                "111",
                "5"
              ],
              "answer": 0,
              "explain": "二进制 101 = 1 个 4 + 0 个 2 + 1 个 1 = 5。"
            }
          ]
        },
        {
          "id": "BV1wi4y157D3",
          "reason": "Ele 实验室《从 0 到 1 设计一台计算机》第 1 话：其实你的大脑就是一台计算机。3 分钟。",
          "think": "你做一道加法题时，大脑里经历了哪几步？",
          "caution": "共 21 话，默认播第 1 话。喜欢的话每周看 1 话，后面会越来越难。",
          "page": 2,
          "quiz": [
            {
              "type": "judge",
              "q": "计算机的工作可以简单看成：输入信息 → 处理 → 输出结果。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "你按键盘是输入，电脑计算是处理，屏幕显示是输出。你的大脑也是这样工作的。"
            }
          ]
        }
      ]
    },
    {
      "key": "learn",
      "icon": "🧠",
      "name": "第 6 关 · AI 是怎么学会的",
      "goal": "终极关卡：AI 的大脑叫「神经网络」，它和你的大脑一样，是从很多例子里「练」出来的。弄懂它，你就理解了 AI 的底层原理。",
      "mission": {
        "text": "训练你自己的 AI 裁判：打开 Teachable Machine，选「姿势项目」，用摄像头给击剑的「实战姿势」「弓步」「防守」各录 30 秒，训练完让 AI 认你的动作。再试试每个只录 3 秒，AI 会不会变笨？为什么？",
        "url": "https://teachablemachine.withgoogle.com/train/pose",
        "label": "打开 Teachable Machine"
      },
      "words": [
        {
          "en": "learn",
          "zh": "学习",
          "ex": "AI can learn from data.",
          "exZh": "AI 能从数据中学习。"
        },
        {
          "en": "data",
          "zh": "数据",
          "ex": "We need more data.",
          "exZh": "我们需要更多数据。"
        },
        {
          "en": "train",
          "zh": "训练",
          "ex": "Let's train the AI.",
          "exZh": "我们来训练这个 AI 吧。"
        },
        {
          "en": "predict",
          "zh": "预测",
          "ex": "Can you predict the weather?",
          "exZh": "你能预测天气吗？"
        },
        {
          "en": "neuron",
          "zh": "神经元",
          "ex": "The brain has many neurons.",
          "exZh": "大脑有很多神经元。"
        },
        {
          "en": "brain",
          "zh": "大脑",
          "ex": "Use your brain!",
          "exZh": "动动脑筋！"
        },
        {
          "en": "network",
          "zh": "网络",
          "ex": "A neural network is like a brain.",
          "exZh": "神经网络有点像大脑。"
        },
        {
          "en": "example",
          "zh": "例子",
          "ex": "Show me an example.",
          "exZh": "给我看一个例子。"
        }
      ],
      "badge": {
        "icon": "🧠",
        "name": "AI 训练师"
      },
      "items": [
        {
          "id": "BV1XS421P7qM",
          "reason": "热身：不到 1 分钟的官方双语小片，告诉你「神经网络并不可怕」。英文原声，正好练听力。",
          "think": "听到了哪些英文单词？",
          "caution": "",
          "english": true,
          "quiz": [
            {
              "type": "judge",
              "q": "neural network 的中文意思是「神经网络」。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "neural 是「神经的」，network 是「网络」。"
            }
          ]
        },
        {
          "id": "BV1SH4y1A7DA",
          "reason": "李永乐老师 18 分钟讲清：人工智能是什么、机器学习怎么学、神经网络长什么样。这是整条路线最重要的一条打底视频。",
          "think": "用你自己的话说：AI 和普通的电脑程序最大的区别是什么？",
          "caution": "可以分两次看，每次 9 分钟。",
          "quiz": [
            {
              "type": "choice",
              "q": "机器学习和普通电脑程序最大的不同是什么？",
              "options": [
                "机器学习能从大量例子（数据）里自己找出规律",
                "机器学习不需要用电",
                "普通程序比机器学习更聪明"
              ],
              "answer": 0,
              "explain": "普通程序要人一条条写规则；机器学习是给它很多例子，让它自己总结规则。"
            }
          ]
        },
        {
          "id": "BV14p4y1h7zX",
          "reason": "TED-Ed 动画：AI 有三种学习方法——有老师教（监督学习）、自己找规律（无监督学习）、做对了给奖励（强化学习）。5 分钟讲清。",
          "think": "你学击剑用的是哪种学习方法？教练纠正动作、自己琢磨、比赛赢了开心——分别对应哪种？",
          "caution": "个人译制的转载稿，默认播第 1P（中英字幕）。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "AI 做对了给奖励、做错了扣分，靠这种方式学习，叫什么？",
              "options": [
                "强化学习",
                "监督学习",
                "无监督学习"
              ],
              "answer": 0,
              "explain": "强化学习靠奖励；监督学习是有「标准答案」的例子；无监督学习是自己在数据里找规律。"
            }
          ]
        },
        {
          "id": "BV1xr421x7xw",
          "reason": "StatQuest 官方双语：机器学习到底在做什么？就两件事——预测和分类。还讲了为什么要用「没见过的题」考 AI。",
          "think": "老师考试为什么不直接考练习册上做过的原题？这和考 AI 是一个道理吗？",
          "caution": "13 分钟，英文原声。建议家长陪看。",
          "english": true,
          "quiz": [
            {
              "type": "judge",
              "q": "考 AI 的时候，要用它训练时「没见过」的题，才知道它是真学会了还是死记硬背。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "就像考试不考练习册原题一样，用新题才能看出是不是真的懂了。"
            }
          ]
        },
        {
          "id": "BV18m411S79t",
          "reason": "StatQuest 官方双语：用一个「吃多少药才有效」的例子，一步一步画出神经网络是怎么把一条条直线拼成弯曲的线的。讲得极慢、极清楚。",
          "think": "神经网络里那些「线」上的数字，是谁定的？（答案：是它自己练出来的！）",
          "caution": "对四年级偏难，建议家长陪看，遇到公式就暂停，用画图代替讲解。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "神经网络里连接线上的数字（叫「权重」），是怎么来的？",
              "options": [
                "训练时根据数据一点点自己调整出来的",
                "程序员一个个猜出来的",
                "随便写的，永远不变"
              ],
              "answer": 0,
              "explain": "训练就是不断调整这些数字，让神经网络的答案越来越准。"
            }
          ]
        },
        {
          "id": "BV1bx411M7Zx",
          "reason": "3Blue1Brown 官方双语：电脑怎么认出你写的数字「3」？用动画展示神经网络一层层识别的过程，全世界讲神经网络最好的视频之一。",
          "think": "电脑看图片时，看到的其实是什么？（提示：很多很多小格子里的数字）",
          "caution": "看不懂后半段很正常，先看前 8 分钟留个印象，一两年后再回来看会突然懂。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "电脑「看」一张图片时，看到的其实是什么？",
              "options": [
                "很多小格子（像素）里的数字",
                "和人眼看到的一样的画面",
                "一段文字"
              ],
              "answer": 0,
              "explain": "图片由很多像素组成，每个像素都是一个代表颜色深浅的数字，神经网络就是在处理这些数字。"
            }
          ]
        }
      ]
    },
    {
      "key": "genai",
      "icon": "🗣",
      "name": "第 7 关 · AI 会说话、会画画",
      "goal": "最后一关：现在最火的 AI——会聊天的大语言模型、会画画的 AI，还有帮科学家拿诺贝尔奖的 AI。最后想一想：我们该怎么和 AI 相处？",
      "mission": {
        "text": "「下一个词」接龙游戏：爸爸妈妈说半句话（比如「今天放学我想去……」），你猜下一个词最可能是什么，写下 3 个候选，再给每个打一个「可能性分数」。大语言模型说话时，就是在做这件事！",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "chat",
          "zh": "聊天",
          "ex": "I chat with my friends.",
          "exZh": "我和朋友聊天。"
        },
        {
          "en": "word",
          "zh": "词",
          "ex": "Guess the next word.",
          "exZh": "猜猜下一个词。"
        },
        {
          "en": "image",
          "zh": "图片",
          "ex": "AI can make an image.",
          "exZh": "AI 能生成一张图片。"
        },
        {
          "en": "draw",
          "zh": "画",
          "ex": "I like to draw cats.",
          "exZh": "我喜欢画猫。"
        },
        {
          "en": "model",
          "zh": "模型",
          "ex": "This AI model is big.",
          "exZh": "这个 AI 模型很大。"
        },
        {
          "en": "answer",
          "zh": "答案",
          "ex": "Check the answer.",
          "exZh": "检查一下答案。"
        },
        {
          "en": "help",
          "zh": "帮助",
          "ex": "AI can help scientists.",
          "exZh": "AI 能帮助科学家。"
        },
        {
          "en": "future",
          "zh": "未来",
          "ex": "What will the future be like?",
          "exZh": "未来会是什么样？"
        }
      ],
      "badge": {
        "icon": "🗣",
        "name": "AI 小先知"
      },
      "items": [
        {
          "id": "BV1xmA2eMEFF",
          "reason": "3Blue1Brown 官方双语：ChatGPT 这类大语言模型是怎么说话的？原来它是一个词一个词地「猜」下一个词。8 分钟。",
          "think": "如果 AI 只是在猜下一个词，它说的话一定是对的吗？",
          "caution": "英文原声，有少量术语，可以暂停讲一讲。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "大语言模型（比如 ChatGPT）说话时，本质上在做什么？",
              "options": [
                "一个词一个词地预测下一个最可能出现的词",
                "从网上复制一整段答案",
                "后台有一个人在打字"
              ],
              "answer": 0,
              "explain": "它读过海量文字，学会了猜「下一个词最可能是什么」，一个接一个猜出整段话。"
            },
            {
              "type": "judge",
              "q": "因为是 AI 说的，所以答案一定是正确的。",
              "options": [
                "对",
                "错"
              ],
              "answer": 1,
              "explain": "AI 只是在猜最可能的词，有时会「一本正经地胡说八道」，重要的事要查证。"
            }
          ]
        },
        {
          "id": "BV1nc411p7D9",
          "reason": "子牧说：你输入一句话，AI 为什么能画出一张图？不讲公式，用动画拆开 AI 画画的原理。",
          "think": "AI 画画是从一张「雪花噪点图」一步步变清楚的。这和你画画先打草稿有什么像的地方？",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "很多 AI 画画时，是从一张满是「雪花点」的图开始，一步步变清楚的。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "这类 AI 学会了怎么把噪点一点点去掉，最后变成和文字描述相符的图。"
            }
          ]
        },
        {
          "id": "BV1S2xW6JECi",
          "reason": "中国食品报融媒体官方：拆穿网上「AI 生成的假科普」短视频——葫芦能让南瓜变有毒？学会识别 AI 胡说八道。",
          "think": "以后看到很神奇的「科普」短视频，你会用哪 3 个办法检查它是真是假？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "下面哪个是识别 AI 假科普的好办法？",
              "options": [
                "看看有没有可靠来源，问问老师家长，或者查权威网站",
                "播放量高的就是真的",
                "配音好听的就是真的"
              ],
              "answer": 0,
              "explain": "播放量和配音都不能证明内容是对的，可靠的来源才最重要。"
            }
          ]
        },
        {
          "id": "BV1GDAwetEiQ",
          "reason": "Veritasium 官方：科学家花了 50 年都解不开的蛋白质难题，被 AI（AlphaFold）解开了，还拿了诺贝尔奖。这是 AI 最有用的一面。",
          "think": "如果你是科学家，你最想让 AI 帮你解决哪个难题？",
          "caution": "23 分钟，建议分两次看；中间有生物学名词，看个大概就好。",
          "quiz": [
            {
              "type": "choice",
              "q": "AlphaFold 这个 AI 帮科学家解决了什么难题？",
              "options": [
                "预测蛋白质的形状（结构）",
                "预测明天的天气",
                "下围棋"
              ],
              "answer": 0,
              "explain": "蛋白质的形状决定了它的作用，以前测一个要花很多年，AlphaFold 能快速预测出来。"
            }
          ]
        },
        {
          "id": "BV1J2421L7B9",
          "reason": "TED 官方 TED-Ed 动画：AI 会帮我们修好世界，还是会接管世界？学完原理，最后想一想 AI 该怎么用。英文原声，中文字幕。",
          "think": "如果你来设计一个 AI，你最想让它帮人类做什么？有什么事你觉得不该交给 AI？",
          "caution": "讨论 AI 的未来，有一点点严肃，适合看完和家长聊一聊。",
          "english": true,
          "quiz": [
            {
              "type": "judge",
              "q": "AI 会给世界带来好的还是坏的影响，很大程度上取决于人类怎样设计和使用它。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "AI 是工具，就像刀可以切菜也可能伤人，关键在于怎么用。"
            }
          ]
        }
      ]
    }
  ],
  "sideQuests": [
    {
      "key": "sports",
      "icon": "⚔️",
      "name": "支线 · 赛场上的科学",
      "goal": "击剑和匹克球里藏着很多物理：球为什么会拐弯？剑为什么能那么快？随时可以看，不用解锁。",
      "mission": {
        "text": "打匹克球时请家长用手机「慢动作」拍下你打的上旋球和下旋球，回家慢放，画出两种球飞行的弧线。哪种球落得更快？",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "sword",
          "zh": "剑",
          "ex": "Hold your sword.",
          "exZh": "握好你的剑。"
        },
        {
          "en": "lunge",
          "zh": "弓步（击剑）",
          "ex": "Lunge and touch!",
          "exZh": "弓步，刺中！"
        },
        {
          "en": "parry",
          "zh": "格挡（击剑）",
          "ex": "Parry, then attack.",
          "exZh": "先格挡，再进攻。"
        },
        {
          "en": "referee",
          "zh": "裁判",
          "ex": "The referee says stop.",
          "exZh": "裁判说停。"
        },
        {
          "en": "spin",
          "zh": "旋转",
          "ex": "The ball has a lot of spin.",
          "exZh": "这个球转得很厉害。"
        },
        {
          "en": "speed",
          "zh": "速度",
          "ex": "Look at the speed!",
          "exZh": "看这速度！"
        },
        {
          "en": "paddle",
          "zh": "球拍（匹克球）",
          "ex": "Pick up your paddle.",
          "exZh": "拿起你的球拍。"
        },
        {
          "en": "score",
          "zh": "得分",
          "ex": "What is the score?",
          "exZh": "比分是多少？"
        }
      ],
      "badge": {
        "icon": "🤺",
        "name": "赛场科学家"
      },
      "items": [
        {
          "id": "BV1Qs411u78U",
          "reason": "Veritasium 官方：旋转的球为什么会拐弯？这就是匹克球、乒乓球上旋下旋的秘密——马格努斯效应。从大坝上扔篮球的镜头超震撼。",
          "think": "打匹克球时，上旋球为什么会「突然往下掉」？",
          "caution": "第 1P 中英字幕，第 2P 纯英文，可以挑战第 2P。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "旋转的球在空中飞行时会拐弯，这叫什么效应？",
              "options": [
                "马格努斯效应",
                "共振",
                "摩擦发光"
              ],
              "answer": 0,
              "explain": "球旋转时两边的空气流动不一样，就会被推向一边，球就拐弯了。"
            }
          ]
        },
        {
          "id": "BV14whnzhERC",
          "reason": "Mark Rober 用每秒 10 万帧的超高速相机拍下球杆击球的瞬间。看清「快到眼睛看不见」的动作——击剑电子裁判、网球鹰眼也是靠这类技术。",
          "think": "击剑的剑尖速度很快，裁判的眼睛跟不上，所以用了什么办法判断谁先刺中？",
          "caution": "13 分钟，后半段比较长，可以分两次看。",
          "quiz": [
            {
              "type": "judge",
              "q": "高速摄像机每秒能拍非常多张照片，所以能看清很快的动作。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "普通视频每秒约 30 张，高速摄像机每秒能拍成千上万张，慢放时就能看清细节。"
            }
          ]
        },
        {
          "id": "BV1ab411p7xs",
          "reason": "击剑专业频道 FENCING LAB：4 分钟讲完击剑从决斗、贵族剑术到现代奥运项目的演变。练了 4 年剑，也该知道它的历史啦。",
          "think": "古代人为什么要学剑？现代击剑和古代用剑最大的不同是什么？",
          "caution": "非官方认证账号，但是长期专注击剑科普的原创频道。",
          "quiz": [
            {
              "type": "choice",
              "q": "现代奥运会击剑有哪三个剑种？",
              "options": [
                "花剑、重剑、佩剑",
                "长剑、短剑、木剑",
                "花剑、长剑、竹剑"
              ],
              "answer": 0,
              "explain": "花剑、重剑、佩剑的有效部位和规则都不一样。"
            }
          ]
        },
        {
          "id": "BV1hs411g74f",
          "reason": "乒乓网用动态受力图解：上旋球是怎么「搓」出来的？匹克球的上旋道理一样。",
          "think": "拍面朝哪个方向、往哪边刷球，才能打出上旋？下次打匹克球时试一试。",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "打上旋球时，球拍要从下往上「刷」球。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "从下往上摩擦球，球就会向前转，飞出去后会往下坠。"
            }
          ]
        },
        {
          "id": "BV1ja411r7oM",
          "reason": "FENCING LAB：中国击剑队 5 个奥运夺冠的超燃瞬间。看看最顶尖的剑手在关键一剑时是什么样子。",
          "think": "冠军在落后的时候是怎么调整心态的？你比赛落后时会怎么做？",
          "caution": "非官方认证账号，长期专注击剑的原创频道。",
          "quiz": [
            {
              "type": "judge",
              "q": "中国击剑运动员在奥运会上拿过金牌。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "比如 1984 年栾菊杰获得女子花剑金牌，是中国击剑的第一枚奥运金牌。"
            }
          ]
        },
        {
          "id": "BV1Jz411e7xE",
          "reason": "FENCING LAB：击剑史上那些「著名误判」。正因为人眼会看错，才发明了电子裁判器、慢镜头回放——科技让比赛更公平。",
          "think": "如果让 AI 当击剑裁判，它需要「看」到哪些信息？会不会也出错？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "击剑比赛里，用来判断谁先刺中的设备是什么？",
              "options": [
                "电子裁判器（刺中会亮灯）",
                "秒表",
                "温度计"
              ],
              "answer": 0,
              "explain": "剑尖和比赛服连着电路，刺中有效部位就会亮灯，比人眼准得多。"
            }
          ]
        }
      ]
    },
    {
      "key": "nature",
      "icon": "🦕",
      "name": "支线 · 自然探索",
      "goal": "像法布尔观察昆虫一样观察世界：恐龙、昆虫、奇怪的动物和正在「长大」的陆地。随时可以看。",
      "mission": {
        "text": "做一回小法布尔：在小区里找一种小动物（蚂蚁、蜗牛、西瓜虫都行），安静观察 10 分钟，画下它的样子，写下 3 个你的发现。",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "nature",
          "zh": "自然",
          "ex": "I love nature.",
          "exZh": "我热爱大自然。"
        },
        {
          "en": "animal",
          "zh": "动物",
          "ex": "What is your favorite animal?",
          "exZh": "你最喜欢什么动物？"
        },
        {
          "en": "insect",
          "zh": "昆虫",
          "ex": "An insect has six legs.",
          "exZh": "昆虫有六条腿。"
        },
        {
          "en": "spider",
          "zh": "蜘蛛",
          "ex": "A spider has eight legs.",
          "exZh": "蜘蛛有八条腿。"
        },
        {
          "en": "ant",
          "zh": "蚂蚁",
          "ex": "The ant is small but strong.",
          "exZh": "蚂蚁很小但很有力气。"
        },
        {
          "en": "leg",
          "zh": "腿",
          "ex": "How many legs can you see?",
          "exZh": "你能看到几条腿？"
        },
        {
          "en": "dinosaur",
          "zh": "恐龙",
          "ex": "T. rex is a dinosaur.",
          "exZh": "霸王龙是一种恐龙。"
        },
        {
          "en": "ocean",
          "zh": "海洋",
          "ex": "The ocean is very deep.",
          "exZh": "海洋很深。"
        }
      ],
      "badge": {
        "icon": "🦕",
        "name": "自然观察家"
      },
      "items": [
        {
          "id": "BV18wxY63Erp",
          "reason": "无穷小亮（国家动物博物馆科普人）鉴定网上热传的奇怪生物，讲得好笑又严谨。",
          "think": "网上的「神奇动物」视频，有哪些是真的、哪些是假的？小亮是怎么判断的？",
          "caution": "少数生物外形可能有点吓人。",
          "quiz": [
            {
              "type": "judge",
              "q": "网上很多「神奇生物」视频，可能是认错了物种，甚至是假的。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "所以需要像小亮这样的专家，用科学知识来鉴定。"
            }
          ]
        },
        {
          "id": "BV1nb4y1f7p6",
          "reason": "中国国家地理官方：国家动物博物馆馆长亲自讲解，别错过的几件镇馆展品。",
          "think": "你最想去看哪件展品？下次去北京可以列进计划。",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "博物馆里的动物标本可以帮助科学家研究动物。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "标本能长期保存，科学家可以反复测量、比较，研究动物的身体和演化。"
            }
          ]
        },
        {
          "id": "BV1XQ4P6MEEx",
          "reason": "中国国家地理官方：吹着热风的山谷里，昆虫们竟然有自己的「甜品夜市」。5 分钟。",
          "think": "昆虫为什么要在晚上出来吃东西？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "昆虫有几条腿？",
              "options": [
                "6 条",
                "8 条",
                "4 条"
              ],
              "answer": 0,
              "explain": "昆虫有 6 条腿；蜘蛛有 8 条腿，所以蜘蛛不是昆虫——法布尔的《昆虫记》里也写到过蜘蛛哦。"
            }
          ]
        },
        {
          "id": "BV1Za4u6xE46",
          "reason": "我是不白吃官方动画：没有这种小虫子，十三香就要变十二香了！1 分钟讲一种昆虫和食物的关系。",
          "think": "你还知道哪些和昆虫有关的食物？（提示：蜂蜜）",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "很多植物要靠昆虫帮忙传粉，才能结出果实和种子。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "蜜蜂、蝴蝶等昆虫在花间飞来飞去，把花粉带到别的花上。"
            }
          ]
        },
        {
          "id": "BV1Nk346UE6G",
          "reason": "古生物作家江氏小盗龙：国家自然博物馆里的霸王龙，到底厉害在哪？1 分半。",
          "think": "霸王龙的手臂为什么那么短？说说你的猜想。",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "霸王龙是一种吃肉的恐龙。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "霸王龙有巨大的头和锋利的牙齿，是著名的肉食恐龙。"
            }
          ]
        },
        {
          "id": "BV1qfxB6qEjD",
          "reason": "芳斯塔芙（中科院生物学博士）讲海洋霸主沧龙的演化故事。古生物讲得系统又有趣。",
          "think": "沧龙的祖先其实生活在陆地上。动物为什么会从陆地「搬回」海里？",
          "caution": "18 分钟，可以分两次看。",
          "quiz": [
            {
              "type": "judge",
              "q": "沧龙是一种恐龙。",
              "options": [
                "对",
                "错"
              ],
              "answer": 1,
              "explain": "沧龙是生活在海里的大型爬行动物，和恐龙生活在同一时代，但它不是恐龙。"
            }
          ]
        },
        {
          "id": "BV17Px16tESS",
          "reason": "中国国家地理官方：黄河入海口正在「制造」中国最年轻的陆地。3 分钟，看地球也在长大。",
          "think": "黄河里的泥沙是从哪里来的？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "黄河入海口的新陆地，主要是由什么堆起来的？",
              "options": [
                "河水带来的泥沙",
                "火山喷发",
                "人造的垃圾"
              ],
              "answer": 0,
              "explain": "黄河从黄土高原带来大量泥沙，在入海口慢慢堆积，形成新的陆地。"
            }
          ]
        }
      ]
    },
    {
      "key": "history",
      "icon": "🏺",
      "name": "支线 · 历史与文明",
      "goal": "几千年前没有电脑和 AI，古人靠什么造出了这些宝贝？从国宝里看人类的智慧。随时可以看。",
      "mission": {
        "text": "选一件你在视频里最喜欢的文物，把它画下来，再给家人当 3 分钟「小讲解员」：它是什么、谁做的、怎么做的、厉害在哪。",
        "url": "",
        "label": ""
      },
      "words": [
        {
          "en": "history",
          "zh": "历史",
          "ex": "I like history.",
          "exZh": "我喜欢历史。"
        },
        {
          "en": "museum",
          "zh": "博物馆",
          "ex": "Let's go to the museum.",
          "exZh": "我们去博物馆吧。"
        },
        {
          "en": "ancient",
          "zh": "古代的",
          "ex": "This is an ancient cup.",
          "exZh": "这是一个古代的杯子。"
        },
        {
          "en": "bronze",
          "zh": "青铜",
          "ex": "It is made of bronze.",
          "exZh": "它是青铜做的。"
        },
        {
          "en": "jade",
          "zh": "玉",
          "ex": "Jade is green and smooth.",
          "exZh": "玉是绿色的，很光滑。"
        },
        {
          "en": "statue",
          "zh": "雕像",
          "ex": "Look at the statue.",
          "exZh": "看那座雕像。"
        },
        {
          "en": "think",
          "zh": "思考",
          "ex": "Stop and think.",
          "exZh": "停下来想一想。"
        },
        {
          "en": "treasure",
          "zh": "宝藏、珍宝",
          "ex": "This is a national treasure.",
          "exZh": "这是国宝。"
        }
      ],
      "badge": {
        "icon": "🏺",
        "name": "小小讲解员"
      },
      "items": [
        {
          "id": "BV1nb4e6vEPK",
          "reason": "国家博物馆官方：3000 多年前的四羊方尊，四只羊是怎么「长」在青铜器上的？2 分半。",
          "think": "古人没有机器，是怎么做出这么复杂的青铜器的？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "四羊方尊是用什么材料做的？",
              "options": [
                "青铜",
                "塑料",
                "玻璃"
              ],
              "answer": 0,
              "explain": "四羊方尊是 3000 多年前商朝的青铜器，现在收藏在国家博物馆。"
            }
          ]
        },
        {
          "id": "BV1thxP6ZEWp",
          "reason": "国家博物馆官方：一件商朝的玉人，让我们看到了 3000 年前人的样子。2 分钟。",
          "think": "如果 3000 年后的人挖到你的一件东西，你希望是什么？",
          "caution": "",
          "quiz": [
            {
              "type": "choice",
              "q": "视频里的这件玉人，来自哪个朝代？",
              "options": [
                "商朝",
                "清朝",
                "唐朝"
              ],
              "answer": 0,
              "explain": "商朝距今大约 3000 多年，那时的人已经会精细地雕刻玉器了。"
            }
          ]
        },
        {
          "id": "BV1XFx56fE3M",
          "reason": "国博讲解员河森堡：错金银云纹犀牛尊——古人眼中的犀牛长什么样？",
          "think": "古人为什么要把动物做成酒器？",
          "caution": "",
          "quiz": [
            {
              "type": "judge",
              "q": "错金银云纹犀牛尊，是一件做成犀牛样子的古代青铜器。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "它身上镶着金银做的花纹，是汉代的国宝级文物。"
            }
          ]
        },
        {
          "id": "BV1eE411R7uX",
          "reason": "FENCING LAB：中国击剑史。中国古代就有剑术，现代击剑又是怎么来到中国的？",
          "think": "中国古代的剑和你现在用的剑，有什么不一样？",
          "caution": "非官方认证账号，长期专注击剑的原创频道。",
          "quiz": [
            {
              "type": "judge",
              "q": "现代击剑运动最早是在欧洲发展起来的。",
              "options": [
                "对",
                "错"
              ],
              "answer": 0,
              "explain": "现代击剑起源于欧洲，后来传到世界各地，也传到了中国。"
            }
          ]
        },
        {
          "id": "BV1GGxX6KErM",
          "reason": "TED 官方 TED-Ed 动画：罗丹的雕塑《思想者》到底在思考什么？英文原声，看艺术背后的故事。",
          "think": "如果给《思想者》配一句台词，你觉得他在想什么？",
          "caution": "英文原声，中文字幕。",
          "english": true,
          "quiz": [
            {
              "type": "choice",
              "q": "雕塑《思想者》的作者是谁？",
              "options": [
                "罗丹",
                "达·芬奇",
                "毕加索"
              ],
              "answer": 0,
              "explain": "《思想者》是法国雕塑家罗丹的作品。"
            }
          ]
        }
      ]
    }
  ],
  "videos": {
    "BV1ag4y1F7x4": {
      "id": "BV1ag4y1F7x4",
      "title": "我用30天写了一个完美的贪吃蛇AI",
      "url": "https://www.bilibili.com/video/BV1ag4y1F7x4",
      "channel": "林亦LYi",
      "mid": 4401694,
      "channelUrl": "https://space.bilibili.com/4401694",
      "fans": 1410622,
      "official": "bilibili 知名UP主、AI工程师",
      "sign": "做一点微小的科技工作。商务邮箱：business@lyi.ai；个人邮箱：linyi@lyi.ai",
      "duration": 591,
      "pages": [
        "我用30天写了一个完美的贪吃蛇AI"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/db3492dbf05318a0880ee1e6f5b315f43e618f3b.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 1085003,
      "pubdate": "2023-05-19",
      "reason": "AI 工程师林亦让 AI 自己玩了几百万局贪吃蛇，最后玩到满屏。第一次看到「没人教，AI 自己练出来」。",
      "think": "AI 一开始玩得很烂，后来为什么越来越厉害？它靠的是什么？",
      "caution": "前 1 分半讲用 AutoGPT 写游戏，可以直接拖到 01:37 看 AI 打游戏的部分。",
      "quiz": [
        {
          "type": "choice",
          "q": "AI 刚开始玩贪吃蛇时为什么玩得很差？",
          "options": [
            "电脑太慢了",
            "它还没练习过，不知道怎么做能得分",
            "有人故意让它输"
          ],
          "answer": 1,
          "explain": "AI 不是一出生就会的，要玩很多很多局、根据得分不断调整，才越来越厉害。"
        }
      ]
    },
    "BV1A5QGYCECR": {
      "id": "BV1A5QGYCECR",
      "title": "如何让超级大笨蛋学会走路? 【人工智能|深度强化学习(DRL)】",
      "url": "https://www.bilibili.com/video/BV1A5QGYCECR",
      "channel": "卡洛Calo",
      "mid": 9353567,
      "channelUrl": "https://space.bilibili.com/9353567",
      "fans": 218913,
      "official": "bilibili 知名UP主",
      "sign": "写史只写抽象的，AI只玩轻松的！",
      "duration": 392,
      "pages": [
        "如何让超级大笨蛋学会走路? 【人工智能|深度强化学习(DRL)】"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/62243f99f8631891ba1689c36cf6785680736002.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 1363668,
      "pubdate": "2025-03-14",
      "reason": "一个什么都不会的小人，摔了成千上万次才学会走路。用最好笑的方式讲清「强化学习」：做对了加分，做错了扣分。",
      "think": "你学击剑的弓步时，是不是也是一次次做、教练一次次纠正？和 AI 学走路哪里像？",
      "caution": "UP 主在简介里说明视频有不严谨的描述，当作「有趣的引子」看，不用记术语。",
      "quiz": [
        {
          "type": "judge",
          "q": "在强化学习里，AI 做对了会得到「奖励」，做错了会被「扣分」。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "就像玩游戏得分一样，AI 会想办法让奖励越来越多，于是慢慢学会了走路。"
        }
      ]
    },
    "BV1eVtc6hEhn": {
      "id": "BV1eVtc6hEhn",
      "title": "看了10年网络热门生物，无穷小亮能看出AI吗？",
      "url": "https://www.bilibili.com/video/BV1eVtc6hEhn",
      "channel": "影视飓风",
      "mid": 946974,
      "channelUrl": "https://space.bilibili.com/946974",
      "fans": 19074470,
      "official": "2025百大UP主、2023年度最高人气奖UP主、课堂优质讲师",
      "sign": "无限进步！｜商务合作请联系邮箱：bd@ysjf.com（邮件中麻烦备注公司、咨询内容）｜店铺名：影视飓风",
      "duration": 734,
      "pages": [
        "2026-08-28_AI鉴定3.0_3840x2160_V01_Bilibili"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/e441244fa5052d5129c86e554b0c6e15c8d0d194.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 8216216,
      "pubdate": "2026-08-28",
      "reason": "研究了 10 年网络生物的无穷小亮，能不能分出哪些动物照片是 AI 画的？AI 厉害到连专家都要仔细看——所以我们要学会「不全信」。",
      "think": "如果在网上看到一张很神奇的动物照片，你会用什么办法判断它是不是 AI 画的？",
      "caution": "12 分钟，节奏快，适合周末和家长一起看、一起猜。",
      "quiz": [
        {
          "type": "choice",
          "q": "在网上看到一张特别神奇的动物照片，最好的做法是？",
          "options": [
            "马上转发给所有人",
            "查查可靠的来源，仔细看看有没有奇怪的细节",
            "照片不会骗人，肯定是真的"
          ],
          "answer": 1,
          "explain": "现在 AI 能画出以假乱真的图片，所以要先查证再相信。"
        }
      ]
    },
    "BV1JYRjYoEzE": {
      "id": "BV1JYRjYoEzE",
      "title": "【硬核】我们造了一个跟人一样灵动的机器人！",
      "url": "https://www.bilibili.com/video/BV1JYRjYoEzE",
      "channel": "稚晖君",
      "mid": 20259914,
      "channelUrl": "https://space.bilibili.com/20259914",
      "fans": 2834219,
      "official": "bilibili 2021百大UP主、知名科技UP主",
      "sign": "保持热爱，奔赴星海。",
      "duration": 730,
      "pages": [
        "【硬核】我们造了一个跟人一样灵动的机器人！"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/d3521b901020f2617e0c9d288be3453204644253.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 4903556,
      "pubdate": "2025-03-11",
      "reason": "稚晖君团队造的人形机器人，能走、能跳、能和人互动。看 AI 有了「身体」之后能做什么。",
      "think": "机器人要像人一样走路，需要哪些「感觉」？（提示：想想你练击剑时怎么保持平衡）",
      "caution": "12 分钟，有不少技术画面，可以挑机器人动起来的片段看。",
      "quiz": [
        {
          "type": "choice",
          "q": "机器人能保持平衡不摔倒，主要靠什么？",
          "options": [
            "传感器一直测量身体的姿势，程序不停地调整",
            "运气好",
            "穿了很重的鞋子"
          ],
          "answer": 0,
          "explain": "机器人身上有像「内耳」一样的传感器，能感觉到自己往哪边倒，再马上调整动作。"
        }
      ]
    },
    "BV12X4y1R7bA": {
      "id": "BV12X4y1R7bA",
      "title": "【漫游科技馆】重温十大经典路线——机器人世界",
      "url": "https://www.bilibili.com/video/BV12X4y1R7bA",
      "channel": "上海科技馆官方账号",
      "mid": 624896587,
      "channelUrl": "https://space.bilibili.com/624896587",
      "fans": 27196,
      "official": "上海科技馆官方账号",
      "sign": "上海科技馆官方",
      "duration": 685,
      "pages": [
        "【漫游科技馆】重温十大经典路线——机器人世界"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/84d801d4ec8bb675de888a606d71feaef24db48f.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 6427,
      "pubdate": "2023-03-31",
      "reason": "上海科技馆官方带你逛「机器人世界」展区：会下棋、会弹琴、会画画的机器人。以后去上海可以去现场看。",
      "think": "你最想要一个会做什么的机器人？它需要学会哪些本领？",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "机器人只能做一件事，永远学不会新本领。",
          "options": [
            "对",
            "错"
          ],
          "answer": 1,
          "explain": "很多机器人可以通过重新编程，或者用 AI 学习，学会新的本领。"
        }
      ]
    },
    "BV1KbxC6YE7F": {
      "id": "BV1KbxC6YE7F",
      "title": "在沃尔玛随手买的 4 个玩具，拆开全是物理黑科技",
      "url": "https://www.bilibili.com/video/BV1KbxC6YE7F",
      "channel": "MarkRober官方",
      "mid": 3546769141008790,
      "channelUrl": "https://space.bilibili.com/3546769141008790",
      "fans": 411932,
      "official": "MarkRober官方账号",
      "sign": "前NASA工程师 | 现CrunchLabs创始人 | YouTube千万粉博主",
      "duration": 238,
      "pages": [
        "英文配音",
        "中文配音"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/04a21bf5c072968e26629d1a9dce95ad8754093d.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 4422,
      "pubdate": "2026-10-31",
      "reason": "前 NASA 工程师 Mark Rober 把超市里买的 4 个玩具拆开，每个里面都藏着一个物理原理。拆玩具也是做科学！",
      "think": "家里有没有坏掉的玩具？拆开之前先猜猜：里面是什么让它动起来的？",
      "caution": "第 2P 是中文配音，第 1P 是英文原声，学英语可以切到第 1P 再看一遍。",
      "page": 2,
      "englishPage": 1,
      "quiz": [
        {
          "type": "judge",
          "q": "拆开玩具看看里面是怎么工作的，也是一种科学探索。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "科学家和工程师常常就是这样：拆开看看、想想原理、再自己做一个。"
        }
      ]
    },
    "BV1Yb411J7fT": {
      "id": "BV1Yb411J7fT",
      "title": "厨房里幽幽的「蓝色鬼火」，可能只是因为一块小小的冰糖！",
      "url": "https://www.bilibili.com/video/BV1Yb411J7fT",
      "channel": "二次元的中科院物理所",
      "mid": 407045223,
      "channelUrl": "https://space.bilibili.com/407045223",
      "fans": 2471829,
      "official": "中国科学院物理研究所官方账号",
      "sign": "没错，在下中科院物理所，请多指教。",
      "duration": 160,
      "pages": [
        "发光的冰糖"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/540fcbf4fc95b32b921c758f308f9d10a110b01c.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 36399,
      "pubdate": "2019-03-16",
      "reason": "中科院物理所官方：厨房里的冰糖被敲碎时竟然会发出蓝光。不到 3 分钟，看完就能自己在家试。",
      "think": "为什么要关灯、等一会儿再做实验？",
      "caution": "做实验时用钳子夹，别用牙咬，别用锤子乱砸。",
      "quiz": [
        {
          "type": "choice",
          "q": "冰糖被敲碎时发出的微弱蓝光，叫什么现象？",
          "options": [
            "摩擦发光",
            "太阳能",
            "镜子反光"
          ],
          "answer": 0,
          "explain": "有些晶体被压碎或摩擦时会发光，叫「摩擦发光」，几百年前就有人发现了。"
        }
      ]
    },
    "BV1wM4y1T7WS": {
      "id": "BV1wM4y1T7WS",
      "title": "为什么高铁上的蚊子不会被甩到车尾？你也许懂了，但并没有完全懂……",
      "url": "https://www.bilibili.com/video/BV1wM4y1T7WS",
      "channel": "二次元的中科院物理所",
      "mid": 407045223,
      "channelUrl": "https://space.bilibili.com/407045223",
      "fans": 2471829,
      "official": "中国科学院物理研究所官方账号",
      "sign": "没错，在下中科院物理所，请多指教。",
      "duration": 519,
      "pages": [
        "为什么高铁上的蚊子不会被甩到车尾？你也许懂了，但并没有完全懂……"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/80f1a5ed57e25bdd2782f89fd6bb69afbe73e309.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 189367,
      "pubdate": "2021-07-24",
      "reason": "高铁跑得那么快，车厢里的蚊子为什么不会被甩到车尾？中科院物理所官方用一个日常问题，教你科学家怎么一步步想问题。",
      "think": "如果你在跑动的高铁上原地跳起来，会落回原地吗？先猜，下次坐高铁时试一试。",
      "caution": "后半段有一点受力分析，看不懂可以先跳过，记住「先猜再验证」就好。",
      "quiz": [
        {
          "type": "choice",
          "q": "在平稳匀速行驶的高铁上原地跳起来，你会落在哪里？",
          "options": [
            "差不多落回原地",
            "被甩到车尾",
            "飞到车头"
          ],
          "answer": 0,
          "explain": "你跳起来时，身体本来就和车一起往前跑，会保持这个速度，这叫「惯性」。"
        }
      ]
    },
    "BV1BA4662EfB": {
      "id": "BV1BA4662EfB",
      "title": "蚊子嘴竟是目前最精密的3D打印针头？！",
      "url": "https://www.bilibili.com/video/BV1BA4662EfB",
      "channel": "二次元的中科院物理所",
      "mid": 407045223,
      "channelUrl": "https://space.bilibili.com/407045223",
      "fans": 2471835,
      "official": "中国科学院物理研究所官方账号",
      "sign": "没错，在下中科院物理所，请多指教。",
      "duration": 141,
      "pages": [
        "蚊子嘴竟是目前最精密的3D打印针头？！"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/f9435f4cfefed75c0df3985b7a20102474380f52.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 20300,
      "pubdate": "2026-11-06",
      "reason": "中科院物理所官方：蚊子的嘴竟然被科学家拿来当 3D 打印针头！大自然是最好的老师。2 分钟。",
      "think": "你还能想到哪些动物身上的「好设计」，可以被人类学过来用？",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "科学家向动物学习，模仿它们身上的好设计，这叫「仿生学」。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "比如模仿蚊子嘴做针头、模仿鸟做飞机，都是仿生学。"
        }
      ]
    },
    "BV15NnJ6PEKM": {
      "id": "BV15NnJ6PEKM",
      "title": "在玻璃栈道上跳广场舞？！命都不要了？共振现象很可能造成“桥毁人亡”！",
      "url": "https://www.bilibili.com/video/BV15NnJ6PEKM",
      "channel": "不刷题的吴姥姥",
      "mid": 395877542,
      "channelUrl": "https://space.bilibili.com/395877542",
      "fans": 2066790,
      "official": "bilibili 2022百大UP主、同济大学物理学教授、bilibili课堂优质讲师",
      "sign": "探究迷人的物理之惑",
      "duration": 69,
      "pages": [
        "在玻璃栈道上跳广场舞？！命都不要了？共振现象很可能造成“桥毁人亡”！"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/5456742806ffd79ed625bdbb48200bd88c48b4f5.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 13842,
      "pubdate": "2026-11-06",
      "reason": "同济大学物理教授吴姥姥：在玻璃栈道上跳广场舞为什么危险？1 分钟讲清「共振」。",
      "think": "荡秋千时，为什么要在特定的时候用力，才能越荡越高？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "很多人按同一个节奏在桥上跳，可能让桥晃得越来越厉害，这种现象叫？",
          "options": [
            "共振",
            "摩擦",
            "蒸发"
          ],
          "answer": 0,
          "explain": "推力的节奏和桥自己晃动的节奏对上了，就会越晃越大，这就是共振。"
        }
      ]
    },
    "BV1Q84v6XEQk": {
      "id": "BV1Q84v6XEQk",
      "title": "香蕉也能操作手机？我们在科技馆做了个实验",
      "url": "https://www.bilibili.com/video/BV1Q84v6XEQk",
      "channel": "中国科学技术馆",
      "mid": 624897864,
      "channelUrl": "https://space.bilibili.com/624897864",
      "fans": 96621,
      "official": "中国科学技术馆官方账号",
      "sign": "",
      "duration": 608,
      "pages": [
        "香蕉也能操作手机？我们在科技馆做了个实验"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/c88620ef20e460ddcef1fa7ff1f78f0b0f39f44f.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 10276,
      "pubdate": "2026-11-06",
      "reason": "中国科学技术馆官方做实验：香蕉为什么能点手机屏幕？手套为什么不行？带你搞懂触摸屏的秘密。",
      "think": "家里还有什么东西能点亮手机屏幕？先猜，再一个个试（别用湿的东西）。",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "手机触摸屏能感觉到手指，主要是因为手指能？",
          "options": [
            "导电",
            "发热",
            "发光"
          ],
          "answer": 0,
          "explain": "常见的触摸屏能感觉到会导电的东西。手指和含水的香蕉能导电，普通手套不行。"
        }
      ]
    },
    "BV1QUW46oEuT": {
      "id": "BV1QUW46oEuT",
      "title": "给孩子做了一个半飞行的玩具车",
      "url": "https://www.bilibili.com/video/BV1QUW46oEuT",
      "channel": "手工耿",
      "mid": 280793434,
      "channelUrl": "https://space.bilibili.com/280793434",
      "fans": 8087486,
      "official": "2024百大UP主、知名搞笑UP主",
      "sign": "喜欢做一些有趣的小手工",
      "duration": 547,
      "pages": [
        "给孩子做了一个半飞行的玩具车"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/44f1b797dbff5df96b287c4fededa3c623ee756d.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 2906197,
      "pubdate": "2026-11-09",
      "reason": "手工耿给孩子做了一辆「半飞行」的玩具车。看一个大人怎么从一个好玩的点子开始，焊、拼、试、改，最后真的造出来。",
      "think": "如果让你给这辆车加一个新功能，你想加什么？画一张设计图。",
      "caution": "视频里有电焊、切割等电动工具，只看不模仿，动手一定要大人在旁边。",
      "quiz": [
        {
          "type": "judge",
          "q": "做发明时，第一次失败很正常，工程师会改一改再试。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "几乎所有发明都不是一次就成功的，「失败—改进—再试」就是工程师的日常。"
        }
      ]
    },
    "BV1fV411x72a": {
      "id": "BV1fV411x72a",
      "title": "【自制】我把自行车做成了 自 动 驾 驶 ！！【硬核】",
      "url": "https://www.bilibili.com/video/BV1fV411x72a",
      "channel": "稚晖君",
      "mid": 20259914,
      "channelUrl": "https://space.bilibili.com/20259914",
      "fans": 2834223,
      "official": "bilibili 2021百大UP主、知名科技UP主",
      "sign": "保持热爱，奔赴星海。",
      "duration": 667,
      "pages": [
        "xuan-release-带片头"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/ffc49d25827443f438d86de3a4fb41dc259cc142.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 5249265,
      "pubdate": "2021-06-06",
      "reason": "稚晖君花了 4 个月，把一辆自行车改成能自己平衡、自己走的「自动驾驶」自行车。这是造东西 + AI 的结合，也是 B 站最硬核的作品之一。",
      "think": "自行车要「自己不倒」，它需要知道哪些信息？（提示：像你骑车时的眼睛和身体感觉）",
      "caution": "中间有很多电路板和代码画面，看不懂没关系，看他「遇到问题 → 想办法」的过程。",
      "quiz": [
        {
          "type": "choice",
          "q": "要让自行车自己不倒，它首先需要知道什么？",
          "options": [
            "自己正在往哪边倾斜",
            "今天的天气",
            "车是什么颜色"
          ],
          "answer": 0,
          "explain": "先知道自己往哪边倒，才能马上往反方向调整，这和你骑车保持平衡一样。"
        }
      ]
    },
    "BV12341117rG": {
      "id": "BV12341117rG",
      "title": "【自制】我造了一台钢铁侠的迷你机械臂 ！【硬核】",
      "url": "https://www.bilibili.com/video/BV12341117rG",
      "channel": "稚晖君",
      "mid": 20259914,
      "channelUrl": "https://space.bilibili.com/20259914",
      "fans": 2834220,
      "official": "bilibili 2021百大UP主、知名科技UP主",
      "sign": "保持热爱，奔赴星海。",
      "duration": 1033,
      "pages": [
        "【正片】",
        "【DLC】-上位机DummyStudio"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/5136993f2b338e5a936ba6bb649237a476a083c1.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 7698110,
      "pubdate": "2021-10-07",
      "reason": "稚晖君从零设计一台钢铁侠同款迷你机械臂：画图、3D 打印、写程序、调试。看工程师怎么把一个想法做成真东西。",
      "think": "如果机械臂要帮你递剑，它需要做哪几个动作？按顺序写下来——这就是「程序」。",
      "caution": "16 分钟，偏硬核。默认播正片。",
      "quiz": [
        {
          "type": "choice",
          "q": "把「拿起—移动—放下」按顺序写成机器能执行的步骤，这叫？",
          "options": [
            "程序",
            "图画",
            "故事"
          ],
          "answer": 0,
          "explain": "程序就是一步一步告诉机器该做什么的指令。"
        }
      ]
    },
    "BV1Ljtt6VEAS": {
      "id": "BV1Ljtt6VEAS",
      "title": "弄了口大钢牙",
      "url": "https://www.bilibili.com/video/BV1Ljtt6VEAS",
      "channel": "手工耿",
      "mid": 280793434,
      "channelUrl": "https://space.bilibili.com/280793434",
      "fans": 8087497,
      "official": "2024百大UP主、知名搞笑UP主",
      "sign": "喜欢做一些有趣的小手工",
      "duration": 162,
      "pages": [
        "弄了口大钢牙"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/bc81ae96a92e3d2c16c3f5156e0a416e4f65b2c8.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 2160861,
      "pubdate": "2026-08-31",
      "reason": "手工耿 3 分钟的「无用发明」：一口能动的大钢牙。好玩的点子不一定要有用，先动手再说！",
      "think": "你有没有一个「没用但好玩」的发明点子？画出来。",
      "caution": "有电焊画面，只看不模仿。",
      "quiz": [
        {
          "type": "judge",
          "q": "只有「有用」的点子才值得动手做。",
          "options": [
            "对",
            "错"
          ],
          "answer": 1,
          "explain": "好玩但「没用」的发明，也能锻炼动手能力和想象力，很多伟大的发明一开始也是玩出来的。"
        }
      ]
    },
    "BV1NH5NzyEaL": {
      "id": "BV1NH5NzyEaL",
      "title": "揭秘5个魔术小秘密！魔术背后都是科学原理【CrunchLabs官方】",
      "url": "https://www.bilibili.com/video/BV1NH5NzyEaL",
      "channel": "CrunchLabs官方",
      "mid": 3546769136814234,
      "channelUrl": "https://space.bilibili.com/3546769136814234",
      "fans": 59511,
      "official": "CrunchLabs官方账号",
      "sign": "欢迎所有未来的小工程师和创造者们！一起加入我们的玩具工程吧！",
      "duration": 540,
      "pages": [
        "揭秘5个魔术小秘密！魔术背后都是科学原理【CrunchLabs官方】"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/a9d5db463955f928a1f35935db64100deef16f4d.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 63880,
      "pubdate": "2025-05-09",
      "reason": "CrunchLabs 官方（Mark Rober 的少年工程频道）：5 个魔术的秘密，原来全是科学原理。",
      "think": "学会其中一个魔术，表演给家人看，再告诉他们背后的原理。",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "很多魔术看起来很神奇，背后其实是科学原理和巧妙的设计。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "魔术师利用光线、力学和人的注意力，让我们「看错」。懂了原理，你也能变。"
        }
      ]
    },
    "BV1xdZJYJE1x": {
      "id": "BV1xdZJYJE1x",
      "title": "经典概率论问题“三门问题”：如何才能获得更大中奖率？",
      "url": "https://www.bilibili.com/video/BV1xdZJYJE1x",
      "channel": "李永乐老师官方",
      "mid": 9458053,
      "channelUrl": "https://space.bilibili.com/9458053",
      "fans": 3488277,
      "official": "bilibili 知名科普UP主",
      "sign": "当了很多年中学老师，一个理想主义者",
      "duration": 242,
      "pages": [
        "经典概率论问题“三门问题”：如何才能获得更大中奖率？"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/387de3f796cbf33041de8130bc1d39d5066b8acb.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 81939,
      "pubdate": "2025-03-31",
      "reason": "李永乐老师 4 分钟讲清著名的「三门问题」：为什么换一扇门，赢的机会反而更大？连很多数学家都猜错过。",
      "think": "看完先别急着相信，用杯子和糖亲自玩 30 次验证一下！",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "三门问题里，主持人打开一扇空门后，「换门」赢的机会大约是多少？",
          "options": [
            "1/3",
            "1/2",
            "2/3"
          ],
          "answer": 2,
          "explain": "一开始选中的机会只有 1/3，剩下的 2/3 都「集中」到了另一扇没打开的门上，所以换门更好。"
        }
      ]
    },
    "BV1ypdhBPEjf": {
      "id": "BV1ypdhBPEjf",
      "title": "多少只老鼠能找到毒药？有趣的二进制问题",
      "url": "https://www.bilibili.com/video/BV1ypdhBPEjf",
      "channel": "李永乐老师官方",
      "mid": 9458053,
      "channelUrl": "https://space.bilibili.com/9458053",
      "fans": 3488277,
      "official": "bilibili 知名科普UP主",
      "sign": "当了很多年中学老师，一个理想主义者",
      "duration": 157,
      "pages": [
        "多少只老鼠能找到毒药？有趣的二进制问题"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/e41e48feb820a2d640033dea97b427ed7b6eabcb.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 75824,
      "pubdate": "2026-04-16",
      "reason": "1000 瓶水里有 1 瓶毒药，最少用几只小老鼠就能找出来？答案藏在二进制里——也就是电脑和 AI 说话用的 0 和 1。",
      "think": "用 0 和 1 写出你的年龄（比如 9 岁 = 1001），考考爸爸妈妈能不能读出来。",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "二进制里只用哪两个数字？",
          "options": [
            "0 和 1",
            "1 和 2",
            "0 和 9"
          ],
          "answer": 0,
          "explain": "二进制只有 0 和 1，就像开关只有「关」和「开」。"
        },
        {
          "type": "choice",
          "q": "1000 瓶水里有 1 瓶毒药，最少需要几只小老鼠才能找出来？",
          "options": [
            "10 只",
            "100 只",
            "1000 只"
          ],
          "answer": 0,
          "explain": "10 只老鼠能组合出 2×2×…×2（10 个 2）= 1024 种结果，比 1000 多，所以 10 只就够了。"
        }
      ]
    },
    "BV1A34z6pERE": {
      "id": "BV1A34z6pERE",
      "title": "56乘78古人竟然能用竹棍算出来！",
      "url": "https://www.bilibili.com/video/BV1A34z6pERE",
      "channel": "央视纪录",
      "mid": 72209046,
      "channelUrl": "https://space.bilibili.com/72209046",
      "fans": 1829159,
      "official": "中央电视台纪录频道官方账号",
      "sign": "我再说一次，是纪录不是记录！",
      "duration": 89,
      "pages": [
        "56乘78古人竟然能用竹棍算出来！"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/26e62a7ba2074b429bbb097cd00824e39b982eff.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 11845,
      "pubdate": "2026-11-06",
      "reason": "央视纪录频道：古人用一把小竹棍，就能算出 56 × 78！四年级正好在学多位数乘法，看看古人的算法。",
      "think": "用竹筷或牙签摆一摆，试着用古人的方法算一道你作业里的乘法。",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "古人用来计算的小竹棍叫什么？",
          "options": [
            "算筹",
            "算盘",
            "筷子"
          ],
          "answer": 0,
          "explain": "算筹是中国古代的计算工具，比算盘还要早。"
        },
        {
          "type": "choice",
          "q": "56 × 78 等于多少？",
          "options": [
            "4368",
            "4268",
            "3468"
          ],
          "answer": 0,
          "explain": "56 × 78 = 56 × 80 − 56 × 2 = 4480 − 112 = 4368。"
        }
      ]
    },
    "BV1nc4J6tEqv": {
      "id": "BV1nc4J6tEqv",
      "title": "古代数学里的高考原题",
      "url": "https://www.bilibili.com/video/BV1nc4J6tEqv",
      "channel": "央视纪录",
      "mid": 72209046,
      "channelUrl": "https://space.bilibili.com/72209046",
      "fans": 1829159,
      "official": "中央电视台纪录频道官方账号",
      "sign": "我再说一次，是纪录不是记录！",
      "duration": 144,
      "pages": [
        "古代数学里的高考原题"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/476cede0430c3440562cd17c4dc26232b4462844.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 7786,
      "pubdate": "2026-11-07",
      "reason": "央视纪录频道：两千年前的古代数学书里，竟然有和今天考试一模一样的题。数学是人类一代代传下来的智慧。",
      "think": "古人没有计算器，他们为什么还要研究这么难的数学题？",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "中国古代很早就有专门的数学书，比如《九章算术》。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "《九章算术》大约在两千年前成书，里面有很多实用的数学题。"
        }
      ]
    },
    "BV1EW411p727": {
      "id": "BV1EW411p727",
      "title": "【官方双语】“π”=圆周率的由来：欧拉差点把“π”设置为6.283185了吗？",
      "url": "https://www.bilibili.com/video/BV1EW411p727",
      "channel": "3Blue1Brown",
      "mid": 88461692,
      "channelUrl": "https://space.bilibili.com/88461692",
      "fans": 2788258,
      "official": "bilibili 知名UP主，3Blue1Brown官方账号",
      "sign": "中国官方账号。深入浅出、直观明了地分享数学之美。资助页面：www.patreon.com/3blue1brown",
      "duration": 353,
      "pages": [
        ""
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/2026cfb37ccff64de8f4c69b3c4d7a2056e88f27.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 280341,
      "pubdate": "2018-03-15",
      "reason": "3Blue1Brown 官方双语：π 这个符号是怎么来的？欧拉差点让 π 等于 6.28！6 分钟数学小故事。",
      "think": "找一个圆的东西（杯子、盘子），用绳子量一量周长和直径，算算周长 ÷ 直径是多少。",
      "caution": "英文原声，五六年级学圆时还可以再看一遍。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "任何一个圆，周长 ÷ 直径，大约等于多少？",
          "options": [
            "3.14",
            "2",
            "10"
          ],
          "answer": 0,
          "explain": "不管圆大还是小，周长 ÷ 直径都约等于 3.14，这个数就叫 π（读作「派」）。"
        }
      ]
    },
    "BV1Zu4y1W7dm": {
      "id": "BV1Zu4y1W7dm",
      "title": "一些反直觉概率的计算机模拟",
      "url": "https://www.bilibili.com/video/BV1Zu4y1W7dm",
      "channel": "Ele实验室",
      "mid": 481434238,
      "channelUrl": "https://space.bilibili.com/481434238",
      "fans": 593829,
      "official": "bilibili 知名科技UP主",
      "sign": "空谈误国，实干兴邦",
      "duration": 747,
      "pages": [
        "一些反直觉概率的计算机模拟"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/65d3b572cb1252e965578ce0d752ae5061377220.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 380484,
      "pubdate": "2023-10-13",
      "reason": "Ele 实验室用电脑把概率题模拟上万次来验证答案。这正是 AI 研究员的做法：不靠猜，让电脑做实验。",
      "think": "三门问题你用杯子玩了 30 次，电脑能玩 1 万次。哪个结果更可信？为什么？",
      "caution": "12 分钟，后半段偏难，看到三门问题模拟那段就可以停。",
      "quiz": [
        {
          "type": "judge",
          "q": "把一个实验重复做很多次，得到的结果通常比只做几次更可信。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "只做几次容易「碰运气」，做很多次才能看出真正的规律。"
        }
      ]
    },
    "BV1EW411u7th": {
      "id": "BV1EW411u7th",
      "title": "【计算机科学速成课】[40集全/精校] - Crash Course Computer Science",
      "url": "https://www.bilibili.com/video/BV1EW411u7th",
      "channel": "CrashCourse字幕组",
      "mid": 290704043,
      "channelUrl": "https://space.bilibili.com/290704043",
      "fans": 210422,
      "official": "",
      "sign": "字幕组网站: https://crashcourse.club  Q群: 733191589",
      "duration": 28321,
      "pages": [
        "1. 计算机早期历史-Early Computing",
        "2. 电子计算机-Electronic Computing",
        "3. 布尔逻辑 和 逻辑门-Boolean Logic & Logic Gates",
        "4. 二进制-Representing Numbers and Letters with Binary_BiliBili",
        "5. 算术逻辑单元-How Computers Calculate-the ALU",
        "6. 寄存器 & 内存-Registers and RAM_BiliBili",
        "7. 中央处理器(CPU)-The Central Processing Unit",
        "8. 指令和程序-Instructions & Programs",
        "9. 高级CPU设计-Advanced CPU Designs_BiliBili",
        "10. 早期的编程方式-Early Programming",
        "11. 编程语言发展史-The First Programming Languages",
        "12. 编程原理-语句和函数-Programming Basics - Statements & Functions",
        "13. 算法入门 - Intro to Algorithms",
        "14. 数据结构-Data Structures",
        "15. 阿兰·图灵-Alan Turing_BiliBili",
        "16. 软件工程-Software Engineering",
        "17. 集成电路&摩尔定律-Integrated Circuits & Moore's Law",
        "18. 操作系统-Operating Systems",
        "19. 内存&储存介质-Memory & Storage",
        "20. 文件系统-Files & File Systems_BiliBili",
        "21. 压缩-Compression",
        "22. 命令行界面-Keyboards & Command Line Interfaces",
        "23. 屏幕&2D 图形显示-Screens&2D Graphics",
        "24. 冷战和消费主义-The Cold War and Consumerism_BiliBili",
        "25. 个人计算机革命-The Personal Computer Revolution_BiliBili",
        "26. 图形用户界面-Graphical User Interfaces",
        "27. 3D 图形-3D Graphics",
        "28. 计算机网络-Computer Networks",
        "29. 互联网-The Internet_BiliBili",
        "30. 万维网-The World Wide Web",
        "31. 计算机安全-Cybersecurity_BiliBili",
        "32. 黑客&攻击-Hackers & Cyber Attacks",
        "33. 加密-Cryptography",
        "34. 机器学习&人工智能-Machine Learning & Artificial Intelligence_BiliBili",
        "35. 计算机视觉-Computer Vision",
        "36. 自然语言处理-Natural Language Processing",
        "37. 机器人-Robots",
        "38. 计算机心理学 - Psychology of Computing",
        "39. 教育科技-Educational Technology_BiliBili",
        "40. 奇点,天网,计算机的未来-The Singularity, Skynet, and the Future of Computing"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/3d37686d1cb53309504f5f35955257a44b4e28fb.jpg@480w_270h_1c.webp",
      "copyright": 2,
      "views": 5179550,
      "pubdate": "2018-03-29",
      "reason": "Crash Course 计算机速成课（40 集，字幕组精校）。先看第 1 集「计算机早期历史」，从算盘讲到第一台计算机，英文原声 + 中英字幕。",
      "think": "古时候没有电脑，人们用什么来算很大的数？",
      "caution": "这是字幕组翻译转载的合集，默认播放第 1P。语速快，可以 0.75 倍速看。之后每周最多看 1～2 集。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "在电子计算机出现之前，人们用什么工具帮助计算？",
          "options": [
            "算盘",
            "智能手机",
            "平板电脑"
          ],
          "answer": 0,
          "explain": "算盘、算筹这些工具，都是人类早期的「计算机」。"
        }
      ]
    },
    "BV1bF41187VX": {
      "id": "BV1bF41187VX",
      "title": "【李炎恢】Scratch入门教程 | 小学2~4年级 | 少儿编程系列 | 已完结 | 共102P",
      "url": "https://www.bilibili.com/video/BV1bF41187VX",
      "channel": "李炎恢",
      "mid": 14978379,
      "channelUrl": "https://space.bilibili.com/14978379",
      "fans": 45854,
      "official": "",
      "sign": "课程官网：www.ycku.com",
      "duration": 59945,
      "pages": [
        "01.少儿编程.开场白",
        "02.Scratch软件入门",
        "03.海底世界.移动",
        "04.海底世界.造型",
        "05.侏罗纪公园.面向",
        "06.小鸡啄米.坐标",
        "07.小鸡啄米.改造型",
        "08.流星雨.旋转",
        "09.流星雨.侦测",
        "10.跋山涉水.背景",
        "11.跋山涉水.声音",
        "12.捕获蝴蝶.随机",
        "13.捕获蝴蝶.鼠标",
        "14.师生问候.表达",
        "15.师生问候.广播",
        "16.马戏团表演.拼接",
        "17.马戏团表演.变量",
        "18.火箭升空.加速",
        "19.火箭升空.切换",
        "20.乘坐公交.虚像",
        "21.乘坐公交.计时器",
        "22.乘坐公交.收尾",
        "23.音乐节广告.颜色",
        "24.圣诞大转盘.上传",
        "25.圣诞大转盘.颜色碰撞",
        "26.走动的钟表.绘图",
        "27.走动的钟表.方向",
        "28.猫捉老鼠.按键",
        "29.猫捉老鼠.规则",
        "30.猫捉老鼠.首尾",
        "31.水果忍者.克隆",
        "32.水果忍者.私有变量",
        "33.水果忍者.判断",
        "34.水果忍者.统计",
        "35.英文打字.复习",
        "36.英文打字.倒计时",
        "37.FlappyBird.开局",
        "38.FlappyBird.障碍",
        "39.FlappyBird.飞跃",
        "40.FlappyBird.音效",
        "41.FlappyBird.计分",
        "42.弹球游戏.弹击",
        "43.弹球游戏.复制",
        "44.弹球游戏.关卡",
        "45.弹球游戏.自制",
        "46.弹球游戏.结局",
        "47.拯救迷宫公主.绘制",
        "48.拯救迷宫公主.走动",
        "49.拯救迷宫公主.命数",
        "50.拯救迷宫公主.敌人",
        "51.拯救迷宫公主.对决",
        "52.拯救迷宫公主.营救",
        "53.雷电2024.背景",
        "54.雷电2024.加载",
        "55.雷电2024.玩家子弹",
        "56.雷电2024.小型敌机",
        "57.雷电2024.敌机子弹",
        "58.雷电2024.敌机血条",
        "59.雷电2024.碰撞检测",
        "60.雷电2024.技能",
        "61.雷电2024.多技能",
        "62.雷电2024.加强子弹",
        "63.雷电2024.Boss上",
        "64.雷电2024.Boss下",
        "65.雷电2024.收尾",
        "66.雷电2024.音效",
        "67.拼图游戏.拖动",
        "68.拼图游戏.场景",
        "69.拼图游戏.难度",
        "70.拼图游戏.收尾",
        "71.贩卖水果.布局",
        "72.贩卖水果.列表",
        "73.贩卖水果.选择水果",
        "74.贩卖水果.判断重量",
        "75.贩卖水果.折扣",
        "76.贩卖水果.结算",
        "77.画笔.几何图形",
        "78.画笔.填充方式",
        "79.画笔.图章工具",
        "80.黄金矿工.构建",
        "81.黄金矿工.伸拽",
        "82.黄金矿工.矿石",
        "83.黄金矿工.收尾",
        "84.音乐.组件扩展",
        "85.弹指节奏.构建",
        "86.弹指节奏.音符",
        "87.弹指节奏.按键",
        "88.弹指节奏.播放",
        "89.弹指节奏.统计",
        "90.算术算法.累加和",
        "91.算术算法.求闰年",
        "92.算术算法.蜗牛爬树",
        "93.算术算法.最大公约数",
        "94.算术算法.遍历递归",
        "95.算术算法.斐波那契数列",
        "96.算术算法.穷举法",
        "97.算术算法.鸡兔同笼",
        "98.算术算法.顺序查找",
        "99.算术算法.二分法查找",
        "100.算术算法.冒泡排序",
        "101.算术算法.选择排序",
        "102.算术算法.插入排序"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/7ad84aeaa6bedfb0732a65cf65af3bea8708fa9e.png@480w_270h_1c.webp",
      "copyright": 1,
      "views": 440541,
      "pubdate": "2021-11-29",
      "reason": "李炎恢老师的 Scratch 入门课，专门为小学 2～4 年级设计。先看第 2P「Scratch 软件入门」，然后就打开 Scratch 自己做。",
      "think": "Scratch 里的「积木」和真正的代码有什么一样的地方？",
      "caution": "共 102P，不要一口气刷。每次看 1P，看完马上动手做出来，再看下一 P。",
      "page": 2,
      "quiz": [
        {
          "type": "judge",
          "q": "Scratch 是用拖动「积木」的方式来编程的。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "每块积木就是一条指令，把积木拼起来，就是一个程序。"
        }
      ]
    },
    "BV1wCV26qEYt": {
      "id": "BV1wCV26qEYt",
      "title": "【趣味二进制】龙芯中科系列科普动画——科普芯知识",
      "url": "https://www.bilibili.com/video/BV1wCV26qEYt",
      "channel": "龙芯中科",
      "mid": 1339327684,
      "channelUrl": "https://space.bilibili.com/1339327684",
      "fans": 92398,
      "official": "龙芯中科官方账号",
      "sign": "自主创新的龙芯中科",
      "duration": 84,
      "pages": [
        "【趣味二进制】龙芯中科系列科普动画——科普芯知识"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/8ab2e7d51278f82cf5f45a90c6e6cbf655167a91.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 1925,
      "pubdate": "2026-06-03",
      "reason": "龙芯中科官方（做国产电脑芯片的公司）1 分半动画：电脑为什么只认识 0 和 1？",
      "think": "开关灯只有「开」和「关」两种状态。用 3 盏灯最多能表示几种不同的信号？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "十进制的 5，写成二进制是多少？",
          "options": [
            "101",
            "111",
            "5"
          ],
          "answer": 0,
          "explain": "二进制 101 = 1 个 4 + 0 个 2 + 1 个 1 = 5。"
        }
      ]
    },
    "BV1wi4y157D3": {
      "id": "BV1wi4y157D3",
      "title": "从0到1设计一台计算机",
      "url": "https://www.bilibili.com/video/BV1wi4y157D3",
      "channel": "Ele实验室",
      "mid": 481434238,
      "channelUrl": "https://space.bilibili.com/481434238",
      "fans": 593829,
      "official": "bilibili 知名科技UP主",
      "sign": "空谈误国，实干兴邦",
      "duration": 8725,
      "pages": [
        "第0话-开篇",
        "第1话-人脑计算机",
        "第2话-冯诺伊曼和哈佛",
        "第3话-再谈RAM和ROM",
        "第4话-寄存器组",
        "第5话-运算器",
        "番外篇-运算器和寄存器组原理",
        "第6话-指令集",
        "第7话-汇编",
        "第8话-RAM寻址",
        "第9话-程序计数器",
        "第10话-图像IO",
        "第11话-跳转",
        "-----------------------",
        "插播一条广告",
        "第3话Logisim仿真",
        "第4-5话Logisim仿真",
        "第6话Logisim仿真",
        "第7话logsim仿真",
        "第8-9话logsim仿真",
        "第10-11话logisim仿真"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/daef9e0e37ea2d4a4ec81d05a2ac0c2722d47b54.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 975841,
      "pubdate": "2020-11-30",
      "reason": "Ele 实验室《从 0 到 1 设计一台计算机》第 1 话：其实你的大脑就是一台计算机。3 分钟。",
      "think": "你做一道加法题时，大脑里经历了哪几步？",
      "caution": "共 21 话，默认播第 1 话。喜欢的话每周看 1 话，后面会越来越难。",
      "page": 2,
      "quiz": [
        {
          "type": "judge",
          "q": "计算机的工作可以简单看成：输入信息 → 处理 → 输出结果。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "你按键盘是输入，电脑计算是处理，屏幕显示是输出。你的大脑也是这样工作的。"
        }
      ]
    },
    "BV1XS421P7qM": {
      "id": "BV1XS421P7qM",
      "title": "【官方双语】神经网络并不可怕！",
      "url": "https://www.bilibili.com/video/BV1XS421P7qM",
      "channel": "StatQuest",
      "mid": 3546620985608836,
      "channelUrl": "https://space.bilibili.com/3546620985608836",
      "fans": 98096,
      "official": "StatQuest官方账号",
      "sign": "StatQuest 官方账号，深入浅出讲解深度学习、机器学习、统计学原理！https://statquest.org",
      "duration": 49,
      "pages": [
        "【官方双语】神经网络并不可怕！"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/5802ef8043b822a065256a9402856cc63c9324f8.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 26992,
      "pubdate": "2024-02-23",
      "reason": "热身：不到 1 分钟的官方双语小片，告诉你「神经网络并不可怕」。英文原声，正好练听力。",
      "think": "听到了哪些英文单词？",
      "caution": "",
      "english": true,
      "quiz": [
        {
          "type": "judge",
          "q": "neural network 的中文意思是「神经网络」。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "neural 是「神经的」，network 是「网络」。"
        }
      ]
    },
    "BV1SH4y1A7DA": {
      "id": "BV1SH4y1A7DA",
      "title": "人工智能是如何工作的？机器学习和神经网络又是什么？",
      "url": "https://www.bilibili.com/video/BV1SH4y1A7DA",
      "channel": "李永乐老师官方",
      "mid": 9458053,
      "channelUrl": "https://space.bilibili.com/9458053",
      "fans": 3488277,
      "official": "bilibili 知名科普UP主",
      "sign": "当了很多年中学老师，一个理想主义者",
      "duration": 1090,
      "pages": [
        "人工智能是如何工作的？机器学习和神经网络又是什么？"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/4d498753d321fc15b5f3e929eac18a89187aa1ca.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 317027,
      "pubdate": "2024-04-27",
      "reason": "李永乐老师 18 分钟讲清：人工智能是什么、机器学习怎么学、神经网络长什么样。这是整条路线最重要的一条打底视频。",
      "think": "用你自己的话说：AI 和普通的电脑程序最大的区别是什么？",
      "caution": "可以分两次看，每次 9 分钟。",
      "quiz": [
        {
          "type": "choice",
          "q": "机器学习和普通电脑程序最大的不同是什么？",
          "options": [
            "机器学习能从大量例子（数据）里自己找出规律",
            "机器学习不需要用电",
            "普通程序比机器学习更聪明"
          ],
          "answer": 0,
          "explain": "普通程序要人一条条写规则；机器学习是给它很多例子，让它自己总结规则。"
        }
      ]
    },
    "BV14p4y1h7zX": {
      "id": "BV14p4y1h7zX",
      "title": "【TED-Ed】[个人译制][人工智能是如何学习的][How does artificial intelligence learn]",
      "url": "https://www.bilibili.com/video/BV14p4y1h7zX",
      "channel": "Spectator-YYX",
      "mid": 171219028,
      "channelUrl": "https://space.bilibili.com/171219028",
      "fans": 1430,
      "official": "",
      "sign": "因为爱所以爱，乍见不惊，久处不厌～",
      "duration": 891,
      "pages": [
        "[中英]How does artificial intelligence learn- - Briana Brownell_CHS&EN",
        "[英字]How does artificial intelligence learn- - Briana Brownell_x264_EN",
        "[生肉]How does artificial intelligence learn- - Briana Brownell"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/ec5b7fc3ccbc1cb1cfadb674f82bf6c56ffd5962.png@480w_270h_1c.webp",
      "copyright": 2,
      "views": 2049,
      "pubdate": "2021-03-13",
      "reason": "TED-Ed 动画：AI 有三种学习方法——有老师教（监督学习）、自己找规律（无监督学习）、做对了给奖励（强化学习）。5 分钟讲清。",
      "think": "你学击剑用的是哪种学习方法？教练纠正动作、自己琢磨、比赛赢了开心——分别对应哪种？",
      "caution": "个人译制的转载稿，默认播第 1P（中英字幕）。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "AI 做对了给奖励、做错了扣分，靠这种方式学习，叫什么？",
          "options": [
            "强化学习",
            "监督学习",
            "无监督学习"
          ],
          "answer": 0,
          "explain": "强化学习靠奖励；监督学习是有「标准答案」的例子；无监督学习是自己在数据里找规律。"
        }
      ]
    },
    "BV1xr421x7xw": {
      "id": "BV1xr421x7xw",
      "title": "【官方双语】机器学习新手必看，超简洁入门视频，带你理解机器学习核心",
      "url": "https://www.bilibili.com/video/BV1xr421x7xw",
      "channel": "StatQuest",
      "mid": 3546620985608836,
      "channelUrl": "https://space.bilibili.com/3546620985608836",
      "fans": 98098,
      "official": "StatQuest官方账号",
      "sign": "StatQuest 官方账号，深入浅出讲解深度学习、机器学习、统计学原理！https://statquest.org",
      "duration": 766,
      "pages": [
        "【官方双语】机器学习新手必看，超简洁入门视频，带你理解机器学习核心"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/7832e107e14242b6ab51c9e82aada662f6944e8e.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 16942,
      "pubdate": "2024-04-12",
      "reason": "StatQuest 官方双语：机器学习到底在做什么？就两件事——预测和分类。还讲了为什么要用「没见过的题」考 AI。",
      "think": "老师考试为什么不直接考练习册上做过的原题？这和考 AI 是一个道理吗？",
      "caution": "13 分钟，英文原声。建议家长陪看。",
      "english": true,
      "quiz": [
        {
          "type": "judge",
          "q": "考 AI 的时候，要用它训练时「没见过」的题，才知道它是真学会了还是死记硬背。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "就像考试不考练习册原题一样，用新题才能看出是不是真的懂了。"
        }
      ]
    },
    "BV18m411S79t": {
      "id": "BV18m411S79t",
      "title": "【官方双语】神经网络基本思想，从零开始理解深度学习！",
      "url": "https://www.bilibili.com/video/BV18m411S79t",
      "channel": "StatQuest",
      "mid": 3546620985608836,
      "channelUrl": "https://space.bilibili.com/3546620985608836",
      "fans": 98096,
      "official": "StatQuest官方账号",
      "sign": "StatQuest 官方账号，深入浅出讲解深度学习、机器学习、统计学原理！https://statquest.org",
      "duration": 1121,
      "pages": [
        "【官方双语】神经网络基本思想，从零开始理解深度学习！"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/78659b3c4f3f307b9d8e63e16c9bed9edf4787be.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 68335,
      "pubdate": "2024-02-24",
      "reason": "StatQuest 官方双语：用一个「吃多少药才有效」的例子，一步一步画出神经网络是怎么把一条条直线拼成弯曲的线的。讲得极慢、极清楚。",
      "think": "神经网络里那些「线」上的数字，是谁定的？（答案：是它自己练出来的！）",
      "caution": "对四年级偏难，建议家长陪看，遇到公式就暂停，用画图代替讲解。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "神经网络里连接线上的数字（叫「权重」），是怎么来的？",
          "options": [
            "训练时根据数据一点点自己调整出来的",
            "程序员一个个猜出来的",
            "随便写的，永远不变"
          ],
          "answer": 0,
          "explain": "训练就是不断调整这些数字，让神经网络的答案越来越准。"
        }
      ]
    },
    "BV1bx411M7Zx": {
      "id": "BV1bx411M7Zx",
      "title": "【官方双语】深度学习之神经网络的结构 Part 1 ver 2.0",
      "url": "https://www.bilibili.com/video/BV1bx411M7Zx",
      "channel": "3Blue1Brown",
      "mid": 88461692,
      "channelUrl": "https://space.bilibili.com/88461692",
      "fans": 2788258,
      "official": "bilibili 知名UP主，3Blue1Brown官方账号",
      "sign": "中国官方账号。深入浅出、直观明了地分享数学之美。资助页面：www.patreon.com/3blue1brown",
      "duration": 1153,
      "pages": [
        ""
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/3fddf427ddef5a78105deb60180727a7ad47c4d8.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 982577,
      "pubdate": "2017-10-19",
      "reason": "3Blue1Brown 官方双语：电脑怎么认出你写的数字「3」？用动画展示神经网络一层层识别的过程，全世界讲神经网络最好的视频之一。",
      "think": "电脑看图片时，看到的其实是什么？（提示：很多很多小格子里的数字）",
      "caution": "看不懂后半段很正常，先看前 8 分钟留个印象，一两年后再回来看会突然懂。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "电脑「看」一张图片时，看到的其实是什么？",
          "options": [
            "很多小格子（像素）里的数字",
            "和人眼看到的一样的画面",
            "一段文字"
          ],
          "answer": 0,
          "explain": "图片由很多像素组成，每个像素都是一个代表颜色深浅的数字，神经网络就是在处理这些数字。"
        }
      ]
    },
    "BV1xmA2eMEFF": {
      "id": "BV1xmA2eMEFF",
      "title": "【官方双语】大语言模型的简要解释",
      "url": "https://www.bilibili.com/video/BV1xmA2eMEFF",
      "channel": "3Blue1Brown",
      "mid": 88461692,
      "channelUrl": "https://space.bilibili.com/88461692",
      "fans": 2788274,
      "official": "bilibili 知名UP主，3Blue1Brown官方账号",
      "sign": "中国官方账号。深入浅出、直观明了地分享数学之美。资助页面：www.patreon.com/3blue1brown",
      "duration": 478,
      "pages": [
        "【官方双语】大语言模型的简要解释"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/974702616ef3fa1568dd47519bc674e139661740.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 291480,
      "pubdate": "2025-02-23",
      "reason": "3Blue1Brown 官方双语：ChatGPT 这类大语言模型是怎么说话的？原来它是一个词一个词地「猜」下一个词。8 分钟。",
      "think": "如果 AI 只是在猜下一个词，它说的话一定是对的吗？",
      "caution": "英文原声，有少量术语，可以暂停讲一讲。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "大语言模型（比如 ChatGPT）说话时，本质上在做什么？",
          "options": [
            "一个词一个词地预测下一个最可能出现的词",
            "从网上复制一整段答案",
            "后台有一个人在打字"
          ],
          "answer": 0,
          "explain": "它读过海量文字，学会了猜「下一个词最可能是什么」，一个接一个猜出整段话。"
        },
        {
          "type": "judge",
          "q": "因为是 AI 说的，所以答案一定是正确的。",
          "options": [
            "对",
            "错"
          ],
          "answer": 1,
          "explain": "AI 只是在猜最可能的词，有时会「一本正经地胡说八道」，重要的事要查证。"
        }
      ]
    },
    "BV1nc411p7D9": {
      "id": "BV1nc411p7D9",
      "title": "【科普】你的文字是怎么变成图片的？-AI绘画底层原理拆解",
      "url": "https://www.bilibili.com/video/BV1nc411p7D9",
      "channel": "子牧说",
      "mid": 76991025,
      "channelUrl": "https://space.bilibili.com/76991025",
      "fans": 444347,
      "official": "子牧说官方账号",
      "sign": "愿你眼中的星辰永恒不灭（合作商业咨询v：zzzimu66）",
      "duration": 340,
      "pages": [
        "【科普】你的文字是怎么变成图片的？-AI绘画底层原理拆解"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/f75d019f73f34ad58bd569e648ccad7767d30522.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 41847,
      "pubdate": "2023-04-14",
      "reason": "子牧说：你输入一句话，AI 为什么能画出一张图？不讲公式，用动画拆开 AI 画画的原理。",
      "think": "AI 画画是从一张「雪花噪点图」一步步变清楚的。这和你画画先打草稿有什么像的地方？",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "很多 AI 画画时，是从一张满是「雪花点」的图开始，一步步变清楚的。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "这类 AI 学会了怎么把噪点一点点去掉，最后变成和文字描述相符的图。"
        }
      ]
    },
    "BV1S2xW6JECi": {
      "id": "BV1S2xW6JECi",
      "title": "葫芦能让南瓜变有毒？“AI科普”不要太离谱！",
      "url": "https://www.bilibili.com/video/BV1S2xW6JECi",
      "channel": "中国食品报融媒体",
      "mid": 439478093,
      "channelUrl": "https://space.bilibili.com/439478093",
      "fans": 4614812,
      "official": "中国食品报融媒体官方帐号",
      "sign": "每周五和周日 19:00直播聊聊食品知识\n科普食品相关知识～",
      "duration": 487,
      "pages": [
        "葫芦能让南瓜变有毒？“AI科普”不要太离谱！"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/e67694ec1e744d2ae0809e5d89bc17021961acd0.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 1162314,
      "pubdate": "2026-11-01",
      "reason": "中国食品报融媒体官方：拆穿网上「AI 生成的假科普」短视频——葫芦能让南瓜变有毒？学会识别 AI 胡说八道。",
      "think": "以后看到很神奇的「科普」短视频，你会用哪 3 个办法检查它是真是假？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "下面哪个是识别 AI 假科普的好办法？",
          "options": [
            "看看有没有可靠来源，问问老师家长，或者查权威网站",
            "播放量高的就是真的",
            "配音好听的就是真的"
          ],
          "answer": 0,
          "explain": "播放量和配音都不能证明内容是对的，可靠的来源才最重要。"
        }
      ]
    },
    "BV1GDAwetEiQ": {
      "id": "BV1GDAwetEiQ",
      "title": "AI最有用的一集",
      "url": "https://www.bilibili.com/video/BV1GDAwetEiQ",
      "channel": "Veritasium真理元素",
      "mid": 94742590,
      "channelUrl": "https://space.bilibili.com/94742590",
      "fans": 1175664,
      "official": "真理元素Veritasium中国官方频道",
      "sign": "Veritasium中国官方频道 探索科学及工程背后的真理 | 商务微信：origami-alice",
      "duration": 1400,
      "pages": [
        "AI最有用的一集"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/493ea02c02d9e7e3ec72b5dfb115a8471506f0dc.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 204617,
      "pubdate": "2025-02-15",
      "reason": "Veritasium 官方：科学家花了 50 年都解不开的蛋白质难题，被 AI（AlphaFold）解开了，还拿了诺贝尔奖。这是 AI 最有用的一面。",
      "think": "如果你是科学家，你最想让 AI 帮你解决哪个难题？",
      "caution": "23 分钟，建议分两次看；中间有生物学名词，看个大概就好。",
      "quiz": [
        {
          "type": "choice",
          "q": "AlphaFold 这个 AI 帮科学家解决了什么难题？",
          "options": [
            "预测蛋白质的形状（结构）",
            "预测明天的天气",
            "下围棋"
          ],
          "answer": 0,
          "explain": "蛋白质的形状决定了它的作用，以前测一个要花很多年，AlphaFold 能快速预测出来。"
        }
      ]
    },
    "BV1J2421L7B9": {
      "id": "BV1J2421L7B9",
      "title": "注定被机器接管的未来？【TED-Ed】",
      "url": "https://www.bilibili.com/video/BV1J2421L7B9",
      "channel": "TED官方",
      "mid": 1954415159,
      "channelUrl": "https://space.bilibili.com/1954415159",
      "fans": 1306453,
      "official": "TED官方账号",
      "sign": "官方原版视频，进阶英语，拓宽眼界",
      "duration": 341,
      "pages": [
        "注定被机器接管的未来？【TED-Ed】"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/73fb5a10707bf50d9549d721fc24719e290bdcd2.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 9872,
      "pubdate": "2024-02-02",
      "reason": "TED 官方 TED-Ed 动画：AI 会帮我们修好世界，还是会接管世界？学完原理，最后想一想 AI 该怎么用。英文原声，中文字幕。",
      "think": "如果你来设计一个 AI，你最想让它帮人类做什么？有什么事你觉得不该交给 AI？",
      "caution": "讨论 AI 的未来，有一点点严肃，适合看完和家长聊一聊。",
      "english": true,
      "quiz": [
        {
          "type": "judge",
          "q": "AI 会给世界带来好的还是坏的影响，很大程度上取决于人类怎样设计和使用它。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "AI 是工具，就像刀可以切菜也可能伤人，关键在于怎么用。"
        }
      ]
    },
    "BV1Qs411u78U": {
      "id": "BV1Qs411u78U",
      "title": "【官方双语】马格努斯效应的惊人用途（含生肉）【Veritasium真理元素】",
      "url": "https://www.bilibili.com/video/BV1Qs411u78U",
      "channel": "Veritasium真理元素",
      "mid": 94742590,
      "channelUrl": "https://space.bilibili.com/94742590",
      "fans": 1175665,
      "official": "真理元素Veritasium中国官方频道",
      "sign": "Veritasium中国官方频道 探索科学及工程背后的真理 | 商务微信：origami-alice",
      "duration": 362,
      "pages": [
        "中英字幕版",
        "纯英文版"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/486d4324cb6501a12f0bb0152edb8755cd79e9fb.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 17614,
      "pubdate": "2018-08-07",
      "reason": "Veritasium 官方：旋转的球为什么会拐弯？这就是匹克球、乒乓球上旋下旋的秘密——马格努斯效应。从大坝上扔篮球的镜头超震撼。",
      "think": "打匹克球时，上旋球为什么会「突然往下掉」？",
      "caution": "第 1P 中英字幕，第 2P 纯英文，可以挑战第 2P。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "旋转的球在空中飞行时会拐弯，这叫什么效应？",
          "options": [
            "马格努斯效应",
            "共振",
            "摩擦发光"
          ],
          "answer": 0,
          "explain": "球旋转时两边的空气流动不一样，就会被推向一边，球就拐弯了。"
        }
      ]
    },
    "BV14whnzhERC": {
      "id": "BV14whnzhERC",
      "title": "10万帧每秒慢镜头下，火箭动力高尔夫球杆挥打瞬间！【Mark Rober官方】",
      "url": "https://www.bilibili.com/video/BV14whnzhERC",
      "channel": "MarkRober官方",
      "mid": 3546769141008790,
      "channelUrl": "https://space.bilibili.com/3546769141008790",
      "fans": 411931,
      "official": "MarkRober官方账号",
      "sign": "前NASA工程师 | 现CrunchLabs创始人 | YouTube千万粉博主",
      "duration": 817,
      "pages": [
        "10万帧每秒慢镜头下，火箭动力高尔夫球杆挥打瞬间！【Mark Rober官方】"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/3b23e29216ffc836b480746314b4c99c253dd164.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 27488,
      "pubdate": "2025-08-02",
      "reason": "Mark Rober 用每秒 10 万帧的超高速相机拍下球杆击球的瞬间。看清「快到眼睛看不见」的动作——击剑电子裁判、网球鹰眼也是靠这类技术。",
      "think": "击剑的剑尖速度很快，裁判的眼睛跟不上，所以用了什么办法判断谁先刺中？",
      "caution": "13 分钟，后半段比较长，可以分两次看。",
      "quiz": [
        {
          "type": "judge",
          "q": "高速摄像机每秒能拍非常多张照片，所以能看清很快的动作。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "普通视频每秒约 30 张，高速摄像机每秒能拍成千上万张，慢放时就能看清细节。"
        }
      ]
    },
    "BV1ab411p7xs": {
      "id": "BV1ab411p7xs",
      "title": "击剑百科1：4分钟讲完击剑运动的历史演变",
      "url": "https://www.bilibili.com/video/BV1ab411p7xs",
      "channel": "FENCINGLAB",
      "mid": 408198655,
      "channelUrl": "https://space.bilibili.com/408198655",
      "fans": 10067,
      "official": "",
      "sign": "FENCING LAB",
      "duration": 226,
      "pages": [
        "击剑百科1：击剑运动的历史演变"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/98fc57a67e05423594992d385a86bd3da13a8592.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 9504,
      "pubdate": "2019-04-02",
      "reason": "击剑专业频道 FENCING LAB：4 分钟讲完击剑从决斗、贵族剑术到现代奥运项目的演变。练了 4 年剑，也该知道它的历史啦。",
      "think": "古代人为什么要学剑？现代击剑和古代用剑最大的不同是什么？",
      "caution": "非官方认证账号，但是长期专注击剑科普的原创频道。",
      "quiz": [
        {
          "type": "choice",
          "q": "现代奥运会击剑有哪三个剑种？",
          "options": [
            "花剑、重剑、佩剑",
            "长剑、短剑、木剑",
            "花剑、长剑、竹剑"
          ],
          "answer": 0,
          "explain": "花剑、重剑、佩剑的有效部位和规则都不一样。"
        }
      ]
    },
    "BV1hs411g74f": {
      "id": "BV1hs411g74f",
      "title": "乒乓球受力动态图解，上旋球如何产生？乒乓网湿父解密",
      "url": "https://www.bilibili.com/video/BV1hs411g74f",
      "channel": "乒乓网pingpangwang",
      "mid": 20497283,
      "channelUrl": "https://space.bilibili.com/20497283",
      "fans": 219102,
      "official": "bilibili 知名运动UP主",
      "sign": "乒乓球第一媒体平台，每天更新原创乒乓球教学视频、比赛视频、精彩球视频！在线解答球友技术问题！",
      "duration": 340,
      "pages": [
        "乒乓球受力动态图解，上旋球如何产生？乒乓网湿父解密"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/2620b9ed614ca6defa0e4ae1a13ec4d141b5ef08.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 21243,
      "pubdate": "2018-08-07",
      "reason": "乒乓网用动态受力图解：上旋球是怎么「搓」出来的？匹克球的上旋道理一样。",
      "think": "拍面朝哪个方向、往哪边刷球，才能打出上旋？下次打匹克球时试一试。",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "打上旋球时，球拍要从下往上「刷」球。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "从下往上摩擦球，球就会向前转，飞出去后会往下坠。"
        }
      ]
    },
    "BV1ja411r7oM": {
      "id": "BV1ja411r7oM",
      "title": "【中国击剑队】5个奥运夺冠超燃瞬间！",
      "url": "https://www.bilibili.com/video/BV1ja411r7oM",
      "channel": "FENCINGLAB",
      "mid": 408198655,
      "channelUrl": "https://space.bilibili.com/408198655",
      "fans": 10067,
      "official": "",
      "sign": "FENCING LAB",
      "duration": 299,
      "pages": [
        "奥运金牌榜"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/ade3942ac2f31d8af71bc3e7b6c608ca762ca0af.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 28237,
      "pubdate": "2021-12-10",
      "reason": "FENCING LAB：中国击剑队 5 个奥运夺冠的超燃瞬间。看看最顶尖的剑手在关键一剑时是什么样子。",
      "think": "冠军在落后的时候是怎么调整心态的？你比赛落后时会怎么做？",
      "caution": "非官方认证账号，长期专注击剑的原创频道。",
      "quiz": [
        {
          "type": "judge",
          "q": "中国击剑运动员在奥运会上拿过金牌。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "比如 1984 年栾菊杰获得女子花剑金牌，是中国击剑的第一枚奥运金牌。"
        }
      ]
    },
    "BV1Jz411e7xE": {
      "id": "BV1Jz411e7xE",
      "title": "击剑百科27：击剑史上的“著名”误判们",
      "url": "https://www.bilibili.com/video/BV1Jz411e7xE",
      "channel": "FENCINGLAB",
      "mid": 408198655,
      "channelUrl": "https://space.bilibili.com/408198655",
      "fans": 10067,
      "official": "",
      "sign": "FENCING LAB",
      "duration": 235,
      "pages": [
        "击剑百科27：击剑史上的“著名”误判们"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/ee59aec4f7359b76a0b5684ae57dec63a77650aa.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 5936,
      "pubdate": "2020-06-19",
      "reason": "FENCING LAB：击剑史上那些「著名误判」。正因为人眼会看错，才发明了电子裁判器、慢镜头回放——科技让比赛更公平。",
      "think": "如果让 AI 当击剑裁判，它需要「看」到哪些信息？会不会也出错？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "击剑比赛里，用来判断谁先刺中的设备是什么？",
          "options": [
            "电子裁判器（刺中会亮灯）",
            "秒表",
            "温度计"
          ],
          "answer": 0,
          "explain": "剑尖和比赛服连着电路，刺中有效部位就会亮灯，比人眼准得多。"
        }
      ]
    },
    "BV18wxY63Erp": {
      "id": "BV18wxY63Erp",
      "title": "网络热传生物鉴定 第65期",
      "url": "https://www.bilibili.com/video/BV18wxY63Erp",
      "channel": "无穷小亮的科普日常",
      "mid": 14804670,
      "channelUrl": "https://space.bilibili.com/14804670",
      "fans": 10784298,
      "official": "bilibili 2022百大UP主、科普作家张辰亮",
      "sign": "发一些科普工作中的有趣小事",
      "duration": 557,
      "pages": [
        "网络热传生物鉴定 第65期"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/cc1268369b56f9007ae8cfc366742a3f0b4b03cc.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 5766283,
      "pubdate": "2026-11-03",
      "reason": "无穷小亮（国家动物博物馆科普人）鉴定网上热传的奇怪生物，讲得好笑又严谨。",
      "think": "网上的「神奇动物」视频，有哪些是真的、哪些是假的？小亮是怎么判断的？",
      "caution": "少数生物外形可能有点吓人。",
      "quiz": [
        {
          "type": "judge",
          "q": "网上很多「神奇生物」视频，可能是认错了物种，甚至是假的。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "所以需要像小亮这样的专家，用科学知识来鉴定。"
        }
      ]
    },
    "BV1nb4y1f7p6": {
      "id": "BV1nb4y1f7p6",
      "title": "来国家动物博物馆，别错过这几件展品！馆长亲自讲解",
      "url": "https://www.bilibili.com/video/BV1nb4y1f7p6",
      "channel": "中国国家地理",
      "mid": 2000819931,
      "channelUrl": "https://space.bilibili.com/2000819931",
      "fans": 6340050,
      "official": "《中国国家地理》杂志社官方账号",
      "sign": "让“想当科学家”重新变成大家的梦想丨商务合作请联系：rmt@cng.com.cn",
      "duration": 682,
      "pages": [
        "博物馆第二集横版"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/4bdeaad2026e112b8f4e3993cdcbb874486e517a.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 1640709,
      "pubdate": "2021-05-13",
      "reason": "中国国家地理官方：国家动物博物馆馆长亲自讲解，别错过的几件镇馆展品。",
      "think": "你最想去看哪件展品？下次去北京可以列进计划。",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "博物馆里的动物标本可以帮助科学家研究动物。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "标本能长期保存，科学家可以反复测量、比较，研究动物的身体和演化。"
        }
      ]
    },
    "BV1XQ4P6MEEx": {
      "id": "BV1XQ4P6MEEx",
      "title": "焚风中的昆虫，竟能享受甜品夜市？",
      "url": "https://www.bilibili.com/video/BV1XQ4P6MEEx",
      "channel": "中国国家地理",
      "mid": 2000819931,
      "channelUrl": "https://space.bilibili.com/2000819931",
      "fans": 6340050,
      "official": "《中国国家地理》杂志社官方账号",
      "sign": "让“想当科学家”重新变成大家的梦想丨商务合作请联系：rmt@cng.com.cn",
      "duration": 284,
      "pages": [
        "焚风中的昆虫，竟能享受甜品夜市？"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/f0511c0b5d44025af624fc61c4d4eb54654765be.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 23747,
      "pubdate": "2026-11-03",
      "reason": "中国国家地理官方：吹着热风的山谷里，昆虫们竟然有自己的「甜品夜市」。5 分钟。",
      "think": "昆虫为什么要在晚上出来吃东西？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "昆虫有几条腿？",
          "options": [
            "6 条",
            "8 条",
            "4 条"
          ],
          "answer": 0,
          "explain": "昆虫有 6 条腿；蜘蛛有 8 条腿，所以蜘蛛不是昆虫——法布尔的《昆虫记》里也写到过蜘蛛哦。"
        }
      ]
    },
    "BV1Za4u6xE46": {
      "id": "BV1Za4u6xE46",
      "title": "【我是不白吃】1101 没有这种小虫子，十三香可能要变十二香了！",
      "url": "https://www.bilibili.com/video/BV1Za4u6xE46",
      "channel": "我是不白吃",
      "mid": 451296298,
      "channelUrl": "https://space.bilibili.com/451296298",
      "fans": 2129856,
      "official": "我是不白吃官方账号",
      "sign": "地道真美食，好吃又会吃，就是不白吃～ 短视频商务合作：bubaichi88",
      "duration": 60,
      "pages": [
        "【我是不白吃】1101 没有这种小虫子，十三香可能要变十二香了！"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/536f8ce9059007860c4d92d98c59e112bd88b06c.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 504388,
      "pubdate": "2026-11-05",
      "reason": "我是不白吃官方动画：没有这种小虫子，十三香就要变十二香了！1 分钟讲一种昆虫和食物的关系。",
      "think": "你还知道哪些和昆虫有关的食物？（提示：蜂蜜）",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "很多植物要靠昆虫帮忙传粉，才能结出果实和种子。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "蜜蜂、蝴蝶等昆虫在花间飞来飞去，把花粉带到别的花上。"
        }
      ]
    },
    "BV1Nk346UE6G": {
      "id": "BV1Nk346UE6G",
      "title": "国家自然博物馆里的霸王龙真不简单！",
      "url": "https://www.bilibili.com/video/BV1Nk346UE6G",
      "channel": "江氏小盗龙",
      "mid": 10613291,
      "channelUrl": "https://space.bilibili.com/10613291",
      "fans": 24825,
      "official": "作家江泓官方账号",
      "sign": "古生物科普作家，军事科普作家，考古工作者，自媒体。新浪微博：江氏小盗龙",
      "duration": 87,
      "pages": [
        "国家自然博物馆里的霸王龙真不简单！"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/e5013601e201bc935d5df2b1f505a11abd813303.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 3704,
      "pubdate": "2026-07-30",
      "reason": "古生物作家江氏小盗龙：国家自然博物馆里的霸王龙，到底厉害在哪？1 分半。",
      "think": "霸王龙的手臂为什么那么短？说说你的猜想。",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "霸王龙是一种吃肉的恐龙。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "霸王龙有巨大的头和锋利的牙齿，是著名的肉食恐龙。"
        }
      ]
    },
    "BV1qfxB6qEjD": {
      "id": "BV1qfxB6qEjD",
      "title": "【鬼谷闲谈】沧龙：问君能有几多愁，恰似鳞龙入海流",
      "url": "https://www.bilibili.com/video/BV1qfxB6qEjD",
      "channel": "芳斯塔芙",
      "mid": 72270557,
      "channelUrl": "https://space.bilibili.com/72270557",
      "fans": 5023720,
      "official": "2025百大UP主、2025年度最佳栏目奖UP主、中国科学院大学生物学博士",
      "sign": "芳斯塔芙&鬼谷藏龙 为您带来fun stuff；商务微信：Fun_Ghost（备注品牌）",
      "duration": 1106,
      "pages": [
        "【鬼谷闲谈】沧龙：问君能有几多愁，恰似鳞龙入海流"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/c7cb0238f06c0592a32d5dbf7f5d383f255f25e2.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 2251109,
      "pubdate": "2026-10-31",
      "reason": "芳斯塔芙（中科院生物学博士）讲海洋霸主沧龙的演化故事。古生物讲得系统又有趣。",
      "think": "沧龙的祖先其实生活在陆地上。动物为什么会从陆地「搬回」海里？",
      "caution": "18 分钟，可以分两次看。",
      "quiz": [
        {
          "type": "judge",
          "q": "沧龙是一种恐龙。",
          "options": [
            "对",
            "错"
          ],
          "answer": 1,
          "explain": "沧龙是生活在海里的大型爬行动物，和恐龙生活在同一时代，但它不是恐龙。"
        }
      ]
    },
    "BV17Px16tESS": {
      "id": "BV17Px16tESS",
      "title": "这条分界线，正在制造中国最年轻的陆地",
      "url": "https://www.bilibili.com/video/BV17Px16tESS",
      "channel": "中国国家地理",
      "mid": 2000819931,
      "channelUrl": "https://space.bilibili.com/2000819931",
      "fans": 6340050,
      "official": "《中国国家地理》杂志社官方账号",
      "sign": "让“想当科学家”重新变成大家的梦想丨商务合作请联系：rmt@cng.com.cn",
      "duration": 190,
      "pages": [
        "这条分界线，正在制造中国最年轻的陆地"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/9f8242992dbbd28e174f2f7f789e0d0b7a95fde4.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 56720,
      "pubdate": "2026-11-01",
      "reason": "中国国家地理官方：黄河入海口正在「制造」中国最年轻的陆地。3 分钟，看地球也在长大。",
      "think": "黄河里的泥沙是从哪里来的？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "黄河入海口的新陆地，主要是由什么堆起来的？",
          "options": [
            "河水带来的泥沙",
            "火山喷发",
            "人造的垃圾"
          ],
          "answer": 0,
          "explain": "黄河从黄土高原带来大量泥沙，在入海口慢慢堆积，形成新的陆地。"
        }
      ]
    },
    "BV1nb4e6vEPK": {
      "id": "BV1nb4e6vEPK",
      "title": "精品文物簿｜独具匠心的四羊方尊",
      "url": "https://www.bilibili.com/video/BV1nb4e6vEPK",
      "channel": "国家博物馆",
      "mid": 668633019,
      "channelUrl": "https://space.bilibili.com/668633019",
      "fans": 1402733,
      "official": "国家博物馆官方账号",
      "sign": "欢迎关注国家博物馆官方账号~",
      "duration": 150,
      "pages": [
        "精品文物簿｜独具匠心的四羊方尊"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/ba184c48c829b035b52def32a9f3cb53de719673.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 1711,
      "pubdate": "2026-11-06",
      "reason": "国家博物馆官方：3000 多年前的四羊方尊，四只羊是怎么「长」在青铜器上的？2 分半。",
      "think": "古人没有机器，是怎么做出这么复杂的青铜器的？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "四羊方尊是用什么材料做的？",
          "options": [
            "青铜",
            "塑料",
            "玻璃"
          ],
          "answer": 0,
          "explain": "四羊方尊是 3000 多年前商朝的青铜器，现在收藏在国家博物馆。"
        }
      ]
    },
    "BV1thxP6ZEWp": {
      "id": "BV1thxP6ZEWp",
      "title": "精品文物簿｜玉人：窥见殷商面容",
      "url": "https://www.bilibili.com/video/BV1thxP6ZEWp",
      "channel": "国家博物馆",
      "mid": 668633019,
      "channelUrl": "https://space.bilibili.com/668633019",
      "fans": 1402733,
      "official": "国家博物馆官方账号",
      "sign": "欢迎关注国家博物馆官方账号~",
      "duration": 117,
      "pages": [
        "精品文物簿｜玉人：窥见殷商面容"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/a322f8174f355f4f1857aff41d444c0c92d54b9d.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 2197,
      "pubdate": "2026-10-30",
      "reason": "国家博物馆官方：一件商朝的玉人，让我们看到了 3000 年前人的样子。2 分钟。",
      "think": "如果 3000 年后的人挖到你的一件东西，你希望是什么？",
      "caution": "",
      "quiz": [
        {
          "type": "choice",
          "q": "视频里的这件玉人，来自哪个朝代？",
          "options": [
            "商朝",
            "清朝",
            "唐朝"
          ],
          "answer": 0,
          "explain": "商朝距今大约 3000 多年，那时的人已经会精细地雕刻玉器了。"
        }
      ]
    },
    "BV1XFx56fE3M": {
      "id": "BV1XFx56fE3M",
      "title": "错金银云纹犀牛尊，195件国宝番外篇",
      "url": "https://www.bilibili.com/video/BV1XFx56fE3M",
      "channel": "讲解员河森堡",
      "mid": 483884702,
      "channelUrl": "https://space.bilibili.com/483884702",
      "fans": 263904,
      "official": "国家博物馆讲解员河森堡",
      "sign": "为世间万物提供博物馆文物级的讲解",
      "duration": 579,
      "pages": [
        "错金银云纹犀牛尊，195件国宝番外篇"
      ],
      "cover": "https://i1.hdslb.com/bfs/archive/fab0fc467633560cb8adb4b3cea3a140fcc38707.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 20084,
      "pubdate": "2026-10-28",
      "reason": "国博讲解员河森堡：错金银云纹犀牛尊——古人眼中的犀牛长什么样？",
      "think": "古人为什么要把动物做成酒器？",
      "caution": "",
      "quiz": [
        {
          "type": "judge",
          "q": "错金银云纹犀牛尊，是一件做成犀牛样子的古代青铜器。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "它身上镶着金银做的花纹，是汉代的国宝级文物。"
        }
      ]
    },
    "BV1eE411R7uX": {
      "id": "BV1eE411R7uX",
      "title": "击剑百科17-国庆特别篇：《中国击剑史》",
      "url": "https://www.bilibili.com/video/BV1eE411R7uX",
      "channel": "FENCINGLAB",
      "mid": 408198655,
      "channelUrl": "https://space.bilibili.com/408198655",
      "fans": 10067,
      "official": "",
      "sign": "FENCING LAB",
      "duration": 428,
      "pages": [
        "击剑百科国庆特别篇：《中国击剑史》(和谐版)"
      ],
      "cover": "https://i0.hdslb.com/bfs/archive/0381108e6e57405a5ea6712c6b4597eafee6df83.jpg@480w_270h_1c.webp",
      "copyright": 1,
      "views": 3547,
      "pubdate": "2019-09-29",
      "reason": "FENCING LAB：中国击剑史。中国古代就有剑术，现代击剑又是怎么来到中国的？",
      "think": "中国古代的剑和你现在用的剑，有什么不一样？",
      "caution": "非官方认证账号，长期专注击剑的原创频道。",
      "quiz": [
        {
          "type": "judge",
          "q": "现代击剑运动最早是在欧洲发展起来的。",
          "options": [
            "对",
            "错"
          ],
          "answer": 0,
          "explain": "现代击剑起源于欧洲，后来传到世界各地，也传到了中国。"
        }
      ]
    },
    "BV1GGxX6KErM": {
      "id": "BV1GGxX6KErM",
      "title": "“思想者” 究竟在思考什么？【TED-Ed】",
      "url": "https://www.bilibili.com/video/BV1GGxX6KErM",
      "channel": "TED官方",
      "mid": 1954415159,
      "channelUrl": "https://space.bilibili.com/1954415159",
      "fans": 1306453,
      "official": "TED官方账号",
      "sign": "官方原版视频，进阶英语，拓宽眼界",
      "duration": 336,
      "pages": [
        "“思想者” 究竟在思考什么？【TED-Ed】"
      ],
      "cover": "https://i2.hdslb.com/bfs/archive/efb6494b42df479e6291112b46c19a2869ac85bc.jpg@480w_270h_1c.webp",
      "copyright": 3,
      "views": 2506,
      "pubdate": "2026-11-12",
      "reason": "TED 官方 TED-Ed 动画：罗丹的雕塑《思想者》到底在思考什么？英文原声，看艺术背后的故事。",
      "think": "如果给《思想者》配一句台词，你觉得他在想什么？",
      "caution": "英文原声，中文字幕。",
      "english": true,
      "quiz": [
        {
          "type": "choice",
          "q": "雕塑《思想者》的作者是谁？",
          "options": [
            "罗丹",
            "达·芬奇",
            "毕加索"
          ],
          "answer": 0,
          "explain": "《思想者》是法国雕塑家罗丹的作品。"
        }
      ]
    }
  },
  "rejected": [
    {
      "id": "BV1c8411Y765",
      "who": "Kurzgesagt-科普",
      "why": "账号简介自述「非官方号，只进行非盈利性的翻译搬运」，属于搬运，不收录。Kurzgesagt 目前没找到官方 B 站号。",
      "verified": true
    },
    {
      "id": "BV1rS411c7Rj",
      "who": "TED口语官方",
      "why": "名字带「官方」但没有认证，简介是背单词课程引流（「1 天搞定 6000 单词」）。真正的 TED 官方账号是「TED官方」（已认证）。",
      "verified": true
    },
    {
      "id": "BV1kHdrYNE3q",
      "who": "青少年AI",
      "why": "标题借用「麻省理工学院」名义，但账号只有 44 个粉丝、无认证、无简介，来源不明。",
      "verified": true
    },
    {
      "id": "BV1Da4y1F7Aw",
      "who": "匹克球学院",
      "why": "粉丝 3 千，简介引导加微信群，内容只是历史介绍。",
      "verified": true
    },
    {
      "id": "BV14qxK6aEUs",
      "who": "克劳德动画科普",
      "why": "粉丝不到 1 万、无认证；「一个视频看懂 X」「N 分钟动画让你读懂」的模板化标题，疑似批量生成内容，按规则不收录（仅凭标题和频道判断，未逐帧观看）。",
      "verified": true
    },
    {
      "id": "BV1tE411Q74p",
      "who": "大谷的游戏创作小屋",
      "why": "OpenAI「AI 捉迷藏」的转载（稿件标为转载），内容很好，但优先原创：用卡洛 Calo 的原创「大笨蛋学走路」讲同一个道理（强化学习）。",
      "verified": true
    },
    {
      "id": "BV1pj411R7Jv",
      "who": "甲子光年",
      "why": "官方媒体号，但讲的是「AI 智能体产业前景」，面向成年人。",
      "verified": true
    },
    {
      "id": "BV1FT41127Qg",
      "who": "中科院小青年",
      "why": "简介里是 YouTube 链接，属于搬运；粉丝不到 900。",
      "verified": true
    },
    {
      "id": "BV1Ai4y1c7ZQ",
      "who": "冷科普",
      "why": "认证科普 UP 主，但「百米大坝抛篮球」的画面出自 Veritasium 原片。同一主题优先选原作者的官方账号：换成 Veritasium 真理元素官方的马格努斯效应视频。",
      "verified": true
    },
    {
      "id": "BV1Ux411j7ri",
      "who": "3Blue1Brown",
      "why": "官方好视频（梯度下降），但需要初中函数知识，四年级太难，留到以后。",
      "verified": true
    },
    {
      "id": "BV1DK411H73K",
      "who": "FENCINGLAB",
      "why": "「5 分钟了解击剑规则」：孩子已经练了 4 年，规则已熟，换成同频道的击剑历史。",
      "verified": true
    },
    {
      "id": "BV1nH4y1w7s6",
      "who": "武协小祥",
      "why": "3 分钟匹克球规则介绍，孩子已经在打，换成讲旋转物理的 Veritasium 官方视频。",
      "verified": true
    },
    {
      "id": "BV1GP4y1F7tT",
      "who": "中国国家地理",
      "why": "官方账号、质量很好，但 33 分钟太长，不符合「看完就停」，放进候补。",
      "verified": true
    },
    {
      "id": "BV12J411X7tY",
      "who": "大龙编程",
      "why": "免费入门课本身可以，但同一账号在推「限时特惠」的付费课程，属于卖课引流，不收录。",
      "verified": true
    },
    {
      "id": "BV1AXpc6KEMc",
      "who": "Kurzgesagt-科普",
      "why": "「人工智能越过可怕的界线」：搬运号，而且标题制造恐慌，不适合 9 岁。",
      "verified": true
    },
    {
      "id": "BV1468g6DEWs",
      "who": "AI产品经理入门教程-",
      "why": "标题「全 100 集」「一周带你小白变大神」，典型卖课合集，明确排除。",
      "verified": true
    },
    {
      "id": "BV1Gf4y1y7wc",
      "who": "圣诞节南瓜灯",
      "why": "「1000 集 TED-ED」大合集，属于搬运，也违背「看完就停」，不收录。",
      "verified": true
    },
    {
      "id": "BV1NV411c7hc",
      "who": "TED官方视频大全",
      "why": "名字像官方但没有认证（真正的 TED 官方账号是「TED官方」），把 TED 的内容标为自制稿，属于搬运。同主题选了注明「个人译制」的版本。",
      "verified": true
    },
    {
      "id": "BV1RW411D78Z",
      "who": "好奇的蚂蚁",
      "why": "李飞飞 TED 演讲内容很好，但这是转载，账号只有 3 千多粉丝，而且 18 分钟的演讲对四年级偏枯燥。",
      "verified": true
    },
    {
      "id": "BV1Ei4y1b7Ci",
      "who": "煎蛋脑袋",
      "why": "「图灵测试」动画是转载稿（账号自述在帮另一个频道同步更新），同一关已有 3Blue1Brown 官方的大语言模型讲解。",
      "verified": true
    },
    {
      "id": "BV17W4y1u7Qg",
      "who": "烟花实验室",
      "why": "无认证的「解压」娱乐号，曼妥思可乐火箭有一定安全风险，不想鼓励孩子模仿。",
      "verified": true
    },
    {
      "id": "BV1uciiY1EEg",
      "who": "MarkRober官方",
      "why": "官方、内容很好（机器人决斗），但 35 分钟太长，不符合「看完就停」，放进候补。",
      "verified": true
    }
  ],
  "builtAt": "2026-11-15"
}
