"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica o estado inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
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
          <span className="text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">Ricardo Alves</span>
          <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-stone-600 dark:text-stone-300 sm:flex">
          <a
            href="#skills"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            Skills
          </a>
          <a
            href="#experiencia"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            Experiência
          </a>
          <a
            href="#projetos"
            onClick={handleScroll}
            className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          >
            Projetos
          </a>
          <a href="#contato" onClick={handleScroll} className="relative py-2 transition-colors hover:text-stone-900 dark:hover:text-stone-100">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 -mr-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
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
                Skills
              </a>
              <a
                href="#experiencia"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Experiência
              </a>
              <a
                href="#projetos"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Projetos
              </a>
              <a
                href="#contato"
                onClick={handleScroll}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Contato
              </a>
            </nav>

            <div className="flex gap-8 mt-4">
              <a href="https://github.com/RicardoJrn1" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110">
                <SiGithub className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/ricardo-alves-jr/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-transform hover:scale-110">
                <SiLinkedin className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
