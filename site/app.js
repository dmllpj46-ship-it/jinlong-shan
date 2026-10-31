const RAW = "https://raw.githubusercontent.com/dmllpj46-ship-it/jinlong-shan/main";
const CDN = "https://cdn.jsdelivr.net/gh/dmllpj46-ship-it/jinlong-shan@main";

// 角色位：定妆前只锁定叙事位置。定妆后把真实角色写进 cast，并移除对应的 slot。
const slots = [
  {
    no: "01",
    mark: "壹",
    label: "主角位",
    en: "Lead",
    role: "拾鳞人 · 持鳞者",
    brief: "第一个听见龙心跳的人。为什么是他，为什么是这枚鳞，定妆时一起决定。",
    state: "定妆中",
  },
  {
    no: "02",
    mark: "贰",
    label: "同行位",
    en: "Partner",
    role: "守山一脉，或叛出金鳞司的人",
    brief: "懂山的规矩，和主角在「送回还是使用」上正面冲突。",
    state: "定妆中",
  },
  {
    no: "03",
    mark: "叁",
    label: "追兵位",
    en: "Rival",
    role: "金鳞司执鳞官",
    brief: "追回逆鳞的人。相信控制换鳞才能保住山下的人，不是纯恶。",
    state: "定妆中",
  },
  {
    no: "04",
    mark: "肆",
    label: "引路位",
    en: "Guide",
    role: "无面香客或老拾鳞人",
    brief: "带路收费，知道龙心在哪，已经丢了一半名字。要上山，先交出名字。",
    state: "定妆中",
  },
];

// 定妆后的角色：{ slug, name, en, role, anchor, group }
const cast = [];

// 成图后的页面：{ n, ch, slug, title, lines: [[who, say]], note }
const pages = [];

const repoUrl = (path) => `${RAW}/${path}`;

function withFallback(img, path) {
  img.dataset.path = path;
  if (img.dataset.fbBound) return;
  img.dataset.fbBound = "1";
  img.addEventListener("error", () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = `${CDN}/${img.dataset.path}`;
  });
}

function renderSlots() {
  const root = document.getElementById("cast-root");
  const grid = document.createElement("div");
  grid.className = "slot-grid";

  slots.forEach((slot) => {
    const card = document.createElement("article");
    card.className = "slot-card";

    const figure = document.createElement("div");
    figure.className = "slot-figure";
    figure.setAttribute("aria-hidden", "true");
    const mark = document.createElement("span");
    mark.className = "slot-mark";
    mark.textContent = slot.mark;
    const state = document.createElement("span");
    state.className = "slot-state";
    state.textContent = slot.state;
    figure.append(mark, state);
    card.appendChild(figure);

    const body = document.createElement("div");
    body.className = "slot-body";

    const idx = document.createElement("p");
    idx.className = "idx";
    idx.textContent = slot.no;

    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = slot.label;

    const en = document.createElement("p");
    en.className = "en";
    en.textContent = slot.en;

    const role = document.createElement("p");
    role.className = "role";
    role.textContent = slot.role;

    const brief = document.createElement("p");
    brief.className = "anchor";
    brief.textContent = slot.brief;

    body.append(idx, name, en, role, brief);
    card.appendChild(body);
    grid.appendChild(card);
  });

  root.appendChild(grid);
}

function renderCast() {
  const root = document.getElementById("cast-root");
  if (cast.length === 0) {
    renderSlots();
    return;
  }

  cast.forEach((group) => {
    const section = document.createElement("div");
    section.className = "cast-group";

    const heading = document.createElement("h3");
    heading.textContent = group.group;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "slot-grid";

    group.members.forEach((m) => {
      const card = document.createElement("article");
      card.className = "slot-card";

      const figure = document.createElement("figure");
      figure.className = "cast-photo";
      const photo = document.createElement("img");
      const thumbPath = `assets/characters/thumbs/${m.slug}.jpg`;
      withFallback(photo, thumbPath);
      photo.src = repoUrl(thumbPath);
      photo.alt = `${m.name} 角色设定头像`;
      photo.loading = "lazy";
      figure.appendChild(photo);
      figure.addEventListener("click", () => openGallery(castGallery(), castIndex(m.slug)));
      card.appendChild(figure);

      const body = document.createElement("div");
      body.className = "slot-body";

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

      body.append(name, en, role, anchor);
      card.appendChild(body);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });
}

function castGallery() {
  return cast.flatMap((group) =>
    group.members.map((m) => ({
      path: `assets/characters/${m.slug}.png`,
      alt: `${m.name} 角色设定稿`,
      cap: `${m.name} · ${m.en}`,
    }))
  );
}

function castIndex(slug) {
  return castGallery().findIndex((item) => item.path.includes(`/${slug}.png`));
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
    <p>流程：主角定妆 → 四格分镜脚本 → 逐页成图 → 统一上字。角色定妆图进入仓库后，这里会逐页更新。</p>
    <a href="#cast">先看角色位 →</a>`;
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
  lbImg.dataset.fallback = "";
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
