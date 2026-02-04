import React from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/Linguagem";

const ExperienceCard = ({
  role,
  company,
  date,
  desc,
  delay = 0,
}: {
  role: string;
  company: string;
  date: string;
  desc: string;
  delay?: number;
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-3 bottom-0 w-[2px] bg-stone-200 dark:bg-stone-800 group-last:hidden" />

      {/* Timeline Dot */}
      <div className="absolute left-[7px] top-3 h-2.5 w-2.5 rounded-full bg-stone-300 dark:bg-stone-600 ring-4 ring-stone-50 dark:ring-stone-950 group-hover:bg-sky-500 group-hover:scale-125 group-hover:ring-sky-100 dark:group-hover:ring-sky-900/30 transition-all duration-300 z-10" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className="relative p-6 rounded-2xl bg-white/50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-700/50 hover:bg-white dark:hover:bg-stone-800 hover:border-sky-200/50 dark:hover:border-sky-800/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {role}
            </h4>
            <p className="text-sm font-semibold text-stone-600 dark:text-stone-400">
              {company}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded-full w-fit">
            <FaCalendarAlt className="w-3 h-3" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const { t } = useLanguage();
  return (
    <div id="experiencia" className="scroll-target mt-20">
      <div className="text-center mb-16">
        <p className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
          {t.experience.badge}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-6">
          {t.experience.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Experiência Profissional */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-sky-100/50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
              <FaBriefcase className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {t.experience.professional}
            </h3>
          </div>

          <div className="space-y-0">
            <ExperienceCard
              role={t.experience.jobs.nobuggy.role}
              company="NoBuggy (Freelancer)"
              date={t.experience.current}
              desc={t.experience.jobs.nobuggy.desc}
              delay={0.1}
            />
            <ExperienceCard
              role={t.experience.jobs.imazon.role}
              company="Imazon"
              date={t.experience.years}
              desc={t.experience.jobs.imazon.desc}
              delay={0.2}
            />
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
              <FaGraduationCap className="text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {t.experience.academic}
            </h3>
          </div>

          <div className="space-y-0">
            <ExperienceCard
              role={t.experience.jobs.university.role}
              company="Unama - Universidade da Amazônia"
              date={t.experience.completed}
              desc={t.experience.jobs.university.desc}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}