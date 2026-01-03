"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Linkedin } from "lucide-react";
import { SectionProps, FormData, ContactInfo } from "@/types";

const ContactSection: React.FC<SectionProps> = ({
  isDarkMode,
  activeColor,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting me.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone />,
      title: "Call Me On",
      value: "+234 903 411 2259",
      link: "tel:+2349034112259",
    },
    { icon: <MapPin />, title: "Office", value: "Ikeja, Lagos" },
    {
      icon: <Mail />,
      title: "Email",
      value: "joshuaokwor565@gmail.com",
      link: "mailto:joshuaokwor565@gmail.com",
    },
    {
      icon: <Linkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/joshua-okwor-94773223a",
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
      id="contact"
      className="min-h-screen py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
        Contact Me
        <div
          className="h-1 w-16 mt-2"
          style={{ backgroundColor: activeColor }}
        />
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.h3
          variants={itemVariants}
          className="text-2xl text-center mb-4"
          style={{ color: activeColor }}
        >
          Have Any Questions?
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I&apos;M AT YOUR SERVICE
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div
                className="inline-block p-4 rounded-full mb-4"
                style={{ backgroundColor: `${activeColor}20` }}
              >
                <div style={{ color: activeColor }}>{contact.icon}</div>
              </div>
              <h4 className="font-bold mb-2">{contact.title}</h4>
              {contact.link ? (
                <a
                  href={contact.link}
                  target={
                    contact.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }
                >
                  {contact.value}
                </a>
              ) : (
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {contact.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className={`p-8 rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h3
            className="text-2xl text-center mb-4"
            style={{ color: activeColor }}
          >
            SEND ME AN EMAIL
          </h3>
          <p
            className={`text-center mb-8 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I&apos;M VERY RESPONSIVE TO MESSAGES
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className={`w-full px-6 py-3 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                } focus:outline-none focus:ring-2`}
                style={{ focusRing: activeColor } as React.CSSProperties}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className={`w-full px-6 py-3 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                } focus:outline-none focus:ring-2`}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
              className={`w-full px-6 py-3 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              } focus:outline-none focus:ring-2`}
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              className={`w-full px-6 py-3 rounded-3xl ${
                isDarkMode ? "bg-gray-700" : "bg-gray-100"
              } focus:outline-none focus:ring-2 resize-none`}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: activeColor }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
