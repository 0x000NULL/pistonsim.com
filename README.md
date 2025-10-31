# PISTON Marketing Website

Professional marketing website for the PISTON engine simulation software. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This website showcases PISTON's professional-grade engine simulation capabilities with a modern, bold design inspired by contemporary tech companies like Nous Research, Nothing, and MSCHF.

## Features

- **Modern Design**: Bold typography, high-contrast colors, smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Static Export**: Optimized for Cloudflare Pages deployment
- **Performance**: Fast loading with optimized assets
- **SEO Ready**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Hosting**: Cloudflare Pages (via GitHub)

## Project Structure

```
pistonsim.com/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── features/          # Features page
│   ├── docs/              # Documentation hub
│   ├── download/          # Download page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Button.tsx         # CTA buttons
│   ├── Card.tsx           # Content cards
│   ├── FeatureCard.tsx    # Feature showcase
│   └── Metric.tsx         # Statistics display
├── public/                # Static assets
├── DESIGN_SYSTEM.md       # Brand identity & design tokens
└── next.config.ts         # Next.js configuration
```

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Deployment to Cloudflare Pages

### Prerequisites

1. GitHub repository containing this code
2. Cloudflare account

### Deployment Steps

#### 1. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: PISTON marketing website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pistonsim-website.git

# Push to GitHub
git push -u origin main
```

#### 2. Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your repository: `pistonsim-website`

#### 3. Configure Build Settings

In the Cloudflare Pages setup wizard, use these settings:

```
Production branch: main
Build command: npm run build
Build output directory: out
Root directory: /
```

**Environment Variables** (if needed):
- None required for basic deployment
- Add `NODE_VERSION=18` if you need a specific Node.js version

#### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare will build and deploy your site
3. Your site will be available at: `https://YOUR_PROJECT.pages.dev`

#### 5. Custom Domain (Optional)

To use a custom domain like `pistonsim.com`:

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain: `pistonsim.com`
5. Follow the DNS configuration instructions
6. Add both `pistonsim.com` and `www.pistonsim.com` if desired

### Automatic Deployments

Once connected, Cloudflare Pages will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

### Build Configuration

The site is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Static export for Cloudflare Pages
  images: {
    unoptimized: true,       // Required for static export
  },
  trailingSlash: true,       // Better compatibility
}
```

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete brand identity guidelines including:

- Color palette
- Typography (Space Grotesk, Inter, JetBrains Mono)
- Spacing system
- Border radius
- Shadows and effects
- Animation timing

### Key Colors

```css
--accent-primary: #ff3b30     /* Performance red */
--accent-secondary: #0a84ff   /* Technical blue */
--accent-tertiary: #ff9500    /* Warning orange */
--bg-primary: #0a0a0a         /* Deep black */
```

## Pages

### Landing Page (`/`)
- Hero section with bold headline
- Key metrics showcase
- Feature grid (Dyno, Database, Physics, Value)
- Technical highlights
- Value proposition
- CTA sections

### Features Page (`/features/`)
- Detailed feature descriptions
- Virtual Dyno System details
- Parts Database showcase
- Physics modeling explanation
- Development roadmap

### Documentation Hub (`/docs/`)
- Documentation categories
- Quick start guide
- Links to GitHub documentation
- Community resources

### Download Page (`/download/`)
- System requirements
- Installation instructions
- Build from source guide
- Pre-built binaries (coming soon)
- Alpha release information

## Performance Optimizations

- Static site generation for fast loading
- Optimized fonts with Google Fonts
- CSS utility classes for minimal bundle size
- Framer Motion for performant animations
- Responsive images (when added)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

To update the website:

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally: `npm run dev`
4. Build and verify: `npm run build`
5. Commit and push: `git push origin feature/your-feature`
6. Create a pull request on GitHub

Cloudflare Pages will automatically create a preview deployment for your PR.

## Troubleshooting

### Build Fails on Cloudflare

1. Check build logs in Cloudflare Pages dashboard
2. Verify `next.config.ts` has `output: 'export'`
3. Ensure all dependencies are in `package.json`
4. Try building locally first: `npm run build`

### Fonts Not Loading

- Fonts are loaded from Google Fonts CDN
- Check `app/globals.css` for @import statements
- Verify font-family variables in `tailwind.config.ts`

### Images Not Showing

- Ensure images are in `/public` directory
- Use relative paths: `/image.png`
- Remember `images: { unoptimized: true }` in config

## Links

- **GitHub Repository**: https://github.com/YOUR_USERNAME/pistonsim-website
- **Cloudflare Pages**: https://YOUR_PROJECT.pages.dev
- **PISTON Simulator**: /home/stripcheese/PISTON-Path2/

## License

[Your License Here]

## Contact

For questions about the website, contact [your email].

---

**Built with** Next.js • Tailwind CSS • Framer Motion • Deployed on Cloudflare Pages
