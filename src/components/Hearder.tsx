"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled
          ? "border-black/[.08] bg-background/80 backdrop-blur-md"
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
          <span className="text-xl font-semibold tracking-tight">Ricardo Alves</span>
          <span className="inline-block h-2 w-2 rounded-full bg-brand-primary" />
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-foreground/80 sm:flex">
          <a
            href="#skills"
            onClick={handleScroll}
            className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100"
          >
            Skills
          </a>
          <a
            href="#experiencia"
            onClick={handleScroll}
            className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100"
          >
            Experiência
          </a>
          <a
            href="#projetos"
            onClick={handleScroll}
            className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100"
          >
            Projetos
          </a>
          <a href="#contato" onClick={handleScroll} className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100">
            Contato
          </a>
          <Link href="#contato" className="relative py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-primary after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100">
            Blog
          </Link>
        </nav>
        <Link
          href="/login"
          className="inline-flex h-10 items-center justify-center rounded-full bg-brand-primary px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover"
        >
          Entrar na Plataforma
        </Link>
      </div>
    </header>
  );
}
