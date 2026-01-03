"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Search,
  Megaphone,
  Laptop,
  Smartphone,
} from "lucide-react";
import { SectionProps, Service } from "@/types";

const ServicesSection: React.FC<SectionProps> = ({
  isDarkMode,
  activeColor,
}) => {
  const services: Service[] = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications from concept to deployment with modern technologies.",
    },
    {
      icon: <Laptop className="w-10 h-10" />,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side solutions with Node.js, NestJS, Django, and Laravel.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Crafting responsive and intuitive user interfaces with React, Next.js, and modern CSS.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Designing beautiful, user-centered interfaces that enhance customer satisfaction.",
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "API Development",
      description:
        "Building RESTful APIs with comprehensive documentation for seamless integration.",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Technical Consulting",
      description:
        "Providing expert guidance on architecture, technology stack, and best practices.",
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
      id="services"
      className="min-h-screen py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
        Services
        <div
          className="h-1 w-16 mt-2"
          style={{ backgroundColor: activeColor }}
        />
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="mb-4" style={{ color: activeColor }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
