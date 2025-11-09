import React from "react";
import { motion } from "framer-motion";
import style from "../Styles/About.module.css";
import {
  FaRocket,
  FaUsers,
  FaRobot,
  FaEnvelopeOpenText,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <section className={style.aboutSection}>
      {/* ===== WHY CHOOSE US ===== */}
      <div className="container py-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={style.heading}>Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ y: -5, scale: 1.05 }} className={style.card}>
                <FaRocket size={60} color="var(--accent)" />
                <h5 className={style.cardTitle}>Daily Progress</h5>
                <p className={style.cardText}>
                  Get new, real-world challenges every day to level up faster.
                </p>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ y: -5, scale: 1.05 }} className={style.card}>
                <FaUsers size={60} color="var(--accent)" />
                <h5 className={style.cardTitle}>Community Learning</h5>
                <p className={style.cardText}>
                  Join a community of passionate developers learning together.
                </p>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ y: -5, scale: 1.05 }} className={style.card}>
                <FaRobot size={60} color="var(--accent)" />
                <h5 className={style.cardTitle}>Animated Guidance</h5>
                <p className={style.cardText}>
                  Our mascots and animations make coding more fun and interactive.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== WHO WE ARE ===== */}
      <div className={`${style.who} container py-5`}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={style.subHeading}>Who Are We?</h2>
              <p className={style.text}>
                We’re a small team of frontend enthusiasts building an ecosystem
                of creative challenges, interactive projects, and visual learning
                to help you master HTML, CSS, and JS — by doing.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaUsers size={200} color="var(--accent)" />
            </motion.div>
          </div>
        </div>
      </div>
      {/* ===== How to use ===== */}
      <div className={`${style.how} container py-5`}>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={style.subHeading}>How To Use?</h2>
              <ul className={style.text}>
                <li>First go to dashboard and then pick a challenge.</li>
                <li>Click on card to see more details or to download a sample to get started.</li>
                <li>Make the project and mark it as completed in dashboard.</li>
              </ul>
            </motion.div>
          </div>
          <div className="col-lg-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaLightbulb size={200} color="var(--accent)" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== SUBSCRIBE ===== */}
      <div className={style.subscribe}>
        <div className="container text-center py-5">
          <motion.h2
            className={style.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Stay Updated 
          </motion.h2>
<motion.p>Get strted</motion.p>
          <motion.form
            action="https://formspree.io/f/myznnlqp"
            method="POST"
            className={style.form}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={style.inputWrap}>
              <FaEnvelopeOpenText size={20} color="var(--accent)" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className={style.input}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={style.btn}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
