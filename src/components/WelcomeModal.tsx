"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/components/UserContext";
import { useLanguage } from "@/components/Linguagem";
import { FiUser } from "react-icons/fi";

export default function WelcomeModal() {
  const { userName, setUserName, isLoaded } = useUser();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    // Abre apenas se carregou e não tem nome salvo
    if (isLoaded && !userName) {
        const timer = setTimeout(() => setIsOpen(true), 1500); // Pequeno delay para não ser intrusivo
        return () => clearTimeout(timer);
    }
  }, [isLoaded, userName]);

  const handleSave = () => {
    if (inputName.trim()) {
      setUserName(inputName.trim());
      setIsOpen(false);
    }
  };

  const handleSkip = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleSkip}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-2xl p-8"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="h-16 w-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <FiUser size={32} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {t.modal.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  {t.modal.description}
                </p>
              </div>

              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder={t.modal.placeholder}
                className="w-full rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 px-4 py-3 text-center text-lg text-stone-900 dark:text-stone-100 focus:border-sky-500 focus:ring-sky-500 focus:outline-none transition-all"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />

              <div className="flex gap-3 w-full">
                <button onClick={handleSkip} className="flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                  {t.modal.skip}
                </button>
                <button onClick={handleSave} disabled={!inputName.trim()} className="flex-1 rounded-xl bg-stone-900 dark:bg-stone-100 px-4 py-3 text-sm font-semibold text-white dark:text-stone-900 shadow-sm hover:bg-stone-700 dark:hover:bg-stone-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {t.modal.confirm}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}