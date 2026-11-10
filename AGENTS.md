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

16. **成图验收要省 token——看一眼就判，不要逐带核对。** 每次出图只读返回的那张整图一次，**不再做「下载 → 裁三带 → 逐带 Read」** 的重流程（P71–P75 前半段是这么干的，一页多烧十几倍 token）。只有四类硬伤才值得再看细节并**作废重出**：① 格数溢出或多格 ② 同一角色被复制／手里的道具换样 ③ 画面里出现文字 ④ 参考图串味（定妆稿站姿、他人特征、画风断层）。其余（光影分布、表情幅度、手的角度、衣褶、小道具位置）一律记为偏差直接接受，**不为口味重 roll**。对应的「成图记录」也写短：参考图顺序、roll 次数、3 条以内偏差、口径核对一行。 **不要再为了「确认」读第二遍图**：不下载后裁带、不逐带 Read、不把成图回发给用户当校验、不追加「看一眼再说」的复检轮。一次判完就往下走——省 token 是硬要求，不是可选偏好。

## Execution environment

**This repo was built in Qoder's agent; from 2026-11-08 it continues in Doubao Work.** Canon, scripts, images and the site are untouched — only the tooling changed. Every rule above still holds; where the two environments disagree on *how* to run something, follow the Doubao Work column.

| | Qoder (up to 2026-11-07) | Doubao Work (from 2026-11-08) |
|---|---|---|
| Image generation | `ImageGen`; `images` took a **string array of local paths** | built-in `image_gen` / `image_edit` (Seedream 5.0); `image_reference_url_list` takes **URLs only** (up to 10), so local sheets must be uploaded first to get URLs |
| Writing Chinese text files | bash heredoc `PYTHONUTF8=1 PYTHONIOENCODING=utf-8 python - <<'PYEOF'` | no Bash — PowerShell 7 only. Use the `Write` tool, or a `.py` file run explicitly. Files a person opens need UTF-8 **with** BOM (`utf8BOM`); pwsh 7's `-Encoding utf8` has no BOM. Read with `-Raw` if line endings matter |
| Shell paths | `cd` then relative paths | absolute paths with `-LiteralPath` on every call; shell state does not persist between calls |
| Presenting results | — | generated images go out through `<RichMediaCard>`; repo files and links through `present_files` |
| Unchanged | python 3.13, node 22, `wrangler` on PATH, `C:/Users/WaterZhong/AppData/Local/Temp/jl-*.mjs`, `Temp/t2/enc.py` | same |

Carried over unchanged and still binding: the STYLE block, pure-geometry panel grammar, `TOTAL PANELS = N`, per-panel cast counts, HAIR / CAST LOCK, and **at most 3 reference images actually passed in, the sheet of the most steal-prone character first**. Writing “Image 1/2/3” in a prompt while attaching nothing still yields an off-style page — that page is scrapped, not re-rolled for taste.

The old channel's failure signature (`HTTP 403`, `{"code":"112"}`) belongs to Qoder's `ImageGen`. The Doubao Work channel's quota limit and error signature have not been probed yet; when one appears, record it in the page's 成图记录 and stop, do not switch to a third-party image API.

## Image workflow

- Tool: `ImageGen` in Qoder → `image_gen` / `image_edit` in Doubao Work. Use character sheets as identity references; label them in the prompt (“the first image is the identity reference; keep face, hair, costume and palette unchanged”).
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

## 当前状态（2026-11-10 · 交接给下一个 agent）

**一句话**：序章 8 页、第一话 76 页、第二话「上宾」P01–P54 全部分镜 + 成图完成（未上字），已提交、已 push、已部署。下一步是第二话 **P55 起**。

- **仓库**：`C:\Users\WaterZhong\REPOS-LOCAL\jinlong-shan`，分支 `main`，HEAD `828784c site: serve ch02 p49-p54`；工作树应干净。
- **最近三次提交**：`38fccaa comic: add ch02 p49-p54, the ledger that does not add up` / `d711d9c docs: canon v3.8, a map that does not match` / `828784c site: serve ch02 p49-p54`。
- **正典版本**：`assets/characters/design-bible.md` 到 **v3.8**（第 35 行，`- Canon sheets:` 在 36 行）。
- **站点**：`site/app.js` ch02 54 条（`n: 54` 在 876 行，`const repoUrl` 882）；`index.html` kicker「第二话五十四页」+ 13 个 `.section-note`。
- **离线校验基线**：`python "C:/Users/WaterZhong/AppData/Local/Temp/t2/check_site.py"` → pages **138** / ch00 8 / ch01 76 / sheets 15 / thumbs 15 / missing 空 / li-jin-hong 1 / li-mu 1。每加一页 pages +1。
- **线上**：<https://jinlong-shan.pages.dev/>（P01–P54 版）；本轮部署预览 <https://eb433ed0.jinlong-shan.pages.dev>。
- **P49–P54 的细节不用读这里**：口径与 roll 账在各页 `comic/ch02/pNN.md` 的「## 成图记录」，以及下面 2026-11-10 那个检查点。

**下一段（P55 起）开工顺序**：`Read comic/ch02/p54.md` 的「## 成图记录」→ 按用户口述拆页写 `pNN.md`（版式纯几何、逐格人数、`TOTAL PANELS = 4`）→ 出图三参考（定妆稿优先 + 上一页成图第三）→ `Invoke-WebRequest` 下载 + `enc.py` 入库 → 回填成图记录 → 正典/README/站点 → 校验 → 三提交 → push → deploy。本机 `git` 在 `C:\Program Files\Git\cmd\git.exe`、`wrangler` 在 `C:\Users\WaterZhong\AppData\Local\Programs\nodejs\wrangler.cmd`，都不在 PATH；`curl.exe` 不可用。

**还没回收的钩子（一个新 agent 不许自己收）**：门后面是什么；谷里出了什么变故；内鬼是谁；日方那条线的「上头」是谁（只留「这里头还有一层。」）；审批地与施工地对不上是谁动的手；停工「没有理由」背后是什么；临时工的钱谁结的；李锦鸿挂电话前那句「我有一件事想请您」；苏昭「现在不能。」「至少现在。」什么时候开；慕白「三天没回来，我进林子。」；那四个人是否康复；「门开着。」（不许复述）；堂口墙根水痕；白玉山子的最终处置；苏雀「……挖了多深。」；「四处」是否锁在既有四个下游点。

**不要做**：不为口味重 roll；不重出已入库的页；**不为「确认」再读一遍图**（硬规则 16）；不用 `Edit` 大段替换改 canon 与 `site/app.js`（会吞相邻条目和 `const repoUrl`）；大段中文落盘用 `.py` + `Path.write_text`，不用 PowerShell here-string 直写。

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

## 已完成检查点（2026-11-08 · ch01 P71–P76 李家法事段，第一话收尾）

**用户口述（已批准正典）**：李锦鸿（俊朗的成功人士）带着癌症末期的母亲到昭记求风水阵转运；苏昭一眼看出老妇活不过两个月，但见男人一副忠孝的样子答应下来，算是给人心理安慰；后续去李家做一次仪式、法事。**用户已拍板两条**：① 李家在山脚（山门三十里内），**苏昭亲自去、陈默随行**；② 李锦鸿的钱**挂钩采金集团 / 拆锁工程**，本段只埋道具——P75 廊下一只空白图纸卷袋 + 一顶黄色安全帽，**只入画一次，任何角色不许看、碰、提**。

### 已完成

- 定妆两张入库：`assets/characters/li-jin-hong.png`、`assets/characters/li-mu.png`（各 1024×1536）。偏差记档：李锦鸿的「半转身虚扶」手势没画出来（一手插兜一手垂钥匙）、脸偏冷峻，正篇用动作与软眼神补；李母围巾偏棕、表情偏疲惫而非哄儿子的温和，正篇补。两稿带工具「AI生成」角标水印，属出图工具水印、非我们烧的字，与既往定妆稿同例。4:5 缩略图（`thumbs/li-jin-hong.jpg`、`thumbs/li-mu.jpg`，640×800）与 cast 条目已补，见站点步。
- 六页分镜脚本 `comic/ch01/p71.md`–`p76.md` 已写全（几何版式、逐格人数、台词硬分配、参考图链计划、口径）。
- 本段自锁口径：老妇的病**与元能无关**（瓶全程不入画；禁「转运成功／延寿／改命」任何兑现）；「活不过两个月」只走苏昭心声、不许说出口；法事画成**手艺**（罗盘、棉线、米、纸灯），禁法阵光效、咒语字、金雾、瞳心金圈；忠孝只由动作读（扶肘、拢围巾、自己站着让她坐、推钱手是平的），禁跪地大哭撒钱；疾病少年向尺度（禁化疗恐怖、光头、输液架、尸体感）；名字取**李锦鸿**（用户消息另有「李景鸿」写法，正典以首次出现为准），slug `li-jin-hong` / `li-mu`；李母与 `lao-fu` 硬性区分（无左颊痣、无蓝布包、无压平银发，改针织帽 + 红布抽绳袋 + 驼色新围巾）。
- 收束刀句：李母「我知道没用。」「我就是想让他有个事做。」**全段只说一次**，往后任何角色不许复述；苏昭反应上限承 P60（手停半拍 + 「……嗯。」），心声「我知道两个月长什么样。」「我送走过四个。」只给读者；回程陈默问「阵有用吗。」苏昭答「有用。」（真话缺一块），陈默心声「她答得太快了。」承 P32。

### 交付状态（本段已全部完成）

六页成图 `comic/ch01/p71.jpg`–`p76.jpg`（1024×1536，渐进 JPEG q90）、六份脚本的成图记录、正典 v2.9、两份 README、站点六页与两个 cast 成员全部入库；`README.md` / `comic/README.md` 已同步到七十六页 + 段落 J + 本段口径段。

- 提交：`0388319 comic: add ch01 p71-p76, the Li family rite` / `cf1c709 docs: canon v2.9, the Li family at the foot of the mountain` / `815c956 site: serve ch01 p71-p76 and the Li family cast`，已 push main 并 `wrangler pages deploy site`。
- 线上校验（`https://jinlong-shan.pages.dev/`）：prologue 8 / chapter01 76，P76 图 `1024×1536`、`complete: true`，`errors: []`、`failed: []`；cast 14 张全部 `640×800` 且 `complete: true`。本地校验同数，只多一条无害的 `net::ERR_BLOCKED_BY_ORB`。

### 出图口径（本段验证过）

- **看一眼就判，不逐带核对**（硬规则 16）：只读整图一次，四类硬伤才作废重出（格数溢出／角色复制／文字入画／参考图串味），其余记偏差直接接受。P71 那五 roll 是老口径的代价（一页多烧十几倍 token），不要再重走。
- **出图返回 1672×2508 的 JPEG**，不是请求的 1024×1536——必须先 `curl.exe` 下载再用 `Temp/t2/enc.py` 重编码入库，不能直接当成品。
- 两条对抗模型的写法已写进 `p71.md` / `p72.md`：「walking in」必被画成背影朝外走 → 改写成「停在门内、正面朝柜台」；「grey temples」必被画成整头银发或白发带 → 写「只在两鬓几根灰」+ 单列 NO headband；「右鬓一缕白」必被画成两侧各一缕 → 写「画面左侧那一缕＝她的右鬓，右侧全黑」；铺子的墙一写「贴着的纸」就带字 → 写素灰墙什么都不贴。

### 下一段引线（第一话已收尾，第二话未开）

- **采金集团 / 拆锁工程**：只埋了一次道具（P75 廊下空白图纸卷袋 + 黄色安全帽），回收时必须由人物带动、**不许由旁白解释**，且这是全书唯一一条「有人在拆这座山」的实物证据。
- **苏昭那句「有用。」** 缺的那一块已经记在陈默心里（「她答得太快了。」）——第二话不许让他想明白，只许他记得。
- 第三处渗出点（内河）与山脚李家构成两个数据点：**离山越近的人与越远的事第一次同框**，但这层关联本段一个字没点破，往后也不许由苏昭解释给陈默。
- P74 那笔欠账（李母「拍儿子手背」没画进任何一格）**已接受、不再补**，后续页不许假装它发生过。

### 工具提醒（本段新增）

- `ImageGen` 的 `images` 参数是**字符串路径数组**；传 `{source, type}` 对象会报 `params/images/0 must be string`。
- 额度耗尽的报错是 `HTTP 403 — {"code":"112", ...}`；见到它就停手等恢复，不要重试循环、不要换通道。

## 已完成检查点（2026-11-08 · 第二话「上宾」P01–P12，`comic/ch02`）

**第一段（P01–P06，`adff940`，已上线）**：李锦鸿把母亲接进别墅、再请苏昭做一场；法事是给家属看的戏，真正的好转来自她背着所有人给李母喝下的一杯元能水——**一杯＝半年、不能起死回生、第二杯无用**，她一个字不说。**第二段（P07–P12，`1371538` / `1b8138e` / `82fecf6` / `64ccac8`，已上线）**：兴义会老大鬼九上门求援——四个兄弟、同一个堂口同一间屋、白天清醒，夜里过十二点说同一句话（「门开着。」）；堂口远，去的是陈默 + 苏雀，**苏雀主打**；他看陈默面生而迟疑，苏昭只答「我的人。」，真正让他放心的是陈默那句「……怕。」。六页收在堂口门口：屋里那四个人不出场，只有一个比外面冷的屋子与一道从地面往上爬的水痕。

### 交付状态

- 十二页成图（`comic/ch02/p01.jpg`–`p12.jpg`，1024×1536 渐进 JPEG q90）+ 十二份脚本（成图记录已逐页回填：参考图链、roll 次数、逐 roll 作废原因、接受偏差、口径核对）。
- 定妆：`assets/characters/gui-jiu.png` + `thumbs/gui-jiu.jpg`；缩略图现共 **15** 张。
- 正典 **v3.1**：v3.1 条插在 v3.0 之后、`- Canon sheets:` 之前；`### 势力` 加兴义会；`### 地理` 加「城北旧货运站与兴义会堂口」；`### gui-jiu` 条目；`## Scene anchors` 加「兴义会堂口」。
- `README.md` / `comic/README.md` 同步（十二页、兴义会/鬼九/堂口三行、定妆两条、Roadmap 一行、第二段六条口径）。
- 站点：`pages` 加 `n:7`–`n:12`，`cast` 加「第二话 · 兴义会」组（gui-jiu）；hero kicker 改「第二话十二页」；`section#chapter02` 加第二段引言段。
- 校验：离线 `node --check` + `check_site.py` → pages 96 / ch00 8 / ch01 76 / ch02 12、sheets 15、thumbs 15、missing 全空。线上 `https://jinlong-shan.pages.dev/` → prologue 8 / chapter01 76 / **chapter02 12**，十二张均 1024×1536、`complete: true`；cast 15 张均 640×800；`errors: []`、`failed: []`。

### 本段验证过的写法

- **症状只给台词，不给回忆格**：中邪这件事全段没有一个画面证据（无病人、无回忆、无香符雾），读者只知道「四个人、同一间屋、同一句话」。
- **保票不夸人**：苏昭只答「我的人。」「他站在那儿，我放心。」；迟疑只写成「眼睛停半秒、嘴角压一点」——**迟疑不是敌意**。
- **戒心解除只用一个动作**：他坐下了（前两页都站着），帽子从柜台挪到膝上，再问一句家常。
- 三条对抗模型的写法（都来自本段报废）：① 苏雀的短夹克会被带成红暖色 → 写「照 sheet 复制 + DARK CHARCOAL-NAVY + NOT red/orange/maroon，唯一红元素是发夹」；② 苏昭右鬓一缕白在大幅背身格会被放大成白发带 → 写「只在发髻里几根细白、其余全黑」并选背身角度；③ 一格写「回头说话」+ 另给「半张脸」时模型会在格里再贴一张大脸 → 明写「不要大特写脸、不要 inset portrait」。另有两条：招牌/灯笼必带字（写「素灰砖墙、无招牌无灯笼无对联」）、祭坛后墙必带竖排字（写「墙是素水泥、牌位是空白木板」）。
- **一个角色换衣服就会断连续性**：P08 v1 把苏昭画成短外套 + 白衬衫，与 P07 的长外套断裂 → 必须逐页写死「同一件闭合深灰长外套、不许露白衬衫领」，且把上一页成图传进参考位。

### 工具与流程（Doubao Work 侧新增）

- 出图走内置 `image_gen` / `image_edit`：`image_reference_url_list` **只收 URL**（最多 10，实测每页 3 张最好，第一位给最易被抢特征的定妆）；本地定妆稿先用 `FileBatchUpload` 换 URL（偶发 `SDK_ERROR: sdk error code -60000`，**原样重试一次即成功**）。
- 返回 1672×2508 JPEG：先 `curl.exe -s -L -o` 下载，再用 `Temp/t2/enc.py` 重编码为 1024×1536 q90 入库；定妆用 `sheet.py`、缩略图用 `thumbs*.py`。
- 出图验收按硬规则 16 执行（整图只读一次，四类硬伤才重 roll）；本段 12 页共 10 次生成（P07/P08/P11/P12 各 2），作废全属四类硬伤。
- `Edit` 大段替换仍会吞掉相邻条目开头（本轮两次：`### 地理` 的「山腹金龙」、`## Scene anchors` 的「李锦鸿的别墅」定位句），**改完必须 Grep 校验**；改 `site/app.js` 会误删 `const repoUrl`，**改完必须 `node --check`**。

### 下一段引线（第二话未收）

- 那四个人、那句话（「门开着。」，**往后不许复述**）、堂口墙根那道水痕——三颗都还没回收；它是元能的**第四个下游点**，**离山比内河更远**，但这条只许苏雀说一次、不许解释。
- 第二话旧钩子仍在：苏雀记下的那杯水、李锦鸿的结交、陈默「她答得太快了」缺的那一块。

## 已完成检查点（2026-11-08 · 第二话「上宾」P13–P18，堂口白玉段）

**用户口述（已批准正典）**：「陈默，苏雀如约来到兴义会的堂口，他们巡查了堂口，发现堂口有一件白玉古董有异样，苏雀确定，这个古董，辐射着异样的元能，堂口的一些兄弟，就是因为无法适应元能，产生了过敏反应，出现了中邪的情况；苏雀没有明说，装模装样，说这个古董有邪术，然后就收走了，同时也清理了元能的泄露；苏雀问，这个古董怎么来的，鬼九说，是他去龙潭镇旅游，在路边一个农民手上买到的。又是龙潭镇，陈默和苏雀都觉得情况很不一般，心里暗暗记下，要回去跟苏昭商量。」→ 拆成六页（`comic/ch02` P13–P18），正典 **v3.2**。

### 交付状态（本段已全部完成）

- 六页分镜脚本 `p13.md`–`p18.md` + 六页成图 `p13.jpg`–`p18.jpg`（1024×1536 渐进 JPEG q90），成图记录已逐页回填。
- 正典 **v3.2**（`assets/characters/design-bible.md`）：v3.2 条插在 v3.1 之后、`- Canon sheets:` 之前；新增 `### 道具` 节（`bai-yu-shan-zi` 白玉山子 + 无标玻璃瓶）；`## Scene anchors` 的兴义会堂口条补「四双鞋 / 里屋关着的门 / 供桌侧边旧木座」。
- `README.md` / `comic/README.md` 同步；`site/app.js` 加 n:13–n:18；`index.html` hero kicker 改「第二话十八页」并加第三段引言。`node --check` 通过；`check_site.py` → pages 102 / ch00 8 / ch01 76 / sheets 15 / thumbs 15 / missing 全空。

### 本段定下的口径（往后照此）

- **答案只说给一个人**：苏雀在 P16 压低声音对陈默说「不是邪术。」「是元能。它在往外递。」——「元能」这个词在第二话**只出现这一次**；对外永远是民俗口径「有人在这上头做了东西」。
- **白玉山子＝元能的载体，不是法器**：掌大、青白哑光、层叠坡状、玉里 3–5 道哑光旧金、深褐旧木四足座、通身无字无款；**不发光、不流动、不起雾**。它只在 P15 裸露，P16–P17 之后一律隔着东西画。
- **手法全部可数**：手背贴墙、指尖抹灰、手电照一个高度、**隔着布**托起玉、银剪剪扎口绳、引一线旧金进无标瓶；**全程不直接碰玉**。禁阵法、光效、咒语、符纸、罗盘。
- **装模作样的分寸**：演的是一套普通民俗说法，不点原理；钱推回苏昭（「跟九哥算账的是苏师傅。不是我。」）。
- **陈默不出手**：只举电筒、站半步之后、心里记三句（「门缝里一点声音都没有。」「她说『收走』，没说『扔掉』。」「又是龙潭镇。」）。
- **来源只给三样**：地名「龙潭镇」、价钱「三百」、「挖地挖出来的」只说一次且被「行了。」截断。

### 本段验证过的写法（都来自报废页）

- **写正方形参数会出正方形页**：P14 v1 因为 `width`/`height` 都填 1024，整页输出 2048×2048；漫画页必须每次写 1024×1536。
- **「给半张脸」的格会被画成大美颜特写**：P15 两次报废都在第 4 格（脸放大 + 发丝散落 + 画风断层）→ 改成**背身视角**一次过。往后凡是不需要脸的格，直接写「back view / face NOT visible」比写「half face」稳。
- **高马尾会被画散**：P17 v1 苏雀长发垂在肩、第 3/4 格出正脸 → 写 HAIR LOCK「tied up tightly at the crown, NO loose hair on shoulders or chest」才收住。
- **英文招牌会出现**：P18 v1 巷口墙上自动生成一块「NIGHT」招牌，同时苏雀被穿成红色花纹外套 → 写「bare gray concrete walls, NO shopfront / NO signboards」+ COLOR LOCK 整段兜住。
- **香炉会自动冒烟**：即使写「不点香」，只要供桌进画，模型就给一缕烟。P17 已经有这处偏差（接受），往后写「cold dry incense burner, no smoke at all」。

### 下一段引线（都还没回收）

- 那四个人会不会康复、那句话（仍不许复述）、墙根那道水痕（已被「收走古董、清了外溢」解释了一半，但**没有人说破**）。
- **白玉山子的去向**：进了她那只无字旧帆布包，本段不交代；苏昭会怎么处置、要不要验，下一段再定。
- 苏雀心里那句「……挖了多深。」——龙潭镇第一次以**一件从山那边流出来的东西**出现（此前四处下游都是地点）。

## 已完成检查点（2026-11-08 · 第二话「上宾」P19–P24，验玉与再探段）

**用户口述（已批准正典）**：「苏昭查看了苏雀从兴义会带回的古董，又问了一下过程细节，心理已经大概明白了，问题还是在龙潭镇；于是她给慕白打了电话，同时安排陈默和苏雀要再探龙潭镇，务必找出来，为何元能事件会越来越多，一定是哪里出现了变故。」→ 拆成六页（`comic/ch02` P19–P24），正典 **v3.3**。

### 交付状态（本段已全部完成）

- 六页脚本 `p19.md`–`p24.md` + 六页成图 `p19.jpg`–`p24.jpg`（1024×1536 渐进 JPEG q90），成图记录已逐页回填（含逐 roll 作废原因）。
- 正典 v3.3（`design-bible.md`）：v3.3 条插在 v3.2 之后、`- Canon sheets:` 之前；`### 道具` 新增「昭记柜台下那只旧木箱」（`zhao-ji-jiu-mu-xiang`），白玉山子条目补去向（P19 入箱、本段不再取出）。
- `README.md` / `comic/README.md` 同步（二十四页、P19–P24 六行页表、第四段口径段、白玉去向）；`site/app.js` 加 n:19–n:24；`index.html` kicker 改「第二话二十四页」并加第四段引言。
- 校验：`node --check site/app.js` 通过；`check_site.py` → pages 108 / ch00 8 / ch01 76 / sheets 15 / thumbs 15 / missing 全空。

### 本段定下的口径（往后照此）

- **苏昭可以用数字说话**：她第一次对外报数（「一年。第四处。」「一处比一处远。」）并答一个字「不好。」；但**这四处在哪一个字不许说**，页面上只以 P21 第 3 格那四道指压短横存在，不许与四个下游点对号。
- **不上山不给理由**：只有「不上山。」三字，禁说山、锁、金脉、元能。
- **电话两边各给一半**：屏幕全黑无 UI；慕白只能说「……有。」「镇子外头。我还没去量。」，只关心人数；她只给「别去。」「我让人过去。」。
- **派工只有三样**（谁在挖、挖多深、往哪儿去），文书只有空白纸条 + 皮筋捆无字纸钞，「别动。回来告诉我。」不许加「小心」。
- **再探口径**：陈默与苏雀**来过**（ch01 P41–P44 慕白带路、P60 带回「他问您好」），只能写「这条路我走过一趟」「上次是她带我走的」，禁初见与惊讶。

### 本段验证过的写法（都来自报废页，本段 15 次出图中 6 次作废）

- **`image_gen` 的 `width` 与 `height` 两个都必须显式写 1024 / 1536**：只写一个仍然出 2048×2048 方图（P19 连废两稿）。
- **别用 `PANEL A/B/C/D` 给格位命名**：模型会把 A、B、C 当格号印进画面角上（P20、P21 各中一次）。改写「AREA ONE / TWO」并加一行 `ZERO TYPOGRAPHY: no letters, no numerals, no panel markers` 才收住。
- **苏昭的「鬓角细白」不能进 prompt**：只要写，就会被放大成白发横带（P20 连废两稿）。最稳是写「头发 100% 全黑」。少画几根白丝是安全偏差，画成横带才是身份错误。
- **「石牌坊」默认被画成日式鸟居**：必须写「两根方石柱 + 一根平直石梁，不许翘角、不许第二根横梁、不许屋顶，不是日本神社」。
- **苏雀会被画成苏昭**：大幅半脸格要把「年轻女 / 马尾扎紧 / 红夹是唯一红」写死并强调「不是那位年长的」；苏昭被画成银发老妇同样属于身份错误。
- 仍然照硬规则 16 只看整图一次；本段作废全部落在四类硬伤（画风断层、格数溢出、画面文字、角色特征被换）。

### 下一段引线（第二话未收）

- 龙潭镇深处到底出了什么变故——本段只给问题（慕白「镇子外头有人动土」），不给答案；这句与 ch01 P46 那道**崭新铁丝**是不是同一件事，刻意没接。
- 那四个人是否康复、那句话（仍不许复述）、墙根水痕（已被解释一半、无人说破）、白玉山子的最终处置、苏雀那句「……挖了多深。」。
- 苏昭报的「四处」是否就锁在既有四个下游点（城西货仓、黑森林、内河、城北堂口），未拍板。

## 已完成检查点（2026-11-08 · 第二话 P25–P30，深谷段）

**这一段已全部完成并上线。** 六页脚本与成图、正典 v3.4、两份 README、站点与部署全部闭环；要复用本页口径，读各页 `pNN.md` 的「成图记录」，不要读这里。

**用户口述（已批准正典）**：陈默与苏雀再次来到龙潭镇，慕白早已等候；慕白说自己在上次围捕后暗中调查、用无人机在林子上空扫描，发现深处一个深谷有异常能量波动，很可能那里有大量元能活动才导致怪事频发；三人一起看无人机视频，快到深谷时受强烈干扰、画面全无；于是只能自己下去实地考察。拆成六页（`comic/ch02` P25–P30）。

### 交付状态

- **六份脚本**：`p25.md`–`p30.md`（分镜表、绘制备注、本段口径、`TOTAL PANELS = 4`、参考图计划），六页「成图记录」已回填（参考图实传、roll 次数、接受的偏差、口径核对）。
- **六页成图**：`p25.jpg`–`p30.jpg`（1024×1536 渐进 JPEG q90）。roll 账：
  - P25 v1 `gUTJoI86al` 一次采用。
  - P26 v1 `FLYK29XSQd` **作废**（图上被印出 `NOW` 一类字 + 台灯被点亮）；v2 `pTZIwbYjJi` 采用。
  - P27 v1 `zdN7xjwo0V` 一次采用。
  - P28 v1 `2iaG2quHta` 一次采用。
  - P29 v1 `cL3UNwna6X` 一次采用。
  - P30 v1 `HfUjWODxjV` 一次采用（手机屏正中留一处极浅的灰色圆角轮廓，按硬规则 16 记偏差接受，上字时压掉）。
- **正典 v3.4**（`design-bible.md`）：插在 v3.3 之后、`- Canon sheets:` 之前，共 12 条；其中第 ⑦ 条**明确推翻**了 v2.5「无人机不许出现回传影像与屏幕内容」的后半条，改为「允许画面、严禁界面」。
- `README.md` / `comic/README.md` 同步（三十页、P25–P30 六行页表 + 第五段口径段、Roadmap）。
- 站点：`site/app.js` 加 n:25–n:30（`node --check` 通过）；`index.html` kicker 改「第二话三十页」并加第五段 `.section-note`。
- 校验：离线 `check_site.py` → pages 114 / ch00 8 / ch01 76 / missing 空 / sheets 15 / thumbs 15。

### 本段口径（新立，往后照此）

- **慕白的知识边界（硬）**：他不知道元能／锁／山／阵，台词只许「数得到的东西」（几趟、哪儿断、走多久、数不到里头）。**不许**说「能量」「波动」「干扰」「磁场」「煞」。口述里那句「很可能是大量元能活动」因此**不给慕白**，改由苏雀说出可数的判断。
- **苏雀不点元能**：本段她**不许**说「元能」（该词在第二话只在 P16 出现过一次）；只许「有东西在递」「递得比堂口那件凶」（不解释那块玉）。
- **「谷」由慕白命名、只说一次**：「那地方，我们叫谷。」「没有名字。」「我数不到里头。」——不许给谷起地名，不许写「无名谷」。**「我数不到里头」不许任何人接**。
- **深谷只给一个口子**：两片坡之间的凹处、纯黑、边缘参差、内部不给任何细节；不许发光、不许有形体、不许有眼睛。P28 屏里那个口子与 P30 远景那个口子是**同一个**；P30 只许「远、小、黑」，尺度靠与三人身高差。
- **屏幕口径（本段新增）**：屏幕只许有画面（林冠、雾、崩掉的横条纹与噪点），**严禁**图标、状态栏、时钟、电量、信号格、播放键、进度条、文件名、任何字母数字，严禁「无信号」提示框。崩溃要像信号不像伤口，条纹里不许藏形状。P30 手机屏同理：只许一片亮白。
- **无人机「四趟」自己算得清**：四趟出去，三趟断在林子里、两趟断在同一个点（一趟掉了、一趟断信号后自己回来）；只说数字，不解释机制，不许提频率波段。
- **慕白不跨围栏**：P30 他的旧布鞋停在网外侧松针上，人与铁丝保持一步；只送不进、不带包。他的两名手下**只许在台词里存在**，任何一格不许入画、不许给脸。
- **装备上限**：一卷绳、两只普通白光手电、几节干电池、一包纱布、两瓶水、旧编织袋（无标识）；禁枪刀麻醉、攀岩扣、军品、头盔、夜视仪。
- **陈默问的是路**（「要多久」）不是「那是什么」；两句心声承 P24「上次我们只到林子边上」，不许他兴奋、不许他说「我要去」。

### 本段验证过的写法（都来自报废页）

- **手绘图／地图极易被模型自行加字**：只写 `ZERO TYPOGRAPHY` 不够（P26 v1 仍印出 `NOW` 类字）。必须另起 **ABSOLUTE NO-TEXT RULE** 段，逐项列「零字符、无地名、无图例、无比例尺、无指北针、无数字字母、无像字迹的涂鸦」，并把图描述成「纯墨线等高线 + 圈、像风景速写、不像印刷地图」。
- **「台灯灭着」必须写成 `dark bulb, no glow, no light spill`**：只写 lamp switched OFF 仍会被点亮（P26 v1 叠加报废）。
- **屏幕类格要单独列「禁 UI」清单**：写「屏幕只显示画面」不够，必须逐项列 `no icons, no status bar, no clock, no battery, no signal bars, no play button, no progress bar, no file name, no "no signal" warning`（P28、P30 都是这么一次过的）。

### 下一段引线（第二话未收）

- **谷里到底是什么，本章一个字没给**：P25–P30 只给了一个更黑的口子、四趟断在同一点、苏雀那句「底下有东西在递」。下一段（P31 起）才进林子，**进去之后的第一页不许立刻解释**。
- 慕白那句话「三天没回来，我进林子。」是**欠条不是保证**——它必须在后面某一页被想起，且不许由旁白提醒。
- 还没回收的旧账：慕白说的「镇子外头有人动土」与 ch01 P46 那道崭新铁丝是不是同一件事（仍刻意不接）、那四个人是否康复、那句话（仍不许复述）、堂口墙根水痕、白玉山子的最终处置、苏雀那句「……挖了多深。」、苏昭报的「四处」是否锁在既有的四个下游点。

## 已完成检查点（2026-11-09 · 第二话 P31–P36，谷底·门·机器段）

**用户口述（已批准正典）**：「陈默、苏雀、慕白一行深入黑森林，到达谷底发现无线信号完全不通；找到一个山洞，像是秘密基地的出口，有明显人工建筑痕迹；苏雀发现这里不断辐射异样的元能；慕白认为几十年没这种情况，一定是附近山体被破坏；再探查发现洞口有爆破痕迹（比盗墓更大），谷里丢着生锈的破烂机器，看样子是最近 1–2 年的事（设备生产和维修日期可清楚看到），施工出问题导致工程队溃逃、什么都没清理；陈默主张先拍照取证、回去跟苏昭商量、不要妄动，苏雀与慕白都认同；于是拍照取证后默默退出山谷。」→ 拆成 `comic/ch02` P31–P36 六页。

### 交付状态（本段已全部完成）

- 六页脚本 `p31.md`–`p36.md` + 六页成图 `p31.jpg`–`p36.jpg`（1024×1536 渐进 JPEG q90），成图记录已逐页回填。roll 账：P31 `pzcBVN4BqB` / P32 `Ej5UEmCdBP` / P33 `Pt91qnxcUC` / P34 `5BEX6g9SkK` / P35 `6d1lHfcuDW` 各一次采用；**P36 两次**（v1 `b1M3VzOfwg` 作废：苏雀被换成红色上衣，属「参考图串味」；v2 `sOVZtqLDKW` 采用）。
- 正典 **v3.5**（`design-bible.md` 第 32 行，v3.4 之后、`- Canon sheets:` 之前，共 17 条）。
- `README.md` / `comic/README.md` 同步（三十六页、P31–P36 六行页表 + 第六段口径段、Roadmap 勾选）；站点 `site/app.js` 加 n:31–n:36（`node --check` 通过）、`index.html` kicker 改「第二话三十六页」并加第六段 `.section-note`。
- 校验：离线 `check_site.py` → pages 120 / ch00 8 / ch01 76 / missing 空 / sheets 15 / thumbs 15。

### 本段口径（新立，往后照此）

- **证据靠人说，图不印字（硬）**：设备铭牌一律**空白金属片**（有锈、有反光、读不出字），生产日期与维修章**只由苏雀念出**（「二四年三月。」「维修章是二五年九月。」）；速记纸只有几根直线与轮廓，**零字、无比例尺无指北针**。
- **机器清单不许加减**：履带钻机（锈、履带断一节、钻臂垂着）、空压机（缺一个轮）、电缆盘（电缆还绕着）、两只倒着的油桶、几袋凝成石头的水泥、两根钢轨；漆面无字。**禁**集装箱、板房、卷扬机、发电机组、水泵、警示带、脚手架、汽车卡车装载机。
- **不许出现人留下的私人物品**：无尸体、无血、无弹壳、无衣服鞋、无饭盒、无烟头——**人是溃逃，不是死在这儿**。
- **锈的程度＝时间证据**：两年上下＝薄锈、锈在接缝与低处；不许锈穿、不许锈成一堆、不许长苔长草。
- **爆破痕迹只许三样**：等距炮孔排（孔口发白）、半截导爆管（细塑胶管、无字）、一处炮窝 + 石屑落点；禁炸药雷管引线盘起爆器。
- **人工痕迹只许四样加一样**：切齐的混凝土边、四枚等距预埋螺栓、斜插岩壁的通风管、浅排水沟，加门框一圈空着的预埋件槽；**门洞必须是方口**（上沿平、两侧直、四角直角），禁钟乳、禁不规则圆口，**洞里纯黑、手电一步就没**。
- **谷底「平」是唯一证据**：碎石均匀像压过 + 两条很直的低埂，禁画成施工工地。
- **慕白与苏雀的词禁（延续 v3.4）**：慕白只说数得到的（「我在这镇上几十年。」「谷里没有过这个东西。」「山被挖了。」「石头不对。」「不是老锈。」「两年上下。」），禁「能量」「波动」「干扰」「基地」「工程队」「集团」「采金」「盗墓」；苏雀只给可数判断（「凉的。」「堂口那件是往外渗。」「这个是往外倒。」「一排。……还在」），禁「元能」「辐射」。
- **陈默只做观察、记录与主张退**：「先拍。别动它。」「这儿的问题，不是我们能收的。」「拍完，回去跟老古董讲。」；禁「报警」「报告政府」「叫人来」「封起来」「我要下去看看」。
- **拍照口径**：手机**背面朝读者**、屏幕一律不入画；禁取景框、快门图标、网格线、缩略图、电量、时间；禁单反、三脚架、无人机航拍。
- **全段没有一只手去碰那些机器**：P36 慕白把手从履带上「拿开」就是「别动」。

### 本段验证过的写法

- 本段 6 页只用了 **7 次生成**（P36 废一次），四类硬伤之外一律记偏差接受——**这是硬规则 16 的正常成本**，不要回到「下载→裁带→逐带 Read」的重流程。
- **角色的衣服比台词更容易崩**：P36 v1 的苏雀被画成红上衣，原因是 prompt 里只写了「唯一红是发夹」而没有单列 **COLOR LOCK** 段。此后再涉及她，必须写死「深炭蓝近黑、NOT red/maroon/orange，唯一红是发夹」，并把她的定妆稿放参考位第一位。
- **铭牌类特写最容易被印上字**：写「铭牌」就出字，写「空白金属片、有锈、有反光、读不出字」才干净；再叠 `ZERO TYPOGRAPHY` 全段兜住。
- **方口门洞要写成几何**：「flat top edge, straight vertical sides, right-angled corners」三句一起给，才不被画成天然溶洞口或钟乳洞。

### 下一段引线（第二话未收）

- **门后面是什么，本段一个字没给**：只到门口，洞里纯黑。下一段若进去，**第一页不许立刻解释**。
- **工程队是谁没点名**：与 ch01 P46 那道崭新铁丝、采金集团／拆锁工程是否同一伙，**仍刻意不接**；苏昭看到照片会怎么反应、要不要上报山门，也未拍板。
- 慕白那句「三天没回来，我进林子。」仍是**欠条不是保证**；本段他自己那句「头一回不想再来」是新欠的一张，不许由旁白提醒。
- 旧账一仍其旧：那四个人是否康复、那句话（仍不许复述）、堂口墙根水痕、白玉山子的最终处置、苏雀那句「……挖了多深。」、苏昭报的「四处」是否锁在既有的四个下游点。



## 已完成检查点（2026-11-09 · 第二话 P37–P42，回山·问钱段）

**用户口述（已批准正典）**：「回到金龙山，陈默和苏雀汇报了在黑森林谷地发现的东西，苏昭认为，这个事情，首先要找到谁是神秘施工队的幕后老板；苏昭想起李锦鸿，她认为可以靠他的关系，进行暗地的调查；她给李锦鸿打了电话，李锦鸿答应帮忙进行调查。」→ 拆成 `comic/ch02` P37–P42 六页（汇报 → 一张照片 → 问不到 → 他 → 电话 → 等人回话）。**本段是全章第一次从「看现场」转成「查人」**，而且收在「等」上：全段没有任何人提出下一步行动。

### 交付状态（本段已全部完成）

- 六页脚本 `p37.md`–`p42.md` + 六页成图 `p37.jpg`–`p42.jpg`（1024×1536 渐进 JPEG q90），成图记录已逐页回填（参考图实传、roll、接受偏差、口径核对）。
- 正典 **v3.6**（`design-bible.md` 第 33 行，v3.5 之后、`- Canon sheets:` 之前，共 15 条）；`### 道具` 新增 **`li-jia-hong-feng` 李家那只没拆的素红封**（v3.6 ⑧ 的实物）。
- `README.md` / `comic/README.md` 同步（四十二页、P37–P42 六行页表 + 第七段口径段、Roadmap 勾选）。
- 站点 `site/app.js` 加 n:37–n:42（`node --check` 通过）、`index.html` kicker 改「第二话四十二页」并加第七段 `.section-note`。
- 校验：离线 `check_site.py` → pages 126 / ch00 8 / ch01 76 / missing 空 / sheets 15 / thumbs 15。

### 本段口径（新立，往后照此）

- **只带回两样**：手机里的照片 + 一页手画的速记；**谷里那些东西一件都没带回来**（无螺栓、石屑、零件、锈铁、证物袋）。上一段 P36 那个「别动」在这里才真正兑成账。
- **她只问那扇门**：不问机器、不问人、不问元能；只核「是不是方的」「角是不是直的」，看一眼照片就给结论——「这框子，是给门留的。」「他们打算装上去。」；**禁**「秘密基地」「工程」「团伙」「盗墓」「采金」，**禁**元能、山、锁、阵眼。两句心声「他们不是在挖石头。」「他们是在往里走。」只给读者。
- **照片＝读者取景，不是屏幕**：粗颗粒、略歪、黑白、四角微压暗；**禁**手机边框、屏幕黑边、取景框、快门图标、缩略图、相册界面、时间日期水印。手机本体照 v3.5 ⑭：只给背面、扣在柜台上、屏幕一律不入画。
- **否掉自查的理由必须可数**：「我们这张脸，在山里是脸。」「搁到那种桌子上，是招牌。」——理由只许用**身份**，不许「上面有人」「有规矩」「不方便」这类含糊话，也不许在同一页给备选人名。
- **红封**：素红（暗砖红）、通身无字、一直没拆，是 P06 那笔人情的实物；全页唯一暖色；不许礼盒堆、不许贵重物外露。
- **李锦鸿答应得太快**：一句不问是什么事、不问为什么、不问在哪儿，只自己定做法——「暗着来。」「我先不问名字。」「我先问钱。」；挂断前先要回票「这件事办完，我有一件事想请您。」（**新钩子，不许提前用掉**），苏昭只答「先说这件事。」；他的桌上**只许一只杯子**，无文件、无图纸、无电脑平板、无矿石、无安全帽，窗外城市只给一片散光（ch01 P75 那条暗线本段**一个字不露**）。
- **两条边界**：「谷里那扇门，谁也不去。」「告诉他，别进林子。」（苏雀答「他听。」）；「那就换一个人问。」冷、短，不许给备选人名、不许提山门、不许加「小心」。
- **旧木箱收束**：速记纸折进柜台下那只旧木箱，箱里还躺着布包着的白玉（只露布结，玉不裸露、不发光、无金线），合盖一声闷响；心声「箱子里现在有两样。」「一件是从山那边流出来的。」「一件是从山那边挖出来的。」只给读者。
- **本段收在「等」上**：不许出现天亮、车、出发。

### 本段验证过的写法（往后继续用）

- **6 页只用 6 次生成，零作废**（P41 那次失败是参考图链失效，不是 roll）：一次成图 + 整图只读一次 + 四类硬伤才重 roll，这套成本模型继续有效。**不要**回到「下载→裁带→逐带 Read」的重流程。
- **上一页成图作第三参考**：每页都把上一页成图重传后传进参考位（`p36`→P37、`p37`→P38……），这是六页画风没断的唯一原因；定妆稿掉到第三位也不会把画风带偏。
- **方口门洞的几何三连句仍然最稳**：`flat horizontal top edge / straight vertical sides / right-angled corners` + 「洞内是 PURE BLACK SQUARE」一起给，才不被画成天然溶洞口；反过来，只写「doorway」就会得到隧道口。
- **「照片本身」那一格必须显式否定屏幕**：写 `THIS PANEL IS THE PHOTOGRAPH ITSELF — NOT a screen` 并逐项列禁（手机边框、屏幕黑边、取景框、缩略图、日期水印），一次就过。
- **带字风险的格继续用 ABSOLUTE NO-TEXT RULE**：速记纸、红封、木箱都写「零字符、无图例、无数字」；本段纸上仍出过几粒点状痕（不可读，记偏差接受）。
- **苏昭白发**：全程写「100% 全黑 + 低发髻」，六页没有一页被画成银发老妇；苏雀每页单列 COLOR LOCK（深炭蓝近黑、唯一红是发夹），本段她的定妆稿有时在第二位也没串味。
- **定妆稿短链会过期**：`li-jin-hong.png` 的 `AVv3CUbVnK` 这次直接报 `binary[0] is not image`（P41 首次调用整单失败、未出图）。**凡参考位用定妆稿，先把本地 png 现传一次取新链**；`FileBatchUpload` 偶发 `SDK_ERROR -60000`，原样重试一次即成功。

### 下一段引线（第二话未收）

- **门后面是什么，本段仍一个字没给**：只到「他们打算装上去」。真要进去，第一页不许立刻解释。
- **李锦鸿要提的那件事是什么**：本段只给一句回票，谁都不许猜、不许说破；这是新钩子，也是他「把人情换成账」的兑现口。
- **幕后老板是谁**：本段只立问题（谁出的钱、谁派的工、撤的时候谁下的令），答案还没人给；与 ch01 P46 那道崭新铁丝、采金集团／拆锁工程是否同一伙，**仍刻意不接**。
- 慕白那句「三天没回来，我进林子。」仍是**欠条不是保证**；「头一回不想再来」是新欠的第二张。
- 旧账一仍其旧：那四个人是否康复、那句话（仍不许复述）、堂口墙根水痕、白玉山子的最终处置、苏雀那句「……挖了多深。」、苏昭报的「四处」是否锁在既有的四个下游点、要不要上报山门。

## 已完成检查点（2026-11-10 · 第二话 P49–P54，合资·对不上段）

**用户口述（已批准正典）**：「不久，李锦鸿联系苏昭，说他已经确定了当时施工的负责人，但是情况比较复杂，需要面谈，于是他们又到了李锦鸿的别墅；原来，施工的直接负责人，居然是一家跟李锦鸿合作的日本公司，当时是打着合作开发旅游资源的旗号，要在龙潭镇开发一片度假村，但是后来度假村突然被日本公司停止，就烂尾了；更加奇怪的时候，当时的施工地点，根本不可能是黑森林的深谷，这里一定是有人暗箱操作了；李锦鸿试图找当时的施工队负责人，但是却发现早已经人间蒸发，就连当时施工的人都找不到了，估计很多施工的工人，都是没有登记的临时工。苏昭觉得这个问题有点奇怪了，怎么连日本人也扯进来了，这里面一定有更大的阴谋；苏昭和李锦鸿达成了更加紧密的合作关系，这个事情，只能私下处理，否则李锦鸿的公司也会面临很大的麻烦。」

拆成 `comic/ch02` **P49–P54** 六页：确定了（电话只三句、她只说「走。」）→ 不是他的人（日本的公司、旅游度假村旗号）→ 停的时候没有理由（一个电话就暂停）→ **两个地方对不上**（素色地块图上两处）→ 人没了（见过三次、去年秋天、没名单）→ **只能私下办**（三本账、三条边界、门关上）。**这是第二话第二次进那间书房**，仍然没有任何人提出下一步行动。

### 交付状态（本段已全部完成）

- **六份脚本** `p49.md`–`p54.md` + **六页成图** `p49.jpg`–`p54.jpg`（1024×1536 渐进 JPEG q90），每页「## 成图记录」已回填（参考图实传顺序、roll 账、接受偏差、口径核对）。
- **roll 账（本段 7 次生成，6 页）**：P49 `zmP5Hc1Wam` 一次采用；**P50 两次**（v1 `1ZdHhboh06` 作废：苏昭被画成**白高领内搭**；v2 `PrwU2m1oQQ` 采用）；P51 `ZUlcwaJu29` / P52 `wUVmVYnsrx` / P53 `L8VuuLCP78` / P54 `eM9eYeOVkC` 各一次采用。
- **正典 v3.8**（`assets/characters/design-bible.md` 第 35 行，v3.7 之后、`- Canon sheets:` 之前，共 17 条）。
- `README.md` / `comic/README.md` 已同步（五十四页、P49–P54 六行页表 + 第九段口径段、Roadmap 勾选）。
- 站点：`site/app.js` ch02 加到 `n: 54`（54 条，`node --check` 通过）；`index.html` kicker 改「第二话五十四页」并加第九段 `.section-note`（第 13 个）。
- 校验：`check_site.py` → pages **138** / ch00 8 / ch01 76 / missing 空 / sheets 15 / thumbs 15。
- 提交：`comic: add ch02 p49-p54, the ledger that does not add up` / `docs: canon v3.8, a map that does not match` / `site: serve ch02 p49-p54` → push `main` → `wrangler pages deploy site`。

### 本段口径（v3.8 已落盘，这里是摘要）

- **日方口径（硬）**：只说「日本的公司。」「跟我们合作的那家。」——**不给公司名、不给项目名**，**不写日文、不出现国旗、不出现外国文字招牌、不出现名片**；文件夹、批文、地块图、考勤表**一律通身无字**。
- **度假村只给一句旗号**：「说是开发旅游。」「在这边做一个度假村。」；**禁**投资额、地价、面积、工期、房型、效果图、沙盘、宣传册。
- **年份只由他说三个**（二三年签的、二四年动的工、二五年停的），画面里**不许出现任何数字**。
- **地块不符是本段唯一硬证据（P52）**：素色手绘地块图**只有线**（等高线、地界直线、一个小方格井字格），零字零地名零图例无比例尺无指北针无公章；两处之间**不许箭头、虚线、圈、叉**；他的话只到「这两个，不是一个地方。」「批文上写的是镇子外头。」「平的。」——**「暗箱操作」「有人改过」「违规」一个字不许出口**。
- **「停」的原因一个字不给**（禁资金、政策、纠纷、事故、汇率、审批）；**「人没了」不许写失踪**（只许「电话停了。」「地址退了。」「他家里说，搬走了。」）；**工人只许「没名单。」「很多是临时找的。」「一天一结。」，一个工人都不许入画**。
- **「去年秋天」只说一次、无人接**：与 v3.2 白玉山子「去年秋天，龙潭镇路边三百块」是同一个秋天，**不许任何人接、不许拿那块玉对照、不许旁白提示**。
- **苏昭的判断只在心声**（「怎么连他们也进来了。」「这里头还有一层。」「这三个人，一个在外面站着。」）；**全段不许出现「阴谋」二字**。
- **「三本账」只说一次**（「你的钱，他们的地，别人的工人。」「三本账，一本都对不上。」），**复述即违规**。
- **合作只给三条边界**（不进你的公司／也不进我的铺子／这条线上只有三个人）；**禁**握手、签任何东西、交换名片、递钱递卡递信封；**禁**点明第三个人是谁。
- **陈默不进书房**：本段只有 P53 两句心声（「一个都不在册。」「钱是谁结的。」）与一格门外侧影（无脸）。
- **收束**：从走廊侧看——门**关上**、门缝一道暖光（全页唯一暖色）、走廊冷白，陈默门外半步只给侧影。

### 本段验证过的写法

- **苏昭换装是全项目最顽固的失败模式**：P50 v1 被画成白高领内搭。唯一有效的解法不是「少写白衬衫」，而是**正面写死**：`ONE single upper garment`、`collar of the coat touches her jaw`、逐项 FORBIDDEN（白衬衫／白高领／白领边／浅内衬／白袖口／开领／V 领／露锁骨），再加判据句 `If white appears at her neck or wrists the image is wrong.`——这套在本段 P50v2 一次通过，往后每页照写。
- **纸类页面成功的关键是「只许什么」而非「不许什么」**：地块图写成「只许等高线、地界直线、一个方形井字格」＋穷举禁项，一次零字；空白表格写成「表格线可以有、格子必须空」，P53 全空。
- **「门缝一道暖光」必须指定为全页唯一暖色**，否则模型会给走廊补一盏灯、给纸面补一层暖光。
- **手部特写的袖子会单独失守**：P52 第 3 格手腕露出一截浅色袖口（已按偏差接受）。往后写「只给手与袖口」的格，要把 `cuff = same dark grey, NO contrast cuff` 写进该格的句子里，而不只放在整页 LOCK。

### 下一段引线（都还没回收）

- **内鬼是谁**：本段仍不给名字与去向，只把「钱／地／人」三本账摆开。
- **日方那条线的上头**：只留一句心声「这里头还有一层」。
- **李锦鸿那个「请求」**：仍封着（「我那个请求，还留着。」）。
- **审批与施工对不上是谁动的手**、**停下来的「没有理由」背后是什么**、**临时工的钱是谁结的**——全部只立问题。
- 旧账一仍其旧：门后面是什么、谷里出了什么变故、慕白「三天没回来，我进林子。」（欠条）、那四个人是否康复、那句话（仍不许复述）、堂口墙根水痕、白玉山子的最终处置、苏雀那句「……挖了多深。」、苏昭报的「四处」是否锁在既有四个下游点。

### 恢复顺序（下次开工照这个走）

1. `git status`：本段（P49–P54 + 正典 v3.8 + 文档 + 站点）应已提交；工作树除临时文件外应干净。
2. 开下一段（P55 起）：先 `Read comic\ch02\p54.md` 的「## 成图记录」拿画风与参考位，再按用户口述拆页；参考链一律在用前 `FileBatchUpload` 现传本地 png/jpg 取新短链（旧链过期就是 `binary[0] is not image`）。
3. 出图：`image_gen`，`model_version=seedream_5.0_flash`，`width` 与 `height` **都必须显式写 1024 / 1536**；三张参考图按脚本顺序实传（最易被抢特征的定妆稿第一位 + 上一页成图第三）。**验收只读整图一次**，只有格数／角色复制与道具换样／画面文字／参考图串味四类硬伤才作废重出。
4. 入库：`Invoke-WebRequest -Uri <uri> -OutFile <tmp>`（本机 `curl.exe` 不在 PATH）→ `python "C:/Users/WaterZhong/AppData/Local/Temp/t2/enc.py" <src> <dst>`；回填「## 成图记录」，并把新页 `FileBatchUpload` 一次供下一页当第三参考。
5. 文档与站点：正典新版本条插在上一版之后、`- Canon sheets:` 之前 → 两份 README（状态行、页表、该段口径段、Roadmap）→ `site/app.js` 加新 `n:`（改完 `node --check`）→ `index.html` kicker 与 `.section-note`。
6. 校验：`node --check site/app.js` + `python "C:/Users/WaterZhong/AppData/Local/Temp/t2/check_site.py"`（本段基线 pages 138 / ch00 8 / ch01 76 / sheets 15 / thumbs 15、missing 全空；每加一页 +1）。
7. 三次提交（`comic:` / `docs:` / `site:`）→ push `main` → `wrangler pages deploy site --project-name jinlong-shan --branch main --commit-dirty=true --cwd <repo root>`。

**不要做**：不要重出已入库的页；不要为口味重 roll；**不要为「确认」再读一遍图**（不下载裁带、不逐带 Read、不把成图回发给用户当校验）；不要用 `Edit` 大段替换改 canon 与 `site/app.js`（会吞相邻条目和 `const repoUrl`），改完必须 `Select-String` / Grep 复核。
**本机路径缺口**：`git` 与 `curl.exe` 都不在 PATH——`git` 用 `& "C:\Program Files\Git\cmd\git.exe" …`，下载用 `Invoke-WebRequest -Uri … -OutFile …`。
**部署入口（本机都不在 PATH）**：`wrangler` 用 `C:\Users\WaterZhong\AppData\Local\Programs\nodejs\wrangler.cmd`（4.151.1）；`git` 用 `C:\Program Files\Git\cmd\git.exe`；`curl.exe` 不可用，下载走 `Invoke-WebRequest -Uri … -OutFile …`。
