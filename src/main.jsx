import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guildelines,
  Software,
  Hardware,
  Judges,
  About,
} from "./components";
import ReactGA from "react-ga";
ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="bg-error">
              <Navbar /> <Error />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Hero />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div className="events-bg">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/guidelines"
          element={
            <div className="guidelines-bg">
              <Navbar />
              <Guildelines />
            </div>
          }
        />
        <Route
          path="/software"
          element={
            <div className="software-bg">
              <Navbar />
              <Software />
            </div>
          }
        />
        <Route
          path="/hardware"
          element={
            <div className="hardware-bg">
              <Navbar />
              <Hardware />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/judges"
          element={
            <div className="judges-bg">
              <Navbar />
              <Judges />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
