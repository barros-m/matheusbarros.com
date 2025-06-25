'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-4 md:px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Matheus Barros
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-400 mb-4 max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Software Engineer | Data Analyst
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-center text-gray-600 dark:text-gray-500 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I design and deliver scalable web platforms and cloud-based solutions, combining strong architecture with efficient full-stack development.
      </motion.p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center w-full max-w-md">
        <a
          href="/barros_resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-full transition duration-200 bg-slate-800 text-white hover:bg-slate-900 text-base h-12 px-6 font-semibold w-full sm:w-auto"
        >
          Download My Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 text-base h-12 px-6 font-semibold w-full sm:w-auto"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-6 flex justify-center">
        <SocialMedia />
      </div>

      <span
        className={`mt-12 animate-bounce text-sm text-gray-500 dark:text-gray-400 transition-opacity duration-300 ${showScrollIndicator ? 'opacity-100' : 'opacity-0'
          }`}
      >
        Scroll down ↓
      </span>

    </div>
  );
};

export default Hero;
