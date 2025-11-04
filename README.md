# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
# svelte-simple-ui — docs demo

This workspace contains a production-ready static documentation website scaffold for the upcoming `svelte-simple-ui` library. The site intentionally does not import the real library; instead it provides a set of local UI primitives under `src/lib/ui/*` used to preview and demo components.

What's included

- SvelteKit with `@sveltejs/adapter-static` and `mdsvex` for `.svx` pages.
- Local UI primitives: Button, Card, CodeBlock, ThemeToggle, Nav, etc. under `src/lib/ui`.
- A basic build-time search index generator at `scripts/build-search.js` that writes `static/search-index.json`.
- Motion via `@motionone/svelte` with respect for `prefers-reduced-motion`.

Getting started

1. Install deps:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

3. Build static site and search index:

```powershell
npm run build:search; npm run build
```

Deploy

- GitHub Pages: configure the static output from `build` (by default SvelteKit's adapter-static writes to `build`).
- Vercel: connect the repo and use `npm run build` as the build command.

Notes

- The site is intentionally minimal and the primitives are small and replaceable — expand them to match the final library design.
- If your project is on a non-NTFS or unusual filesystem (removable drives, network mounts), you may need to scaffold/build on a local NTFS path due to Windows ACL limitations.

*** End of README ***
