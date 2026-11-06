# Cravo journey and information architecture

## Journey

1. Person arrives from a portfolio, search result or shared link.
2. Person understands that Cravo is a food-discovery concept.
3. Person chooses to enter an address or browse dishes.
4. If an address is short/empty, the local form explains how to correct it.
5. If an address is plausible, the prototype confirms only that the demo state is ready; it performs no lookup.
6. Person browses categories, restaurant comparisons and individual dishes.
7. Person reviews the three-step explanation and the project evidence links.
8. Checkout, payment and an order receipt are documented external/future touchpoints.

## Screen inventory

| Surface | Journey step | States |
| --- | --- | --- |
| Responsive homepage | 1–3, 6–7 | desktop, tablet, mobile |
| Address form | 3–5 | default, validation error, local success |
| Mobile navigation | 2–7 | collapsed, expanded |
| Checkout/order | 8 | N/A — explicitly out of scope |

## Navigation

Header anchors lead to Restaurants, Dishes, How it works and project evidence. Mobile uses an explicit disclosure button. Footer links preserve 48 px touch rows on mobile.

## Content hierarchy

Promise → starting action → proof labels → categories → restaurant comparison → promotion → dishes → process → portfolio evidence.

