"use client";

import React, { useRef, createRef } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCollection,
  HiLightningBolt,
  HiLockClosed,
  HiCloud,
  HiChip,
  HiStar,
  HiEye,
  HiQuestionMarkCircle,
  HiBadgeCheck,
} from "react-icons/hi";
import Image from "next/image";
import SpotlightCard from "../shared/SpotlightCard";

// Import all the content components
import { Welcome } from "@/components/home/Welcome";
import { Status } from "@/components/home/Status";
import { Info } from "@/components/about/Info";
import { Skills } from "@/components/about/Skills";
import { Journey } from "@/components/experience/Journey";
import { Certificate } from "@/components/experience/Certificate";
import { ProjectLists } from "@/components/projects/ProjectLists";

// Import widget components
import MotivationalQuotes from "../shared/MotivationalQuotes";
import SystemControl from "../shared/SystemControl";
import WusstestDuSchon from "../shared/WusstestDuSchon";

const shortcuts = [
  { id: "home", label: "Startseite", icon: <HiHome className="w-8 h-8" />, color: "bg-rose-500", textColor: "text-rose-500" },
  { id: "about", label: "Über mich", icon: <HiUser className="w-8 h-8" />, color: "bg-green-500", textColor: "text-green-500" },
  { id: "experience", label: "Erfahrung", icon: <HiBriefcase className="w-8 h-8" />, color: "bg-sky-500", textColor: "text-sky-500" },
  { id: "projects", label: "Projekte", icon: <HiCollection className="w-8 h-8" />, color: "bg-orange-500", textColor: "text-orange-500" },
  { id: "skills", label: "Fähigkeiten", icon: <HiStar className="w-8 h-8" />, color: "bg-amber-500", textColor: "text-amber-500" },
  // New shortcuts start here
  { id: "visitor-counter", label: "Klicke für ein Zitat", icon: <HiEye className="w-8 h-8" />, textColor: "" },
  { id: "weather", label: "Klick für Wissen", icon: <HiQuestionMarkCircle className="w-8 h-8" />, textColor: "" },
  { id: "system-status", label: "Meine Zahlen Bis heute", icon: <HiBadgeCheck className="w-8 h-8" />, textColor: "" },
  { id: "system-control", label: "PC Kontrolieren", icon: <HiLightningBolt className="w-8 h-8" />, textColor: "" },
];

const getSectionComponent = (id: string, headingColor: string, setActiveSection: (section: string | null) => void) => {
  // Pass headingColor to each component that has a title
  switch (id) {
    case "home":
      return (
        <div className="w-full lg:w-1/2">
          <Welcome headingColor={headingColor} setActiveSection={setActiveSection} />
          <div className="mt-8">
            <Status />
          </div>
        </div>
      );
    case "about":
      return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2 text-justify"><Info /></div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-16">
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl border-2 border-borderColor bg-tertiary">
              <Image src="/photo/Eren.png" alt="Eren" fill className="object-cover" />
            </div>
          </div>
        </div>
      );
    case "skills": return <Skills headingColor={headingColor} />;
    case "experience": return <><Journey /><Certificate /></>;
    case "projects": return <ProjectLists headingColor={headingColor} />;
    case "system-control":
      return (
        <div className="flex flex-col items-center justify-center p-4">
          <SystemControl />
        </div>
      );
    case "shortcut3":
    case "shortcut4":
      return (
        <SpotlightCard
          className="!p-8 !bg-[#2a2141] !border-slate-700"
          spotlightColor="rgba(167, 139, 250, 0.15)"
        >
          <div className="flex flex-col items-start text-left w-full">
            <div className="p-3 bg-slate-900/40 rounded-md mb-4">
              <HiLockClosed className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Erhöhte Sicherheit
            </h3>
            <p className="text-slate-400 text-base">
              Unsere hochmoderne Software bietet Sicherheit durch strenge
              Sicherheitsmaßnahmen.
            </p>
          </div>
        </SpotlightCard>
      );
    default: return null;
  }
};

interface ShortcutsMenuProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

const ShortcutsMenu: React.FC<ShortcutsMenuProps> = ({ activeSection, setActiveSection }) => {
  const itemRefs = useRef(shortcuts.map(() => createRef<HTMLDivElement>()));

  const handleShortcutClick = (sectionId: string, index: number) => {
    const newActiveSection = activeSection === sectionId ? null : sectionId;
    setActiveSection(newActiveSection);

    // Menü açıldığında seçilen menünün yukarı kaymasını sağla
    if (newActiveSection) {
      setTimeout(() => {
        const selectedElement = itemRefs.current[index].current;
        if (selectedElement) {
          selectedElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 50);
    }
  };

  return (
    <section className="p-4 md:p-8 relative">
      <SpotlightCard
        from="rgba(101, 10, 255, 0.4)"
        via="rgba(112, 10, 255, 0.2)"
        to="rgba(128, 80, 255, 0.1)"
        size={200}
        className="p-4 mb-4 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out relative bg-[#13131D] border border-gray-800 rounded-2xl h-16 flex items-center justify-center"
      >
        <h1 className="text-2xl font-bold text-white">
          Eren Aydin Kurzbefehle
        </h1>
      </SpotlightCard>
      
      <div className="flex flex-col gap-4">
        {/* Original shortcuts */}
        {shortcuts.slice(0, 5).map((shortcut, index) => (
          <div key={shortcut.id} className="flex flex-col" ref={itemRefs.current[index]}>
            <div
              onClick={() => handleShortcutClick(shortcut.id, index)}
              className={`${shortcut.color} ${activeSection === shortcut.id ? 'rounded-t-3xl' : 'rounded-3xl'} p-4 flex items-center h-24 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out relative`}
            >
              <div className="mr-4">{shortcut.icon}</div>
              <span className="font-semibold text-lg">{shortcut.label}</span>

              {/* iOS Shortcuts style button */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/30 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            {activeSection === shortcut.id && (
              <div className="bg-white p-6 rounded-b-3xl text-gray-900 shadow-lg transition-all duration-300 ease-in-out">
                {getSectionComponent(shortcut.id, shortcut.textColor, setActiveSection)}
              </div>
            )}
          </div>
        ))}

        {/* New shortcuts in grid layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {shortcuts.slice(5).map((shortcut, index) => (
            <div key={shortcut.id} className="flex flex-col" ref={itemRefs.current[index + 5]}>
              <SpotlightCard
                from="rgba(101, 10, 255, 0.4)"
                via="rgba(112, 10, 255, 0.2)"
                to="rgba(128, 80, 255, 0.1)"
                size={200}
                className="p-4 flex items-center h-32 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ease-in-out relative bg-[#13131D] border border-gray-800 rounded-2xl"
                onClick={shortcut.id === 'system-control' ? undefined : () => handleShortcutClick(shortcut.id, index + 5)}
              >
                {/* iOS Shortcuts style button for new shortcuts */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/30 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10 backdrop-blur-sm">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {shortcut.id === 'visitor-counter' ? (
                  <div className="flex items-center justify-center w-full space-x-2">
                    <HiEye className="w-6 h-6" />
                    <span className="text-lg font-bold">Klicke für ein Zitat</span>
                  </div>
                ) : shortcut.id === 'system-control' ? (
                  <div className="flex flex-col items-center justify-center w-full h-full text-white">
                    <span className="text-sm font-semibold mb-2">Kontrol</span>
                    <SystemControl />
                  </div>
                ) : shortcut.id === 'system-status' ? (
                  <div className="flex items-center justify-center w-full space-x-2">
                    <HiBadgeCheck className="w-8 h-8" />
                    <span className="text-lg font-bold">Meine Zahlen Bis heute</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full space-x-2">
                    <HiQuestionMarkCircle className="w-8 h-8" />
                    <span className="text-lg font-bold">Klick für Wissen</span>
                  </div>
                )}
              </SpotlightCard>
              {activeSection === shortcut.id && shortcut.id !== 'system-control' && (
                <div className="bg-white p-6 rounded-b-3xl text-gray-900 shadow-lg transition-all duration-300 ease-in-out">
                  {shortcut.id === 'visitor-counter' ? <MotivationalQuotes /> : shortcut.id === 'weather' ? <WusstestDuSchon /> : shortcut.id === 'system-status' ? (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-lg font-semibold text-center text-amber-500">9 Schnupperlehren, an denen ich bisher teilnehmen durfte.</span>
                      <span className="text-lg font-semibold text-center text-sky-500">0 Bisher von mir versandte Bewerbungen für Lehrstellen.</span>
                    </div>
                  ) : getSectionComponent(shortcut.id, shortcut.textColor || "", setActiveSection)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortcutsMenu; 