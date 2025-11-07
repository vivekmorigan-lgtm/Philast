import React from "react";
import { motion } from "framer-motion";

const ACCENT_DARK = "#184d33";
const LIGHT = "#f6f7eb";

export default function Footer() {
  return (
    <footer
      className="text-center py-4 mt-auto"
      style={{ background: ACCENT_DARK, color: LIGHT }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-1">
          © {new Date().getFullYear()} Philast. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-light text-decoration-none small">
            Privacy Policy
          </a>
          <a href="#" className="text-light text-decoration-none small">
            Terms of Service
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
