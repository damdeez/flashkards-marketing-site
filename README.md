# Flashkards marketing site

The static site for [flashkards.app](https://flashkards.app): Home, Privacy and Support. Built with Astro and served from Cloudflare Workers static assets.

- Design: the "Marketing site" page in the Flashkards Redesign Figma file.
- Colours mirror the app's `lib/theme/themePalette.ts`, as CSS variables in `src/styles/global.css`.
- App screenshots in `src/assets` are 2x exports from Figma.
- Shared values such as the support email and App Store URL live in `src/site.ts`.

## Commands

| Command | What it does |
| --- | --- |
| `bun install` | Install dependencies |
| `bun run dev` | Start the dev server at http://localhost:4321 |
| `bun run build` | Build the static site into `dist/` |
| `bun run preview` | Preview the build locally |
| `bun run cf:dev` | Build, then serve it with Wrangler as Cloudflare would |
| `bun run deploy` | Build and deploy with Wrangler |

## Deploys

Cloudflare Workers Builds is connected to this repo: every push to `main` runs `bun run build` and then `npx wrangler deploy` to flashkards.app. Pull requests get a preview URL. Builds and deployments are listed in the Cloudflare dashboard under **Workers & Pages → flashkards-marketing-site**.
