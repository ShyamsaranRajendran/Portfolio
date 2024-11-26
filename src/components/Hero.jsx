import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section className="hero-section bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="hero-container max-w-6xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div
          className="hero-image-container mx-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="hero-profile-image w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Shyam Saran</span>
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-gray-300 mb-8">
            Software Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.div>

        {/* Icons */}
        <motion.div
          className="hero-icons flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://github.com/ShyamsaranRajendran"
            className="hero-icon text-gray-300 hover:text-blue-500 text-3xl transition transform hover:scale-125 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/shyam-saran"
            className="hero-icon text-gray-300 hover:text-blue-500 text-3xl transition transform hover:scale-125 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="hero-button bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 shadow-md hover:shadow-lg transition duration-300">
            <a
              href="https://leetcode.com/u/Shyam5002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Work
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
