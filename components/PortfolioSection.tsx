"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionProps, Project } from "@/types";

const PortfolioSection: React.FC<SectionProps> = ({
  isDarkMode,
  activeColor,
}) => {
  const projects: Project[] = [
    {
      title: "Kvngsboost",
      description:
        "A comprehensive social media boost platform with API for developers",
      tech: "Next.js, NestJS, PostgreSQL, Fluterwave",
      github: "https://github.com/Josh565565",
      live: "#",
      features: [
        "Social media engagement boost services",
        "RESTful API with comprehensive documentation",
        "Secure payment integration",
        "Real-time analytics dashboard",
      ],
    },
    {
      title: "PhishSense",
      description: "Phishing Detection Web app using Machine Learning",
      tech: "React, Python Django, Machine Learning",
      github: "https://github.com/Josh565565/PhishSense",
      live: "https://phish-sense-43ei.vercel.app/",
      features: [
        "ML-powered phishing detection",
        "Real-time URL analysis",
        "Browser extension support",
        "Detailed threat reports",
      ],
    },
    {
      title: "Gyft",
      description: "Dynamic e-commerce application with seamless UX",
      tech: "ReactJS, Context API",
      github: "https://github.com/Josh565565/Gyfts",
      live: "https://gyfts-six.vercel.app/",
      features: [
        "Add to cart functionality",
        "Advanced search and filtering",
        "Product detail pages",
        "Responsive design",
      ],
    },
    {
      title: "School Management System",
      description: "NFC-based attendance system for schools",
      tech: "NestJS, PostgreSQL, React, NFC Technology",
      github: "#",
      live: "#",
      features: [
        "NFC student attendance tracking",
        "Parent communication portal",
        "Grade management system",
        "Currently used by 3 schools",
      ],
    },
    {
      title: "University Dues Payment",
      description: "Payment platform for student bodies",
      tech: "Laravel, MySQL, React",
      github: "#",
      live: "#",
      features: [
        "15,000+ active users",
        "Secure payment processing",
        "Automated receipt generation",
        "Analytics dashboard",
      ],
    },
    {
      title: "Web3 Learning Platform",
      description: "Gamified Web3 education with Telegram",
      tech: "Next.js, Telegram Bot API, Node.js",
      github: "#",
      live: "#",
      features: [
        "Interactive quizzes",
        "Daily task rewards",
        "Leaderboard system",
        "Referral program",
      ],
    },
  ];

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
      id="portfolio"
      className="min-h-screen py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
        Portfolio
        <div
          className="h-1 w-16 mt-2"
          style={{ backgroundColor: activeColor }}
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={`rounded-lg overflow-hidden ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="h-48 bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <span
                className="text-4xl font-bold"
                style={{ color: activeColor }}
              >
                {project.title.substring(0, 2)}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p
                className={`mb-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <p className="text-sm mb-4" style={{ color: activeColor }}>
                {project.tech}
              </p>
              <ul
                className={`text-sm space-y-1 mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: `${activeColor}20`,
                    color: activeColor,
                  }}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
                {project.live !== "#" && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white"
                    style={{ backgroundColor: activeColor }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
