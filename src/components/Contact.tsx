'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.h2 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl text-center mb-6">
        Feel free to reach out for collaborations, job opportunities, or just to say hi!
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" id="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 dark:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}
    </div>
  );
};

export default Contact;
