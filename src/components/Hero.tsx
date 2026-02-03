import React from "react";
import { SiGithub, SiLinkedin, SiNextdotjs, SiReact, SiTypescript, SiNodedotjs } from "react-icons/si";
import { useLanguage } from "@/components/Linguagem";
import Typewriter from "@/components/Typewriter";
import { useUser } from "@/components/UserContext";

export default function Hero() {
  const { t, language } = useLanguage();
  const { userName } = useUser();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="relative isolate min-h-screen flex items-center overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 mt-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <section
            id="inicio"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
          >
            {userName && (
              <div className="flex flex-col items-center lg:items-start gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <p className="text-3xl font-bold text-stone-800 dark:text-stone-100">
                  {t.hero.welcome_user.replace("{name}", userName).split(".")[0]}
                </p>
                <p className="text-lg text-stone-600 dark:text-stone-400">
                  {t.hero.welcome_user.replace("{name}", userName).split(".").slice(1).join(".").trim()}
                </p>
              </div>
            )}

            <div className="space-y-6 animate-in fade-in-up duration-700 w-full">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
                  {t.hero.badge}
                </div>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                <Typewriter text="Ricardo Alves" speed={100} delay={100} resetKey={`${language}-${userName}`} />
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                <Typewriter text={t.hero.subtitle} speed={50} delay={1500} resetKey={`${language}-${userName}`} />
              </h2>

              <p className="max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300 mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </div>

            <div className="flex items-center gap-6 animate-in fade-in-up duration-700 delay-200">
              <a
                href="#projetos"
                onClick={handleScroll}
                className="rounded-full bg-stone-900 dark:bg-stone-100 px-6 py-3 text-sm font-semibold text-white dark:text-stone-900 shadow-sm hover:bg-stone-700 dark:hover:bg-stone-200 transition-all hover:scale-105"
              >
                {t.hero.cta_projects}
              </a>
              <a
                href="#contato"
                onClick={handleScroll}
                className="text-sm font-semibold leading-6 text-stone-900 dark:text-stone-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {t.hero.cta_contact} <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex gap-6 mt-4 animate-in fade-in-up duration-700 delay-300">
              <a
                href="https://github.com/RicardoJrn1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110"
              >
                <SiGithub className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-alves-jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110"
              >
                <SiLinkedin className="w-7 h-7" />
              </a>
            </div>
          </section>

          {/* Right Column: Visual Block */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {/* Blur Blob */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] h-[300px] bg-sky-500/20 rounded-full blur-[80px] -z-10" />

            {/* Status/Stack Card */}
            <div className="relative p-8 rounded-3xl bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-stone-200/50 dark:border-stone-700/50 shadow-2xl max-w-sm w-full transform transition-all hover:scale-[1.02] hover:shadow-sky-500/10">
              {/* Header: Status */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 border border-emerald-200/50 dark:border-emerald-800/50">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    {language === "pt" ? "Disponível" : "Available"}
                  </span>
                </div>
                <span className="text-xs font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                  Belém, {language === "pt" ? "Brasil" : "Brazil"}
                </span>
              </div>

              {/* Main Info */}
              <div className="space-y-3 mb-8">
                <div className="h-1.5 w-12 bg-sky-500 rounded-full mb-4" />
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {language === "pt" ? (
                    <>Desenvolvedor<br />Full-Stack</>
                  ) : (
                    <>Full-Stack<br />Developer</>
                  )}
                </h3>
                
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {language === "pt"
                    ? "Criando soluções digitais modernas e performáticas."
                    : "Building modern and performant digital solutions."}
                </p>
              </div>

              {/* Stack Icons */}
              <div className="pt-6 border-t border-stone-200/50 dark:border-stone-700/50">
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                  {language === "pt" ? "Stack Principal" : "Main Stack"}
                </p>
                <div className="flex justify-between items-center">
                  <div className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-sm group-hover:shadow-md transition-all">
                      <SiNextdotjs size={24} />
                    </div>
                  </div>
                  <div className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-[#3178C6] shadow-sm group-hover:shadow-md transition-all">
                      <SiTypescript size={24} />
                    </div>
                  </div>
                  <div className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-[#61DAFB] shadow-sm group-hover:shadow-md transition-all">
                      <SiReact size={24} />
                    </div>
                  </div>
                  <div className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                    <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-[#339933] shadow-sm group-hover:shadow-md transition-all">
                      <SiNodedotjs size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
