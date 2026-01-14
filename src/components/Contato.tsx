import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contato() {
  return (
    <div id="contato" className="scroll-target mt-20 mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <div className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all mb-4">
                Contato
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mt-6 leading-relaxed">
                Estou sempre aberto a novas oportunidades e desafios. Se você tem
                um projeto em mente ou apenas quer trocar uma ideia, sinta-se à
                vontade para entrar em contato!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-sky-600">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    Email
                  </p>
                  <a
                    href="mailto:ricardo727jrn@gmail.com"
                    className="text-base font-semibold text-stone-900 dark:text-stone-100 hover:text-sky-600 transition-colors"
                  >
                    ricardo727jrn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-sky-600">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    Localização
                  </p>
                  <p className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    Belém, Pará - Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/RicardoJrn1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-white transition-all hover:scale-110"
              >
                <SiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-alves-jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-white transition-all hover:scale-110"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white/50 dark:bg-stone-900/50 backdrop-blur-md rounded-3xl p-8 border border-stone-200/50 dark:border-stone-700/50 shadow-lg">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-stone-700 dark:text-stone-300">Nome</label>
                  <input type="text" id="name" required className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-700 dark:text-stone-300">Email</label>
                  <input type="email" id="email" required className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-700 dark:text-stone-300">Assunto</label>
                <input type="text" id="subject" required className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all" placeholder="Sobre o que vamos conversar?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700 dark:text-stone-300">Mensagem</label>
                <textarea id="message" rows={4} required className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all resize-none" placeholder="Sua mensagem..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 dark:bg-stone-100 px-6 py-4 text-sm font-semibold text-white dark:text-stone-900 shadow-sm hover:bg-stone-700 dark:hover:bg-stone-200 transition-all hover:scale-[1.02]">
                Enviar Mensagem
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}