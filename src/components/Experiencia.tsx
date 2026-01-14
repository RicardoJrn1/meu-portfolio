import React from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { useLanguage } from "@/components/Linguagem";

export default function Experience() {
  const { t } = useLanguage();
  return (
    <div id="experiencia" className="scroll-target mt-20">
      <div className="text-center mb-12">
        <p className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
          {t.experience.badge}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-6">
          {t.experience.title}
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experiência Profissional */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-2xl text-sky-600" />
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {t.experience.professional}
            </h3>
          </div>

          {/* Item 1 */}
          <div className="relative pl-8 border-l-2 border-stone-200 dark:border-stone-700 space-y-2">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-sky-600 ring-4 ring-white dark:ring-stone-900" />
            <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {t.experience.jobs.nobuggy.role}
            </h4>
            <p className="text-sky-600 font-medium">NoBuggy (Freelancer)</p>
            <div className="flex items-center text-sm text-stone-500 dark:text-stone-400 gap-2">
              <FaCalendarAlt />
              <span>{t.experience.current}</span>
            </div>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
              {t.experience.jobs.nobuggy.desc}
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative pl-8 border-l-2 border-stone-200 dark:border-stone-700 space-y-2">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-stone-300 dark:bg-stone-600 ring-4 ring-white dark:ring-stone-900" />
            <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {t.experience.jobs.imazon.role}
            </h4>
            <p className="text-sky-600 font-medium">Imazon</p>
            <div className="flex items-center text-sm text-stone-500 dark:text-stone-400 gap-2">
              <FaCalendarAlt />
              <span>{t.experience.years}</span>
            </div>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
              {t.experience.jobs.imazon.desc}
            </p>
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="text-2xl text-sky-600" />
            <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">
              {t.experience.academic}
            </h3>
          </div>

          {/* Item 1 - Exemplo (Edite conforme necessário) */}
          <div className="relative pl-8 border-l-2 border-stone-200 dark:border-stone-700 space-y-2">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-sky-600 ring-4 ring-white dark:ring-stone-900" />
            <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100">
              {t.experience.jobs.university.role}
            </h4>
            <p className="text-sky-600 font-medium">Unama - Universidade da Amazônia</p>
            <div className="flex items-center text-sm text-stone-500 dark:text-stone-400 gap-2">
              <FaCalendarAlt />
              <span>{t.experience.completed}</span>
            </div>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
              {t.experience.jobs.university.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}