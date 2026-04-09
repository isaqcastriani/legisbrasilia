

## Redesign Comparison Table to Match Reference Style

The reference image shows a clean comparison table with:
- **No background color on header row** — column titles sit on white/light bg, only the brand column has a colored background
- **Feature names column (left)** — no color fill, just bold text on neutral bg
- **Brand column (LegisBrasil)** — colored background (primary/accent) with contrasting text on every row including header
- **Other columns** — plain neutral background, gray text, centered
- **Row separators** — subtle horizontal lines between rows
- **Overall table bg** — light/neutral, not the current blue-tinted bg

### Changes to `SocialProofSection.tsx`

1. **Table container**: Change background from blue-tinted `hsl(213 40% 96%)` to a dark card style matching the site's dark theme (e.g., `hsl(213 50% 14%)` or use `bento-card` styling)
2. **Header row**: Remove colored background from non-LegisBrasil headers. Keep them plain with just text. LegisBrasil header keeps the primary color background with logo/icon
3. **Feature column (left cells)**: No background color, just white/foreground text, left-aligned, font-medium
4. **LegisBrasil column**: Keep primary color background on all rows (header + body), with dark text
5. **Other columns (IA Genérica, Status Quo)**: Plain background, muted text, centered
6. **Row borders**: Subtle border between rows using `border` color at low opacity
7. **Adapt colors** to the dark theme: table bg uses card color, text uses foreground/muted-foreground, LegisBrasil column uses the lime primary

