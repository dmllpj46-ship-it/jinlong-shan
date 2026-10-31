# AGENTS.md

Guidance for AI agents working in this repo.

## What this is

A Japanese-manga-style Eastern fantasy comic, working title **金龙山 / JINLONG SHAN**. The repo holds the world bible, locked character and location design anchors, storyboards and finished pages.

## Hard rules

1. **`assets/characters/*.png`, `assets/creatures/*.png` and `assets/locations/*.png` are the canon.** Never redesign, recolor or restyle an existing character, creature or location without explicit user approval. A changed design ships as a new versioned sheet (e.g. `shen-heng-v2.png`) plus an update to `assets/characters/design-bible.md`.
2. **Match the locked art direction** in the design bible for every new image. Reuse the style block verbatim.
3. **Keep the never-change list intact** for each character: signature props, hair, eyes, silhouette, palette.
4. **Comic pages are exactly 4 panels** unless the user explicitly approves another layout. Start every page prompt with "exactly 4 panels". **The four panels are never an equal 2×2 grid**: every page has one dominant panel (a full-width top or bottom band, or a full-height side column) that carries the beat, at least one diagonal gutter, and one panel bleeding off the page edge. Write the per-page layout into the script's 绘制备注 before generating. No photorealism, no 3D-render look.
5. **No text baked into generated images.** Lettering, sound effects and titles are added in post. Image models render text unreliably.
6. **One generation pass per asset.** Do not loop, do not regenerate for minor taste differences. Accept the result, note deviations, move on. Token/credit budget matters here.
7. **Don't overwrite an anchor.** Add a versioned file instead.
8. **No canon faces for undesignated characters.** 沈珩、陈默、苏昭、苏雀 are locked. Until a new character has a sheet, only silhouettes, back views, hands or atmosphere may be generated. Never invent a new canon face, name or palette and treat it as canon.
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

## Image workflow

- Tool: `ImageGen`. Use character sheets as identity references; label them in the prompt (“the first image is the identity reference; keep face, hair, costume and palette unchanged”).
- New character sheets: 1024x1536, same reference-sheet layout as the design bible specifies. Creature sheets: also 1024x1536, full body plus head/scale/sealed-context detail panels. The 金龙 ultimate-form sheet uses the creature-style four-panel layout and passes the male lead sheet plus the mountain anchor.
- Comic pages: 1024x1536 portrait (or 1536x1024 for wide establishing shots), four-panel layout, same ink/screentone style.
- Style continuity: when drawing page N, pass page N−1 as an additional reference image to lock linework, screentone density and palette.
- Save to `assets/characters/<slug>.png` for character sheets, `assets/creatures/<slug>.png` for creature sheets, `assets/locations/<slug>.png` for location anchors, `comic/chNN/pNN.jpg` for pages (2-digit chapter, 2-digit page). `ch01` = chapter 1.
- Character sheets: 1024x1536. Location anchors: 1536x1024.
- Cover art lives at `assets/cover.png`: art only, with a calm band left clear at the top so the HTML title can sit over it. The current cover contains no characters; if a future cover includes them, use the locked sheets and keep the top band clear.
- After generating, copy the final file into the repo; do not commit the raw `vibe_images/` output folder.

## Character slugs

Locked: `shen-heng`（前世）, `chen-mo`（今生）, `su-zhao`（女主）, `su-que`（女主师妹）, `jin-long`（男主终极形态）. Creature: `chi-mang`（赤蟒）. Location anchor: `jinlong-shan`.

Supporting roles are not named yet. Add a slot only when the story needs one, and lock it with a sheet before it gets a canon face.

`chi-mang` is a creature anchor, not a human. The full body is allowed only on its design sheet; story pages reveal fragments until the story's late act.

`jin-long` is a form anchor, not a separate character. It is drawn only for the ancient battle and the late-act transformation; in every other frame the dragon stays as gold vein, crack, lamp light or reflection.

`shifu` is an undesignated supporting role: the Taiqing Palace master, 沈珩 and 苏昭's teacher. He dies in the prologue. Only back views, hands, wide sleeves, the bronze bell and half a sword may be drawn; never a canon face and never an invented name. 苏昭's past look uses her locked sheet for face and props but with no white streak, black hair and sect robes.

`jinlong-shan` is a location anchor: a wide scene sheet, not a character sheet. Its never-change list binds every frame that shows the mountain.

## Writing tone

- Story text: cinematic, terse, present tense. Chinese prose with English names/slugs in the docs where useful.
- No lore dumps in the README; the README is a pitch, the design bible is the spec.
- Page scripts (`pNN.md`) are production documents: scene, four-panel breakdown, dialogue/SFX, drawing notes. They are not prose chapters.

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
