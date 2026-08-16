# Wiki architecture

This repository keeps content, information architecture, visual design, and client-side enhancement behavior separate on purpose.

## Ownership map

```text
docs/.vitepress/config.mts
  site metadata, search, theme configuration only

docs/.vitepress/navigation.mts
  top navigation + contextual sidebar information architecture

docs/.vitepress/theme/tokens.css
  semantic colors, spacing, radius, typography, motion constants

docs/.vitepress/theme/base.css
  reset, document-level safety, focus baseline, overflow primitives

docs/.vitepress/theme/components.css
  VitePress chrome + wiki component visuals

docs/.vitepress/theme/motion.css
  hover/press/reveal/route motion + reduced-motion policy

docs/.vitepress/theme/mobile.css
  adaptive behavior only; no duplicate desktop component ownership

docs/.vitepress/theme/enhancements.ts
  progressive client-side behavior: search shortcuts, copy buttons,
  table accessibility, reading progress, reveal effects

scripts/validate.mjs
  release gate for internal routes and known regression patterns

docs/**/*.md
  player-facing facts and instructions
```

## Invariants

### Navigation

- Never force scroll-to-top after every SPA route change; hash/search-result navigation must remain intact.
- Browser back/forward remains owned by the VitePress router.
- Contextual sidebars keep mobile menus short instead of rendering every category at once.

### Mobile

- Functional from 320 CSS px.
- Interactive targets should provide roughly 44px touch area.
- Search inputs stay at least 16px to avoid mobile input zoom.
- Dynamic search surfaces use `svh` fallback and `dvh` when available.
- Safe-area padding is used for fixed/full-screen mobile surfaces.
- Do not introduce `100vw` for page-width layout.

### Tables

- Comparison tables may scroll horizontally when required.
- A table wrapper becomes a keyboard-focusable `region` only when it actually overflows horizontally.
- Non-overflowing tables must not create an unnecessary Tab stop.

### Motion

- Prefer transform/opacity/color transitions.
- `prefers-reduced-motion` removes nonessential movement.
- Motion is presentation-only and never owns navigation/content state.

### Runtime enhancement safety

- Global event listeners are installed once.
- Resize/Intersection observers are disconnected before replacement.
- scheduled page preparation is generation-guarded and old animation frames are cancelled.
- toast timeouts are cancelled before a new toast is scheduled.
- copy UI reports failure instead of always claiming success.

## Release gate

`npm run docs:check` must pass before `npm run docs:build` in GitHub Actions. The validator currently checks:

- internal Markdown/HTML routes resolve to a page
- unsafe `javascript:` links
- accidental `100vw` theme layout
- unconditional route scroll-to-top regression
- known incorrect Simple Voice Chat key documentation

The production VitePress build is the second gate. A successful build and deploy is necessary but does not replace real-device visual testing on Android/iOS after major UI changes.

## Content rule

Do not duplicate fast-changing runtime data when the game already exposes a more accurate source. Examples:

- exact mod recipe graph → JEI/current server recipe data
- player key assignment → Minecraft key settings
- item buy/sell price → current EconomyCraft UI/config

The wiki explains the interaction model and where to obtain the exact current value, while stable server-specific values may be documented directly.
