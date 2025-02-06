'use client';
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A cool project that showcases my skills.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another amazing project I worked on.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "An innovative solution I developed.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h2 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
