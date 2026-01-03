"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Skills from "./Skills";
import { SectionProps } from "@/types";
import Experience from "./Experience";

const AboutSection: React.FC<SectionProps> = ({ isDarkMode, activeColor }) => {
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
      id="about"
      className="min-h-screen py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
        About Me
        <div
          className="h-1 w-16 mt-2"
          style={{ backgroundColor: activeColor }}
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-4">
            HELLO IT&apos;S <span style={{ color: activeColor }}>JOSHUA</span>
          </h3>
          <p
            className={`mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Hello! I&apos;m Joshua Okwor, a versatile{" "}
            <strong>Full Stack Developer and Product Designer</strong> with a
            strong focus on both Back-end and Front-end development. My passion
            lies in crafting <strong>exceptional web applications</strong> from
            the ground up.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5" style={{ color: activeColor }} />
              <span>+234 903 411 2259</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5" style={{ color: activeColor }} />
              <span>joshuaokwor565@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5" style={{ color: activeColor }} />
              <span>Ikeja, Lagos, Nigeria</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Skills isDarkMode={isDarkMode} activeColor={activeColor} />
        </motion.div>
      </div>

      <Experience isDarkMode={isDarkMode} activeColor={activeColor} />
    </motion.section>
  );
};

export default AboutSection;
