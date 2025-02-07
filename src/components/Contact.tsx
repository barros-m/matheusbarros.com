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
    const sendingMessages = [
      "On its way...",
      "Zooming through cyberspace...",
      "Dispatching your message...",
      "Magic is happening...",
      "Your words are in motion...",
      "Sending..."
    ];
    const randomSendingMessage = sendingMessages[Math.floor(Math.random() * sendingMessages.length)];
    setStatus(randomSendingMessage);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        const messages = [
          "Your message just teleported into my inbox!",
          "Ding! Your message just landed—stay tuned for a response!",
          "Your message is out in the universe. Expect a reply soon!",
          "If emails had wings, yours would be soaring right now!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setStatus(randomMessage);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.error);
      }
    } catch {
      const errorMessages = [
        "Oops! Something went wrong. Try again!",
        "Houston, we have a problem. Please retry!",
        "Error detected! Give it another shot!",
        "That didn't work... but you can try again!"
      ];
      const randomErrorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
      setStatus(randomErrorMessage);
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
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500" type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500" type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gray-500" id="message" rows={4} value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>}
    </div>
  );
};

export default Contact;