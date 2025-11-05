# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15+ marketing website for PISTON, a professional-grade engine simulation software. The site is built for static export and deployment to Cloudflare Pages.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build (outputs to /out directory)
npm run build

# Preview production build locally
npm run start

# Lint code
npm run lint
```

## Architecture

### Framework & Build Configuration

- **Next.js 15+ App Router** with static export mode (`output: 'export'`)
- **Deployment target**: Cloudflare Pages (requires static export)
- **Build output**: `/out` directory
- **Images**: Unoptimized (required for static export)
- **Routing**: Trailing slashes enabled for better static hosting compatibility

### Project Structure

```
pistonsim.com/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font loading
│   ├── page.tsx           # Landing page (client component)
│   ├── features/          # Features page
│   └── globals.css        # Global styles, CSS variables, utilities
├── components/            # Reusable React components
│   ├── Header.tsx         # Fixed navigation with mobile menu
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # CTA buttons
│   ├── Card.tsx           # Content cards
│   ├── FeatureCard.tsx    # Feature showcase cards
│   └── Metric.tsx         # Statistics display
└── public/                # Static assets
```

### Design System

All design tokens are defined in `tailwind.config.ts` and `app/globals.css`:

**Color Palette**:
- Background: Pure black (#000000) with slight elevation (#0a0a0a, #111111)
- Accent: Cyan-blue primary (#0693e3), darker secondary (#0171a9), bright tertiary (#00d4ff)
- Text: White primary (#ffffff), gray secondary (#999999), muted tertiary (#666666)
- Borders: Subtle (#1a1a1a) with hover state (#333333)

**Typography**:
- Display/Headings: JetBrains Mono (monospace, technical aesthetic)
- Body: Inter (clean, readable)
- All fonts loaded via Google Fonts CDN in `globals.css`
- Font variables: `--font-inter`, `--font-jetbrains-mono`

**Visual Style**:
- Bold typography with high contrast
- Dashed borders (`border-2 border-dashed border-border`)
- Framer Motion animations for page elements
- Responsive design with mobile-first approach
- Design inspired by Nous Research, Nothing Tech, and MSCHF

### Key Technical Patterns

**Client Components**: All interactive components use `'use client'` directive (Header, page.tsx, etc.)

**Animations**: Framer Motion is used throughout for:
- Page load animations (`initial`, `animate`, `transition`)
- Scroll-triggered animations (`whileInView`, `viewport: { once: true }`)
- Mobile menu transitions (`AnimatePresence`)

**Styling Conventions**:
- Tailwind CSS utility classes
- Custom utilities in `globals.css`: `.text-cyan`, `.glow-cyan`, `.container-custom`
- Semantic color classes from Tailwind config: `text-accent-primary`, `bg-background-secondary`

**Component Props Pattern**:
- Buttons accept `href`, `variant`, `size`, `external` props
- Cards typically use icon + title + description structure

## Important Constraints

1. **Static Export Only**: All pages must be compatible with `output: 'export'`. No server-side rendering, no API routes, no dynamic routes with getServerSideProps.

2. **Image Optimization**: Images are set to `unoptimized: true`. Use standard `<img>` tags or ensure Next.js Image component works with this constraint.

3. **GitHub Links**: Many GitHub links are placeholder (`https://github.com`). Update these with actual repository URLs when available.

4. **Font Loading**: Fonts are loaded both via Google Fonts CDN (@import in globals.css) and Next.js font optimization (layout.tsx). This dual approach ensures fonts work in static export.

5. **Responsive Container**: Use `.container-custom` class for consistent max-width (1280px) and responsive padding.

## Deployment Notes

- Build command: `npm run build`
- Output directory: `out`
- Auto-deploys on push to main branch (when connected to Cloudflare Pages)
- No environment variables required for basic deployment

## Code Style

- TypeScript strict mode
- Functional components with hooks
- Explicit return types for TypeScript components
- Descriptive component and prop names
- Comments are minimal - code should be self-documenting
