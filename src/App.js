import '../src/assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import Contact from '../src/pages/Contact/Contact';

import { useRoutes } from 'react-router-dom';
import React from 'react';

const App = () => {
  // Define routes
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ]);

  return routes;
};

export default App;

