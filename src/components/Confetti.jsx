import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#2b6f4b";

export default function Confetti({ x = 0, y = 0, idSeed = 0 }) {
  const pieces = Array.from({ length: 8 }).map((_, i) => i);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        width: 0,
        height: 0,
      }}
    >
      {pieces.map((p) => (
        <motion.div
          key={p}
          initial={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
          animate={{
            opacity: [1, 1, 0],
            y: 40 - Math.random() * 80,
            x: (30 + Math.random() * 60) * (Math.random() > 0.5 ? 1 : -1),
            rotate: 180 + Math.random() * 360,
            scale: [2, 0.9, 0.6],
          }}
          transition={{ duration: 1.1 + Math.random() * 0.6, ease: "easeOut" }}
          style={{
            width: 8 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            borderRadius: 2,
            background: [ACCENT, "#ffd38a", "#8be0d0", "#f48fb1"][
              Math.floor(Math.random() * 4)
            ],
            position: "absolute",
            left: 6,
            top: 6,
          }}
        />
      ))}
    </div>
  );
}
