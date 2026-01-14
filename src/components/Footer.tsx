import React from "react";
import { useLanguage } from "@/components/Linguagem";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-20 py-8 text-center text-stone-500 dark:text-stone-400 text-sm border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
      <p>
        © {new Date().getFullYear()} Ricardo Alves. {t.footer.rights}
      </p>
    </footer>
  );
}