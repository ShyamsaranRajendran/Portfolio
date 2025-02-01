import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"; // Only import Route and Routes
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Loader from "./components/loader.jsx";
import Sidebar from "./components/Sidebar"; // Import Sidebar directly

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0); // State for progress bar percentage

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 100) {
            clearInterval(interval); // Clear interval after reaching 100%
            setLoading(false); // Set loading to false after 100%
          }
          return prevCount + 5; // Increment the loading bar by 5
        });
      }, 100); // Set interval time to 100ms for smoother progress

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [loading]);

  return (
    <div className="bg-gray-900">
      {loading ? (
        <Loader count={count} /> // Pass count to the Loader component
      ) : (
        // Only routing logic here
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
