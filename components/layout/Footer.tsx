"use client";
import React from 'react';
import { toast } from 'react-hot-toast';
import { HiDownload, HiClipboardCopy, HiShare } from 'react-icons/hi';
import { SiGithub, SiInstagram, SiWhatsapp, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const contacts = [
    { label: "Email", target: "eren.yigit.aydin@gmail.com" },
    { label: "Telefon", target: "+41 76 292 53 53" },
  ];

  const onHandleCopy = (target: string, label: string) => {
    navigator.clipboard.writeText(target);
    toast.success(`${label} in die Zwischenablage kopiert!`, {
      icon: "📋",
      style: {
        border: "1px solid #4f4f4f",
        background: "#1a1a1a",
        color: "#fff",
      },
    });
  };

  const footerShortcuts = [
    {
      icon: <HiDownload className="w-10 h-10" />,
      title: "Lebenslauf",
      color: "bg-teal-500",
      content: (
        <a href="/pdf/ErenAydinLebenslauf.pdf" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
          Hier herunterladen
        </a>
      ),
    },
    {
      icon: <HiClipboardCopy className="w-10 h-10" />,
      title: "Kontakt",
      color: "bg-indigo-500",
      content: (
        <div className="flex flex-col gap-2">
          {contacts.map(contact => (
            <button
              key={contact.label}
              onClick={() => onHandleCopy(contact.target, contact.label)}
              className="text-sm font-semibold hover:underline"
            >
              {contact.label} kopieren
            </button>
          ))}
        </div>
      ),
    },
    {
      icon: <HiShare className="w-10 h-10" />,
      title: "Soziale Medien",
      color: "bg-fuchsia-500",
      content: (
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/yigiterenaydin" target="_blank" rel="noopener noreferrer" title="GitHub">
            <SiGithub className="w-8 h-8 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://wa.me/41762925353" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <SiWhatsapp className="w-8 h-8 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/eren_zhhh/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <SiInstagram className="w-8 h-8 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      ),
    }
  ];

  return (
    <footer className="w-full pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {footerShortcuts.map((shortcut) => (
            <div key={shortcut.title} className={`${shortcut.color} rounded-3xl p-6 flex flex-col justify-between h-48 text-white text-center relative`}>
              <div className="flex justify-center">{shortcut.icon}</div>
              <h3 className="font-bold text-xl">{shortcut.title}</h3>
              <div>{shortcut.content}</div>
              
              {/* iOS Shortcuts style button */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/30 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
              ))}
          </div>

        <div className="mt-16 text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} Eren Aydin</p>
          <div className="flex justify-center items-center gap-4">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js" className="p-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
              <SiNextdotjs className="w-6 h-6" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" title="TypeScript" className="p-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
              <SiTypescript className="w-6 h-6" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS" className="p-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
              <SiTailwindcss className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;