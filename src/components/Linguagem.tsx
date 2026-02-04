"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      skills: "Skills",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      badge: "Sobre mim",
      subtitle: "Desenvolvedor Full Stack",
      welcome_user: "Olá, {name}. Fique à vontade para conhecer um pouco do meu trabalho.",
      description: "Full Stack com foco em front-end. Crio interfaces rápidas e sistemas completos, do front ao deploy.",
      cta_projects: "Ver Projetos",
      cta_contact: "Fale Comigo",
    },
    skills: {
      badge: "Minhas Habilidades",
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas",
      extras: "Extras",
      status: {
        daily: "Diário",
        focus: "Foco atual",
        used: "Tenho experiência",
        learning: "Estudando"
      },
      used_in: "Usado em:"
    },
    experience: {
      badge: "Minha Jornada",
      title: "Experiência e Formação",
      professional: "Profissional",
      academic: "Acadêmica",
      current: "Atualmente",
      years: "Maio 2025 - Setembro 2025",
      completed: "Concluído",
      jobs: {
        nobuggy: {
          role: "Desenvolvedor Front-end",
          desc: "Atuação no desenvolvimento de soluções tecnológicas completas, focando em entregas de alta qualidade e performance.",
        },
        imazon: {
          role: "Desenvolvedor Full Stack",
          desc: "Desenvolvimento e manutenção de sistemas administrativos, contribuindo para a eficiência dos processos internos.",
        },
        university: {
          role: "Ciência da Computação",
          desc: "Formação focada em engenharia de software, algoritmos e desenvolvimento web moderno.",
        }
      }
    },
    projects: {
      badge: "Meu Portfólio",
      title: "Projetos em Destaque",
      description: "Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em resolver problemas reais.",
      view_code: "Ver Código",
      view_demo: "Ver Demo",
      featured: {
        label: "Destaque",
        cta: "Ver Case",
        problem_label: "O Desafio",
        solution_label: "O que fiz",
        desc_problem: "Modernizar a presença digital de uma empresa tradicional, criando um catálogo online acessível.",
        desc_solution: "Desenvolvi uma plataforma performática com Next.js, focada em SEO e experiência do usuário."
      },
      items: [
        "Uma empresa resposavel por venda e conserto de moveis e equipamentos de escritorio de alta qualidade.",
        "Um site de uma empresa que faz assessoria empresarial para pequenas e medias empresas.",
        "Um site que oferece um serviço para a contagem de calorias utilizando IA para reconhecimento de imagens.",
        "Uma empresa que oferece soluções em energia solar para residências e empresas."
      ]
    },
    contact: {
      badge: "Contato",
      title: "Vamos trabalhar juntos?",
      description: "Estou sempre aberto a novas oportunidades e desafios. Se você tem um projeto em mente ou apenas quer trocar uma ideia, sinta-se à vontade para entrar em contato!",
      email: "Email",
      location: "Localização",
      form: {
        name: "Nome",
        name_placeholder: "Seu nome",
        email: "Email",
        email_placeholder: "seu@email.com",
        subject: "Assunto",
        subject_placeholder: "Sobre o que vamos conversar?",
        message: "Mensagem",
        message_placeholder: "Sua mensagem...",
        btn: "Enviar Mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada com sucesso!",
        error: "Ocorreu um erro ao enviar.",
        disclaimer: "Ao enviar, você concorda em compartilhar seus dados apenas para contato sobre este assunto."
      }
    },
    modal: {
      title: "Olá! Como posso te chamar?",
      description: "Gostaria de personalizar sua experiência no meu portfólio.",
      placeholder: "Digite seu nome...",
      confirm: "Confirmar",
      skip: "Pular"
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "About Me",
      subtitle: "Full Stack Developer",
      welcome_user: "Hello, {name}. Feel free to explore my work.",
      description: "Full Stack developer with a focus on front-end development. I create fast interfaces and complete systems, from front-end to deployment.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
    },
    skills: {
      badge: "My Skills",
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      extras: "Extras",
      status: {
        daily: "Daily",
        focus: "Current Focus",
        used: "I have experience",
        learning: "Learning"
      },
      used_in: "Used in:"
    },
    experience: {
      badge: "My Journey",
      title: "Experience & Education",
      professional: "Professional",
      academic: "Academic",
      current: "Currently",
      years: "May 2025 - September 2025",
      completed: "Completed",
      jobs: {
        nobuggy: {
          role: "Front-end Developer",
          desc: "Development of complete technological solutions, focusing on high-quality delivery and performance.",
        },
        imazon: {
          role: "Full Stack Developer",
          desc: "Development and maintenance of administrative systems, contributing to the efficiency of internal processes.",
        },
        university: {
          role: "Computer Science",
          desc: "Education focused on software engineering, algorithms, and modern web development.",
        }
      }
    },
    projects: {
      badge: "My Portfolio",
      title: "Featured Projects",
      description: "Here are some of the projects I developed, demonstrating my skills in solving real-world problems.",
      view_code: "View Code",
      view_demo: "View Demo",
      featured: {
        label: "Featured",
        cta: "View Case",
        problem_label: "The Challenge",
        solution_label: "What I did",
        desc_problem: "Modernize the digital presence of a traditional company, creating an accessible online catalog.",
        desc_solution: "I developed a high-performance platform with Next.js, focused on SEO and user experience."
      },
      items: [
        "A company responsible for the sale and repair of high-quality office furniture and equipment.",
        "A website for a company providing business consulting for small and medium-sized enterprises.",
        "A website offering a calorie counting service using AI for image recognition.",
        "A company offering solar energy solutions for homes and businesses."
      ]
    },
    contact: {
      badge: "Contact",
      title: "Let's work together?",
      description: "I am always open to new opportunities and challenges. If you have a project in mind or just want to chat, feel free to reach out!",
      email: "Email",
      location: "Location",
      form: {
        name: "Name",
        name_placeholder: "Your name",
        email: "Email",
        email_placeholder: "your@email.com",
        subject: "Subject",
        subject_placeholder: "What are we going to talk about?",
        message: "Message",
        message_placeholder: "Your message...",
        btn: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "An error occurred while sending.",
        disclaimer: "By sending, you agree to share your data only for contact regarding this subject."
      }
    },
    modal: {
      title: "Hello! What should I call you?",
      description: "I'd like to personalize your experience in my portfolio.",
      placeholder: "Type your name...",
      confirm: "Confirm",
      skip: "Skip"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
