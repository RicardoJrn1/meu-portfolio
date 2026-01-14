import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
    return (
        <div id="skills" className="scroll-target mt-0">
            <div className="text-center mb-12">
              <p className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">Minhas Habilidades</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-6">
                Skills
              </h2>
            </div>
            <div className="space-y-8 max-w-5xl mx-auto px-6">
                <Frontend />
                <Backend />
            </div>
        </div>
    );
}