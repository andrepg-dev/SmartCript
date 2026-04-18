## 2025-05-15 - [Accessibility and Hydration Safety in ThemeButton]
**Learning:** In Next.js apps using 'next-themes', icon-only buttons like theme toggles require ARIA labels and Tooltips for accessibility, and a 'mounted' state check using useEffect to prevent hydration mismatches.
**Action:** Always wrap icon-only buttons in TooltipElement and use a 'mounted' state check for theme-dependent components.
