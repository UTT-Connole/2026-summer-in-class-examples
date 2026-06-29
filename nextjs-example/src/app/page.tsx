// This is a Server Component (the default in the Next.js App Router).
// It runs on the server — no "use client" directive needed.
// Server Components can fetch data, access the filesystem, etc.
import { ClickCounter } from "@/components/ClickCounter";
import { GreetingCard } from "@/components/GreetingCard";

const features = [
  {
    id: 1,
    title: "Server Components",
    description:
      "Pages and layouts run on the server by default — zero client JS for static content.",
  },
  {
    id: 2,
    title: "Client Components",
    description:
      'Add "use client" to opt into React state, effects, and browser APIs.',
  },
  {
    id: 3,
    title: "File-based Routing",
    description:
      "Every file inside app/ becomes a route automatically. No router config needed.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-4 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          👋 Hello, Next.js!
        </h1>
        <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400">
          A minimal example showing{" "}
          <span className="font-semibold text-foreground">Server Components</span>,{" "}
          <span className="font-semibold text-foreground">Client Components</span>,
          and{" "}
          <span className="font-semibold text-foreground">
            file-based routing
          </span>{" "}
          — all from the Next.js App Router.
        </p>
      </section>

      {/* Reusable server-rendered greeting cards */}
      <section className="flex flex-col items-center gap-6 px-6 pb-16">
        <h2 className="text-2xl font-semibold">
          Greetings from a Server Component
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 w-full max-w-3xl">
          {features.map((feature) => (
            // GreetingCard is a pure server-rendered component — no JS sent to browser
            <GreetingCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Interactive client component */}
      <section className="flex flex-col items-center gap-4 px-6 pb-24">
        <h2 className="text-2xl font-semibold">
          Interactive Client Component
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-md">
          The counter below uses React&apos;s <code className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 rounded">useState</code> hook.
          It needs <code className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 rounded">&quot;use client&quot;</code> because it runs in the browser.
        </p>
        {/* ClickCounter is a Client Component — it ships JS to the browser */}
        <ClickCounter />
      </section>
    </main>
  );
}
