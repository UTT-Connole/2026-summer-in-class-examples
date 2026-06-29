// Server Component — no "use client" directive.
// Receives props from the parent and renders static HTML.
// Zero JavaScript is sent to the browser for this component.

type GreetingCardProps = {
  title: string;
  description: string;
};

export function GreetingCard({ title, description }: GreetingCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col gap-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}
