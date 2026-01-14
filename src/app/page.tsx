"use client";

import Header from "@/components/Hearder";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation>
        <Experience />
      </ScrollAnimation>
      <ScrollAnimation>
        <Projetos />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contato />
      </ScrollAnimation>
      <Footer />
    </>
  );
}
