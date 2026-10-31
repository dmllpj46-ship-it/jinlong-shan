# AGENTS.md

Guidance for AI agents working in this repo.

## What this is

A Japanese-manga-style Eastern fantasy comic, working title **金龙山 / JINLONG SHAN**. The repo holds the world bible, character design anchors (not yet drawn), storyboards and finished pages.

## Hard rules

1. **`assets/characters/*.png` are the canon.** Never redesign, recolor or restyle an existing character without explicit user approval. A changed design ships as a new versioned sheet (e.g. `lead-v2.png`) plus an update to `assets/characters/design-bible.md`.
2. **Match the locked art direction** in the design bible for every new image. Reuse the style block verbatim.
3. **Keep the never-change list intact** for each character: signature props, hair, eyes, silhouette, palette.
4. **Comic pages are exactly 4 panels** unless the user explicitly approves another layout. Start every page prompt with “exactly 4 panels”. No photorealism, no 3D-render look.
5. **No text baked into generated images.** Lettering, sound effects and titles are added in post. Image models render text unreliably.
6. **One generation pass per asset.** Do not loop, do not regenerate for minor taste differences. Accept the result, note deviations, move on. Token/credit budget matters here.
7. **Don't overwrite an anchor.** Add a versioned file instead.
8. **No canon faces before 定妆.** Until a character sheet exists, only silhouettes, back views, hands or atmosphere may be generated. Never invent a protagonist's face, name or palette and treat it as canon.
9. **Story canon lives in `assets/characters/design-bible.md` and `README.md`.** New plot facts, faction names or world rules need explicit user approval before they are written as canon.

## Image workflow

- Tool: `ImageGen`. Use character sheets as identity references; label them in the prompt (“the first image is the identity reference; keep face, hair, costume and palette unchanged”).
- New character sheets: 1024x1536, same reference-sheet layout as the design bible specifies.
- Comic pages: 1024x1536 portrait (or 1536x1024 for wide establishing shots), four-panel layout, same ink/screentone style.
- Style continuity: when drawing page N, pass page N−1 as an additional reference image to lock linework, screentone density and palette.
- Save to `assets/characters/<slug>.png` for sheets, `comic/chNN/pNN.png` for pages (2-digit chapter, 2-digit page). `ch01` = chapter 1.
- Cover art lives at `assets/cover.png`: art only, with a calm band left clear at the top so the HTML title can sit over it. Until characters are locked, covers contain no characters.
- After generating, copy the final file into the repo; do not commit the raw `vibe_images/` output folder.

## Character slugs

Current slots: `lead`, `partner`, `rival`, `guide`, `dragon`. These are placeholders. When a character is locked, replace the slot with a real kebab-case slug (e.g. `shen-yan`), add the sheet, and update the design bible, README cast table and `site/app.js`.

`dragon` is a non-human anchor: a wide scene sheet, not a character sheet. Its never-change list binds every frame that shows the mountain or the dragon.

## Writing tone

- Story text: cinematic, terse, present tense. Chinese prose with English names/slugs in the docs where useful.
- No lore dumps in the README; the README is a pitch, the design bible is the spec.
- Page scripts (`pNN.md`) are production documents: scene, four-panel breakdown, dialogue/SFX, drawing notes. They are not prose chapters.

## Website

- `site/` is a static reader with no build step: `index.html`, `styles.css`, `app.js`.
- Local preview: run `python -m http.server` at the repo root and open `/site/`. The hero falls back to `../assets/cover.png` when the raw URL is not yet live, so serving from the repo root is required.
- **Images are never copied into `site/`.** They are referenced as `raw.githubusercontent.com/dmllpj46-ship-it/jinlong-shan/main/...`, with a jsDelivr fallback in `app.js`. Pushing to `main` updates art immediately; only HTML/JS/CSS changes need a redeploy.
- Adding a page: commit `comic/chNN/pNN.png` + `pNN.md`, add an entry to the `pages` array in `site/app.js`, then redeploy.
- When a character is locked: add `assets/characters/<slug>.png`, a 4:5 `thumbs/<slug>.jpg` crop, and the matching entry in the `cast` array in `site/app.js`.
- Keep the `slots` array until every slot has been replaced by a locked character.
- Deploy command (Cloudflare Pages project to be created on first deploy):
  `wrangler pages deploy site --project-name jinlong-shan --branch main --commit-dirty=true --cwd <repo root>`

## Commits

- Conventional-ish messages: `docs: ...`, `world: ...`, `art: add <character> sheet`, `comic: add ch01 p01`.
- Commits from this machine use `test@test.com` (set locally, not globally) and the project name as author.
