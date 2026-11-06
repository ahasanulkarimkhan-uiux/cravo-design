# Cravo design tokens

Source of truth recorded on 6 November 2026 from the latest Cravo portfolio frames in the shared Figma file:

- Desktop: `124:705` — 1600 px
- Tablet: `124:1538` — 834 px
- Mobile: `124:2120` — 390 px

The Figma file now contains four local collections: `Cravo · Primitives`, `Cravo · Semantic Color`, `Cravo · Dimensions` and `Cravo · Typography`. Semantic colors alias primitives; every variable has web code syntax. The executable prototype uses the same CSS custom-property names.

## Semantic color

| Token | Value | Role |
| --- | --- | --- |
| `--cravo-color-background-page` | `#FCF9F8` | Main page canvas |
| `--cravo-color-background-surface` | `#FFFFFF` | Cards and controls |
| `--cravo-color-background-subtle` | `#F3F0EF` | Quiet grouped surfaces |
| `--cravo-color-background-promo` | `#FFDAD2` | Promotional surface |
| `--cravo-color-action-primary` | `#B52603` | Primary confirmation/action |
| `--cravo-color-action-secondary` | `#FF5A36` | Discovery and secondary action |
| `--cravo-color-text-primary` | `#1C1B1B` | Main text |
| `--cravo-color-text-secondary` | `#5B403A` | Supporting copy |
| `--cravo-color-text-on-action` | `#FFFFFF` | Text on dark actions |
| `--cravo-color-border-default` | `#E5E2E1` | Default borders |
| `--cravo-color-accent-warm` | `#FEA619` | Warm functional accent |
| `--cravo-color-status-success` | `#006C49` | Success feedback |
| `--cravo-color-status-success-soft` | `#6FFBBE` | Success-support surface |

The dark red is the bounded primary action and focus color. Orange supports discovery; it is not used as decorative leakage across every surface.

## Typography

Font family: **Plus Jakarta Sans** with `system-ui, sans-serif` fallback. The live demo loads weights 400, 600, 700 and 800.

| Style | Weight | Size / line-height | Tracking |
| --- | --- | --- | --- |
| Display / Hero / Desktop | Bold | 56 / 84 px | -0.5 px |
| Display / Hero / Mobile | ExtraBold | 36 / 44 px | 0 |
| Heading / Section / Desktop | Bold | 40 / 60 px | 0 |
| Heading / Section / Mobile | Bold | 18 / 24 px | 0 |
| Heading / Card | SemiBold | 18 / 24 px | 0 |
| Body / Large | Regular | 18 / 28 px | 0 |
| Body / Base | Regular | 16 / 24 px | 0 |
| Body / Small | Regular | 13 / 20 px | 0 |
| Label / Action | SemiBold | 16 / 20 px | 0.15 px |
| Label / Eyebrow | Bold | 12 / 16 px | 0.44 px |
| Metric / Value | SemiBold | 24 / 28 px | -0.22 px |

## Spacing, radius and controls

- Spacing: `4, 8, 12, 16, 24, 32, 48, 64, 80 px`
- Radius: `8, 16, 24, 32, 9999 px`
- Minimum control height: `44 px`
- Recommended touch height: `48 px`
- Maximum content container: `1320 px`

## Elevation and motion

- Subtle: `0 1px 2px rgb(0 0 0 / 5%)`
- Control: `0 2px 4px -2px rgb(0 0 0 / 10%), 0 4px 6px -1px rgb(0 0 0 / 10%)`
- Raised: `0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)`
- Motion budget: 120 / 180 / 240 ms. Reduced-motion preference collapses transitions.

Motion values are implementation decisions for the executable prototype because the inspected Figma frames are static.

## Verification

Figma validation returned 15 primitives, 16 semantic colors, 21 dimension variables, 24 typography variables, 11 text styles and 3 effect styles. Broken aliases: 0. Missing web syntax: 0. `ALL_SCOPES` usage: 0.

