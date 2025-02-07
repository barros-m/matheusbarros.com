'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

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
      <div className="flex space-x-4 mb-6">
        <Link href="/projects" className="px-6 py-3 bg-gray-300 dark:bg-gray-800 rounded-xl text-gray-900 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 transition">
          My Work
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition">
          Contact Me
        </Link>
      </div>
      {/* Social Media Links */}
      <SocialMedia />
    </div>
  );
};

export default Hero;
