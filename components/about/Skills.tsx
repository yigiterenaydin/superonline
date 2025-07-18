"use client";

import { useState } from "react";

import { FrontEndStacks } from "./stacks/FrontEndStacks";
import { BackEndStacks } from "./stacks/BackEndStacks";
import { OtherStacks } from "./stacks/OtherStacks";

interface SkillsProps {
  headingColor?: string;
}

export const Skills: React.FC<SkillsProps> = ({ headingColor }) => {
  const [menu, setMenu] = useState<number>(1);

  const stacks = [
    { title: "Sprachkenntnisse", menu: 1 },
    { title: "Interessen", menu: 2 },
    { title: "Referenzen", menu: 3 },
  ];

  return (
    <div className="mt-8 w-full self-center flex flex-col items-center justify-center">
      <h1 className={`font-bold text-transparent text-3xl lg:text-4xl mb-2 bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ${headingColor || ''}`}>
        Hier sind meine Fähigkeiten und Kompetenzen.
      </h1>

      <hr className="w-96 mb-6 p-1 bg-gradient-to-r from-amber-500 to-amber-700 border-none rounded-sm" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6 w-full max-w-2xl px-4">
        {stacks.map((stack) => (
          <div key={stack.menu}>
            <button
              className={`rounded-md w-full py-3 text-white font-semibold shadow-md transition-all duration-300 ${
                menu === stack.menu
                  ? "bg-amber-700 scale-105"
                  : "bg-amber-600 hover:bg-amber-700"
              }`}
              onClick={() => setMenu(stack.menu)}
            >
              {stack.title}
            </button>
          </div>
        ))}
      </div>

      {/* === GÖSTERİM ALANI === */}
      {menu === 3 ? (
        <div className="w-full px-4 mb-12">
          <OtherStacks />
        </div>
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-5 w-full gap-4 text-4xl md:text-5xl text-primary px-4 mb-12">
          {menu === 1 ? <FrontEndStacks /> : <BackEndStacks />}
        </div>
      )}
    </div>
  );
};
