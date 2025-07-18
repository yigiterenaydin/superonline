"use client";

export const FrontEndStacks = () => {
  const languages = [
    { name: "Deutsch", flag: "🇩🇪", level: 100, description: "Muttersprache" },
    { name: "Türkçe", flag: "🇹🇷", level: 100, description: "Muttersprache" },
    { name: "Englisch", flag: "🇬🇧", level: 75, description: "Schulkenntnisse im 7. Jahr" },
    { name: "Französisch", flag: "🇫🇷", level: 65, description: "Schulkenntnisse im 4. Jahr" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 col-span-full max-w-4xl mx-auto">
      {languages.map((lang) => (
        <div key={lang.name} className="flex flex-col gap-2 bg-amber-100 border-2 border-amber-500 rounded-xl p-4 hover:bg-amber-200 transition-all duration-300">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{lang.flag}</span>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-amber-800">{lang.name}</span>
              <span className="text-sm text-amber-600">{lang.description}</span>
            </div>
          </div>
          <div className="w-full bg-amber-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000 ease-out"
              style={{ width: `${lang.level}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-amber-700">
            <span>Anfänger</span>
            <span>Fortgeschritten</span>
          </div>
        </div>
      ))}
    </div>
  );
};