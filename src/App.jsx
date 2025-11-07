import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInitialSettings } from "./hooks/useInitialSettings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";

export default function App() {
  const [darkMode] = useState(true);
  useInitialSettings(darkMode);

  return (
    <Router>
      <Navbar darkMode={darkMode} />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </Router>
  );
}
