"use client";

import Header from "@/components/Hearder";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}
