import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfólio - Ricardo Alves",
    template: "%s | Portfólio - Ricardo Alves",
  },
  description:
    "Portfólio de Ricardo Alves, desenvolvedor front-end especializado em criar experiências web modernas e responsivas.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Portfólio - Ricardo Alves",
    description:
      "Portfólio de Ricardo Alves, desenvolvedor front-end especializado em criar experiências web modernas e responsivas.",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "desenvolvedor frontend",
    "react",
    "next.js",
    "typescript",
    "ricardo alves",
    "portfólio",
  ],
  icons: {
    icon: "/icon-note.png",
  },
};

export const viewport = {
  themeColor: "#fafaf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ricardo Alves",
    url: "https://github.com/RicardoJrn1",
    description:
      "Desenvolvedor Front-end especializado em criar experiências web modernas e responsivas.",
    jobTitle: "Desenvolvedor Frontend",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfólio - Ricardo Alves",
    url: "https://github.com/RicardoJrn1",
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-main text-foreground`}
      >
        <div className="relative min-h-dvh overflow-hidden">
          {/* Gradiente sutil sobre o fundo principal */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20"
            style={{
              background: `
                radial-gradient(circle at 0% 0%, var(--background-soft) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, var(--background-soft) 0%, transparent 50%)
              `,
            }}
          />

          {/* Efeito de cores (Aurora) - Global */}
          <div
            className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          {/* Animação de feixes de luz (Meteors) */}
          <style>{`
            @keyframes meteor {
              0% { transform: rotate(215deg) translateX(0); opacity: 1; }
              70% { opacity: 1; }
              100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
            }
          `}</style>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="absolute h-0.5 w-0.5 rounded-[9999px] bg-sky-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
                style={{
                  top: Math.floor(Math.random() * 100) + "%",
                  left: Math.floor(Math.random() * 100) + "%",
                  animation: `meteor ${Math.random() * 3 + 2}s linear infinite`,
                  animationDelay: Math.random() * 2 + "s",
                  width: Math.floor(Math.random() * 100) + 50 + "px",
                }}
              >
                <span className="absolute top-1/2 -z-10 h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-sky-500 to-transparent" />
              </span>
            ))}
          </div>

          {/* Conteúdo sempre acima */}
          <div className="relative z-10">{children}</div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
