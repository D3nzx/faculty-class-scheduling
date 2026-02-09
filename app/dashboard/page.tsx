export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Starter route for your app. You can later protect this route using
        Supabase auth checks.
      </p>

      <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
        <div className="text-sm">
          Replace this with your scheduling UI.
        </div>
      </div>
    </div>
  );
}
