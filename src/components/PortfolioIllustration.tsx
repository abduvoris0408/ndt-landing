export default function PortfolioIllustration({ category }: { category: string }) {
  const stroke = "currentColor";

  if (category === "ai") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <circle cx="100" cy="60" r="18" stroke={stroke} strokeWidth="4" />
        <circle cx="50" cy="35" r="8" fill={stroke} fillOpacity="0.7" />
        <circle cx="150" cy="35" r="8" fill={stroke} fillOpacity="0.7" />
        <circle cx="50" cy="90" r="8" fill={stroke} fillOpacity="0.7" />
        <circle cx="150" cy="90" r="8" fill={stroke} fillOpacity="0.7" />
        <path d="M84 48L58 39M116 48l26-9M84 72L58 85M116 72l26 13" stroke={stroke} strokeWidth="2.5" />
      </svg>
    );
  }

  if (category === "education") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <path
          d="M100 35 L165 55 L100 75 L35 55 Z"
          stroke={stroke}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M65 62v20c0 8 16 14 35 14s35-6 35-14V62" stroke={stroke} strokeWidth="3.5" />
        <line x1="165" y1="55" x2="165" y2="85" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="165" cy="90" r="4" fill={stroke} />
      </svg>
    );
  }

  if (category === "marketplace") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <circle cx="55" cy="55" r="18" stroke={stroke} strokeWidth="4" />
        <circle cx="145" cy="55" r="18" stroke={stroke} strokeWidth="4" />
        <path
          d="M73 55h54"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M85 45l-10 10 10 10M115 45l10 10-10 10"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="40" y="85" width="30" height="10" rx="3" fill={stroke} fillOpacity="0.5" />
        <rect x="130" y="85" width="30" height="10" rx="3" fill={stroke} fillOpacity="0.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
      <rect x="50" y="45" width="26" height="50" rx="3" stroke={stroke} strokeWidth="3.5" />
      <rect x="87" y="30" width="26" height="65" rx="3" stroke={stroke} strokeWidth="3.5" />
      <rect x="124" y="55" width="26" height="40" rx="3" stroke={stroke} strokeWidth="3.5" />
    </svg>
  );
}
