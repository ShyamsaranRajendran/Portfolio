import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import '../src/assets/styles/App.css';

const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
