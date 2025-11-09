import React, { useState, useEffect, useRef } from "react";

import { motion, rgba } from "framer-motion";
import Confetti from "./Confetti";
import data from "../data/oct";
import ChallengeModal from "./ChallengeModal";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const BG = "#030805ff";
const ACCENT = "#3ed0b8ff";
const ACCENT_2 = "#31b8b6ff";
const ACCENT_DARK = "#092532ff";
const LIGHT = "#effaf1";
const MUTED = "rgba(239,250,241,0.9)";

export default function Dashboard() {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [challenges, setChallenges] = useState([]);
  const [completed, setCompleted] = useState(() => {
    try {
      const raw = localStorage.getItem("completedChallenges");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [expanded, setExpanded] = useState(null);
  const [activeConfetti, setActiveConfetti] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const all = Object.entries(data).flatMap(([category, list]) =>
      list.map((ch, i) => ({
        id: `${category}-${i}`,
        category,
        title: ch.title,
        desc: ch.description,
        fullDesc: ch.fullDescription,
        difficulty: ch.difficulty,
        image: ch.image,
      }))
    );
    setChallenges(all);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      localStorage.setItem("completedChallenges", JSON.stringify(completed));
    }, 240);
    return () => clearTimeout(t);
  }, [completed]);

  const toggleComplete = (id, e) => {
    const isDone = !completed.includes(id);
    const updated = isDone
      ? [...completed, id]
      : completed.filter((c) => c !== id);
    setCompleted(updated);

    if (isDone) {
      const cardEl = e?.currentTarget?.closest(".card");
      if (cardEl && containerRef.current) {
        const parent = containerRef.current.getBoundingClientRect();
        const rect = cardEl.getBoundingClientRect();
        const x = rect.left - parent.left + rect.width / 2;
        const y = rect.top - parent.top + 16;
        setActiveConfetti({ x, y, idSeed: Date.now() });
        setTimeout(() => setActiveConfetti(null), 1400);
      }
    }
  };

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const progress = challenges.length
    ? Math.round((completed.length / challenges.length) * 100)
    : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: LIGHT,
        display: "flex",
        overflow: "hidden",
      }}
      className="p-4"
    >
      {/* Progress Tracker */}
      <div
        style={{
          width: 300,
          background: `linear-gradient(180deg, ${ACCENT_DARK}, rgba(8, 55, 77, 0.6))`,
          padding: 18,
          borderRadius: 14,
          height: "52vh",
          position: "sticky",
          top: "5vh",
          alignSelf: "flex-start",
          border: `1px solid rgba(62,208,122,0.08)`,
        }}
      >
        <h4 className="fw-bold mb-3 text-center" style={{ color: LIGHT }}>
          Progress Tracker
        </h4>
        <div className="small mb-2" style={{ color: MUTED }}>
          Overall Progress
        </div>
        <div
          className="progress mb-2"
          style={{ height: 12, background: "rgba(255,255,255,0.02)" }}
        >
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_2})`,
              height: "100%",
              borderRadius: 8,
              boxShadow: "0 6px 18px rgba(49, 164, 184, 0.12)",
            }}
          />
        </div>
        <div className="small mb-4" style={{ color: MUTED }}>
          Completed <strong style={{ color: LIGHT }}>{completed.length}</strong>{" "}
          of <strong style={{ color: LIGHT }}>{challenges.length}</strong>
        </div>
        <div className="small" style={{ color: MUTED }}>
          Keep going — each completed task grows your momentum.
        </div>
      </div>

      {/* Card Section */}
      <div
        className="flex-grow-1 ps-4"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          paddingRight: 12,
        }}
        ref={containerRef}
      >
        <h2 className="fw-bold mb-4 text-center" style={{ color: LIGHT }}>
          Today's Challenges
        </h2>
        <div className="row g-3 justify-content-start">
          {challenges.map((ch, i) => {
            const isDone = completed.includes(ch.id);
            const isExpanded = expanded === ch.id;
            return (
              <motion.div
                key={ch.id}
                className="col-sm-6 col-md-4 col-lg-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <div
                  className="card p-3 border-0 h-100"
                  style={{
                    background: isDone
                      ? `linear-gradient(160deg, rgba(0, 249, 253, 0.24), rgba(0, 208, 255, 0.24))`
                      : `linear-gradient(160deg, rgba(0, 32, 43, 0.9), rgba(0, 28, 52, 0.9))`,
                    color: LIGHT,
                    borderRadius: 16,
                    border: "1px solid rgba(62,208,122,0.06)",
                    boxShadow: isDone
                      ? "5px 5px 0 rgba(49, 155, 184, 0.25)"
                      : "0 6px 18px rgba(0,0,0,0.35)",
                    cursor: "pointer",
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                  }}
                  onClick={() => setSelectedChallenge(ch)}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: LIGHT }}>
                        {ch.title}
                      </h6>
                      <p
                        className="small mb-2"
                        style={{ color: "rgba(239,250,241,0.78)" }}
                      >
                        {ch.desc}
                      </p>
                      <div className="d-flex align-items-center gap-1 mt-2">
                        <span
                          className="badge"
                          style={{
                            background: "rgba(0, 75, 129, 0.7)",
                            color: LIGHT,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                            fontSize: 12,
                            padding: "6px 8px",
                            borderRadius: 8,
                            border: "1px solid rgba(62,208,122,0.08)",
                          }}
                        >
                          {ch.category}
                        </span>
                        <span
                          className="badge"
                          style={{
                            background:
                              ch.difficulty === "Hard"
                                ? "rgba(212, 0, 0, 0.73)"
                                : ch.difficulty === "Medium"
                                ? "rgba(199, 149, 0, 0.73)"
                                : "rgba(49,184,106,0.73)",
                            color: LIGHT,
                            fontSize: 12,
                            padding: "6px 8px",
                            borderRadius: 8,
                            border: "1px solid rgba(255,255,255,0.03)",
                          }}
                        >
                          {ch.difficulty}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(ch.id, e);
                      }}
                      className={`btn ${
                        isDone ? "btn-success" : "btn-outline-light"
                      } btn-sm`}
                      style={{
                        border: "1px solid rgba(239,250,241,0.06)",
                        padding: "6px 10px",
                        background: isDone
                          ? `linear-gradient(90deg, ${ACCENT_2}, ${ACCENT})`
                          : "transparent",
                        color: isDone ? LIGHT : ACCENT,
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {isDone ? (
                          <FaCheckCircle
                            style={{ fontSize: 18, color: LIGHT }}
                          />
                        ) : (
                          <FaCheck style={{ fontSize: 18, color: ACCENT }} />
                        )}
                      </motion.div>
                    </motion.button>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      <img
                        src={ch.image}
                        alt={ch.title}
                        style={{
                          width: "100%",
                          borderRadius: 8,
                          marginBottom: 8,
                          border: `1px solid rgba(62,208,122,0.06)`,
                        }}
                      />
                      <p
                        className="small"
                        style={{ color: "rgba(239,250,241,0.86)" }}
                      >
                        {ch.fullDesc}
                      </p>
                    </motion.div>
                  )}

                  {activeConfetti && <Confetti {...activeConfetti} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          isDone={completed.includes(selectedChallenge.id)}
          onClose={() => setSelectedChallenge(null)}
          onToggleComplete={(id) => {
            toggleComplete(id);
            setSelectedChallenge(null);
          }}
        />
      )}
    </div>
  );
}
