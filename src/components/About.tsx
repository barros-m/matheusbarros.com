'use client';
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center px-6">
            <motion.h2
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                About Me
            </motion.h2>
            <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl text-center">
                I'm a passionate software engineer with experience in cloud technologies, frontend development,
                and backend systems. I specialize in building scalable applications using modern frameworks
                like Next.js, React, and Django.
            </p>
        </div>
    );
};

export default About;