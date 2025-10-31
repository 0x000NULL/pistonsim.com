# PISTON Brand Identity & Design System

## Visual Identity

Inspired by Nous Research, Nothing Tech, and MSCHF - bold, modern, high-contrast aesthetic with technical precision.

## Color Palette

### Primary Colors
```css
--bg-primary: #000000        /* Pure black background */
--bg-secondary: #0a0a0a      /* Slightly elevated surfaces */
--bg-tertiary: #111111       /* Cards, containers */

--accent-primary: #0693e3    /* Cyan-blue - primary accent */
--accent-secondary: #0171a9  /* Darker cyan - hover states */
--accent-tertiary: #00d4ff   /* Bright cyan - highlights */

--text-primary: #ffffff      /* Primary text */
--text-secondary: #999999    /* Secondary text */
--text-tertiary: #666666     /* Muted text */

--border: #1a1a1a            /* Subtle borders */
--border-hover: #333333      /* Interactive borders */
```

### Semantic Colors
```css
--success: #34c759           /* Validation passed, positive metrics */
--warning: #ff9500           /* Cautions, beta status */
--error: #ff3b30             /* Errors, critical info */
--info: #0a84ff              /* Technical information */
```

## Typography

### Font Families
- **Display/Headings:** JetBrains Mono (Monospace, technical, modern) - 700 weight, tight letter-spacing
- **Body:** Inter (Clean, highly readable)
- **Monospace/Code:** JetBrains Mono (Code blocks, technical data)

### Type Scale
```css
--font-size-xs: 0.75rem      /* 12px - captions */
--font-size-sm: 0.875rem     /* 14px - small text */
--font-size-base: 1rem       /* 16px - body */
--font-size-lg: 1.125rem     /* 18px - large body */
--font-size-xl: 1.25rem      /* 20px - subheadings */
--font-size-2xl: 1.5rem      /* 24px - small headings */
--font-size-3xl: 2rem        /* 32px - medium headings */
--font-size-4xl: 2.5rem      /* 40px - large headings */
--font-size-5xl: 3rem        /* 48px - hero headings */
--font-size-6xl: 4rem        /* 64px - display text */
```

### Font Weights
- **Regular:** 400 (body text)
- **Medium:** 500 (emphasis)
- **Semibold:** 600 (subheadings)
- **Bold:** 700 (headings, buttons)
- **Black:** 900 (display text, hero)

## Spacing System

Based on 4px grid:
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

## Border Radius
```css
--radius-sm: 4px     /* Small elements, tags */
--radius-md: 8px     /* Buttons, inputs */
--radius-lg: 12px    /* Cards */
--radius-xl: 16px    /* Large containers */
--radius-full: 9999px /* Pills, circular */
```

## Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.25)
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3)
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4)
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.5)

/* Glow effects for accents */
--glow-red: 0 0 20px rgba(255, 59, 48, 0.3)
--glow-blue: 0 0 20px rgba(10, 132, 255, 0.3)
```

## Animation
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)

--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

## Logo Concept

**PISTON** wordmark with mechanical aesthetic:
- Bold, all-caps lettering
- Geometric construction
- Optional: Piston icon (cylinder cross-section or piston silhouette)
- Monochromatic with accent color option

## Component Patterns

### Buttons
- **Primary:** Red background, white text, hover glow
- **Secondary:** Transparent with red border, hover fill
- **Ghost:** No background, hover underline

### Cards
- Dark background with subtle border
- Hover: Lift effect + border glow
- Content: Icon/image + heading + description

### Metrics Display
- Large numbers in monospace font
- Label in secondary text
- Optional: Color-coded by status (green=good, red=warning)

### Code Blocks
- Dark background (#1a1a1a)
- Syntax highlighting
- Copy button on hover

## Responsive Breakpoints
```css
--breakpoint-sm: 640px   /* Mobile landscape */
--breakpoint-md: 768px   /* Tablet */
--breakpoint-lg: 1024px  /* Desktop */
--breakpoint-xl: 1280px  /* Large desktop */
--breakpoint-2xl: 1536px /* Extra large */
```

## Design Principles

1. **Bold Typography:** Large, confident headings that command attention
2. **High Contrast:** Sharp distinction between elements for clarity
3. **Generous Whitespace:** Let content breathe, avoid cluttered layouts
4. **Smooth Animations:** Subtle motion that enhances UX without distraction
5. **Technical Precision:** Clean lines, geometric shapes, data-focused
6. **Performance-Focused:** Fast loading, optimized assets, smooth scrolling
