

## Plan: Shift orbit cluster to the left, overlapping the text column

Currently the grid is `[0.88fr_1.12fr]` with the orbit on the right column and negative left margin pulling it slightly left. The reference image shows the circle cluster centered more to the left of the viewport, with some circles sitting directly behind/below the text content.

### Changes to `src/components/landing/AIOrbitSection.tsx`

1. **Reverse the grid column order** — put the orbit container first (left) and the text second (right), OR keep the same order but shift the orbit container much further left using positioning instead of grid placement.

   Simpler approach: keep the two-column grid but **swap columns to `[1.12fr_0.88fr]`** and place the orbit in the first column, text in the second. Actually, looking at the reference more carefully, the text is on the left and circles spread from center-right bleeding into the left — the current layout direction is correct, we just need to pull the orbit much further left.

2. **Increase the negative left margin** on the orbit container from `lg:-ml-48 xl:-ml-56` to something like `lg:-ml-[28rem] xl:-ml-[32rem]` so the orbit center lands roughly in the middle of the text column, with circles wrapping behind/below the text.

3. **Lower the z-index** of the orbit container (keep it at `z-10` or default) and **raise the text z-index** to `z-20` (already set) so text stays on top.

4. **Shift the SVG ellipses and orbit center** — change `cx` from `390` to ~`340` (center of the viewBox) so the orbit is centered within its own container, which is now overlapping the left side.

5. **Ensure text shadow protection** remains on the paragraph and button area (already in place with `textShadow` and `z-30`).

### Summary of key edits

- `lg:-ml-48 xl:-ml-56` → `lg:-ml-[28rem] xl:-ml-[32rem]` on orbit wrapper
- SVG ellipse `cx` from `390` → `340`, orbit `transformOrigin` updated to match
- Orbit model positions recalculated with new center x
- Text column keeps `z-20`/`z-30` for readability

