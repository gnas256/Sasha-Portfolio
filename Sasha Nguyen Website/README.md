# Sasha Nguyen — Portfolio Website

A modern portfolio website built with React + Vite + Tailwind CSS, originally designed in Figma Make.

## Tech Stack
- **React 18** + TypeScript
- **Vite 6** (build tool)
- **Tailwind CSS 4** (styling)
- **React Router 7** (routing)
- **Motion** (animations)
- **shadcn/ui** components (Radix UI)

## Pages
- `/` — Home (Hero, About, Featured Work, Process, Logos, Contact)
- `/portfolio` — Full project grid with filtering
- `/resume` — Skills, experience, education
- `/case-study/:slug` — Detailed project case studies

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to vercel.com → "Add New Project"
3. Import your GitHub repo
4. Framework: Vite (auto-detected)
5. Click Deploy → get your live URL in ~60 seconds

## Customisation
- **Your info**: Edit `src/app/data/projects.ts` for project data
- **Hero text**: Edit `src/app/components/home/HeroSection.tsx`
- **Resume**: Edit `src/app/pages/Resume.tsx`
- **Colors/theme**: Edit `src/styles/theme.css`
- **Images**: Replace placeholder images — search for `figma:asset` references that now show placeholder SVGs

## Notes on Images
The original Figma Make file used `figma:asset/` imports for Figma-hosted images. These now render as purple placeholder SVGs. To use your own images:
1. Add image files to `src/assets/`
2. Import them: `import myImg from '../assets/my-image.jpg'`
3. Replace placeholder imports in `HeroSection.tsx`, `Navigation.tsx`, `LogoSection.tsx`, `Resume.tsx`
