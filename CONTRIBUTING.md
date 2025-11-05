# Contributing to PISTON Website

Thank you for your interest in contributing to the PISTON marketing website! This document provides guidelines and instructions for contributing to the project.

## Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/pistonsim.com.git
cd pistonsim.com
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
pistonsim.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── features/          # Features page
│   └── about/             # About page
├── components/            # Reusable React components
├── lib/                   # Utility functions and shared code
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── __tests__/            # Test files
```

## Code Style

### TypeScript

- Use TypeScript strict mode
- Always provide explicit return types for functions
- Use meaningful variable and function names
- Avoid `any` type; use `unknown` if type is truly unknown

### React Components

- Use functional components with hooks
- Add JSDoc comments to all exported functions and components
- Use `memo` for presentational components to prevent unnecessary re-renders
- Prefer composition over inheritance

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use semantic CSS custom properties from `globals.css`
- Maintain consistent spacing and typography

### Accessibility

- All interactive elements must be keyboard accessible
- Provide meaningful ARIA labels and roles
- Respect `prefers-reduced-motion` for animations
- Maintain color contrast ratios (WCAG AA minimum)
- Use semantic HTML elements

## Development Commands

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Create production build
npm run start        # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm test             # Run Jest tests
```

## Pull Request Process

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the code style guidelines

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run build
   ```

4. **Commit your changes** with clear, descriptive messages
   ```bash
   git commit -m "Add feature: description of feature"
   ```

5. **Push to your fork** and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Describe your changes** in the PR description:
   - What problem does this solve?
   - What changes were made?
   - How has this been tested?
   - Any breaking changes?

## Commit Message Guidelines

Follow conventional commits format:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add contact form component
fix: resolve mobile menu animation glitch
docs: update README with deployment instructions
```

## Testing

- Write tests for new components and features
- Ensure all tests pass before submitting PR
- Aim for meaningful test coverage, not just high percentages
- Test accessibility features (keyboard navigation, screen readers)

## Performance Guidelines

- Optimize images before committing (use WebP when possible)
- Lazy load components and images where appropriate
- Minimize bundle size (code splitting, tree shaking)
- Use React.memo for expensive components
- Profile performance before and after changes

## Accessibility Checklist

- [ ] Keyboard navigation works for all interactive elements
- [ ] ARIA labels provided where needed
- [ ] Color contrast meets WCAG AA standards
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Focus indicators are visible
- [ ] Semantic HTML used appropriately
- [ ] Screen reader tested (if possible)

## Static Export Constraints

This project uses Next.js static export for Cloudflare Pages deployment:

- ❌ No Server-Side Rendering (SSR)
- ❌ No API routes
- ❌ No dynamic routes with `getServerSideProps`
- ✅ Client-side rendering only
- ✅ Static HTML generation
- ✅ Client-side data fetching

## Questions or Issues?

- Check existing [Issues](https://github.com/yourusername/pistonsim.com/issues)
- Create a new issue for bugs or feature requests
- Use [Discussions](https://github.com/yourusername/pistonsim.com/discussions) for questions

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help create a welcoming environment for all contributors

Thank you for contributing! 🚀
