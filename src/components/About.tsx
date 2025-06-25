'use client';
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h2>
            <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                I&apos;m a software engineer passionate about building modern solutions.
                I specialize in cloud solutions, data analysis, and visualization,
                using tools like Next.js, React, Angular, .NET, Django, and cloud technologies.
                Whether it&apos;s designing smooth user experiences, optimizing performance,
                or extracting insights from data, I love turning ideas into reality. Outside of coding, I&apos;m a huge soccer fan. Whether playing on the field or watching a great match,
                soccer is my go-to way to unwind and stay active.
            </motion.p>
        </div>
    );
};

export default About;