'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-6">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Mattheus Barros
      </motion.h1>
      <p className="text-xl text-gray-700 dark:text-gray-400 mb-6">Software Engineer | Cloud Enthusiast</p>
      <div className="flex space-x-4 mb-6">
        <Link href="/projects" className="px-6 py-3 bg-gray-300 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 transition">
          My Work
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition">
          Contact Me
        </Link>
      </div>
      {/* Social Media Links */}
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
