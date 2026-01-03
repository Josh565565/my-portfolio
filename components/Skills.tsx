"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillsProps, Skill } from "@/types";

const Skills: React.FC<SkillsProps> = ({ isDarkMode, activeColor }) => {
  const skills: Skill[] = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 88 },
    { name: "Node.js/NestJS", level: 85 },
    { name: "Python/Django", level: 80 },
    { name: "Laravel/PHP", level: 75 },
    { name: "PostgreSQL/MongoDB", level: 82 },
    { name: "Docker/AWS", level: 78 },
    { name: "UI/UX Design", level: 85 },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div
            className={`h-2 rounded-full ${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: activeColor }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
