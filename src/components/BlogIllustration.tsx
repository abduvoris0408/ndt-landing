import type { BlogSlug } from "@/lib/blog";

export default function BlogIllustration({ slug }: { slug: BlogSlug }) {
  if (slug === "face-id-attendance-case-study") {
    return (
      <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ill-face" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3ddc84" />
            <stop offset="1" stopColor="#4fd1ff" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="100" r="55" stroke="url(#ill-face)" strokeWidth="4" fill="none" />
        <circle cx="200" cy="100" r="72" stroke="url(#ill-face)" strokeWidth="2" strokeOpacity="0.4" fill="none" />
        <circle cx="200" cy="85" r="16" fill="currentColor" fillOpacity="0.7" />
        <path d="M175 128c0-16 11-24 25-24s25 8 25 24" stroke="currentColor" strokeOpacity="0.7" strokeWidth="4" fill="none" strokeLinecap="round" />
        <line x1="200" y1="45" x2="200" y2="28" stroke="url(#ill-face)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="200" cy="22" r="5" fill="#3ddc84" />
      </svg>
    );
  }

  if (slug === "eavtotalim-case-study") {
    return (
      <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ill-edu" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7c5cff" />
            <stop offset="1" stopColor="#4fd1ff" />
          </linearGradient>
        </defs>
        <path
          d="M200 60 L280 88 L200 116 L120 88 Z"
          stroke="url(#ill-edu)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M150 98v34c0 12 22 22 50 22s50-10 50-22V98" stroke="currentColor" strokeOpacity="0.7" strokeWidth="3.5" />
        <line x1="280" y1="88" x2="280" y2="130" stroke="url(#ill-edu)" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="280" cy="136" r="5" fill="#4fd1ff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 200" className="h-full w-full" fill="none">
      <defs>
        <linearGradient id="ill-market" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffb84f" />
          <stop offset="1" stopColor="#3ddc84" />
        </linearGradient>
      </defs>
      <circle cx="130" cy="95" r="32" stroke="url(#ill-market)" strokeWidth="4" fill="none" />
      <circle cx="270" cy="95" r="32" stroke="url(#ill-market)" strokeWidth="4" fill="none" />
      <path d="M162 95h76" stroke="url(#ill-market)" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M182 78l-18 17 18 17M218 78l18 17-18 17"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="95" y="150" width="70" height="14" rx="4" fill="currentColor" fillOpacity="0.15" />
      <rect x="235" y="150" width="70" height="14" rx="4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}
