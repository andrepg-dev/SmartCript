## 2026-04-18 - [Hydration Safety & Icon-only Buttons]
**Learning:** In Next.js applications using `next-themes`, rendering theme-dependent components (like a theme toggle) without a `mounted` state check causes hydration mismatches because the server cannot know the user's preferred theme. Additionally, icon-only buttons are inaccessible to screen readers and confusing for sighted users without `aria-label` and tooltips.
**Action:** Always wrap theme-toggle logic in a `useEffect` with a `mounted` state and ensure all icon-only buttons use `TooltipElement` and `aria-label`.
