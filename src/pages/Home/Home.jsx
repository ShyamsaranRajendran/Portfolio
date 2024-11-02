import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Profile from '../../assets/images/profile.jpeg';
const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm Shyam</h1>
        <p>
          I'm a Software Developer passionate about creating interactive
          experiences and applications.
        </p>
      </motion.div>

      <motion.img
        src={Profile} 
        alt="Profile"
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      <motion.button
        className="view-more-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => console.log("Navigate to portfolio details")}
      >
        View Portfolio
      </motion.button>

      <div className="icons">
        <motion.div
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-github"></i>
        </motion.div>
        <motion.div
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.div>
        <motion.div
          className="icon"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <i className="fab fa-twitter"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
