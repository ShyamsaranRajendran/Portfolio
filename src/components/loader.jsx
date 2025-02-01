import React, { useState, useEffect } from "react";
import "./BarLoader.css";

const Loader = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount); // Set initial state from the prop

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []); // This will run only once when the component mounts

  return (
    <div className="loader-container">
      {/* Random Moving Circles */}
      {[...Array(25)].map((_, i) => (
        <div key={i} className={`moving-circle circle-${i}`}></div>
      ))}

      {/* Loader Bar */}
      <div className="loader-bar">
        <div className="progress" style={{ width: `${count}%` }}></div>
      </div>

      {/* Percentage Text */}
      <p className="loader-text">{count}%</p>
    </div>
  );
};

export default Loader;
