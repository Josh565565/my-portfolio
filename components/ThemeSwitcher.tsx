"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { ThemeSwitcherProps, ColorTheme } from "@/types";

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  isDarkMode,
  setIsDarkMode,
  activeColor,
  setActiveColor,
}) => {
  const colors: ColorTheme[] = [
    { id: 1, value: "#37b182" },
    { id: 2, value: "#fa5b0f" },
    { id: 3, value: "#ec1839" },
    { id: 4, value: "#1854b4" },
    { id: 5, value: "#f021b2" },
  ];

  return (
    <div className="fixed right-4 top-4 z-40 flex flex-col space-y-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`p-3 rounded-full ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" style={{ color: activeColor }} />
        ) : (
          <Moon className="w-6 h-6" style={{ color: activeColor }} />
        )}
      </motion.button>

      <div
        className={`p-3 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="grid grid-cols-3 gap-2">
          {colors.map((color) => (
            <motion.button
              key={color.id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveColor(color.value)}
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
