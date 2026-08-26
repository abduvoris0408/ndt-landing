export default function Loading() {
  return (
    <div className="container-app animate-pulse py-24 sm:py-32">
      <div className="h-9 w-40 rounded-full bg-surface-2" />
      <div className="mt-8 h-12 w-2/3 rounded-xl bg-surface-2 sm:h-14" />
      <div className="mt-4 h-5 w-1/2 rounded-lg bg-surface-2" />

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="h-40 rounded-2xl bg-surface-2" />
        <div className="h-40 rounded-2xl bg-surface-2" />
      </div>

      <div className="mt-5 h-24 rounded-2xl bg-surface-2" />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="h-28 rounded-2xl bg-surface-2" />
        <div className="h-28 rounded-2xl bg-surface-2" />
        <div className="h-28 rounded-2xl bg-surface-2" />
      </div>
    </div>
  );
}
