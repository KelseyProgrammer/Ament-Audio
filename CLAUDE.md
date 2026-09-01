@AGENTS.md

# AMENT AUDIO — Next.js Site

## Project Overview
Marketing/store site for Ament Audio VST plugins, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Deployed on Netlify.

## Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + inline styles (no CSS modules)
- **Font:** Abril Fatface (via `next/font/google`) for display headings — loaded as CSS variable `--font-abril`
- **Deployment:** Netlify (`netlify.toml` at root)

## Key Files
- `app/layout.tsx` — root layout; renders GIF background (`public/background.gif`), dark overlay, and font variable
- `app/globals.css` — base styles for bg-gif, overlay, and content layering
- `app/page.tsx` — homepage with hero + plugin card grid
- `app/freecoder/page.tsx` — FREECODER product page (features, video, buy/trial, specs)
- `public/background.gif` — looping background GIF converted from `AMENTAUDIOVISUAL2.mp4` (15fps, 1280px wide)

## Design System
- **Background:** Full-screen looping GIF + `rgba(0,0,0,0.55)` overlay on every page
- **Plugin pages** add a second `rgba(8,8,10,0.88)` background on their content div for readability
- **Accent color:** `#39ff6a` (neon green) — used on FREECODER page; future plugins should get their own accent
- **Logo/hero font:** Abril Fatface via `var(--font-abril)`; body/UI uses `'Courier New', monospace` on plugin pages
- **Logo color:** White (`#fff`) — neutral premium; per-plugin accent colors are scoped to their own pages

## Plugins
| Plugin | Price | Status | Link |
|--------|-------|--------|------|
| FREECODER | $29 | Live — `/freecoder` | Gumroad: `chrisament.gumroad.com/l/klogc` |
| HALATION | $19 | Live — `/halation` | Gumroad: `chrisament.gumroad.com/l/qefky` |
| LIMINAL | $19 | Live — `/liminal` | Gumroad: `chrisament.gumroad.com/l/cvbgso` |
| COMPLETE SUITE | $49 (was $67) | Live — banner + card on homepage | Gumroad: `chrisament.gumroad.com/l/mfjac` |

## Design Tokens (globals.css `:root`)
- **Type scale:** `--text-xs/sm/base/md/lg/xl/2xl` (0.65–1.6rem) — inline styles must use these, not raw rem values (hero/banner display sizes may use `clamp()`)
- **Ink:** `--ink-100/70/50/35` (white alpha ladder); **hairlines:** `--line-faint/line/line-strong`
- **Tracking:** `--track-sm/md/lg` (0.08/0.15/0.25em)
- **Audio previews:** cards use `AudioPreview` (dry/wet A/B); clips live at `public/audio/<plugin>-{dry,wet}.mp3` (~10s). The control hides itself automatically if clips are missing.
- **Motion:** `VideoBackground` renders a static radial-gradient fallback under `prefers-reduced-motion`

## Conventions
- All pages are `"use client"` (event handlers used for hover states)
- Plugin cards on homepage use `price` + `link` fields; internal pages use `<Link>`, external use `<a>`
- Section labels: `0.65rem`, `letterSpacing: 0.3em`, muted color (`#888`)
- Body text minimum: `#ccc` / `#d4d4d4` for readability over GIF background
