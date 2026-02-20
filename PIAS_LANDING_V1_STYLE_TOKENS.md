# PIAS Landing Page — V1 Style Tokens

## Color tokens
- `--bg`: #0B0D10
- `--bg-soft`: #11151A
- `--text`: #E9EEF5
- `--text-dim`: #AAB5C3
- `--accent`: #7CF0D2
- `--accent-soft`: #2E6F63
- `--border`: #1F2630

## Typography
- Headline font: `Space Grotesk`, sans-serif
- Body font: `Inter`, sans-serif

Scale:
- H1: 64/1.05 (desktop), 44 (tablet), 34 (mobile)
- H2: 36/1.15
- H3: 24/1.2
- Body: 18/1.6
- Small: 14/1.5

## Radius + shadows
- Radius cards: 14px
- Radius buttons: 999px
- Shadow subtle: `0 8px 30px rgba(0,0,0,0.25)`

## Motion
- Global transition: 180ms ease-out
- Hover lift: translateY(-2px)
- ASCII interaction: low-amplitude, non-distracting
- Respect reduced motion preference

## Grid + breakpoints
- Desktop: 12-col, max-width 1120px
- Tablet breakpoint: 1024px
- Mobile breakpoint: 640px

## Components
Buttons:
- Primary: accent fill + dark text
- Secondary: transparent + border

Cards:
- Soft background, subtle border, no heavy gradients

ASCII layer:
- Canvas-based overlay
- Opacity 0.18–0.28
- Disable interaction on low-power/reduced-motion contexts
