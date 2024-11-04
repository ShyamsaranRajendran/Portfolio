import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="contact-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <input type="text" placeholder="Your Name" className="input-field" />
        <input type="email" placeholder="Your Email" className="input-field" />
        <textarea placeholder="Your Message" className="input-field textarea" />
        <motion.button whileHover={{ scale: 1.1 }} className="submit-button">
          Send Message
        </motion.button>
      </motion.div>

      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <i className="fab fa-instagram"></i>
        </motion.a>

        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <i className="fab fa-facebook"></i>
        </motion.a>

        <motion.a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <i className="fas fa-code"></i> {/* LeetCode icon */}
        </motion.a>

        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>

        <motion.a
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <i className="fas fa-envelope"></i>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
