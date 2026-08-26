export default function Loading() {
  return (
    <div className="container-app max-w-3xl animate-pulse py-24 sm:py-32">
      <div className="h-9 w-32 rounded-full bg-surface-2" />
      <div className="mt-8 h-5 w-1/2 rounded-lg bg-surface-2" />
      <div className="mt-4 h-12 w-full rounded-xl bg-surface-2 sm:h-14" />
      <div className="mt-8 h-56 rounded-2xl bg-surface-2 sm:h-72" />
      <div className="mt-10 space-y-3">
        <div className="h-4 w-full rounded bg-surface-2" />
        <div className="h-4 w-full rounded bg-surface-2" />
        <div className="h-4 w-2/3 rounded bg-surface-2" />
      </div>
    </div>
  );
}
