'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <h2 className="text-xl font-semibold text-white">Something went wrong</h2>
      <p className="text-slate-400 text-sm">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm"
      >
        Try again
      </button>
    </div>
  );
}
