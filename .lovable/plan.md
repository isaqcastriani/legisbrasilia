

## Add 3D Depth to Authority Section Card Containers

### Changes

**File: `src/components/landing/AuthoritySection.tsx`** (line ~132-135)

Add a 3D-style `box-shadow` to the outer card container (`motion.div`) — similar to the `cta-3d` approach but using the dark blue palette instead of lime. This creates a raised/elevated look with a bottom shadow "ledge":

- Add `box-shadow` with a solid bottom edge (~4px) in a darker blue tone (`hsl(213 50% 5%)`) plus a softer ambient shadow beneath
- Keep the existing `border border-white/[0.08]` for the subtle edge highlight on top/sides
- The 3D effect: solid dark bottom edge + diffused glow = card looks like it's raised off the page

This applies to each of the 3 main card wrappers in the `cards.map()`.

