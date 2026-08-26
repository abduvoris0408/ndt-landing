"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Token = { text: string; color?: string };
type Line = Token[];

const LINES: Line[] = [
  [
    { text: "export", color: "#ff7ab2" },
    { text: " " },
    { text: "function", color: "#ff7ab2" },
    { text: " " },
    { text: "DigitalSolution", color: "#4fd1ff" },
    { text: "() {" },
  ],
  [
    { text: "  " },
    { text: "const", color: "#ff7ab2" },
    { text: " team = " },
    { text: "'Next Developers Team'", color: "#a5e075" },
    { text: ";" },
  ],
  [{ text: "  " }, { text: "const", color: "#ff7ab2" }, { text: " stack = [" }],
  [
    { text: "    " },
    { text: "'Next.js'", color: "#a5e075" },
    { text: ", " },
    { text: "'TypeScript'", color: "#a5e075" },
    { text: "," },
  ],
  [
    { text: "    " },
    { text: "'Tailwind'", color: "#a5e075" },
    { text: ", " },
    { text: "'Framer Motion'", color: "#a5e075" },
  ],
  [{ text: "  ];" }],
  [{ text: "" }],
  [
    { text: "  " },
    { text: "return", color: "#ff7ab2" },
    { text: " build(team, stack)" },
    { text: ".ship();", color: "#7c5cff" },
  ],
  [{ text: "}" }],
];

const TYPE_SPEED = 18;
const LINE_PAUSE = 120;
const LOOP_PAUSE = 2200;

export default function CodeWindow() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const fullLines = LINES.map((line) => line.map((t) => t.text).join(""));

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, LOOP_PAUSE);
      return () => clearTimeout(t);
    }

    const currentFull = fullLines[lineIndex];

    if (charIndex < currentFull.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, fullLines]);

  function renderLine(line: Line, revealCount: number) {
    let remaining = revealCount;
    const out: React.ReactNode[] = [];

    for (let i = 0; i < line.length; i++) {
      const token = line[i];
      if (remaining <= 0) break;
      const slice = token.text.slice(0, remaining);
      out.push(
        <span key={i} style={{ color: token.color ?? "#f1f2f6" }}>
          {slice}
        </span>
      );
      remaining -= token.text.length;
    }

    return out;
  }

  return (
    <div
      className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
      style={{ background: "#0d0e12" }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">solution.tsx</span>
      </div>

      <div className="min-h-[260px] px-5 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {LINES.map((line, i) => {
          const isCurrent = i === lineIndex;
          const isDone = i < lineIndex;
          const revealCount = isDone
            ? fullLines[i].length
            : isCurrent
              ? charIndex
              : 0;

          return (
            <div key={i} className="flex">
              <span className="mr-4 w-4 shrink-0 select-none text-right text-white/25">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {renderLine(line, revealCount)}
                {isCurrent && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-[2px] bg-accent-2"
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
