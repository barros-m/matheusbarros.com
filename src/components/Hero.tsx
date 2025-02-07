'use client';
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-6">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Matheus Barros
      </motion.h1>
      <p className="text-xl text-gray-700 dark:text-gray-400 mb-6">Software Engineer | Cloud Enthusiast</p>
      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
        <a href="#contact" className="inline-flex items-center border border-gray-300 dark:border-gray-600 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 text-base h-12 px-6 font-semibold">
          Contact Me
        </a>
        <a href="/barros_resume.pdf" download className="inline-flex items-center border border-gray-300 dark:border-gray-600 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 text-base h-12 px-6 font-semibold">
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
