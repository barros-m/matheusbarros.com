'use client';
import React from "react";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white flex flex-col items-center justify-center px-4 md:px-6"> {/* Added responsive padding */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white"  
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Matheus Barros
      </motion.h1>
      <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-400 mb-6"> {/* Added text-center and responsive font size */}
        Software Engineer | Cloud Enthusiast
      </p>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center"> {/* Centered buttons and responsive layout */}
        <a href="#contact" className="inline-flex items-center border border-gray-300 dark:border-gray-600 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 text-base h-12 px-6 font-semibold w-full md:w-auto"> {/* Added width adjustments for mobile */}
          Contact Me
        </a>
        <a href="/barros_resume.pdf" download className="inline-flex items-center border border-gray-300 dark:border-gray-600 justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 text-base h-12 px-6 font-semibold w-full md:w-auto"> {/* Added width adjustments for mobile */}
          Download My Resume
        </a>
      </div>
      <div className="mt-6 flex justify-center"> {/* Added margin top and justify-center for SocialMedia */}
        <SocialMedia />
      </div>
      
    </div>
  );
};

export default Hero;