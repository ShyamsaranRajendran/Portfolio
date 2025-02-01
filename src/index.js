import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.render(
  <BrowserRouter> {/* Only use BrowserRouter once here */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


