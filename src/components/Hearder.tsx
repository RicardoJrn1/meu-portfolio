"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useLanguage } from "@/components/Linguagem";

type Lang = "pt" | "en";

const FlagBR = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 72 50" className={`rounded-[2px] object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="72" height="50" fill="#009c3b" />
    <polygon points="36,4 68,25 36,46 4,25" fill="#ffdf00" />
    <circle cx="36" cy="25" r="13" fill="#002776" />
  </svg>
);

const FlagUS = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 72 50" className={`rounded-[2px] object-cover ${className}`} xmlns="http://www.w3.org/2000/svg">
    <rect width="72" height="50" fill="#b22234" />
    <path d="M0 4h72M0 12h72M0 21h72M0 29h72M0 38h72M0 46h72" stroke="#fff" strokeWidth="4" />
    <rect width="32" height="26" fill="#3c3b6e" />
  </svg>
);

function LanguageSwitcher({
  language,
  setLanguage,
  variant = "desktop",
  onOpenChange,
}: {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  variant?: "desktop" | "mobile";
  onOpenChange?: (open: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const setLang = (lang: Lang) => {
    setLanguage(lang);
    setOpen(false);
    onOpenChange?.(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (wrapRef.current && !wrapRef.current.contains(target)) {
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onOpenChange]);

  const isDesktop = variant === "desktop";

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            onOpenChange?.(next);
            return next;
          });
        }}
        className={
          isDesktop
            ? "group flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 hover:shadow-sm"
            : "flex items-center gap-2 h-10 px-3 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
        }
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <div className="flex items-center justify-center">
          {language === "pt" ? <FlagBR className="w-6 h-4" /> : <FlagUS className="w-6 h-4" />}
        </div>

        {isDesktop && (
          <span className="text-sm font-semibold text-stone-700 dark:text-stone-200">
            {language === "pt" ? "PT-BR" : "EN-US"}
          </span>
        )}

        <FiChevronDown
          className={`h-4 w-4 text-stone-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 mt-3 overflow-hidden rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl shadow-lg ${
              isDesktop ? "w-52" : "w-44"
            }`}
            role="menu"
          >
            <button
              type="button"
              onClick={() => setLang("pt")}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-100/70 dark:hover:bg-stone-800/50 transition-colors"
              role="menuitem"
            >
              <span className="flex items-center gap-3">
                <FlagBR />
                <span>{isDesktop ? "Português (Brasil)" : "PT-BR"}</span>
              </span>
              {language === "pt" && <FiCheck className="h-4 w-4 text-sky-500" />}
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-100/70 dark:hover:bg-stone-800/50 transition-colors"
              role="menuitem"
            >
              <span className="flex items-center gap-3">
                <FlagUS />
                <span>{isDesktop ? "English (US)" : "EN-US"}</span>
              </span>
              {language === "en" && <FiCheck className="h-4 w-4 text-sky-500" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "border-stone-200/50 dark:border-stone-800/50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
            Ricardo Alves
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-stone-600 dark:text-stone-300 sm:flex">
          <a
            href="#skills"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            {t.nav.skills}
          </a>
          <a
            href="#experiencia"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            {t.nav.experience}
          </a>
          <a
            href="#projetos"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contato"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Desktop language dropdown */}
        <div className="hidden sm:flex items-center ml-6">
          <LanguageSwitcher
            variant="desktop"
            language={language as Lang}
            setLanguage={(l) => setLanguage(l)}
            onOpenChange={() => {
              // nada aqui, mas fica pronto caso você queira travar algo
            }}
          />
        </div>

        {/* Mobile: language + menu button */}
        <div className="flex items-center gap-4 sm:hidden">
          <LanguageSwitcher
            variant="mobile"
            language={language as Lang}
            setLanguage={(l) => setLanguage(l)}
            onOpenChange={() => {
              // idem
            }}
          />

          <button
            className="sm:hidden p-2 -mr-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full h-screen bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl sm:hidden -z-10 flex flex-col items-center justify-center gap-10"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-medium text-stone-600 dark:text-stone-300">
              <a
                href="#skills"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {t.nav.skills}
              </a>
              <a
                href="#experiencia"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {t.nav.experience}
              </a>
              <a
                href="#projetos"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contato"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex gap-8 mt-4">
              <a
                href="https://github.com/RicardoJrn1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110"
              >
                <SiGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-alves-jr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110"
              >
                <SiLinkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
