// ChallengeModal.js
import React from "react";
import { motion } from "framer-motion";

export default function ChallengeModal({
  challenge,
  onClose,
  onToggleComplete,
  isDone,
}) {
  if (!challenge) return null;

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          background: "#1a2e24",
          color: "#f6f7eb",
          padding: 24,
          borderRadius: 16,
          width: "90%",
          maxWidth: 600,
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "transparent",
            border: "none",
            fontSize: 20,
            color: "#f6f7eb",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        <h4 className="fw-bold mb-2">{challenge.title}</h4>
        <img
          src={challenge.image}
          alt={challenge.title}
          style={{ width: "100%", borderRadius: 8, marginBottom: 12 }}
        />
        <p className="small mb-3">{challenge.fullDesc}</p>
        <div className="d-flex gap-2 mb-3">
          <span className="badge bg-dark text-light">{challenge.category}</span>
          <span
            className="badge"
            style={{
              background:
                challenge.difficulty === "Hard"
                  ? "#a83232"
                  : challenge.difficulty === "Medium"
                  ? "#b28f3b"
                  : "#2b6f4b",
              color: "#f6f7eb",
            }}
          >
            {challenge.difficulty}
          </span>
        </div>
        <button
          className={`btn ${
            isDone ? "btn-success" : "btn-outline-light"
          } btn-sm`}
          onClick={() => onToggleComplete(challenge.id)}
        >
          {isDone ? "Mark not done" : "Mark Done"}
        </button>
      </motion.div>
    </motion.div>
  );
}
