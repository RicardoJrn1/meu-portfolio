import React from "react";
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

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const SkillCard = ({ name, icon: Icon, color }: Skill) => (
  <div
    className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-stone-800/50 border border-stone-200/50 dark:border-stone-700/50 hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm"
    style={{ "--skill-color": color } as React.CSSProperties}
  >
    <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 shadow-[0_10px_30px_-10px_var(--skill-color)]" />
    <Icon
      className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 relative z-10"
      style={{ color: color }}
    />
    <span className="text-sm font-semibold text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors relative z-10">
      {name}
    </span>
  </div>
);

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
    return (
        <div className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-md rounded-3xl p-8 border border-stone-200/50 dark:border-stone-700/50 shadow-sm">
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center gap-2">
              Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
              {FRONTEND_SKILLS.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
        </div>
    );
}