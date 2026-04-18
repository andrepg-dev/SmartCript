## 2024-05-24 - [Theme Toggle Accessibility and Hydration]
**Learning:** In Next.js with 'next-themes', icon-only theme toggles require both a 'mounted' check to prevent hydration mismatches/flickering and an explicit 'aria-label' with Tooltip for accessibility.
**Action:** Always wrap icon-only theme buttons in a 'mounted' state check and provide descriptive Spanish labels in both 'aria-label' and Tooltip.
