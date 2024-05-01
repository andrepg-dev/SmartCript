export default function ShinyButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <a
      className="merlin-chrome-store-url group relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-[#00c577] bg-background px-4 py-2 text-sm font-semibold text-[#00c577] shadow-sm backdrop-blur transition-colors hover:bg-zinc-50 hover:text-[#00c577] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-[#00c577]/80 dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
      target="_blank"
      href="https://chromewebstore.google.com/detail/merlin-1-click-access-to/camppjleccjaphfdbohjdohecfnoikec"
    >
      {children}
    </a>
  );
}
