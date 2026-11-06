# Cravo implementation critique

Source: latest Figma frames `124:705`, `124:1538`, `124:2120`, inspected 6 November 2026, plus the executable prototype in this repository.

## Three-lens review

### Food-discovery user

The two starting choices must remain distinct: address checking and browsing. The implementation retains both and clearly labels the address field as a concept demo. Long restaurant names must not push ratings out of view; title and rating use a flexible text column plus an intrinsic-width rating.

### Implementing engineer

The design needs explicit responsive behaviour between the three source artboards. The prototype uses constrained grids, explicit tablet reductions, mobile stacking at 760 px and a 360 px safety rule. The form implements empty/error and local success feedback, but no network state because the brief excludes an address service.

### Portfolio reviewer

A screenshot-only repository weakens proof of responsive thinking, but a fake production claim would be worse. The prototype provides executable evidence while keeping illustrative data, unavailable checkout and asset-rights boundaries explicit.

## Prioritised corrections

1. Added executable HTML/CSS/JS with semantic tokens.
2. Protected competing titles and ratings with `min-width: 0`, non-shrinking ratings and wrapping metadata.
3. Stacked mobile controls and made primary actions full-width with at least 48 px height.
4. Added keyboard focus, skip navigation, status announcements and reduced-motion handling.
5. Replaced unverified food photography with CSS-generated art; this keeps redistribution safe but intentionally differs from photo-bearing Figma frames.

Blind spot: visual similarity is constrained by the decision not to redistribute unverified photography. If licensed source assets are later confirmed, they can replace the CSS art without changing the layout or tokens.

