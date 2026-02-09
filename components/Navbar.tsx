import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Faculty Scheduling
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/dashboard"
            className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
