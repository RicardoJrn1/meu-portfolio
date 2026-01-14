"use client";

import React, { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/components/Linguagem";

export default function Contato() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms exige a access_key
    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string
    );


    // Extras opcionais (ajudam na organização do email)
    data.append("subject", "Novo contato pelo Portfólio");
    data.append("from_name", "Portfólio - Ricardo");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await res.json();

      if (json?.success) {
        setStatus("success");
        setMessage(t.contact.form.success);
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          json?.message || t.contact.form.error
        );
      }
    } catch (err) {
      setStatus("error");
      setMessage(t.contact.form.error);
    }
  }

  return (
    <div id="contato" className="scroll-target mt-20 mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <div className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all mb-4">
                {t.contact.badge}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
                {t.contact.title}
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mt-6 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-sky-600">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                    {t.contact.email}
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
                    {t.contact.location}
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all"
                    placeholder={t.contact.form.name_placeholder}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all"
                    placeholder={t.contact.form.email_placeholder}
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="assunto"
                  required
                  className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all"
                  placeholder={t.contact.form.subject_placeholder}
                  disabled={status === "sending"}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-3 text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all resize-none"
                  placeholder={t.contact.form.message_placeholder}
                  disabled={status === "sending"}
                />
              </div>

              {/* Feedback */}
              {status !== "idle" && message && (
                <div
                  className={[
                    "rounded-xl border px-4 py-3 text-sm",
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-200"
                      : status === "error"
                      ? "border-red-200 bg-red-50 text-red-800 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-200"
                      : "border-stone-200 bg-stone-50 text-stone-700 dark:border-stone-700 dark:bg-stone-800/50 dark:text-stone-200",
                  ].join(" ")}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-stone-900 dark:bg-stone-100 px-6 py-4 text-sm font-semibold text-white dark:text-stone-900 shadow-sm hover:bg-stone-700 dark:hover:bg-stone-200 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "sending" ? t.contact.form.sending : t.contact.form.btn}
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500 dark:text-stone-400">
              {t.contact.form.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
