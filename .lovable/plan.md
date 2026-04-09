

## Improve PixelGlobe: Scattered Particles, Visible Grid, Fluid Mouse Effect

### What changes

1. **Scattered ambient particles** — Add ~500 extra particles floating loosely around the globe (not on the sphere surface), creating a "dust in space" effect with very small sizes and low opacity, drifting slowly.

2. **More visible background grid** — The grid overlay in `HeroSection.tsx` currently uses `opacity-[0.12]`. Increase to `opacity-[0.25]` and boost the line color opacity from `0.4` to `0.6` so the squared grid is clearly visible.

3. **Mouse hover: fluid attraction instead of push** — Currently the mouse pushes particles away (repulsion). Change to an **attraction/clustering** effect: particles near the cursor get pulled slightly toward it, bunching together to create a liquid-fluid density increase. Remove the push/displacement logic and replace with a gentle pull toward the mouse position, making pixels cluster together where the cursor is.

### Technical details

**`src/components/landing/PixelGlobe.tsx`**

- **Scattered particles**: In `generateGlobePoints`, add ~500 particles placed randomly in a sphere of radius ~3.5 (outside globe radius 2.0) with very small sizes and dim teal/lime colors. They float as ambient dust.
- **Mouse interaction** (lines 135-152): Replace the push logic:
  - Instead of `pushStrength = influence * influence * 2.0` pushing **away**, use a **pull** toward `mouseWorld` position
  - `pullStrength = influence * influence * 0.4` — gentle attraction
  - Target position moves slightly toward mouse world coords instead of away
  - Keep the wave for organic fluid feel but reduce amplitude
  - This makes particles cluster/condense near cursor = "liquid fluid showing more pixels together"
- **Increase opacity** from `0.45` to `0.6` on the `pointsMaterial` for better visibility

**`src/components/landing/HeroSection.tsx`**

- Line 12: Change `opacity-[0.12]` → `opacity-[0.25]`
- Line 14: Change `hsl(var(--primary) / 0.4)` → `hsl(var(--primary) / 0.6)` for both gradient lines

