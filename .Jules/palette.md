## 2025-05-15 - [Theme Toggle Accessibility & Robustness]
**Learning:** Icon-only buttons in the header require explicit ARIA labels and tooltips for better accessibility in this app. Additionally, the `next-themes` hydration mismatch pattern is prevalent and needs a `mounted` state check to avoid UI flickering and potential server/client mismatches in Next.js 14.
**Action:** Always wrap theme toggles in a `mounted` check and provide Spanish tooltips and ARIA labels.
