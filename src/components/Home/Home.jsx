import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import Profile from "../../assets/images/profile.jpeg";

const Home = () => {
  useEffect(() => {
    const container = document.querySelector(".star-container");
    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${3 + Math.random() * 5}s`;
      star.style.animationDelay = `${Math.random() * 5}s`; 
      star.style.width = `${Math.random() * 3 + 2}px`; 
      star.style.height = star.style.width; 

      container.appendChild(star);
    }
  }, []);

  return (
    <div className="home-container">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm ShyamSaran</h1>
        <p>
          I'm a Full-Stack Developer specializing in building end-to-end
          solutions that are scalable, efficient, and user-friendly.
        </p>
      </motion.div>

      <Suspense fallback={<div>Loading...</div>}>
        <motion.img
          src={Profile}
          alt="Profile"
          className="profile-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </Suspense>

      <motion.button
        className="view-more-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/home">View Portfolio</Link>
      </motion.button>

      <div className="icons">
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-github"></i>
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-twitter"></i>
        </motion.a>
      </div>

      <div className="star-container" />
    </div>
  );
};

export default Home;
