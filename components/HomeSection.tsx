"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SectionProps } from "@/types";

const HomeSection: React.FC<SectionProps> = ({ isDarkMode, activeColor }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl mb-4"
            >
              Hello, my name is{" "}
              <span className="font-bold" style={{ color: activeColor }}>
                Joshua Okwor
              </span>
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              I am a{" "}
              <motion.span
                animate={{
                  color: [activeColor, "#fff", activeColor],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg mb-8 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Results-driven full-stack software engineer with 3+ years of
              experience delivering high-impact solutions across front-end,
              back-end, and full-stack development roles. Passionate about
              leveraging technology to drive business results.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full text-white font-semibold flex items-center space-x-2"
              style={{ backgroundColor: activeColor }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full h-96 rounded-lg overflow-hidden flex items-center justify-center text-8xl font-bold"
              style={{
                background: `linear-gradient(135deg, ${activeColor}20 0%, transparent 100%)`,
                border: `2px solid ${activeColor}40`,
                color: activeColor,
              }}
            >
              JO
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
