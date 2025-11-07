import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mascot from "./Mascot";

const BG = "#0b1020";
const ALT_BG = "#071018";
const ACCENT = "#2b6f4b";
const ACCENT_DARK = "#184d33";
const LIGHT = "#f6f7eb";

export default function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: LIGHT,
        background: `radial-gradient(ellipse at 20% 10%, rgba(255,255,200,0.02), transparent), linear-gradient(180deg, ${BG}, ${ALT_BG})`,
      }}
    >
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Learn by building. Level up daily.
            </motion.h1>
            <motion.p
              className="lead text-success"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Practical, bite-sized frontend challenges with feedback and real
              animations to sharpen your craft.
            </motion.p>
            <div className="d-flex gap-3 mt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/dashboard"
                  className="btn btn-lg"
                  style={{ background: ACCENT, color: LIGHT }}
                >
                  Start Challenges
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#how"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  How it works
                </a>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06))",
                  padding: 20,
                  borderRadius: 18,
                }}
              >
                <Mascot size={300} />
                <div className="text-center mt-2">
                  <small className="text-muted">
                    Philast mascots lighting your way
                  </small>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
