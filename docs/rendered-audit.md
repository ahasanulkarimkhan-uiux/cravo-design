# Cravo rendered responsive audit

Audited 6 November 2026 against the deployed DOM at `https://ahasanulkarimkhan-uiux.github.io/cravo-design/`.

## Viewports inspected

| Viewport | Horizontal overflow | Visible control height | Layout result |
| --- | --- | --- | --- |
| 1600 × 900 | none | 44–50 px | two-column hero; six-category row |
| 834 × 1194 | none | 44–50 px | balanced tablet hero; reduced grids |
| 390 × 844 | none | 48–50 px | stacked hero/form; two-column dishes |
| 360 × 800 | none | 48–50 px | single-column safety layout |
| 320 × 720 | none | 48–50 px | single-column safety layout |

## Six-point verification

1. **Header and action stacking:** desktop/tablet navigation fits without compressing the brand. Mobile navigation collapses to a 48 px disclosure button. Address controls stack at mobile widths.
2. **Text wrapping:** the long restaurant title wraps without colliding with its intrinsic-width rating. The 320 px hero orphan found during the audit was corrected with non-breaking phrase groups.
3. **Proportions:** mobile primary actions are full-width and at least 48 px high. Tablet cards reduce to balanced grids. Desktop content is capped at 1320 px.
4. **Boundary leakage:** DOM measurements reported no element outside the viewport and no document-level horizontal overflow at all five widths.
5. **Dynamic stress:** a 60-character address produced wrapped success feedback without overflow. The supplied long restaurant name retained rating separation.
6. **Live rendering:** desktop, tablet and three mobile widths were visually inspected from the deployed DOM; form error/success and mobile menu open/closed states were exercised.

## State coverage

- Address form: default, validation error and local success verified.
- Mobile navigation: collapsed and expanded verified.
- Network loading, lookup error, checkout and payment: N/A because the approved prototype performs no service request and does not implement ordering.

