import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import Signin from "./pages/signin.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guildelines,
  Software,
  Hardware,
  Judges,
  Aboutus,
} from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Hero />
            </div>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
              <Aboutus />
            </div>
          }
        />
        <Route
          path="/judges"
          element={
            <div>
              <Navbar />
              <Judges />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
