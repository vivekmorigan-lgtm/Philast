// src/components/CustomCursor.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../Styles/Cursor.css";

const TRAIL_LENGTH = 12;
const INTERVAL = 2;

const CustomCursor = () => {
  const [positions, setPositions] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.remove("no-custom-cursor");

    const handleMove = (e) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleEnter = () => setHidden(false);
    const handleLeave = () => setHidden(true);

    const handleHoverEnter = () => setHoveringInteractive(true);
    const handleHoverLeave = () => setHoveringInteractive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);

    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    const interval = setInterval(() => {
      setPositions((prev) => [...prev.slice(-TRAIL_LENGTH + 1), lastPos.current]);
    }, INTERVAL);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="cursor-container">
      {positions.map((pos, index) => {
        const scale = 1 - index * 0.06;
        const opacity = 1 - index * 0.08;
        return (
          <motion.div
            key={index}
            className={`cursor-trail ${hoveringInteractive ? "cursor-pointer" : ""}`}
            animate={{ x: pos.x - 10, y: pos.y - 10, scale, opacity }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.6,
            }}
          />
        );
      })}
    </div>
  );
};

export default CustomCursor;
