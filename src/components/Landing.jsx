import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mascot from "./Mascot";
import landstyle from "../Styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={landstyle.bg}>
      <section className="container py-5">
        <div className="row align-items-center">
          <div className={`${landstyle.head} col-lg-6 text-center text-lg-start`}>
            <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Learn by building. Level up daily.
            </motion.h1>
            <motion.p
              className={`${landstyle.para}lead text-primary`}
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
                  className={`${landstyle.btn1} btn btn-lg`}
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
                    "linear-gradient(180deg, rgba(0, 45, 63, 0.25), rgba(165, 165, 165, 0.21))",
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
