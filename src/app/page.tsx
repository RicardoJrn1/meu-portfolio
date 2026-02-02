"use client";

import Header from "@/components/Hearder";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experiencia";
import Projetos from "@/components/Projetos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { LanguageProvider } from "@/components/Linguagem";
import { UserProvider } from "@/components/UserContext";
import WelcomeModal from "@/components/WelcomeModal";

export default function Home() {
  return (
    <LanguageProvider>
      <UserProvider>
        <Header />
        <WelcomeModal />
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
      </UserProvider>
    </LanguageProvider>
  );
}
