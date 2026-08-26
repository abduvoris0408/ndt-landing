export default function PortfolioIllustration({ category }: { category: string }) {
  const stroke = "currentColor";

  if (category === "ecommerce") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <circle cx="80" cy="90" r="6" fill={stroke} />
        <circle cx="130" cy="90" r="6" fill={stroke} />
        <path
          d="M55 40h12l14 50h55l16-38H85"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (category === "fintech") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <polyline
          points="40,90 75,60 100,75 130,40 165,55"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="165" cy="55" r="6" fill={stroke} />
        <rect x="35" y="95" width="130" height="3" rx="1.5" fill={stroke} fillOpacity="0.4" />
      </svg>
    );
  }

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

  if (category === "mobile") {
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
        <rect x="78" y="20" width="44" height="80" rx="8" stroke={stroke} strokeWidth="4" />
        <line x1="90" y1="90" x2="110" y2="90" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        <circle cx="55" cy="60" r="5" fill={stroke} fillOpacity="0.6" />
        <circle cx="145" cy="45" r="5" fill={stroke} fillOpacity="0.6" />
        <circle cx="145" cy="80" r="5" fill={stroke} fillOpacity="0.6" />
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
