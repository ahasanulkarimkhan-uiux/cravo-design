# Cravo design notes

## Context

Cravo is a self-initiated food delivery homepage concept. The story follows address entry, category discovery and restaurant or dish comparison. It describes design intent rather than observed user behavior.

## Responsive intent

- Desktop: present address entry and browsing alongside the hero image; use the available width for category and restaurant comparison.
- Tablet: adapt the categories to the narrower area and retain restaurant comparison side by side.
- Mobile: stack restaurant cards, show dishes in two columns, and use a compact navigation treatment.

The recorded source artboards are 1600 px, 834 px and 390 px. These are designed frames, not evidence of working intermediate breakpoints.

## Review and revisions

The existing review identified hero descriptions exceeding their copy columns, long restaurant names crowding ratings, mobile footer links below the specified touch height and low contrast in sampled orange buttons.

The 4 November revision notes record constrained desktop and tablet hero copy and five mobile footer link wrappers increased to 44 px. These notes do not establish final clearance of every repeated card, contrast pair or interaction.

## Implementation considerations

- Keep title text flexible and ratings at intrinsic width; allow the row height to grow.
- Stack or wrap competing actions explicitly at constrained widths.
- Verify actual click areas, keyboard focus, text scaling and long address editing in a runnable implementation.
- If address lookup is implemented, account for loading, unavailable service, lookup errors and a successful result.
- Keep concept data visibly distinguishable from actual service promises.

## Evidence boundaries

No new rendered audit was performed while preparing this repository draft. Earlier Figma review is evidence about those recorded versions only. No working backend, address service, usability study or conversion measurement is documented.
