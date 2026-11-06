# Cravo build notes

## Protective UX and states

- Address input: default, invalid and local-success states are implemented. Loading, service unavailable and lookup error are N/A because there is no network request.
- Mobile navigation: collapsed and expanded states are implemented with `aria-expanded`.
- Cards: long restaurant names may wrap; ratings remain intrinsic width. Metadata wraps rather than leaking horizontally.
- Mobile actions: the address CTA and promotion CTA become full-width with a 48 px minimum height.
- Keyboard and motion: visible focus, skip navigation and reduced-motion handling are included.
- Photography: the Figma direction contains food images, but redistribution rights were not verified. The public prototype uses CSS-generated visual art and makes no claim that these are the final photographic assets.
- Dynamic data: all restaurant names, prices, ratings, time estimates and promotions are illustrative.

## Implementation boundary

The demo intentionally uses plain HTML, CSS and JavaScript so GitHub Pages can host it without a build step. No tracking, cookies, address transmission, ordering, payment or persistent storage is included.

