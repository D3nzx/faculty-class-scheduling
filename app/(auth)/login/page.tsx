export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        This is a starter route. Wire this page to Supabase Auth or your chosen
        auth provider.
      </p>

      <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
        <form className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:border-white/10 dark:focus:ring-white/20"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-black/20 dark:border-white/10 dark:focus:ring-white/20"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          <button
            type="button"
            className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
