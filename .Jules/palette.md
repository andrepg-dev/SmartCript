## 2025-05-14 - Hydration-safe Theme Toggle
**Learning:** Next.js hydration mismatches often occur when components depend on client-side state (like current theme) before the initial render. Using a `mounted` state check with `useEffect` is a reliable pattern to ensure the client-side UI matches the server-side initial HTML.
**Action:** Always wrap theme-dependent or client-only UI in a `mounted` check when using `next-themes` or similar libraries.

## 2025-05-14 - Native Module Build Failures
**Learning:** Native modules like `bcrypt` can cause build failures in certain containerized or sandboxed environments due to missing compilation artifacts. `bcryptjs` is a safer, pure JavaScript alternative that avoids these environment-specific issues while maintaining API compatibility.
**Action:** Prefer pure JS implementations of cryptographic libraries (like `bcryptjs`) when working in environments where native builds are unreliable.
