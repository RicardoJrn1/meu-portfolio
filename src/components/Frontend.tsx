import React, { useRef, useState } from "react";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useLanguage } from "@/components/Linguagem";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const SkillCard = ({ name, icon: Icon, color }: Skill) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-stone-800/50 border border-stone-200/50 dark:border-stone-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}15, transparent 40%)`,
        }}
      />
      <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10" style={{ color }} />
      <span className="text-sm font-semibold text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors relative z-10">{name}</span>
    </div>
  );
};

const FRONTEND_SKILLS: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
];

export default function Frontend() {
    const { t } = useLanguage();
    return (
        <div className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 border border-stone-200/50 dark:border-stone-700/50 shadow-sm">
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
              {t.skills.frontend}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
              {FRONTEND_SKILLS.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
        </div>
    );
}