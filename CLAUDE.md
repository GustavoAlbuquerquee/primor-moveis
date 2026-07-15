# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Run prisma generate, then build for production
npm run start    # Start production server
npm run lint     # Run ESLint via next lint
```

After schema changes, regenerate the Prisma client:
```bash
npx prisma generate
npx prisma db push   # or prisma migrate dev for named migrations
```

## Architecture

This is a **Next.js 15 (App Router)** website for Primor Móveis, a furniture company in Belo Horizonte, Brazil. UI is written in Portuguese.

### Styling system

All component styles use **styled-components** (not CSS modules or Tailwind). The central theme is in [`src/styles/theme.ts`](src/styles/theme.ts) — colors, fonts, breakpoints, and spacing. Each component has a co-located `styles.ts` file (e.g. `src/components/Header/styles.ts`) that exports styled components imported as `import * as S from "./styles"`.

Because styled-components requires SSR setup in the App Router, [`src/lib/registry.tsx`](src/lib/registry.tsx) wraps the tree in a `StyleSheetManager` for server-side style injection. [`src/app/providers.tsx`](src/app/providers.tsx) wraps children with `ThemeProvider` and global styles.

### Pages and routing

- `/` → [`src/app/page.tsx`](src/app/page.tsx) — home, assembles `HeroSlider`, `LegacySection`, `Reviews`, `Contact`. `HeroSlider` is lazy-loaded (`dynamic`, SSR disabled) to avoid hydration issues.
- `/sobre` → company history page
- `/projetos` → public portfolio gallery (`ProjectGallery.tsx` fetches from `/api/projects` via a separate public endpoint)
- `/contato` → contact form page
- `/admin/login` → admin login form (session-based)
- `/admin/dashboard` → protected CMS for managing portfolio projects

### Auth / session

Admin area is protected by [`src/middleware.ts`](src/middleware.ts) using **iron-session** (cookie name: `primor-admin-session`). The session requires `SESSION_SECRET` env var. Routes that need admin checks re-validate the session server-side as well.

### API routes

| Route | Purpose |
|---|---|
| `POST /api/login` | Validates admin credentials, sets iron-session cookie |
| `GET/POST /api/projects` | List / create projects (admin-only) |
| `PUT/DELETE /api/projects/[id]` | Update / delete a project (admin-only) |
| `POST /api/upload` | Uploads image to **Vercel Blob** (`BLOB_READ_WRITE_TOKEN`) |
| `POST /api/send-email` | Sends contact form email via **Resend** (`RESEND_API_KEY`) |
| `GET/POST /api/chatbot` | AI chatbot using **Google Gemini** (`GEMINI_API_KEY`) |

### Database

Single PostgreSQL database via **Prisma**. The only model is `Project` (id, name, description, imageSrc, category, createdAt, updatedAt). Connection string: `DATABASE_URL` env var.

The Prisma client singleton lives in [`src/lib/prisma.ts`](src/lib/prisma.ts) and uses `globalThis` to avoid creating multiple instances in dev hot-reload.

### Environment variables required

```
DATABASE_URL
SESSION_SECRET
RESEND_API_KEY
GEMINI_API_KEY
BLOB_READ_WRITE_TOKEN
```

### Fonts

Montserrat (headings, weight 700/900) and Lato (body, weight 400/700) loaded via `next/font/google`, exposed as CSS variables `--font-montserrat` and `--font-lato`.
