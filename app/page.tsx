"use client";

import { useState, useEffect } from "react";
import ShortcutsMenu from "@/components/home/ShortcutsMenu";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import { FiWifi } from "react-icons/fi";
import { FaBatteryFull } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [time, setTime] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000); // Update every second

    // Set loaded state after a short delay
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, []);

  // Add error boundary
  if (!isLoaded) {
    return (
      <main className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-2 text-sm text-gray-700">
          <div className="font-bold">{time}</div>
          <div className="flex items-center gap-2">
            <span>ErenOnline</span>
            <FiWifi />
            <FaBatteryFull />
          </div>
        </div>
        <ShortcutsMenu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Footer />
        <ScrollToTopButton />
      </div>
    </main>
  );
}