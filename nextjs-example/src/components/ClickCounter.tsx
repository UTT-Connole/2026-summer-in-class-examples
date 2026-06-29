"use client";

// Client Component — the "use client" directive opts this file into
// the React client runtime, enabling useState, useEffect, and event handlers.
// This component ships JavaScript to the browser.

import { useState } from "react";

export function ClickCounter() {
  // useState: declare a state variable and its updater function.
  // React re-renders this component whenever `count` changes.
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm w-full max-w-xs">
      <p className="text-6xl font-bold tabular-nums">{count}</p>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {count === 0
          ? "Click the button!"
          : `You've clicked ${count} time${count === 1 ? "" : "s"}`}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Click me
        </button>
        <button
          onClick={() => setCount(0)}
          disabled={count === 0}
          className="rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
