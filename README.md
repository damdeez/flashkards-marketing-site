# Flashkards ⚡️ marketing site

The static site for [flashkards.app](https://flashkards.app): Home, Privacy and Support. Built with Astro and served from Cloudflare Workers static assets.

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
