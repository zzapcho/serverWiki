# ZZAPCHO SERVER WIKI

Official player-facing wiki for ZZAPCHO SERVER.

- Site: https://wiki.zzapcho.kr
- Stack: VitePress 2 alpha + GitHub Pages
- Game: Minecraft Java 26.2 / Fabric
- Content: onboarding, Vanilla++ guides, mod interactions, recipes/JEI, controls, commands, economy, Discord/Voice, troubleshooting, changelog

## Local commands

```bash
npm install
npm run docs:check
npm run docs:dev
npm run docs:build
npm run docs:preview
```

`main` is deployed automatically through GitHub Actions. The deploy job runs the static validation gate before the production VitePress build.

## Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md). The theme deliberately separates semantic tokens, base rules, components, motion, and mobile overrides so the same selector is not owned by multiple unrelated files.

## Content accuracy

For values that can change with a mod/server update, the source-of-truth order is:

1. live server/runtime configuration
2. distributed client settings and JEI data
3. this wiki
4. general upstream mod documentation

Planned server features must be marked as planned until actually deployed.
