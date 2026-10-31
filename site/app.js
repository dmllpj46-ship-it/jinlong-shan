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
        role: "普通打工人 · 夜里跑滴滴，周末送外卖",
        anchor: "沈珩的第五世。二十八岁，不记得前世，只想把这个月过完。",
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
        role: "守山人 · 沈珩的师妹与恋人",
        anchor: "被守山印钉在山上五百年。不老，不死，也走不出山门三十里。",
        sheet: "assets/characters/su-zhao.png",
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
        anchor: "不是召唤出来的龙。是沈珩/陈默把自己填进锁后，金脉长出的龙身；四足抓山，不飞，不离山。",
        sheet: "assets/characters/jin-long.png",
      },
    ],
  },
];

// 成图后的页面：{ n, ch, slug, title, lines: [[who, say]], note }
const pages = [];

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
const pageLabel = (page) => (pageCh(page) === "ch02" ? "第二话" : "第一话");
const pagePath = (page) => `comic/${pageCh(page)}/${page.slug}.png`;

function renderEmptyPages(root) {
  const box = document.createElement("div");
  box.className = "empty-state";
  box.innerHTML = `
    <p class="empty-kicker">Not yet drawn</p>
    <h3>第一话尚未开画</h3>
    <p>角色、赤蟒、金龙与金龙山已经定妆。下一步：四格分镜 → 逐页成图 → 统一上字。第一页成图后，这里会逐页更新。</p>
    <a href="#cast">先看角色 →</a>`;
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
    figure.addEventListener("click", () => openLightbox(index));
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
renderPages("pages-root", "ch01");
