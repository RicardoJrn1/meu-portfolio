import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiDjango,
  SiSqlite,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { useLanguage } from "@/components/Linguagem";
import type { IconType } from "react-icons";

type SkillStatus = "daily" | "focus" | "used" | "learning";

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
  status: SkillStatus;
}

const SkillBlock = ({
  skill,
  t,
}: {
  skill: SkillItem;
  t: any;
}) => {
  return (
    <div className="group/skill relative flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-700/50 hover:bg-white dark:hover:bg-stone-700 transition-all hover:shadow-md cursor-default overflow-hidden">
      {/* Icon */}
      <div className="relative z-10 p-2 rounded-lg bg-white dark:bg-stone-800 shadow-sm text-stone-700 dark:text-stone-200 group-hover/skill:text-[var(--skill-color)] transition-colors" style={{ "--skill-color": skill.color } as React.CSSProperties}>
        <skill.icon size={20} />
      </div>

      {/* Text Info */}
      <div className="relative z-10 flex flex-col">
        <span className="text-sm font-bold text-stone-800 dark:text-stone-100 leading-tight">
          {skill.name}
        </span>
        <span className="text-[10px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
          {t.skills.status[skill.status]}
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  const { t } = useLanguage();

  const SKILLS: Record<string, SkillItem[]> = {
    frontend: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", status: "daily" },
      { name: "React", icon: SiReact, color: "#61DAFB", status: "daily" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", status: "daily" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", status: "daily" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", status: "used" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", status: "used" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", status: "used" },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", status: "used" },
      { name: "Java", icon: FaJava, color: "#f89820", status: "used" },
      { name: "Django", icon: SiDjango, color: "#092E20", status: "used" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", status: "used" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57", status: "used" },
    ],
    tools: [
      { name: "Git", icon: SiGit, color: "#F05032", status: "daily" },
      { name: "GitHub", icon: SiGithub, color: "#181717", status: "daily" },
      { name: "Vercel", icon: SiVercel, color: "#000000", status: "daily" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", status: "used" },
    ],
    extras: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E", status: "used" },
    ],
  };

  return (
    <div id="skills" className="scroll-target mt-0">
      <div className="text-center mb-12">
        <p className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
          {t.skills.badge}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-6">
          {t.skills.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Card Grande: Frontend (2x2) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative md:col-span-2 md:row-span-2 rounded-3xl bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-stone-200/50 dark:border-stone-700/50 p-8 shadow-sm hover:shadow-lg transition-all overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-2">
              {t.skills.frontend}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {SKILLS.frontend.map((skill) => (
                <SkillBlock key={skill.name} skill={skill} t={t} />
              ))}
            </div>
          </motion.div>

          {/* Card Médio: Backend (2x1) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-2 md:row-span-1 rounded-3xl bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-stone-200/50 dark:border-stone-700/50 p-8 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6">
              {t.skills.backend}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.backend.map((skill) => (
                <SkillBlock key={skill.name} skill={skill} t={t} />
              ))}
            </div>
          </motion.div>

          {/* Card Pequeno: Ferramentas (1x1) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-stone-200/50 dark:border-stone-700/50 p-6 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">
              {t.skills.tools}
            </h3>
            <div className="flex flex-col gap-3">
              {SKILLS.tools.map((skill) => (
                <SkillBlock key={skill.name} skill={skill} t={t} />
              ))}
            </div>
          </motion.div>

          {/* Card Pequeno: Extras (1x1) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-br from-stone-100 to-white dark:from-stone-800 dark:to-stone-900 border border-stone-200/50 dark:border-stone-700/50 p-6 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">
              {t.skills.extras}
            </h3>
            <div className="flex flex-col gap-3">
              {SKILLS.extras.map((skill) => (
                <SkillBlock key={skill.name} skill={skill} t={t} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}