"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SidebarProps } from "@/types";

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  activeColor,
}) => {
  const navItems = ["home", "about", "services", "portfolio", "contact"];

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 transform ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } border-r ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      } z-50 transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0`}
    >
      <div className="p-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-3xl font-bold mb-8"
        >
          <span style={{ color: activeColor }}>O</span>kwor
        </motion.div>

        <nav className="space-y-4">
          {navItems.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              onClick={() => {
                setActiveSection(section);
                setIsMenuOpen(false);
              }}
              whileHover={{ x: 10 }}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeSection === section
                  ? "text-white"
                  : `${
                      isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`
              }`}
              style={
                activeSection === section
                  ? { backgroundColor: activeColor }
                  : {}
              }
            >
              <span className="capitalize">{section}</span>
            </motion.a>
          ))}
        </nav>

        <div className="mt-12 flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/Josh565565"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: activeColor }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -5 }}
            href="https://twitter.com/okworjoshua1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: activeColor }}
          >
            <Twitter className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://www.linkedin.com/in/joshua-okwor-94773223a"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: activeColor }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
