import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";

const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  // 🌀 Show loader only once, when the app is first opened or refreshed
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <AnimatePresence mode="wait">
        <Loader key="main-loader" />
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <Navbar />

      <PageTransition>
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </PageTransition>

      <Footer />
    </Router>
  );
}
