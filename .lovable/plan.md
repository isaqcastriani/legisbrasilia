

## Replace PixelDivider with Animated Tech Arrow + Reduce Section Gap

### What changes

1. **New component: `TechArrow.tsx`** — A vertical SVG arrow with a sleek, technological design and a glowing light that animates from the tail to the tip. The arrow shape will be clean and geometric (like a circuit-board aesthetic), and a CSS `@keyframes` animation will move a gradient glow from bottom to top in a continuous loop.

2. **Replace PixelDivider in `AuthoritySection.tsx`** — Remove `<PixelDivider />` (top) and `<PixelDivider flip />` (bottom). Place the new `<TechArrow />` between the SpecialistsSection and the AuthoritySection content (as a transition element between sections).

3. **Reduce gap in AuthoritySection** — Lower the `py-20 md:py-28` padding on the section's inner container and reduce card spacing (`mb-16` header margin, connector `py-6 md:py-10`) to tighten the section.

### Technical details

**`src/components/landing/TechArrow.tsx`**
- SVG arrow: A vertical line with a sharp chevron/arrowhead at the top, styled with `stroke` using `hsl(var(--primary))` (lime) and subtle border glow.
- Animated glow: A `<linearGradient>` that shifts via CSS animation (`@keyframes glowTravel`) from the base of the arrow to the tip, creating a light beam traveling upward.
- Height ~120px, centered, with a subtle radial glow at the arrowhead.

**`src/components/landing/AuthoritySection.tsx`**
- Remove `PixelDivider` imports and usages.
- Add `<TechArrow />` before the section content.
- Reduce `py-20 md:py-28` → `py-12 md:py-16`.
- Reduce header `mb-16` → `mb-10`.

**`src/pages/Index.tsx`**
- Optionally place `<TechArrow />` between sections if the arrow should sit outside the AuthoritySection.

