import React from "react";
import { motion } from "framer-motion";

export default function Mascot({ size = 260 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff9d6" stopOpacity="1" />
          <stop offset="40%" stopColor="#ffd38a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ff7b7b" stopOpacity="0.65" />
        </radialGradient>
        <filter id="soft" x="-100%" y="-100%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="110" cy="200" rx="50" ry="8" fill="rgba(0,0,0,0.28)" />
      <motion.circle
        cx="110"
        cy="102"
        r="56"
        fill="#ffdca1"
        opacity={0.05}
        animate={{ x: [0, 6, -4, 0], y: [0, -6, 4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
