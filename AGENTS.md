# AGENTS.md

Guidance for AI agents working in this repo.

## What this is

A Japanese-manga-style Eastern fantasy comic, working title **金龙山 / JINLONG SHAN**. The repo holds the world bible, locked character and location design anchors, storyboards and finished pages.

## Hard rules

1. **`assets/characters/*.png`, `assets/creatures/*.png` and `assets/locations/*.png` are the canon.** Never redesign, recolor or restyle an existing character, creature or location without explicit user approval. A changed design ships as a new versioned sheet (e.g. `shen-heng-v2.png`) plus an update to `assets/characters/design-bible.md`.
2. **Match the locked art direction** in the design bible for every new image. Reuse the style block verbatim.
3. **Keep the never-change list intact** for each character: signature props, hair, eyes, silhouette, palette.
4. **Panel count follows the beat — 不要四格分镜.** A page is NOT required to have four panels and must never be forced into a four-box grid; the fixed 4-panel layout is retired as of 2026-10-31 because it reads flat. Choose the count per page (usually 3–6, and a single full-page splash is allowed when the beat needs it), then satisfy rule 14: one dominant panel carrying the beat, diagonal gutters, at least one panel bleeding off the page. Never an equal 2×2 grid of same-size panels, and never one panel per line of dialogue. Write the page's panel list and sizes into the script's 绘制备注 before generating, and state the row/column grammar in the prompt.
5. **No text baked into generated images.** Lettering, sound effects and titles are added in post. Image models render text unreliably.
6. **One generation pass per asset.** Do not loop, do not regenerate for minor taste differences. Accept the result, note deviations, move on. Token/credit budget matters here.
7. **Don't overwrite an anchor.** Add a versioned file instead.
8. **No canon faces for undesignated characters.** 沈珩、陈默、苏昭、苏雀、慕白 are locked. Until a new character has a sheet, only silhouettes, back views, hands or atmosphere may be generated. Never invent a new canon face, name or palette and treat it as canon.
9. **Story canon lives in `assets/characters/design-bible.md` and `README.md`.** New plot facts, faction names or world rules need explicit user approval before they are written as canon.
10. **沈珩 and 陈默 are one soul, not twins.** When they appear together, pass both sheets. Keep brow, jaw and eye shape; change era, hair, grooming, posture and scars. 陈默 never gets 沈珩's burn scar, long hair or robes.
11. **苏昭 and 苏雀 are not the same person.** 苏昭 has the white streak at her right temple, a low bun, a long coat and 断水. 苏雀 has fully black hair in a high ponytail, a red sparrow clip, a cropped jacket and silver scissors. Generating 苏雀 must never import the white streak, the long coat, the paper-bone lantern or the sword.
12. **金龙 is the male lead's ultimate form, not a second dragon.** 沈珩/陈默 become the lock itself; the golden vein grows a body around them. It has two states: **battle state** may rear into the air and fight above the mountain, but its lower body stays tethered to the mountain by golden veins and it never leaves the mountain's airspace; **locked state** anchors four limbs into rock. Neither state has wings, fire or independent speech. The dragon head is a true Eastern dragon head — never the human face. The human identity lives in the two faceless back-view silhouettes in the chest core, the jade hairpin, the bronze seal, the red cord and the gold fissure on the right jaw. Outside this form, the dragon may only appear as vein patterns, cracks, lamp light or reflections.
13. **赤蟒 is one body, not two snakes.** Every panel that shows it carries exactly one head and one continuous spine, and the head never touches or overlaps the tail. When a coiled body risks reading as two snakes, show only the head plus one single arc rising out of the water.
14. **打斗场面排版要大气.** On any page whose beat is combat, the layout — not just the drawing — carries the weight:
    - One dominant panel of at least 40% of the page per fight page: a full-width band (通栏) for horizontal force (tail sweep, shockwave, city dissolve), a full-height column (满高纵格) for vertical force (dragon rising, python sinking).
    - Scale contrast: put tiny human figures inside the monster's panel so the size gap is felt. Never a page of only heads and talking faces.
    - Diagonal gutters plus at least one panel bleeding off the page edge; let motion and debris cross the gutter instead of staying boxed in.
    - Small reaction panels only, and always after the dominant panel in reading order.
    - The fight's climax page gets the largest single panel in the chapter (ch00 P06: narrow band + full-width splash + two bottom panels).
    - The dominant panel changes position from page to page (top band → middle pair → bottom band → side column) so consecutive fight pages never feel the same.
    - Write that page's panel sizes into the script's 绘制备注 before generating, and state the row/column grammar in the prompt ("three rows: full-width band / two panels side by side / full-width band"). Image models add a fifth panel when the geometry leaves an open region — use tiling layouts, not L-shapes.
    - 版式必须写成纯几何描述：先声明每一行占页高的百分比与每行的格数，再声明「斜切格线只存在于第 N 行内部，不得上下越行」，最后逐格点名「本格只有 X / 本格没有 Y」。只写「four panels」不够——室内多人页最容易多切出一格窄条。
    - 同一页连续两次溢出格数，就立刻降一档格数（4→3），改用「一条贯通横线 + 一条只在带内的斜线」这种最少格线版式；本页只要保住主格、斜切与出血。
    - 每次成图先查三件事：格数、同一角色是否被复制两份（含手里的道具换样）、参考图串味（定妆稿站姿、他人特征）。任一不合格才定向重roll一次。
    - **提示词里写了「Image 1 / 2 / 3」不等于参考图真的挂上了。** 出图必须把定妆稿与上一页成图**实际传进 `images` 参数**（最多 3 张：主体角色定妆稿第一位 + 次要定妆稿 + 上一页成图）。漏传时模型只靠文字，整页会掉进暗褐、厚涂、写实的调子，与同章其他页画风断层——这种页**一律作废重出**，不算「为口味重roll」。2026-11-06 的 ch01 P47–P54 就是这么整段重出过一遍。
    - **人物数要自己先算一遍再写进剧本。** 「四个人——甲、乙丙两个、丁戊」这种句子是错的（那是五个人）。逐格写「恰好 N 个 + 点名」，出图不合格的页先在提示词里加 ANTI-DUPLICATION 逐格数头，再重 roll。
    - 同页有特征相近的角色时（苏昭 / 苏雀 / 陈默），提示词必须写 HAIR / CAST LOCK：逐人写死外套、发髻、白发归属，并写明「穿 X 衣服的人一定有 Y 头发」；参考图**第一位**决定特征派给谁，谁容易被抢特征就把谁的定妆稿放第一位。
15. **慕白是民宿老板，不是道士；民宿不是苏昭的别墅。** 慕白（`mu-bai`）的外形**以 `assets/characters/mu-bai-v2.png` 为准，v1（`mu-bai.png`）保留但作废**——v1 与陈默太像，任何一页都不许再拿它当参考。他是一个 60 多岁、矮胖、像个老教授的老头：谢顶一圈花白、圆框眼镜、双下巴、厚腰软腹、约 163 cm。他的标志物只有六样：圆框眼镜、苔灰绿对襟布扣短褂、肩上的灰毛巾、腰上一串旧黄铜钥匙（含一块空白木牌）、左手木珠、掉漆蓝灰搪瓷缸。**禁止一切道士视觉语言**：无道袍、无发髻、无须发、无符纸、无罗盘、无法器、无剑、无灯、无朱砂。他的民宿（龙潭镇镇子东头，无招牌）与苏昭的山边别墅是两间房子：民宿那一页**不许出现**长桌、没糊完的纸扎竹骨、墙上空白挂轴、立着油布断水的墙角、那一排撕了标签的玻璃瓶。

## Image workflow

- Tool: `ImageGen`. Use character sheets as identity references; label them in the prompt (“the first image is the identity reference; keep face, hair, costume and palette unchanged”).
- New character sheets: 1024x1536, same reference-sheet layout as the design bible specifies. Creature sheets: also 1024x1536, full body plus head/scale/sealed-context detail panels. The 金龙 ultimate-form sheet uses the creature-style four-panel layout and passes the male lead sheet plus the mountain anchor.
- Comic pages: 1024x1536 portrait (or 1536x1024 for wide establishing shots), panel count per rule 4 (usually 3–6 with one dominant panel, diagonal gutters and at least one bleed; the equal 2×2 grid is retired), same ink/screentone style.
- Style continuity: when drawing page N, pass page N−1 as an additional reference image to lock linework, screentone density and palette.
- Save to `assets/characters/<slug>.png` for character sheets, `assets/creatures/<slug>.png` for creature sheets, `assets/locations/<slug>.png` for location anchors, `comic/chNN/pNN.jpg` for pages (2-digit chapter, 2-digit page). `ch01` = chapter 1.
- Character sheets: 1024x1536. Location anchors: 1536x1024.
- Cover art lives at `assets/cover.png`: art only, with a calm band left clear at the top so the HTML title can sit over it. The current cover contains no characters; if a future cover includes them, use the locked sheets and keep the top band clear.
- After generating, copy the final file into the repo; do not commit the raw `vibe_images/` output folder.

## Character slugs

Locked: `shen-heng`（前世）, `chen-mo`（今生）, `su-zhao`（女主）, `su-que`（女主师妹）, `jin-long`（男主终极形态）, `mu-bai`（慕白，龙潭镇民宿老板；外形以 `mu-bai-v2.png` 为准，v1 作废）. Creature: `chi-mang`（赤蟒）, `bian-yi-shu`（变异鼠）. Location anchors: `jinlong-shan`（金龙山）, `bie-shu`（山边别墅）, `huo-cang`（城西货仓）. Episode supporting roles, locked but still unnamed: `lao-fu`（老妇）, `nv-hai`（初中女生）.

Supporting roles are not named yet. Add a slot only when the story needs one, and lock it with a sheet before it gets a canon face.

`chi-mang` is a creature anchor, not a human. The full body is allowed only on its design sheet; story pages reveal fragments until the story's late act.

`jin-long` is a form anchor, not a separate character. It is drawn only for the ancient battle and the late-act transformation; in every other frame the dragon stays as gold vein, crack, lamp light or reflection.

`shifu` is an undesignated supporting role: the Taiqing Palace master, 沈珩 and 苏昭's teacher. He dies in the prologue. Only back views, hands, wide sleeves, the bronze bell and half a sword may be drawn; never a canon face and never an invented name. 苏昭's past look uses her locked sheet for face and props but with no white streak, black hair and sect robes.

`jinlong-shan` is a location anchor: a wide scene sheet, not a character sheet. Its never-change list binds every frame that shows the mountain.

`bie-shu` is a location anchor too: 苏昭的山边别墅, the recurring interior from ch01 P09 onward. Pass it whenever the villa's outside is in frame; the inside is bound by the 室内 clause in the design bible plus ch01 P10–P11.

## Writing tone

- Story text: cinematic, terse, present tense. Chinese prose with English names/slugs in the docs where useful.
- No lore dumps in the README; the README is a pitch, the design bible is the spec.
- Page scripts (`pNN.md`) are production documents: scene, panel breakdown (count follows rule 4; sizes written into 绘制备注 before generating), dialogue/SFX, drawing notes. They are not prose chapters.

## Website

- `site/` is a static reader with no build step: `index.html`, `styles.css`, `app.js`.
- Local preview: run `python -m http.server` at the repo root and open `/site/`. Serving from the repo root is required: HTML images fall back to `../assets/...`, and `app.js` images fall back raw → jsDelivr → `../<path>`.
- **Images are never copied into `site/`.** They are referenced as `raw.githubusercontent.com/dmllpj46-ship-it/jinlong-shan/main/...`, with a jsDelivr fallback in `app.js`. Pushing to `main` updates art immediately; only HTML/JS/CSS changes need a redeploy.
- Adding a page: commit `comic/chNN/pNN.jpg` + `pNN.md`, add an entry to the `pages` array in `site/app.js`, then redeploy.
- When a character or creature is locked: add `assets/<characters|creatures>/<slug>.png`, a 4:5 `thumbs/<slug>.jpg` crop, and the matching entry in the `cast` array in `site/app.js`.
- The mountain anchor is a static `<figure class="scene-anchor">` in `index.html`, not part of the cast gallery.
- Deploy command (Cloudflare Pages project `jinlong-shan`, production branch `main`; live at https://jinlong-shan.pages.dev/):
  `wrangler pages deploy site --project-name jinlong-shan --branch main --commit-dirty=true --cwd <repo root>`

## Commits

- Conventional-ish messages: `docs: ...`, `world: ...`, `art: add <character> sheet`, `comic: add ch01 p01`.
- Commits from this machine use `test@test.com` (set locally, not globally) and the project name as author.

## Verification

- 校验脚本放在 `C:/Users/WaterZhong/AppData/Local/Temp/`（会话级临时目录，可能已被清）：`python -m http.server 8765 --bind 127.0.0.1`（仓库根，必须从仓库根起服务）→ headless Chrome `--headless=new --remote-debugging-port=9223 --user-data-dir=.../jl-chrome-profile` → `node jl-pages.mjs 9223 1440 900 "" <url>`（返回 `pages.prologue` / `pages.chapter01` / `errors` / `failed`），另有 `jl-cast.mjs`、`jl-anchors.mjs`。站点容器 id 是 `#prologue-root` / `#pages-root`，**不是** `#chapter01-root`。本地跑会报一条 `ERR_BLOCKED_BY_ORB`，无害（线上应为 `errors: []`、`failed: []`）。
- 站点数据改动后先做离线核对：解析 `site/app.js` 的 `cast` / `pages`，逐条确认 `sheet`、`thumbs/<slug>.jpg` 与 `comic/<ch>/<slug>.jpg` 在本地存在——缩略图路径由 `sheet` 文件名推导，改名或换版本号时必须一起改。

## 已完成检查点（2026-11-07 · ch01 P65–P70 内河鱼怪段）

**用户口述（已批准正典）**：「苏雀带陈默去内河抓鱼怪，行动是深夜，经过一番战斗，陈默收了轻伤，但是依然完成了任务，他的战斗力更强了。」→ 拆成 ch01 P65–P70 六页，兑现 P64 的「下周我手上有一单」。

**战力推进只允许三条**（不许越界）：一次行动里能放两次线、带着伤也放得出、第一次是他自己决定放的。线只致盲/钉住半秒，**杀口永远是苏雀的剪子**；禁光柱、电弧、锁链、符纹、鞭索。

### 交付状态（本段已全部完成）

- 六页分镜脚本 + 六页成图全部入库：`comic/ch01/p65.md`–`p70.md`、`comic/ch01/p65.jpg`–`p70.jpg`（1024×1536，渐进 JPEG q90）。逐页参考图链、roll 史、接受的偏差、版式变更都写在各页脚本的「成图记录」节里——**要复用本页口径，读那个节，不要读这里。**
- 变异鱼定稿：`assets/creatures/bian-yi-yu.png`（v3；v1 右下格串进狼爪、v2 右列串进狼头，均作废），缩略图 `assets/creatures/thumbs/bian-yi-yu.jpg`。
- 正典 **v2.8**（`assets/characters/design-bible.md`）：变异鱼定妆条、内河地理与「内河河堤与浅滩」场景锚点、陈默的线画法（细旧哑光、不照明、只有致盲与钉住半秒、预算两次且页面可数）、战力三条推进、下游点第三处、次数作为唯一度量、轻伤与纱布账、画外清单。
- `README.md` / `comic/README.md` 已同步（七十页、变异鱼行、内河行、段落 I、本段六条口径）；站点已加 n:65–70 六页与变异鱼 cast 成员，`index.html` 文案改七十页。

### 本段验证过的两条提示词手法（往后继续用）

- **MANDATORY CAST COUNT**：逐格写死「恰好 N 个 + 点名」，并把「谁必须在这一格里」单独强调。P67 v1 的主格没有陈默（尺度对比是命门），加这一段后 v2 一次修好。
- **编号 HARD FIXES**：把禁止的手势、禁止的颈部/身上道具逐条点名，再把他本页的全部标志物**穷举成白名单**。P70 v1 的剪刀手与模型自创的挂绳工牌就是这么修掉的——这不是口味问题，是会污染后续页的正典问题，必须修。
- 中带「上下叠」在本项目已被模型三次画成左右并列（P65、P66、P68）；**P70 一次成功**（近水平斜线 + 逐格点名）。要上下叠，先把中带写成两格并逐格声明「左格是 X / 右格是 Y」，或者直接接受左右并列并改脚本。

### 出图通道（硬口径）

- **内置 `ImageGen` 是唯一通道。** 主力通道断了（HTTP 403 / code 112 额度耗尽）就等，不换任何第三方出图 API（Agnes 等一律不用），不做逐格生成 + 本地拼图。
- 每一页都必须把定妆稿与上一页成图**实际传进 `images`**（最多 3 张，第一位给最容易被抢特征的人）；只写「Image 1/2/3」而没传，整页会掉进暗褐厚涂写实，一律作废重出。

### 工具与约定（本段沿用）

- 编码脚本：`C:/Users/WaterZhong/AppData/Local/Temp/t2/enc.py`（PIL → 1024×1536 LANCZOS → progressive JPEG q90）。用法 `python enc.py <src.png> <dst.jpg>`。**下一页要当参考图，必须先编码入库。**
- **中文文件内容一律用 `PYTHONUTF8=1 PYTHONIOENCODING=utf-8 python - <<'PYEOF'` 写入**；一次 heredoc 只写 1–2 个文件，payload 太大会触发 bash `unexpected EOF`。
- 每页提示词开头固定 STYLE 块：`professional Japanese shonen fantasy manga illustration, crisp black ink linework, cel shading with screentone dot patterns, limited bold palette, 1990s-2000s manga poster polish, pale warm-gray paper, halftone texture; muted cinematic night palette; no photographic realism, no 3D render.`
- 版式必须写成纯几何（逐行百分比 + 「斜线只在第 N 行内部」+ 逐格点名只有 X / 没有 Y + `TOTAL PANELS = N`）。
- 本地校验：仓库根起 `python -m http.server 8765 --bind 127.0.0.1` → headless Chrome CDP 9223 → `node jl-pages.mjs 9223 1440 900 "" <url>`（应为 prologue 8 / chapter01 70）；`jl-cast.mjs` 同样参数；**`jl-anchors.mjs` 的签名是 `port url` 两个参数**，多传会把 URL 当端口。本地一条 `net::ERR_BLOCKED_BY_ORB` 属正常。

### 下一段引线

P70 留下两个没结的东西：苏雀那句「这一处离山更远」不许解释，以及「下周我手上有一单」已经兑现完，她手上该有下一单了。S 级：**内河是第三处渗出点，比黑森林更远**——苏昭那条只在心里说的判断，从此有了第二个数据点。
