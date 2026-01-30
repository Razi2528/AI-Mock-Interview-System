# AI Mock Interview Platform - Technical Specification

## Component Inventory

### shadcn/ui Components (Built-in)
- `button` - Primary, secondary, ghost buttons
- `card` - Feature cards, pricing cards, testimonial cards
- `input` - Form inputs
- `label` - Form labels
- `separator` - Visual dividers
- `badge` - Labels and tags
- `avatar` - Testimonial avatars
- `tabs` - Pricing toggle (optional)

### Third-Party Registry Components
None required - built-in shadcn components sufficient.

### Custom Components
- `AnimatedSection` - Scroll-triggered reveal wrapper
- `GradientBackground` - Hero gradient with animation
- `FeatureCard` - How it works cards
- `PricingCard` - Pricing tier cards
- `TestimonialCard` - Testimonial quote cards
- `StatCounter` - Animated number counter
- `Navbar` - Navigation with scroll effect
- `Footer` - Multi-column footer

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero gradient background animation | CSS + Framer Motion | Animated gradient mesh with CSS keyframes, floating elements with Framer Motion | Medium |
| Page load stagger reveal | Framer Motion | `staggerChildren` with `variants` on container | Low |
| Scroll-triggered section reveals | Framer Motion | `whileInView` with `viewport={{ once: true }}` | Low |
| Navbar scroll effect | React hooks + CSS | `useScroll` hook to toggle classes | Low |
| Card hover lift effect | CSS/Framer Motion | `whileHover={{ y: -4 }}` or CSS transform | Low |
| Button hover scale | CSS | `transform: scale(1.02)` on hover | Low |
| Stats counter animation | Framer Motion | `useMotionValue` + `useTransform` + `animate` | Medium |
| Mockup floating animation | Framer Motion | `animate={{ y: [0, -10, 0] }}` with infinite loop | Low |
| Feature card stagger | Framer Motion | Parent `staggerChildren: 0.1` | Low |
| Link underline slide | CSS | `::after` pseudo-element with transform | Low |

## Animation Library Choices

**Primary: Framer Motion**
- React-native integration
- Declarative API
- Built-in scroll triggers (`whileInView`)
- Easy stagger animations
- Good performance

**Secondary: CSS Animations**
- Simple hover effects
- Background animations
- When Framer Motion is overkill

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/           # Generated images
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── AnimatedSection.tsx
│   │   ├── GradientBackground.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── LogoBar.tsx
│   │   ├── FeaturesOverview.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── KeyFeatures.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CTA.tsx
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── SignupPage.tsx
│   ├── hooks/
│   │   └── useScrollPosition.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  }
}
```

## Color Variables (Tailwind Config)

```javascript
colors: {
  primary: {
    DEFAULT: '#635BFF',
    hover: '#4F46E5',
  },
  navy: {
    DEFAULT: '#0A2540',
    light: '#0D1B2A',
  },
  gray: {
    50: '#F6F9FC',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
}
```

## Implementation Notes

1. **Hero Gradient**: Use CSS mesh gradient with multiple radial gradients, animate position
2. **Scroll Animations**: Use Framer Motion's `whileInView` for all scroll triggers
3. **Performance**: Add `will-change` to animated elements, use `transform` only
4. **Responsive**: Mobile-first approach, test all animations on mobile
5. **Accessibility**: Respect `prefers-reduced-motion` for all animations
