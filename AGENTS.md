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

16. **成图验收要省 token——看一眼就判，不要逐带核对。** 每次出图只读返回的那张整图一次，**不再做「下载 → 裁三带 → 逐带 Read」** 的重流程（P71–P75 前半段是这么干的，一页多烧十几倍 token）。只有四类硬伤才值得再看细节并**作废重出**：① 格数溢出或多格 ② 同一角色被复制／手里的道具换样 ③ 画面里出现文字 ④ 参考图串味（定妆稿站姿、他人特征、画风断层）。其余（光影分布、表情幅度、手的角度、衣褶、小道具位置）一律记为偏差直接接受，**不为口味重 roll**。对应的「成图记录」也写短：参考图顺序、roll 次数、3 条以内偏差、口径核对一行。

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

