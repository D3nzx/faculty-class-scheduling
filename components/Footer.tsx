export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 text-xs text-zinc-600 dark:text-zinc-400">
        <span>© {new Date().getFullYear()} Faculty Scheduling</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
