"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceProps, Experience as ExperienceType } from "@/types";

const Experience: React.FC<ExperienceProps> = ({ isDarkMode, activeColor }) => {
  const experiences: ExperienceType[] = [
    {
      title: "Full-Stack Developer (Contract)",
      company: "Quick Kick Limited",
      period: "January 2025 - June 2025",
      description: [
        "Architected and developed a full-stack Web3 learning platform combining a Telegram bot with an interactive Telegram web application.",
        "Engineered a gamified experience allowing users to learn Web3 concepts, complete quizzes, and perform daily tasks to earn points.",
        "Developed and deployed a Telegram bot to over four active groups, broadcasting scheduled educational content at hourly intervals.",
        "Implemented user leaderboard and referral system to drive user acquisition and community engagement.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Sorobo Innovations Ltd",
      period: "December 2024 - Present",
      description: [
        "Developing a scalable online marketplace platform, leading end-to-end feature implementation.",
        "Ensuring system reliability through rigorous testing, code optimization, and managing the full development lifecycle.",
      ],
    },
    {
      title: "Tech Lead/Backend Developer",
      company: "De-virtuosphere",
      period: "May 2024 - Present",
      description: [
        "Led development of school management system with NFC technology, now used by 3 schools.",
        "Built university dues payment system growing to 15,000+ active users.",
        "Improved system performance achieving 70% boost in user satisfaction.",
        "Maintained 99.9% uptime through security testing and critical API issue resolution.",
      ],
    },
    {
      title: "Frontend Mentor",
      company: "NexaScale Community",
      period: "2023 - 2024",
      description: [
        "Successfully mentored 5 students through comprehensive 5-week program.",
        "Utilized interactive projects and real-world challenges to enhance development abilities.",
        "Prepared students for successful career transitions in frontend development.",
      ],
    },
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8">Experience</h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="flex items-start space-x-4">
              <div
                className="w-3 h-3 rounded-full mt-2"
                style={{ backgroundColor: activeColor }}
              />
              <div className="flex-1">
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p style={{ color: activeColor }} className="mb-2">
                  {exp.company}
                </p>
                <p
                  className={`text-sm mb-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.period}
                </p>
                <ul
                  className={`space-y-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
