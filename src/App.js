import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import '../src/assets/styles/App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
