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

# Fix linting issues automatically
npm run lint:fix

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Generate test coverage report
npm test:coverage

# Type checking without emitting files
npm run type-check

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
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
│   ├── about/             # About page
│   ├── error.tsx          # Error boundary page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles, CSS variables, utilities
├── components/            # Reusable React components
│   ├── Header.tsx         # Fixed navigation with mobile menu
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # CTA buttons
│   ├── Card.tsx           # Content cards
│   ├── FeatureCard.tsx    # Feature showcase cards
│   ├── Metric.tsx         # Statistics display
│   ├── ErrorBoundary.tsx  # React error boundary
│   ├── MotionProvider.tsx # Framer Motion lazy loading wrapper
│   └── AccessibleMotion.tsx # Motion components with a11y support
├── lib/                   # Utility functions and shared code
│   ├── animations.ts      # Framer Motion animation variants
│   ├── icons.ts           # React Icons exports
│   ├── types.ts           # TypeScript types and constants
│   ├── validation.ts      # Input validation utilities
│   ├── reducedMotion.ts   # Accessibility motion detection
│   └── polyfills.ts       # Browser polyfills
├── __tests__/             # Jest test files
│   └── components/        # Component tests
├── functions/             # Cloudflare Pages Functions (serverless)
│   └── api/
│       └── newsletter.ts  # Newsletter signup handler
├── public/                # Static assets
└── jest.config.js         # Jest test configuration
```

### Serverless Functions (Cloudflare Pages Functions)

The site uses Cloudflare Pages Functions for server-side functionality while maintaining static export compatibility.

#### Newsletter Signup Function

**Location**: `/functions/api/newsletter.ts`
**Endpoint**: `/api/newsletter` (POST)
**Runtime**: Cloudflare Pages Functions (V8 Isolates)

**Purpose**: Securely handles newsletter subscriptions via Resend API without exposing API keys to the client.

**Environment Variables Required** (configured in Cloudflare Pages dashboard):
- `RESEND_API_KEY`: Your Resend API key (starts with `re_`)
- `RESEND_AUDIENCE_ID`: Target audience ID (`e5d251bf-2af8-4682-a665-429ff1804e17`)

**Features**:
- Server-side email validation (RFC 5322 compliant)
- IP-based rate limiting (5 requests per minute per IP)
- CORS support for browser requests
- Secure API key handling (never exposed to client)
- Comprehensive error handling with generic client messages

**API Integration**:
```typescript
POST https://api.resend.com/contacts
Headers: { Authorization: Bearer {RESEND_API_KEY}, Content-Type: application/json }
Body: { email: string, audience_id: string }
```

**Request Format**:
```bash
POST /api/newsletter
Content-Type: application/json

{ "email": "user@example.com" }
```

**Response Format**:
```json
{
  "success": true|false,
  "message": "User-friendly message",
  "error": "Error details (optional)"
}
```

**Local Testing**:
```bash
# Build static site first
npm run build

# Test function locally with Wrangler
npx wrangler pages dev out \
  --binding RESEND_API_KEY=re_test_key \
  --binding RESEND_AUDIENCE_ID=e5d251bf-2af8-4682-a665-429ff1804e17

# Test with curl
curl -X POST http://localhost:8788/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

**Deployment Notes**:
- Functions deploy automatically with static site to Cloudflare Pages
- No configuration needed in `next.config.ts`
- Environment variables must be set in Cloudflare dashboard before deployment
- Functions run on Cloudflare's edge network (low latency)
- Cold start time: ~10-50ms

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
- All fonts loaded via Google Fonts CDN in `globals.css` AND via Next.js font optimization in `layout.tsx`
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
- Accessibility: Motion respects `prefers-reduced-motion` via `lib/reducedMotion.ts`
- Performance: Uses `LazyMotion` with `domAnimation` to reduce bundle size

**Accessibility**:
- Error boundaries (`ErrorBoundary.tsx`, `AnimationErrorBoundary.tsx`) catch render errors
- `SkipLink` component for keyboard navigation
- Focus management with `:focus-visible` styles
- ARIA labels and roles on interactive elements
- Reduced motion support for users with motion sensitivities
- Semantic HTML structure

**Styling Conventions**:
- Tailwind CSS utility classes
- Custom utilities in `globals.css`: `.text-cyan`, `.container-custom`, `.section-divider`
- Semantic color classes from Tailwind config: `text-accent-primary`, `bg-background-secondary`
- CSS containment for performance isolation (`.metric-card`, `.section-isolated`)

**Component Props Pattern**:
- Buttons accept `href`, `variant`, `size`, `external` props
- Cards typically use icon + title + description structure
- All components have explicit TypeScript return types (`: React.ReactElement`)

**Module Resolution**: Path aliases configured with `@/` mapping to root directory

### Animation Architecture

The animation system is centralized in `lib/animations.ts`:

- **Standard variants**: `fadeInUp`, `fadeIn`, `slideDown` for common animations
- **Timing utilities**: Pre-configured transitions like `fadeInUpTransition`
- **Accessibility functions**: `getAccessibleAnimation`, `accessibleFadeInUp` respect `prefers-reduced-motion`
- **Viewport config**: `viewportConfig` for scroll-triggered animations with proper margins
- **Provider pattern**: `MotionProvider` wraps the app with `LazyMotion` for lazy-loaded animation features

All page-level components use `'use client'` and import from `framer-motion` as `m` (e.g., `m.div`, `m.section`).

### Testing

- **Framework**: Jest with React Testing Library
- **Test location**: `__tests__/` directory matching source structure
- **Setup file**: `jest.setup.js` for global test configuration
- **Path aliases**: Jest configured to resolve `@/` paths
- **Coverage**: Tracks coverage for `app/`, `components/`, and `lib/` directories

## Important Constraints

1. **Static Export Only**: All pages must be compatible with `output: 'export'`. No server-side rendering, no API routes, no dynamic routes with getServerSideProps.

2. **Image Optimization**: Images are set to `unoptimized: true`. Use standard `<img>` tags or ensure Next.js Image component works with this constraint.

3. **Font Loading**: Fonts are loaded both via Google Fonts CDN (@import in globals.css) and Next.js font optimization (layout.tsx). This dual approach ensures fonts work in static export.

4. **Responsive Container**: Use `.container-custom` class for consistent max-width (1280px) and responsive padding.

5. **Animation Performance**: Use `will-change-transform-opacity` class for elements that will animate, and remove with `will-change-auto` after animation completes.

## Deployment Notes

- Build command: `npm run build`
- Output directory: `out`
- Auto-deploys on push to main branch (when connected to Cloudflare Pages)
- No environment variables required for basic deployment

## Code Style

- TypeScript strict mode
- Functional components with hooks
- Explicit return types for TypeScript components (`: React.ReactElement`)
- Descriptive component and prop names
- Comments are minimal - code should be self-documenting
- All interactive components must have proper ARIA labels and keyboard support
