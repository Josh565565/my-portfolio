// app/page.tsx
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeColor, setActiveColor] = useState("#37b182");

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        activeColor={activeColor}
      />

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`lg:hidden fixed left-4 top-4 z-50 p-2 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      <ThemeSwitcher
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />

      <main className="lg:ml-64 p-8">
        <HomeSection isDarkMode={isDarkMode} activeColor={activeColor} />
        <AboutSection isDarkMode={isDarkMode} activeColor={activeColor} />
        <ServicesSection isDarkMode={isDarkMode} activeColor={activeColor} />
        <PortfolioSection isDarkMode={isDarkMode} activeColor={activeColor} />
        <ContactSection isDarkMode={isDarkMode} activeColor={activeColor} />
      </main>
    </div>
  );
}
