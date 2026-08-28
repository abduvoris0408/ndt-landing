import type { BlogSlug } from "@/lib/blog";

export default function BlogIllustration({ slug }: { slug: BlogSlug }) {
  if (slug === "why-nextjs") {
    return (
      <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ill-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#4fd1ff" />
          </linearGradient>
        </defs>
        <rect x="60" y="40" width="280" height="120" rx="12" fill="currentColor" fillOpacity="0.08" />
        <circle cx="80" cy="58" r="4" fill="#ff5f57" />
        <circle cx="94" cy="58" r="4" fill="#febc2e" />
        <circle cx="108" cy="58" r="4" fill="#28c840" />
        <text x="80" y="90" fontFamily="monospace" fontSize="13" fill="url(#ill-a)" fontWeight="700">
          &lt;/&gt; Next.js
        </text>
        <rect x="80" y="102" width="160" height="6" rx="3" fill="currentColor" fillOpacity="0.35" />
        <rect x="80" y="116" width="120" height="6" rx="3" fill="currentColor" fillOpacity="0.25" />
        <rect x="80" y="130" width="140" height="6" rx="3" fill="currentColor" fillOpacity="0.25" />
      </svg>
    );
  }

  if (slug === "mvp-for-startups") {
    return (
      <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ill-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#4fd1ff" />
            <stop offset="1" stopColor="#a5e075" />
          </linearGradient>
        </defs>
        <polyline
          points="60,150 130,120 190,135 250,80 320,50"
          fill="none"
          stroke="url(#ill-b)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [60, 150],
          [130, 120],
          [190, 135],
          [250, 80],
          [320, 50],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="currentColor" stroke="url(#ill-b)" strokeWidth="3" />
        ))}
        <path d="M320 50 L332 38 L332 62 Z" fill="#a5e075" />
      </svg>
    );
  }

  if (slug === "web-design-trends-2026") {
    return (
      <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ill-c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7ab2" />
            <stop offset="1" stopColor="#7c5cff" />
          </linearGradient>
        </defs>
        <rect x="90" y="50" width="90" height="90" rx="14" fill="url(#ill-c)" fillOpacity="0.85" transform="rotate(-6 135 95)" />
        <rect x="160" y="70" width="90" height="90" rx="14" fill="currentColor" fillOpacity="0.12" transform="rotate(4 205 115)" />
        <rect x="220" y="45" width="60" height="60" rx="12" fill="#4fd1ff" fillOpacity="0.6" transform="rotate(10 250 75)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="ill-d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3ddc84" />
          <stop offset="1" stopColor="#4fd1ff" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="100" r="55" stroke="url(#ill-d)" strokeWidth="4" fill="none" />
      <circle cx="200" cy="100" r="72" stroke="url(#ill-d)" strokeWidth="2" strokeOpacity="0.4" fill="none" />
      <circle cx="200" cy="85" r="16" fill="currentColor" fillOpacity="0.7" />
      <path d="M175 128c0-16 11-24 25-24s25 8 25 24" stroke="currentColor" strokeOpacity="0.7" strokeWidth="4" fill="none" strokeLinecap="round" />
      <line x1="200" y1="45" x2="200" y2="28" stroke="url(#ill-d)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="22" r="5" fill="#3ddc84" />
    </svg>
  );
}
