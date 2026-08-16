# ZZAPCHO SERVER WIKI — AI maintenance guide

Last reviewed: 2026-08-16

This document is the operating guide for an AI agent that edits, tests, reviews, or deploys this wiki. Read it completely before changing the site. It records the product intent, current server facts, file ownership, writing standard, visual QA contract, regression history, and release procedure.

## 1. Product goal

`https://wiki.zzapcho.kr` is a public player guide, not an internal mod-development wiki.

The primary reader may be a young player who knows how to play Minecraft but does not know Java, Fabric internals, registry IDs, mixins, data packs, or server administration. A page should answer, in this order:

1. What can I do?
2. What do I need?
3. What do I click, press, or place?
4. What happens next?
5. What can go wrong and how do I recover?
6. Where do I go for related information?

The visual direction is minimal and calm, but the content must still be complete. Do not remove useful instructions merely to make a page look shorter. Use headings, compact tables, step cards, and related links to make depth easy to scan.

## 2. Source-of-truth order

Use this order whenever two sources disagree:

1. live server runtime/configuration and observed behavior;
2. current distributed client pack, installed mod JAR data, JEI recipe data, and current key settings;
3. exact upstream source/JAR for the installed version;
4. this wiki;
5. general upstream documentation for another version;
6. memory, guesses, old screenshots, or search snippets.

Never silently turn an assumption into a server fact. If a value has not been verified, say how the player can verify it in game. Fast-changing values such as every recipe, key binding, shop price, or loot weight should point to the current in-game source unless the exact deployed data was inspected.

## 3. Current server baseline

Treat the following as the documented baseline until the owner provides a new runtime snapshot:

| Area | Current value / role |
| --- | --- |
| Game | Minecraft Java 26.2 |
| Loader | Fabric |
| Farmer's Delight | Refabricated `26.2-3.6.15+refabricated` |
| Fishing | Gone Fishing / Go Fish `1.12.0+26.2`, with FactoryTools |
| Vertical slabs | EVS Enchanted Vertical Slabs `2.7.0` |
| Furniture | Skniro's Furniture `1.5.2-26.2-Fabric` |
| Vanilla-style mobs | Friends&Foes `4.0.27` |
| Elytra equipment | Elytra Slot `2.0.0` |
| World generation | Terralith `2.6.4`, Tectonic `3.0.26`, Dungeons & Taverns `5.3.0` |
| Economy | EconomyCraft `1.7.1` |
| Graves | Universal Graves `3.12.0+26.2` |
| Voice | Simple Voice Chat `2.6.22+26.2` |
| Proxy/Discord access | DiscordIO / VelocityDiscord for proxy authentication and whitelist flow |
| Discord chat bridge | Discord Integration Fabric `3.2.0` with a local MC↔Discord chat patch |

Stable economy values currently documented:

| Setting | Value |
| --- | ---: |
| Starting balance | 500 |
| `/daily` reward | 100 |
| Daily sell limit | 5000 |
| Transaction tax | 0.03 (3%) |
| PvP money loss | none |

The inventory-save ticket and cheque are planned ideas only. They must remain visibly marked as planned until runtime deployment is confirmed.

Known issues that must not be hidden:

- Gone Fishing Nether/End loot tables have produced compatibility/parsing warnings on the current server line. Do not promise that every Nether/End catch works until it is tested on the live server.
- Skniro's Furniture has produced data-fixer warnings. Tell players to test important storage across a normal restart and report the furniture name, position, dimension, contents, and before/after state.
- Simple Voice Chat push-to-talk and group keys must not be asserted from an old default. The current Minecraft key settings and the mod settings screen are final.

## 4. Repository map and ownership

```text
README.md                         human-facing project summary
AGENTS.md                         automatic short entry point for AI agents
AI_README.md                      this complete maintenance contract
ARCHITECTURE.md                   concise architecture and invariant reference
package.json / package-lock.json  pinned Node dependency graph

docs/.vitepress/config.mts        metadata, local search, theme configuration
docs/.vitepress/navigation.mts    top navigation and one shared full sidebar
docs/.vitepress/theme/index.ts    theme imports/registration
docs/.vitepress/theme/tokens.css  semantic colors, spacing, radii, type, motion constants
docs/.vitepress/theme/base.css    reset, document safety, focus and overflow primitives
docs/.vitepress/theme/components.css
                                  desktop/base component visuals
docs/.vitepress/theme/motion.css  hover, press, reveal, route motion, reduced-motion
docs/.vitepress/theme/mobile.css  responsive adaptations only
docs/.vitepress/theme/enhancements.ts
                                  progressive runtime behavior and cleanup

docs/**/*.md                      player-facing pages
docs/public/items/*.png           web-safe item textures used by recipe visuals
scripts/validate.mjs              source, link, invariant, and regression checks
scripts/verify-dist.mjs           generated HTML/asset verification
.github/workflows/deploy.yml      GitHub Pages build and deployment
```

Do not move a visual rule into a later stylesheet merely to win the cascade. Find the owning layer and fix it there. `mobile.css` may adapt layout at a breakpoint, but it must not redefine the whole desktop component. If a component needs many unrelated overrides, simplify its base structure first.

## 5. Visual system contract

The old `UI.zip` is a design reference, not code to paste into VitePress. Preserve its useful principles in the current theme:

- align the navigation title, page content, feature cards, and home sections to shared container lines;
- use spacing and radius tokens consistently;
- keep the same component at the same size and position across routes;
- support 320 CSS px without page-level horizontal scrolling;
- do not enforce 320 px with `min-width: 320px` on `html` or `body`; a non-overlay desktop scrollbar can otherwise create a 15–17 px horizontal scroll at the exact breakpoint;
- provide about 44 px for touch targets;
- respect top, right, bottom, and left safe areas on fixed/full-screen mobile surfaces;
- keep text readable, with comfortable but not empty spacing;
- use short, natural transform/opacity/color motion;
- remove nonessential motion under `prefers-reduced-motion: reduce`;
- never hide a layout bug with `100vw` or a global `overflow-x: hidden`;
- avoid duplicated focus rings, nested bright borders, and active-state color rails;
- preserve dark/light contrast for body text, muted text, borders, focus, and selected states.

### Required QA widths

Visually check at least these viewport widths after any theme/navigation change:

| Width | Main purpose |
| ---: | --- |
| 320 | smallest supported phone; recipe stack and long Korean labels |
| 360 | common narrow phone; search with on-screen keyboard assumptions |
| 412 | larger phone; full-screen sidebar and safe-area spacing |
| 768 | tablet transition; cards, tables, local outline |
| 1024 | small desktop/tablet landscape; navigation collision |
| 1440 | full desktop; shared alignment lines and excessive empty space |

At every width check `/`, `/getting-started`, one long guide, `/recipes/`, one wide-table page, and search. A production build is necessary but is not visual evidence.

## 6. Navigation, search, and route behavior

### Navigation

- `navigation.mts` owns one complete sidebar array.
- Every route must expose the same groups and links. Do not swap in a contextual subset.
- Do not add `collapsed` to sidebar groups. The user explicitly wants all document links visible.
- Long labels must wrap inside their link box without clipping borders or creating a horizontal scrollbar.
- The active page uses one calm filled state. Do not restore the VitePress caret-like active rail.
- Page-level `h2` headings become an inline “이 페이지에서” outline. It must use the real heading anchors, contain no fake ordered-list numbering, and not duplicate after SPA navigation.

### Desktop search

- The header search is a compact 44 px action and expands into the search surface only when requested.
- Clear VitePress's default desktop padding around the compact action so it cannot overlap the first navigation link.
- Support `Ctrl/Cmd + K` and `/` unless the user is typing in an editable control.
- Keep query persistence disabled to prevent a stale search after reopening.
- Keep prefix search, bounded fuzzy search, and the small Korean synonym map in `config.mts`.
- The input has one focus treatment on the containing search bar. Never draw a second bright ring on the input itself.

### Mobile search

- The search surface must fit `svh` and `dvh`, including when an on-screen keyboard reduces the viewport.
- Input font size is at least 16 px to avoid mobile zoom.
- Search action buttons keep about 44 px targets and must not squeeze the flexible input to zero.
- Results scroll inside the search surface; the document behind it must not become the accidental scroll target.
- Landscape phones with short height require a compact layout.

### Route safety

- Never call an unconditional `scrollTo({ top: 0 })` after a route change.
- Hash links, inline outline links, browser history, and search-result jumps remain owned by the router/browser.
- Route preparation must be generation-guarded so an old animation frame cannot mutate the new page.

## 7. Mobile sidebar contract

Below 960 px the sidebar is a full-screen navigation surface:

- own `100svh`/`100dvh` height and safe-area padding;
- independent vertical scrolling and contained overscroll;
- accessible hamburger button as the primary control;
- a visible 44 px close control while open;
- swipe right from the left edge to open and swipe left inside to close;
- vertical gestures must remain normal page/sidebar scrolling;
- background document scrolling is locked only while open;
- gesture listeners are installed once and the synthetic click after a completed swipe is suppressed;
- close/open state and `aria-expanded` stay synchronized with the VitePress sidebar class.

Do not depend on gestures as the only way to open or close the menu.

## 8. Tables and horizontal overflow

- Wrap document tables in `.zz-table-shell` at runtime.
- Restore native table layout inside the wrapper; VitePress must not leave a false empty panel.
- A table may be wider than the text column, but only the table shell may scroll horizontally.
- The page itself must not gain horizontal scrolling.
- Add `tabindex="0"`, `role="region"`, and an accessible name only when the shell actually overflows.
- Remove the extra Tab stop again when resizing makes the table fit.
- Use compact and wide table classes based on real column count, not one-off page CSS.

## 9. Motion, focus, and accessibility

- Prefer 140–260 ms transitions using transform, opacity, and color.
- Motion never owns data, route, open/closed state, or focus.
- `prefers-reduced-motion` removes reveal/route movement and keeps state changes immediate.
- Keyboard focus must remain obvious, but one component gets one ring.
- Programmatic focus on the full sidebar must not draw a full-height outline.
- Images need meaningful Korean alt text. Decorative arrows and quantity badges may be `aria-hidden` only when equivalent text is present next to them.
- Headings must be semantic and linkable. Do not simulate page structure with styled paragraphs.
- Buttons and links must have clear accessible names and at least the shared touch target where practical.
- Do not make non-overflowing tables or decorative cards unnecessary Tab stops.

## 10. Runtime enhancement safety

`enhancements.ts` runs inside a VitePress SPA. Treat every page navigation as a potential re-entry.

- Keep the global `installed` guard.
- Install document/window listeners once.
- Disconnect `ResizeObserver`, `IntersectionObserver`, and `MutationObserver` instances before replacing them.
- Cancel obsolete animation frames and guard page preparation with `prepareGeneration`.
- Cancel the previous toast timer before starting another.
- A failed clipboard write must report failure, not success.
- Runtime-generated inline outlines and related-link styling must be idempotent.
- Use progressive enhancement: core links and content must still work if JavaScript fails.

If adding a new runtime feature, document its listener/observer/timer ownership and cleanup before implementing it.

## 11. Player-facing writing standard

Use plain Korean first. Keep English mod/item names where they help JEI search, but explain them immediately.

Preferred wording:

- “도마를 설치하고 재료를 올린 뒤 칼로 우클릭하세요.”
- “키가 다르면 `설정 → 조작키`에서 모드 이름을 검색하세요.”

Avoid:

- registry IDs without a player need;
- implementation terms such as mixin, codec, serializer, or data fixer in the main instruction;
- “알아서”, “그냥”, or vague “사용한다” without the actual input;
- long version badges at the top of every page;
- exact default keys that were not verified in the current client;
- promising planned features as available.

Put version/data-source notes in small text at the bottom unless the version difference is itself the warning. Lead with the action, not the dependency graph.

### Required mod detail-page shape

Deep mod pages should contain, when applicable:

1. short overview and why a player would use it;
2. what is added, grouped by player goal;
3. the real play loop from obtaining the first item to the useful result;
4. left-click, right-click, place, break, sneak, or entity interactions;
5. required keys, GUI, and where to change the key;
6. representative recipes/acquisition paths and how to inspect the full set in JEI;
7. economy connections, including whether items can be sold or create costs;
8. known server-specific issues and honest scope;
9. step-by-step troubleshooting and what evidence to report;
10. related pages.

Do not invent a section only to satisfy the template. Say “전용 키 없음” or “경제 연결 확인 필요” when that is the useful answer.

## 12. Recipe and item-image rules

JEI/current recipe data is the final source for the complete recipe graph. The wiki should deeply explain representative recipes, unusual machines, special world interactions, and the order of use.

Visual recipe rules:

- a crafting table is 3 × 3, nine visible slots;
- use actual Minecraft/mod inventory textures when legally and technically available;
- each result slot contains exactly one `<img>` element;
- output quantity is a separate `.recipe-count` badge, never a second `<img>`;
- the adjacent Korean text also states the quantity so screen-reader users do not depend on a decorative badge;
- target `.recipe-result-icon` and the text wrapper separately in CSS; never use a broad `.recipe-result span` selector;
- center images with pixelated rendering and `object-fit: contain`;
- at 420 px and below, stack recipe → arrow → result vertically.

Animated Minecraft PNGs need special handling. A mod texture may be a vertical sprite sheet plus `.png.mcmeta`. Minecraft shows one frame at a time, but a browser shows every frame at once. For web assets, extract one correct square frame and keep the quantity as HTML. `gofish-blaze-rod.png` is intentionally a single 16 × 16 browser frame even though the upstream texture is 16 × 32.

Before adding a recipe:

1. inspect the exact installed recipe JSON or JEI output;
2. verify shaped versus shapeless placement and output count;
3. inspect PNG dimensions and animation metadata;
4. render the page at 320, 412, and desktop width;
5. confirm there is one result image, a separate quantity badge, and readable text.

## 13. Content coverage map

Use these routes instead of creating near-duplicate pages:

- `/getting-started` — client preparation, access/authentication, first login;
- `/quick-reference` — urgent commands and short recovery steps;
- `/guide/vanilla-differences` — high-level Vanilla++ differences;
- `/guide/farming-cooking` and `/guide/cooking-catalog` — tools, interactions, cooking sequence, representative dishes;
- `/guide/fishing` and `/guide/fishing-catalog` — beginner loop, rods, fish conditions/weights, known loot warnings;
- `/guide/building` and `/guide/building-catalog` — vertical slabs, furniture categories, placement and storage cautions;
- `/guide/exploration` and `/mods/worldgen` — terrain, biomes, structures, old/new chunks;
- `/guide/survival` — graves, death recovery, equipment consequences;
- `/mods/*` — per-mod details and server-specific behavior;
- `/recipes/` — JEI use and representative/special recipes;
- `/controls/` — keys and how to resolve conflicts;
- `/commands/` — player commands by purpose;
- `/economy/` — values, selling, orders, tax, planned features;
- `/community/` — Discord authentication/chat and voice entry points;
- `/troubleshooting/` — symptom-first recovery and known issues;
- `/changelog/` — meaningful player-visible changes.

When adding a page, add it to the shared sidebar and link it from the most relevant parent/detail pages. Avoid isolated pages.

## 14. Local workflow on Windows

Use `npm.cmd` if PowerShell blocks the `npm.ps1` shim.

```powershell
cd C:\Users\kdy20\Desktop\serverWiki
npm.cmd ci
npm.cmd run docs:check
npm.cmd run docs:build
npm.cmd run docs:verify
npm.cmd run docs:dev
```

For production-like visual QA:

```powershell
npm.cmd run docs:preview -- --host 127.0.0.1
```

Keep VitePress pinned at `2.0.0-alpha.19` and commit `package-lock.json`. Do not replace `npm ci` with an unlocked install in CI.

### Safe edit sequence

1. inspect `git status` and preserve unrelated user changes;
2. reproduce the issue in the browser and record route, theme, viewport, and state;
3. identify the owning file/layer;
4. make the smallest coherent structural fix;
5. run source checks early;
6. build and verify generated output;
7. run browser QA across the required matrix;
8. inspect the diff for accidental content/style changes;
9. commit and push only when requested;
10. wait for GitHub Pages success and reopen the production URL with cache busting.

## 15. Browser QA checklist

### Home

- feature cards and the first custom section have a clear vertical gap;
- no card/heading overlap at 320–1440 px;
- hero, cards, and sections share container lines;
- desktop spacing does not feel empty and mobile actions fill naturally.

### Search

- the compact header control is centered and does not overlap navigation;
- opening via click, `Ctrl/Cmd + K`, and `/` works;
- fuzzy/prefix and Korean synonym queries return useful results;
- one focus treatment only;
- 320/360 px input remains usable;
- results scroll internally with a simulated short/keyboard viewport;
- closing and reopening starts without a stale query.

### Sidebar

- all groups and links are visible on every route;
- active link text and border are not clipped;
- full-screen mobile menu opens/closes by button and gesture;
- vertical scroll remains usable;
- background is locked only while open;
- route selection closes/navigates cleanly.

### Documents

- inline outline contains real heading links and no broken numbering;
- hash navigation lands on the selected heading;
- browser Back returns to the expected position;
- long Korean/English names wrap without escape;
- light/dark text and focus contrast remain readable.

### Tables and recipes

- wide tables scroll inside their shell only;
- the document has no horizontal page scroll;
- only overflowing tables are keyboard regions;
- recipe ingredients are centered;
- result icon and text align vertically;
- animated texture sheets do not show multiple frames;
- output quantity badge does not replace or duplicate the item image.

## 16. Automated release gates

Run all four commands before release:

```powershell
npm.cmd ci
npm.cmd run docs:check
npm.cmd run docs:build
npm.cmd run docs:verify
```

`docs:check` protects internal routes and known design/runtime regressions. Extend it when a bug is concrete, cheap to detect, and likely to recur. It currently guards route links, unsafe links, page-width patterns, search/sidebar invariants, old voice-key claims, recipe result structure, and the single-frame Blaze Rod browser texture.

`docs:verify` validates generated HTML and assets. Passing both does not replace browser or real-device testing.

## 17. Deployment

Pushing `main` starts `.github/workflows/deploy.yml`:

```text
checkout
→ Node 24 + locked npm cache
→ npm ci
→ docs:check
→ docs:build
→ docs:verify
→ Pages artifact
→ GitHub Pages deploy
```

Do not report completion immediately after `git push`. Verify:

1. the matching GitHub Actions run reaches success;
2. the deployment job publishes the Pages environment;
3. `https://wiki.zzapcho.kr` serves the new commit, preferably with a cache-busting query;
4. the originally broken route/state is visually fixed in production;
5. leave the browser on a useful production page and restore a normal viewport.

## 18. Regression history: do not reintroduce

- nested green focus borders in search;
- desktop search padding overlapping the first navigation item;
- context-dependent sidebars that hide most pages;
- collapsible sidebar groups when the required behavior is always visible;
- an active-link color rail that looks like clipped text or a broken border;
- mobile menu too narrow for its labels;
- page scrolling behind an open mobile menu or search surface;
- forced scroll-to-top that breaks hashes/search-result jumps;
- runtime outlines duplicated after repeated SPA navigation;
- every table receiving a Tab stop even when it fits;
- broad `.recipe-result span` styling that moves the icon and count;
- a vertical animated sprite sheet rendered as two item images;
- old hard-coded Simple Voice Chat key assumptions;
- technical version strips dominating the home page or the top of player guides;
- CSS files repeatedly overriding the same component without clear ownership.

## 19. Definition of done

A change is complete only when all applicable items are true:

- the reported issue was reproduced or its concrete cause was proven;
- player-facing behavior and facts match the best available source;
- CSS/behavior lives in the correct ownership layer;
- keyboard, touch, light/dark, reduced-motion, and overflow risks were considered;
- the required local gates pass from a locked install;
- browser QA covers the original state and the required widths in proportion to the change;
- related content/navigation links remain complete;
- the diff contains no unrelated user work;
- if deployment was requested, Actions and the production URL were verified;
- the final report distinguishes automated checks, browser checks, and anything that still needs a physical Android/iOS device.

Never say “perfect” merely because the build passed. Report what was actually tested and state the remaining real-device boundary honestly.
