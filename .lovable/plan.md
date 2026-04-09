

## Problem

The PixelDivider is broken because the `cells` array (with random thresholds) is recomputed on every render. Since `Math.random()` produces new values each time, cells flicker randomly instead of smoothly pixelating. The thresholds need to be stable across renders.

## Plan

**File: `src/components/landing/PixelDivider.tsx`**

1. Wrap the `cells` computation in `useMemo` (dependent on `flip`) so thresholds are computed once and stay stable across scroll-triggered re-renders.
2. Use a seeded pseudo-random approach (or just `useMemo`) to keep `Math.random()` values consistent.
3. Increase grid size slightly (more cols/rows) for a more dramatic pixelation effect.
4. Ensure the scroll progress formula works bidirectionally — pixels fill when scrolling down, unfill when scrolling up.

This single change should fix the divider so it smoothly pixelates in/out as you scroll.

