import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

type Tech = { name: string; icon: IconType; color: string };

const TECHS: Tech[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Framer Motion", icon: SiFramer, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const ROW_1 = [...TECHS];
const ROW_2 = [...TECHS].reverse();

function MarqueeRow({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  const track = [...items, ...items];

  return (
    <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {track.map((tech, i) => (
          <span
            key={`${tech.name}-${i}`}
            className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-mono text-xs text-muted sm:text-sm"
          >
            <tech.icon size={15} style={{ color: tech.color }} />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="mx-auto flex w-full flex-col gap-3">
      <MarqueeRow items={ROW_1} />
      <MarqueeRow items={ROW_2} reverse />
    </div>
  );
}
