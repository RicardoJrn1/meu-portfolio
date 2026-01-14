import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <div className="relative isolate min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300">

      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <section
          id="inicio"
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="space-y-6 animate-in fade-in-up duration-700">
            <div className="text-center mb-6">
              <div className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
                Sobre mim
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Ricardo Alves
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Desenvolvedor Web Full Stack
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-stone-600 dark:text-stone-300">
              Sou desenvolvedor web full-stack com foco em front-end, com 3 anos
              de experiência na área de tecnologia. Trabalhei no Imazon, onde
              atuei no desenvolvimento de sistemas administrativos. Além disso,
              sou freelancer na empresa NoBuggy, especializada em soluções
              tecnológicas completas.
            </p>
          </div>

          <div className="flex items-center gap-6 animate-in fade-in-up duration-700 delay-200">
            <a
              href="#projetos"
              className="rounded-full bg-stone-900 dark:bg-stone-100 px-6 py-3 text-sm font-semibold text-white dark:text-stone-900 shadow-sm hover:bg-stone-700 dark:hover:bg-stone-200 transition-all hover:scale-105"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="text-sm font-semibold leading-6 text-stone-900 dark:text-stone-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              Fale Comigo <span aria-hidden="true">→</span>
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
      </div>
    </div>
  );
}
