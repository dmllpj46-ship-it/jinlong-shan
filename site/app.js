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
        role: "苏昭的师妹 · 纸替身 · 便利店夜班",
        anchor: "锁断那夜她不在山上，所以没被守山印钉住。靠纸替身活到今天，每隔一阵要回昭记取灯油。",
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
    <p>序章「焚山」八页与第一话开场三页已经成图。后面的页面按分镜排版 → 逐页成图 → 统一上字推进，成图后这里会逐页更新。</p>
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
