import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section className="hero-section bg-gradient-to-tr from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center">
      <div className="hero-container max-w-6xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div
          className="hero-image-container mx-auto mb-6 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.1 }} // Zoom effect on hover
        >
          <img
            src={profileImage}
            alt="Profile"
            className="hero-profile-image w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl"
          />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-blue-500 rounded-full shadow-lg"></div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          className="hero-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Shyam Saran
            </span>
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Crafting innovative solutions as a{" "}
            <span className="text-blue-400">Software Developer</span>.
            Passionate about problem-solving and creating impactful tech
            experiences.
          </p>
        </motion.div>

        {/* Icons */}
        <motion.div
          className="hero-icons flex justify-center space-x-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://github.com/ShyamsaranRajendran"
            className="hero-icon text-gray-300 hover:text-blue-400 text-5xl transition-all transform hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shyam-saran"
            className="hero-icon text-gray-300 hover:text-blue-400 text-5xl transition-all transform hover:scale-110 duration-300"
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
          <button className="hero-button bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-400 hover:to-blue-500 shadow-lg transform hover:scale-105 transition-all duration-300">
            <a
              href="https://leetcode.com/u/Shyam5002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore My Work
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
