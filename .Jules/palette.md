## 2024-05-20 - [Theme Button Accessibility & Hydration]
**Learning:** Theme toggles in Next.js with `next-themes` require a `mounted` state to prevent hydration mismatches and flickering. Adding tooltips and ARIA labels to icon-only buttons like the theme toggle significantly improves accessibility for screen reader users and discoverability for all users.
**Action:** Always use a `mounted` check for theme-related UI components and ensure icon-only buttons have descriptive labels and tooltips.
