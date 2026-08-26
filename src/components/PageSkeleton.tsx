export default function PageSkeleton() {
  return (
    <div className="container-app animate-pulse py-24 sm:py-32">
      <div className="h-7 w-40 rounded-full bg-surface-2" />
      <div className="mt-6 h-12 w-2/3 rounded-xl bg-surface-2 sm:h-14" />
      <div className="mt-4 h-5 w-1/2 rounded-lg bg-surface-2" />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-[18px] bg-surface-2" />
        ))}
      </div>
    </div>
  );
}
