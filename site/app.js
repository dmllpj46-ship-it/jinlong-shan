const RAW = "https://raw.githubusercontent.com/dmllpj46-ship-it/jinlong-shan/main";
const CDN = "https://cdn.jsdelivr.net/gh/dmllpj46-ship-it/jinlong-shan@main";

// 已定妆角色：{ slug, name, en, role, anchor, sheet }
const cast = [
  {
    group: "五百年前 · 太清宫",
    members: [
      {
        slug: "shen-heng",
        name: "沈珩",
        en: "Shen Heng · 道号玄珩",
        role: "太清宫末代大法师 · 燃魂者",
        anchor: "二十七岁，在断龙台点燃自己的魂魄，把赤蟒压回山底。金龙锁的最后一环。",
        sheet: "assets/characters/shen-heng.png",
      },
    ],
  },
  {
    group: "现在 · 山下城",
    members: [
      {
        slug: "chen-mo",
        name: "陈默",
        en: "Chen Mo",
        role: "普通打工人 · 夜里跑滴滴，周末送外卖 · 「昭记」助手",
        anchor: "沈珩的第五世。二十八岁，不记得前世，只想把这个月过完。第一话 P11 起，他被一沓现金雇去山边别墅住下——他还是不知道山为什么在他背后。",
        sheet: "assets/characters/chen-mo.png",
      },
      {
        slug: "su-que",
        name: "苏雀",
        en: "Su Que",
        role: "苏昭的师妹 · 纸替身 · 驱魔人",
        anchor: "锁断那夜她不在山上，所以没被守山印钉住。靠纸替身活到今天，每隔一阵要回昭记取灯油。她这一世的正业是驱魔人：山里漏出来的元能在城里闹出的事，都是她接的单——便利店夜班和纸扎网店「雀记」只是掩护。",
        sheet: "assets/characters/su-que.png",
      },
    ],
  },
  {
    group: "守山 · 山门镇",
    members: [
      {
        slug: "su-zhao",
        name: "苏昭",
        en: "Su Zhao",
        role: "守山人 · 「昭记」店主 · 山边别墅的主人 · 沈珩的师妹与恋人",
        anchor: "被守山印钉在山上五百年。不老，不死，也走不出山门三十里。山成了景区，她就在广场边开了间看风水、卖纸扎的铺子；家在千阶之下的老别墅里，接不肯在人多处开口的私活。她只收现金。",
        sheet: "assets/characters/su-zhao.png",
      },
    ],
  },
  {
    group: "第一话 · 单元配角",
    members: [
      {
        slug: "lao-fu",
        name: "老妇",
        en: "Lao Fu · 未命名",
        role: "昭记的委托人 · 山门镇住户",
        anchor: "五十多岁，常年劳作让她看着像六十开外。女儿读初中，三天没睡也没正常过；她不信医院，先信风水。",
        sheet: "assets/characters/lao-fu.png",
      },
      {
        slug: "nv-hai",
        name: "初中女生",
        en: "Nü Hai · 未命名",
        role: "被元能缠上的孩子",
        anchor: "十四岁，镇中学初二。被赤蟒漏出的气息贴着神经烧了三天，只会重复一句「开门了」。恢复后不记得这三天。",
        sheet: "assets/characters/nv-hai.png",
      },
    ],
  },
  {
    group: "城西货仓 · 元能下游",
    members: [
      {
        slug: "bian-yi-shu",
        name: "变异鼠",
        en: "Bian Yi Shu · 未命名",
        role: "第一话单元怪物 · 吃了元能的老鼠",
        anchor: "在城西货仓吃了三个月的元能，把损耗吃到翻四倍。它不是妖，是一只被能量撑坏了的普通动物：两根过长门齿、咧到颊后的嘴、秃背上一道暗哑金线。一页只允许一只，眼睛绝不发光。P19 首次给正脸，P21 被银剪钉死，P22 身上的元能被抽进玻璃瓶。",
        sheet: "assets/creatures/bian-yi-shu.png",
      },
    ],
  },
  {
    group: "山腹 · 锁下",
    members: [
      {
        slug: "chi-mang",
        name: "赤蟒",
        en: "Chi Mang",
        role: "山腹魔蟒 · 吃地脉者",
        anchor: "五百年前被沈珩以魂为锁压回山底。它不吃人，它吃地脉；人只是它做梦的缝。",
        sheet: "assets/creatures/chi-mang.png",
      },
    ],
  },
  {
    group: "终极形态 · 锁心",
    members: [
      {
        slug: "jin-long",
        name: "金龙",
        en: "Jin Long · 终极形态",
        role: "男主终极形态 · 人化锁",
        anchor: "不是召唤出来的龙。是沈珩/陈默把自己填进锁后，金脉长出的龙身。锁成态四足抓山、嵌回岩层；战时态可腾空作战，但始终由金脉牵回山体，不出金龙山上空。",
        sheet: "assets/characters/jin-long.png",
      },
    ],
  },
];

// 成图后的页面：{ n, ch, slug, title, lines: [[who, say]], note }
const pages = [
  {
    n: 1, ch: "ch00", slug: "p01", title: "潭动",
    lines: [["师父", "退到阶下。"], ["沈珩", "锁断了。"], ["苏昭", "来不及了。"]],
    note: "五百年前的夜。赤蟒只给巨口、锈铁红鳞与一只竖瞳；山下不许出现现代城市灯海。",
  },
  {
    n: 2, ch: "ch00", slug: "p02", title: "第一排",
    lines: [["门人", "砍不动——"], ["苏昭", "别硬接！"], ["沈珩", "散开！走阶下！"]],
    note: "每格只讲一个动作：横扫、溅火星、架首、回头。苏昭全页纯黑发，没有右鬓白发。",
  },
  {
    n: 3, ch: "ch00", slug: "p03", title: "师父",
    lines: [["师父", "镇住它。"], ["师父（残音）", "珩儿，锁在你身上。"], ["沈珩", "师父——！"], ["苏昭", "师兄！"]],
    note: "师父不露正脸，只给背影、手、宽袖与铜铃；被吞用金尘与碎符表现，不给血肉。",
  },
  {
    n: 4, ch: "ch00", slug: "p04", title: "燃魂",
    lines: [["苏昭", "你答应过我。"], ["沈珩", "昭昭，替我看住山。"], ["苏昭", "沈珩——"]],
    note: "底部通栏大 splash 是本页落点：魂焰自胸口烧起，沿手臂爬到指尖，光柱冲开云层。",
  },
  {
    n: 5, ch: "ch00", slug: "p05", title: "金龙",
    lines: [["沈珩（心声）", "这一次，换我守。"], ["苏昭", "师兄——！"]],
    note: "金龙战时态：可腾空，但下半身始终由数十道金脉牵回山体，不出金龙山上空；每格只有一个龙头。",
  },
  {
    n: 6, ch: "ch00", slug: "p06", title: "九裂",
    lines: [["沈珩（残音）", "九块……别都等我。"], ["苏昭（远处）", "不——"]],
    note: "全篇最大开。自爆只给光、影、金雨与山体剪影，是暴力尺度的上限；九块碎片可数，最大的一块落向山脚村落。",
  },
  {
    n: 7, ch: "ch00", slug: "p07", title: "封印",
    lines: [["苏昭", "封住它。"], ["门人", "师姐，你的印——"], ["苏昭", "我知道。"]],
    note: "赤蟒只露首与一截断身；守山印亮在胸口，血从嘴角走；引魂灯全页熄灭。",
  },
  {
    n: 8, ch: "ch00", slug: "p08", title: "灯",
    lines: [["门人", "师姐，下山吧。"], ["苏昭", "我走不了。"], ["苏昭", "我等你。"]],
    note: "第 4 格是时间叠化，不是两个空间：坐姿与灯位与第 3 格一致，白发只在现代那一格出现。",
  },
  {
    n: 1, ch: "ch01", slug: "p01", title: "昭记",
    lines: [["苏昭", "往南走，别上山。"], ["游客", "姑娘你咋晓得我属马？"], ["苏昭（心声）", "第五个了。"]],
    note: "现代线开场。顶部通栏负责「游人如鲫」的密度，人群要小要糊；招牌、导览牌、黄历全部留白。",
  },
  {
    n: 2, ch: "ch01", slug: "p02", title: "红绳",
    lines: [["陈默", "您的餐。"], ["苏昭", "……谢谢。"], ["陈默（心声）", "……我认识她吗？"]],
    note: "第 4 格是本页钩子：他左腕的旧红绳与灯柄上的朱砂绳在同一条横带里几乎相触。保温箱无 logo。",
  },
  {
    n: 3, ch: "ch01", slug: "p03", title: "旧画像",
    lines: [["苏昭（心声）", "骨相、眉眼、下颌……是他。"], ["苏昭（心声）", "又不是他。"], ["苏昭", "这一世……别太快。"]],
    note: "全页只三格，要安静。师兄只以画轴上的虚焦旧画像出现，不给清晰正脸，不与陈默同框。",
  },
  {
    n: 4, ch: "ch01", slug: "p04", title: "委托",
    lines: [["老妇", "姑娘，你给看看……我家丫头不对劲。"], ["老妇", "翻来覆去就那一句——『开门了，开门了。』"], ["苏昭", "带我去。"]],
    note: "现代案件开场。这一页不许有任何超自然元素：没有蟒、没有雾、没有发光的眼睛。老妇的签名症状是重复同一句话。",
  },
  {
    n: 5, ch: "ch01", slug: "p05", title: "墙角",
    lines: [["老妇", "三天了……三天没合眼。"], ["女生", "开门了。开门了。"], ["苏昭", "别碰她。"]],
    note: "右列满高主格是女孩；左列三格依次是楼道、空屋细节、苏昭把灯往前递。不画血、不画翻白眼、不画抽搐。",
  },
  {
    n: 6, ch: "ch01", slug: "p06", title: "元能",
    lines: [["苏昭（心声）", "不是撞客，不是脏东西。"], ["苏昭（心声）", "是元能——贴着她的神经烧。"], ["苏昭", "婶子，把窗户关上。听见什么，都别开门。"]],
    note: "蟒影只在苏昭的视野里：一个头 + 一截长颈，半透明金雾，无盘身、无第二头。老妇看不见它。",
  },
  {
    n: 7, ch: "ch01", slug: "p07", title: "一瓶",
    lines: [["苏昭", "咬住。"], ["女生", "妈。"], ["老妇", "姑娘，俺给你磕一个——"], ["苏昭", "三十。"], ["苏昭（心声）", "封在潭里的东西，开始往外递手了。"]],
    note: "施法只有两指、一缕丝、一只瓶：不画光柱、不画法阵、不画咒语字。瓶中之蛇只给一个极小的头加一圈。",
  },
  {
    n: 8, ch: "ch01", slug: "p08", title: "来电",
    lines: [["苏昭（电话）", "是我。昭记。"], ["陈默", "……你哪来的号码？"], ["苏昭（电话）", "你送过一趟外卖。"], ["苏昭（电话）", "明晚，山边。我在门口等你。"]],
    note: "全页只有陈默一个人，苏昭不给任何画面，只是声音和山腰那一粒灯。城市灯光是冷青与钠黄，饱和金为零。",
  },
  {
    n: 9, ch: "ch01", slug: "p09", title: "山边",
    lines: [["苏昭", "来了。"], ["陈默", "……你住这儿？"], ["陈默（心声）", "看风水的，住得起山边的房子。"], ["苏昭（心声）", "五百年，我只走得出去三十里。"]],
    note: "右列满高主格负责尺度差：山 > 房 > 人，陈默不许高过一扇窗。别墅外观以 assets/locations/bie-shu.png 为准。",
  },
  {
    n: 10, ch: "ch01", slug: "p10", title: "条件",
    lines: [["苏昭", "我要一个助手。"], ["苏昭", "看铺子、搬纸扎、夜里守灯。月薪翻倍。"], ["陈默", "翻倍？……我一天都没干过。"], ["苏昭", "还有一个条件——你要和我一起住。"]],
    note: "两人之间始终隔着一张长桌的空桌面，这页的张力是距离。纸扎只画竹骨加白纸团，不画骸骨与人脸。",
  },
  {
    n: 11, ch: "ch01", slug: "p11", title: "一沓",
    lines: [["陈默", "我先问一句——这是不是那种……要交押金的？"], ["苏昭", "我不转账。数一下。"], ["陈默", "……几点上班。"], ["苏昭", "明早六点。今晚就住下。"], ["陈默（心声）", "先给钱的骗子，我认。"]],
    note: "钞票是一沓皮筋捆的无字纸钞：不画头像、数字、面额与真实人民币纹样。苏昭全程不笑，陈默的怀疑只用后退、握钥匙、扫视三个动作。",
  },
  {
    n: 12, ch: "ch01", slug: "p12", title: "到访",
    lines: [["苏雀", "老古董，我有个单子。"], ["苏昭", "油在桌上。"], ["苏雀", "……你家的新灯芯？"], ["苏昭", "助手。"], ["陈默", "早。"]],
    note: "三格：上带斜切双格 / 底通栏主格。苏昭的「不意外」全画在动作里——头不抬，油壶和第三只杯子却已经推好。三人只在主格同框；纸雀是死折纸，不许动、不许发光。",
  },
  {
    n: 13, ch: "ch01", slug: "p13", title: "驱魔人",
    lines: [["苏雀", "城西的仓。三个月，损耗翻四倍。"], ["苏昭", "多大。"], ["苏雀", "猫那么大。"], ["苏雀", "我接的活，我自己驱魔、自己收钱。这行我干了五年。"], ["苏昭", "一只老鼠。"], ["苏雀", "吃了元能的老鼠。"]],
    note: "顶通栏主格摊满货仓照片：爪痕、拖痕、撞弯的货架，加一个无细节黑剪影。本页的变异鼠只以痕迹与剪影出现——它到 P19 才拿到正脸；一页不许两只，不许发光。元能只存在于台词里。",
  },
  {
    n: 14, ch: "ch01", slug: "p14", title: "借人",
    lines: [["苏昭", "不去。"], ["苏雀", "行。那我自己去。"], ["苏昭", "我不去。他带你去。"], ["陈默", "……啊？"], ["苏雀", "行啊，老古董。"]],
    note: "右列满高主格是落点：苏昭起身把陈默转向苏雀那侧，脸上没有笑。苏昭一个字也不解释她为什么去不了——不许画锁、印、结界。",
  },
  {
    n: 15, ch: "ch01", slug: "p15", title: "第五个",
    lines: [["苏雀（心声）", "眉骨。下颌。"], ["陈默", "……我脸上有东西？"], ["苏雀", "你叫啥。"], ["苏雀（心声）", "……第五个。"], ["陈默", "陈默。"], ["陈默（心声）", "她看我那一眼，像在认一个别人。"]],
    note: "本页唯一的「认出来」全靠苏雀第 3 格把笑收干净，不闪白、不瞪眼、不落泪。第 2 格闪回是记忆不是特效：月白弟子袍只给背影，虚焦压淡一档，灯不亮，不给正脸。",
  },
  {
    n: 16, ch: "ch01", slug: "p16", title: "下山",
    lines: [["苏雀", "地址。十五分钟后门口。"], ["苏昭", "瓶子别弄丢。"], ["苏雀", "跟上。"], ["陈默", "……哦。"], ["陈默（心声）", "那个仓在哪儿我都不知道。"]],
    note: "收束页。底通栏俯拍主格负责尺度差：山脊占上半页，两辆电动车小得像虫。纸条空白无字，玻璃瓶看上去是空的（P07 那圈元能不可见），全页只别墅那一盏灯亮着。",
  },
  {
    n: 17, ch: "ch01", slug: "p17", title: "封仓",
    lines: [["苏雀", "城西的仓。半夜才敢开门。"], ["陈默", "……为什么是半夜。"], ["老板（画外）", "……别拍照。"], ["苏雀", "我不拍照。我收钱。"], ["苏雀", "这行不许挂牌子。挂了就没饭吃。"], ["陈默（心声）", "她到底干什么工作。"]],
    note: "三格：左列满高主格 / 右列斜切两格。主格靠尺度差说话——波纹铁皮墙占满上部，两人在门底小得像两粒。老板是未定妆角色，只给背影、肩与一只手；他手上不得出现红绳，那是陈默的标志物。",
  },
  {
    n: 18, ch: "ch01", slug: "p18", title: "搜寻",
    lines: [["苏雀", "从里面顶出来的。"], ["苏雀", "它拖东西吃。"], ["陈默", "……老鼠会拖东西吃。"], ["陈默", "这儿没信号。"], ["苏雀", "有信号我就不会带你了。"], ["陈默（心声）", "我连它长什么样都不知道。"]],
    note: "三格：右列满高主格 / 左列斜切两格。光源只有苏雀手里那支黑色手电和门缝底下一条钠黄——她绝不提灯，仓里的笼式吊灯是灭的。痕迹要读得出来：立柱从里面顶弯、地面一道拖痕、墙脚五道爪痕。",
  },
  {
    n: 19, ch: "ch01", slug: "p19", title: "鼠出",
    lines: [["苏雀", "别动。"], ["陈默", "啊——！"], ["苏雀", "第五个，闭眼。"]],
    note: "三格：顶部斜切两格 / 底通栏主格。变异鼠第一次给正脸——一页只允许一只、一条连续脊柱、头尾不交叠；眼睛是稻草色小圆眼、普通圆瞳，绝不发光。陈默的恐惧落在瞳孔收成两点、嘴张着没出声、手电脱手。苏雀在 splash 里只进一条手臂和半把银剪。",
  },
  {
    n: 20, ch: "ch01", slug: "p20", title: "施法",
    lines: [["苏雀", "按住它。"], ["苏雀", "老古董的规矩——先听声，再动手。"], ["陈默", "……它、它眼睛——"], ["苏雀", "别看它的眼。看我。"]],
    note: "三格：顶通栏主格 / 底部两格。苏雀的法术是手艺不是特效：银剪、一串空白符纸、一口旧铜铃、钥匙串——没有法阵、没有光盾、没有符文、没有咒语字，符纸一律空白。",
  },
  {
    n: 21, ch: "ch01", slug: "p21", title: "击杀",
    lines: [["音效", "咔。"], ["苏雀", "……死了。"], ["陈默（心声）", "它……就这么死了。"], ["苏雀", "把手电给我。"]],
    note: "三条全宽横带（18% / 52% / 30%），第一条带线斜切、无竖格线——本话最大单格。银剪全页只有一把，在她两只手里，腰侧鞘必须是空的。暴力尺度到下颌一处穿刺加一小摊血为止，无断体无喷血。陈默整页缺席。",
  },
  {
    n: 22, ch: "ch01", slug: "p22", title: "入罐",
    lines: [["苏雀", "它吃了不该吃的东西。"], ["陈默", "那、那是……"], ["苏雀（画外）", "手别抖。"], ["陈默", "……瓶子里有东西在动。"], ["苏雀", "它不动。它被关着才不动。"]],
    note: "三格：顶部斜切两格 / 底通栏主格。抽取是一根丝、三粒金屑，入瓶蜷成一小圈、圈上只有一个极小的头。罐子就是 P07 / P16 那只撕了标签的玻璃瓶，全页只有一只。地面那圈光斑是甩出去的手电——本页没有任何提灯。",
  },
  {
    n: 23, ch: "ch01", slug: "p23", title: "元能",
    lines: [["苏雀", "坐。听完再走。"], ["苏雀", "这世上有种东西，叫元能。没人知道它从哪儿来——古书里有，前朝有，昨天城西也有。"], ["苏雀", "人和兽撞上它，运气好的本事变大，运气不好的，就变成刚才那种。"], ["陈默", "……它会不会挑人。"], ["苏雀", "会。"], ["苏雀", "所以你别把它弄丢。"]],
    note: "全话第一次把元能讲成常识，也是读者第一次听见业界口径——山下药材行和驱魔人都不知道源头是赤蟒。收束页三格：顶通栏主格 / 底部两格；主格给到厂房轮廓之外那条山脊，和山腰一粒没灭的灯。苏昭整段不在场，只以那一点光在场。",
  },
  {
    n: 24, ch: "ch01", slug: "p24", title: "回山",
    lines: [["苏雀", "死了。下颌一剪。"], ["苏昭", "进来讲。风口上站着干什么。"], ["陈默（心声）", "这个点……她怎么知道我们回来。"], ["苏雀", "老古董你等着——我讲一遍完整的。"], ["苏昭（画外）", "先喝口水。"]],
    note: "三格：右列满高主格 / 左列斜切两格。全页只有苏昭手里那盏灯亮着——山边的门廊一盏，是这栋房子的锚点。铁门外两个人影小得像两粒，屋后的山比房子大三倍。没有任何元能罐入画，没有任何发光。",
  },
  {
    n: 25, ch: "ch01", slug: "p25", title: "复述",
    lines: [["苏雀", "货架是从里面顶弯的。它先冲他。"], ["苏雀", "一剪。"], ["音效", "咔。"], ["陈默（心声）", "……她比划得比当时准。"], ["苏昭", "他人有没有事。"], ["苏雀（心声）", "……她一句没问老鼠。"]],
    note: "三条全宽横带（18% / 52% / 30%），第一条带线斜切，全页没有竖格线。落点不是打斗复盘，是这两个人在意什么：苏雀拿一根从纸扎骨架上抽的竹篾重演整场，苏昭一句没问那只老鼠。本格没有鼠、没有货仓、没有任何回忆叠影。",
  },
  {
    n: 26, ch: "ch01", slug: "p26", title: "一半",
    lines: [["苏昭", "瓶子是我的。"], ["苏雀", "说好的，一半。"], ["音效", "（金线爬过瓶口的一声极细的响）"], ["陈默（心声）", "它会自己动。"]],
    note: "三格：顶部斜切两格（46% / 54%）/ 底通栏主格（60%）。这一行的账不是钱——瓶是苏昭出的、单是苏雀跑的，所以对半分。两只瓶口之间只留一线空隙，那圈金自己探出一缕爬过去，不是被倒过去的。全页只有这两只瓶参与动作，木架上的备用瓶是虚焦轮廓。",
  },
  {
    n: 27, ch: "ch01", slug: "p27", title: "气",
    lines: [["陈默", "我问个不该问的……你们存这个干嘛。"], ["苏昭", "它是最原始的东西。"], ["苏昭", "人给它起过很多名字。气，是最普通的那个。"], ["苏昭", "会用，就千变万化。"], ["苏雀", "不会用，就变成刚才那种。"], ["陈默（心声）", "刚才那种……"]],
    note: "三格：左列满高主格（54%）/ 右列斜切两格。说理页不许画成讲解板——道理由拿着瓶子的人说。苏昭脸上的金是灯与玻璃的反光，不是特效，瞳心也不是运功状态；瓶里只有一小圈，不外溢。三人各占一格，谁也没串到谁的格子里。",
  },
  {
    n: 28, ch: "ch01", slug: "p28", title: "怪物",
    lines: [["苏昭", "都放下。明天再说。"], ["陈默（心声）", "……我今晚看见的东西，够我问我十年。"], ["音效", "（布料被顶住的一声轻响）"], ["苏雀（心声）", "……那只瓶子，我认得。"], ["苏雀", "……睡吧，老古董。"]],
    note: "本段落收束页。三格：顶通栏主格（48%，带线斜切）/ 底部两格（46% / 54%）。主格从门厅往窗外看：山腹岩缝里只有一缕将熄的暗金线，不发光、不成龙形，山脊上没有任何光点；窗内三个剪影都不给正脸。第 2 格苏昭的内袋里已经有一只一样的瓶，第 3 格苏雀看见了——她一个字没问。这条钩子留给下一段。",
  },
  {
    n: 29, ch: "ch01", slug: "p29", title: "下山",
    lines: [["苏雀", "我要下山了。"], ["苏雀", "他要是少了一根头发——"], ["苏雀", "我回来找你算账，老古董。"], ["苏雀", "还有——"], ["苏雀", "……没有。"], ["苏雀（心声）", "那只瓶子，我回头再问。"], ["苏昭", "知道了。"], ["苏雀（画外）", "你起这么早。"], ["苏昭（心声）", "他睡得不深。山一动他就醒。"]],
    note: "三格：右列满高主格（54%）/ 左列斜切两格。全页唯一一次两个女人正面相对，而她们站在同一道门的两边。白天版门廊那盏灯熄着，全页没有任何点亮的灯；屋后山脊那条亮线是晨光照出来的岩层，不是金脉，也没有灯点。二楼那扇开着的窗是陈默的房间——他在睡，整页没露脸。苏雀手里两只纸雀：指间一只、车把纸袋口一只。",
  },
  {
    n: 30, ch: "ch01", slug: "p30", title: "教你",
    lines: [["陈默", "等、等一下。我先接个单。"], ["苏昭", "从今天起，你不用跑了。"], ["音效", "（手机屏幕熄灭的一声轻响）"], ["陈默", "……你是说，这种东西，是可以学的。"], ["陈默", "现在。在这个有外卖和地铁的时代。"], ["苏昭", "有山的地方就有。"], ["陈默（心声）", "我上个月还在为三块钱的配送费跟人吵架。"]],
    note: "三格：顶部斜切两格（46% / 54%）/ 底通栏 splash 主格。她按灭手机的手和递木棍的手在同一格里，不给人脸。器械口径从这一页开始：只有一根从门后拿的旧木棍——无护手、无剑格、无绑绳，断口是毛的，不许画成剑；断水仍然油布裹着立在墙角，整个培训段不出鞘。本页没有任何发光与金线，元能要到 P31 才第一次进他手里。",
  },
  {
    n: 31, ch: "ch01", slug: "p31", title: "闭门",
    lines: [["苏昭", "水洒了，重来。"], ["陈默（心声）", "第一天。"], ["音效", "（金线断掉的一声极细的响）"], ["陈默（心声）", "第十七夜。"], ["陈默", "……你今天没看着。"], ["苏昭（画外）", "我在屋里听着。"]],
    note: "一个月蒙太奇，三格：顶通栏主格（48%）/ 底部两格（46% / 54%）。时间跨度只用画面说——天只亮一条边、一盏灯加缠布的指节、正午硬光加断成两截的木棍和一碗凝了膜的面，三格的光向、色温、地面干湿必须明显不同。写挨打不写变强：抖的腿、湿透的后背、磨破的指节都在。苏昭只在顶格给侧脸，底右格那个位置是空的。金线只绕出一圈就断——进步要小到需要看清。",
  },
  {
    n: 32, ch: "ch01", slug: "p32", title: "为什么是我",
    lines: [["陈默", "……它听我的。"], ["苏昭", "不是听你。"], ["陈默", "那为什么是我。"], ["苏昭", "你的身体认它。"], ["苏昭", "别人碰一下就要出事的东西，你接得住——天生的元能体质。"], ["苏昭（心声）", "这一句是真的。"], ["苏昭（心声）", "但不是那一句。"]],
    note: "三格：左列满高主格（54%）/ 右列斜切两格。张力不在答案，在她答得太快——快得像早就准备好了一句可以说的。掌心那一圈金线已经稳了，圈上只有一个极小的头；主格里没有任何发光，两人之间那点亮是屋里的灯。全页只屋里那盏灯亮着，山脊上不给光点、山腹不画金线。瞳心不许泛金。",
  },
  {
    n: 33, ch: "ch01", slug: "p33", title: "她没有说的那一句",
    lines: [["苏昭（画外，极远）", "沈珩——！"], ["苏昭（心声）", "九块。散在五百年，散在九个地方。"], ["苏昭（心声）", "我出不去这三十里。"], ["苏昭（心声）", "所以我养了一双能出山的眼睛。"], ["苏昭（心声）", "她连自己在找什么都不知道。"], ["苏昭（心声）", "剩下八块，我一块都还没找着。"], ["苏昭（心声）", "九块凑不齐，这一句我一个字也不会讲。"], ["苏昭（心声）", "灯亮、魂全、印合——然后还要有人去守这把锁。"]],
    note: "全章的底牌页，摊给读者，不摊给陈默。三条全宽横带（18% / 52% / 30%），全页没有竖格线。顶带是五百年前的回忆回声：金龙只给一只前爪与半截脊背嵌进岩层，无头、无整条龙、无翼、不腾空，散出去的是几点拖细尾的冷白光（元神九裂）——没有人、没有赤蟒。中带她一个人，一手握瓶、一手按着左胸口的守山印，看着陈默睡下的方向。底带一张空白山形图上压九枚符纸：一枚发黄卷边、八枚崭新。全页只一只瓶、只出现一次她的脸。陈默与苏雀整页不在场。",
  },
  {
    n: 34, ch: "ch01", slug: "p34", title: "一知半解",
    lines: [["顾客（画外）", "袋子给个热的。"], ["苏雀", "拿好。"], ["苏雀（心声）", "老古董那副样子，我见过。"], ["苏雀（心声）", "她五百年前看一个人的时候，就是这么看的。"], ["苏雀（心声）", "她不是在收徒弟。"], ["苏雀（心声）", "她是在凑一桌人。"], ["苏雀", "……不想了。"], ["苏雀（心声）", "想明白了，我就得跟她一样长大了。"]],
    note: "本段落收束页。三格：顶部斜切两格（46% / 54%）/ 底通栏 splash。她什么都能感觉到一点，就是不肯往下想——这是她拒绝长大的样子，不是她笨。她上夜班也只穿自己那身朱红短夹克，不套工装马甲。从山下城望过去是山的另一侧，所以山脊上什么都没有：不给光点（与 P23 那盏针尖大的灯明确区分）、不给金线。便利店的货架、店招、价签一律留白。苏昭和陈默整页不在场。",
  },
  {
    n: 35, ch: "ch01", slug: "p35", title: "黑森林",
    lines: [["音效", "（沙沙的压缩噪点）"], ["音效", "（画外一声很远的、不像狗的叫）"], ["苏昭（心声）", "再看一遍。"], ["苏昭（心声）", "……三遍。"]],
    note: "新段落开场页。三格：顶部通栏 splash 主格（54%，上、左、右三边出血）/ 底部斜切两格（44% / 56%）。顶格那一格本身就是那段被反复转发的手机视频——抖动的密针叶林、甩成拖影的手电白光、倒了半边的锈铁丝网，中间一个低伏而过分长的黑影穿过两棵树：肩线低过臀线，背脊一道过亮的反光。不画播放条、不画点赞、不画弹幕、不画字幕，死了的三个人不进画面。逃跑那个只给背影和腿，探险者一律不给脸。异兽未定妆，所以只有剪影、反光和一个不像狗的落地姿势，不许给正脸。全页只有苏昭一个人：一只手、一片不可读的亮屏、下半张脸。",
  },
  {
    n: 36, ch: "ch01", slug: "p36", title: "不是狗",
    lines: [["苏昭", "不是狗。"], ["苏昭", "狗不会长成那样。它的肩不会那样落地。"], ["苏昭（心声）", "漏得越来越远了。"]],
    note: "三格：右列满高主格（52%，她的侧脸）/ 左列斜切两格。定性用的全是排除法——她只说它不是什么，永不说它是什么。「漏得越来越远了」这一句是心声，不给任何人听：渗出点每往外挪一次，就是锁往里松了一寸，而这句话不许她告诉苏雀、陈默或任何第三方。第 2 格她把手机屏幕朝下按在桌上。全页只有桌灯亮着，屏幕上没有字。",
  },
  {
    n: 37, ch: "ch01", slug: "p37", title: "我会安排",
    lines: [["音效", "（桌面震动的一声闷响）"], ["苏昭", "嗯。"], ["苏昭", "几个人。"], ["苏昭", "还在不在原处。"], ["苏昭", "……我知道了。"], ["苏昭", "我会安排。"], ["音效", "（挂断）"]],
    note: "三格：顶部斜切两格（46% / 54%）/ 底通栏 splash。一通没有名字的电话——来电者不给画面、不给声音、不给名字，只给桌面那一下震动。她全程只问三件事，报一句「我知道了」，用「我会安排」收掉。「我会安排」是她的收束句，不是承诺：说出口的时候安排早就定好了，而安排的内容永远不写在那句话里。断水仍然油布裹着立在角落，全页只有桌上一处光源。",
  },
  {
    n: 38, ch: "ch01", slug: "p38", title: "叫上来",
    lines: [["苏雀（冲门里喊）", "这么急——死人了？"], ["音效", "（刹车、碎石）"], ["陈默", "……她今天没带吃的。"], ["音效", "（院门外的电瓶车声）"], ["苏昭", "进来。门关上。"]],
    note: "三格：左列满高主格（54%，黄昏的碎石路上苏雀跨在电瓶车上）/ 右列斜切两格（陈默端碗的手、苏昭推过桌面的手）。这一页没有人说出「黑森林」三个字。嘴里没有面包条——陈默读到的是这个细节，不是这件事的分量：他看得见异常，读不出含义。车把纸袋口探出一只新折的白纸雀。苏昭推过去的是一张裁白的空白纸条和一只粗瓷杯。",
  },
  {
    n: 39, ch: "ch01", slug: "p39", title: "龙潭镇，见一个人",
    lines: [["苏昭", "龙潭镇。"], ["苏昭", "你们俩去，见一个人。"], ["苏雀", "什么人。"], ["苏昭", "他找我的时候，自己会说。"], ["陈默", "那我——"], ["苏雀", "多远。"], ["苏昭（画外）", "大巴两个半小时。"], ["陈默（心声）", "我等了一晚上，等到的是这个。"]],
    note: "三格全宽横带（20% / 50% / 30%）：只有第一条格线斜切，本页没有任何竖线；中带是主格，三个人的位置关系全在这一格。任务口径短到不像一句委托：地名 + 「见一个人」 + 一张裁白的空白纸条 + 一沓皮筋捆着的无字纸钞。不画地图、不写人名、不写 deadline，也从不解释她为什么不去。龙潭镇与山腹的恶龙潭是两处地方，这一页不许有任何牵连。带罩的旧台灯是全页唯一光源。",
  },
  {
    n: 40, ch: "ch01", slug: "p40", title: "她猜到了",
    lines: [["苏雀", "黑森林。"], ["苏昭", "我没说黑森林。"], ["苏雀", "网上都在转。死了三个。"], ["陈默（心声）", "……她们是哪一句听懂的。"], ["苏雀", "你要我去看的，就是那段视频。"], ["苏昭", "不是视频。"], ["陈默", "等一下，哪个森林。"]],
    note: "两个区域：一条从顶边 42% 切到左边 34% 的斜线切出一块楔形（苏雀咧嘴，她抢在苏昭前面说出那三个字），剩下的整页是一格大 splash。主格落的不是脸，是手——苏昭要去端茶壶的那只手停在半空，指尖离壶耳一寸，没碰。这是她第一次没握住话头，也是第一次一个字都不解释。苏雀这一世第一次比苏昭先开口，但她脑子里那三件事仍然只是并列的三条，不许她拼成一条线。整页唯一一缕白发属于苏昭。陈默是这张桌子上唯一从头到尾没听懂的人。",
  },
];

const repoUrl = (path) => `${RAW}/${path}`;

function withFallback(img, path) {
  img.dataset.path = path;
  img.dataset.step = "0";
  if (img.dataset.fbBound) return;
  img.dataset.fbBound = "1";
  img.addEventListener("error", () => {
    const current = img.dataset.path;
    const step = Number(img.dataset.step || 0);
    if (step === 0) {
      img.dataset.step = "1";
      img.src = `${CDN}/${current}`;
    } else if (step === 1) {
      img.dataset.step = "2";
      img.src = `../${current}`;
    }
  });
}

function renderCast() {
  const root = document.getElementById("cast-root");
  const grid = document.createElement("div");
  grid.className = "slot-grid";

  cast.forEach((group) => {
    group.members.forEach((m) => {
      const card = document.createElement("article");
      card.className = "slot-card";

      const figure = document.createElement("figure");
      figure.className = "cast-photo";
      const photo = document.createElement("img");
      const thumbPath = m.sheet.replace(/\/([^/]+)\.png$/, "/thumbs/$1.jpg");
      withFallback(photo, thumbPath);
      photo.src = repoUrl(thumbPath);
      photo.alt = `${m.name} 定妆头像`;
      photo.loading = "lazy";
      figure.appendChild(photo);
      figure.addEventListener("click", () => openGallery(castGallery(), castIndex(m.slug)));
      card.appendChild(figure);

      const body = document.createElement("div");
      body.className = "slot-body";

      const era = document.createElement("p");
      era.className = "era";
      era.textContent = group.group;

      const name = document.createElement("h3");
      name.className = "name";
      name.textContent = m.name;

      const en = document.createElement("p");
      en.className = "en";
      en.textContent = m.en;

      const role = document.createElement("p");
      role.className = "role";
      role.textContent = m.role;

      const anchor = document.createElement("p");
      anchor.className = "anchor";
      anchor.textContent = m.anchor;

      body.append(era, name, en, role, anchor);
      card.appendChild(body);
      grid.appendChild(card);
    });
  });

  root.appendChild(grid);
}

function castGallery() {
  return cast.flatMap((group) =>
    group.members.map((m) => ({
      slug: m.slug,
      path: m.sheet,
      alt: `${m.name} 定妆稿`,
      cap: `${m.name} · ${m.en}`,
    }))
  );
}

function castIndex(slug) {
  return castGallery().findIndex((item) => item.slug === slug);
}

const pageCh = (page) => page.ch || "ch01";
const pageLabel = (page) => ({ ch00: "序章", ch02: "第二话" }[pageCh(page)] || "第一话");
const pagePath = (page) => `comic/${pageCh(page)}/${page.slug}.jpg`;

function renderEmptyPages(root) {
  const box = document.createElement("div");
  box.className = "empty-state";
  box.innerHTML = `
    <p class="empty-kicker">Not yet drawn</p>
    <h3>本章尚未开画</h3>
    <p>序章「焚山」八页与第一话四十页已经成图。后面的页面按分镜排版 → 逐页成图 → 统一上字推进，成图后这里会逐页更新。</p>
    <a href="#read">先读第一话 →</a>`;
  root.appendChild(box);
}

function renderPages(rootId, chapter) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const list = pages.filter((page) => pageCh(page) === chapter);
  if (list.length === 0) {
    renderEmptyPages(root);
    return;
  }

  list.forEach((page, index) => {
    const path = pagePath(page);

    const article = document.createElement("article");
    article.className = "page";
    article.id = page.slug;

    const head = document.createElement("header");
    head.className = "page-head";
    head.innerHTML = `
      <span class="page-no">P${page.n}</span>
      <h3 class="page-title"></h3>
      <a class="page-script" target="_blank" rel="noopener">分镜脚本 ↗</a>`;
    head.querySelector(".page-title").textContent = page.title;
    const scriptLink = head.querySelector(".page-script");
    scriptLink.href = `https://github.com/dmllpj46-ship-it/jinlong-shan/blob/main/comic/${pageCh(page)}/${page.slug}.md`;
    article.appendChild(head);

    const figure = document.createElement("figure");
    figure.className = "page-figure";
    const img = document.createElement("img");
    withFallback(img, path);
    img.src = repoUrl(path);
    img.alt = `${pageLabel(page)} ${page.title}，第 ${page.n} 页`;
    img.loading = index === 0 ? "eager" : "lazy";
    figure.appendChild(img);
    figure.addEventListener("click", () => openLightbox(pages.indexOf(page)));
    article.appendChild(figure);

    const block = document.createElement("div");
    block.className = "page-script-block";
    page.lines.forEach(([who, say]) => {
      const line = document.createElement("p");
      line.className = "line";
      const whoEl = document.createElement("span");
      whoEl.className = "who";
      whoEl.textContent = who;
      const sayEl = document.createElement("span");
      sayEl.className = "say";
      sayEl.textContent = say;
      line.append(whoEl, sayEl);
      block.appendChild(line);
    });
    article.appendChild(block);

    const note = document.createElement("p");
    note.className = "page-note";
    note.textContent = `绘制备注：${page.note}`;
    article.appendChild(note);

    root.appendChild(article);
  });
}

const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCap = document.getElementById("lb-cap");
let gallery = [];
let current = 0;

function pageGallery() {
  return pages.map((page) => ({
    path: pagePath(page),
    alt: `${pageLabel(page)} ${page.title}，第 ${page.n} 页`,
    cap: `P${page.n} · ${page.title}`,
  }));
}

function openLightbox(index) {
  const items = pageGallery();
  if (items.length === 0) return;
  openGallery(items, index);
}

function openGallery(items, index) {
  if (items.length === 0) return;
  gallery = items;
  current = index;
  updateLightbox();
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lb.hidden = true;
  document.body.style.overflow = "";
}

function step(delta) {
  current = (current + delta + gallery.length) % gallery.length;
  updateLightbox();
}

function updateLightbox() {
  const item = gallery[current];
  withFallback(lbImg, item.path);
  lbImg.src = repoUrl(item.path);
  lbImg.alt = item.alt;
  lbCap.textContent = item.cap;
}

document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); step(1); });
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

renderCast();
renderPages("prologue-root", "ch00");
renderPages("pages-root", "ch01");
