import React, { useState } from "react";
import { motion } from "framer-motion";
import Mascot from "./Mascot";

const BG = "#0b1020";
const ACCENT = "#2b6f4b";
const ACCENT_DARK = "#184d33";
const LIGHT = "#f6f7eb";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusOK, setStatusOK] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMsg("");
    setStatusOK(false);
    const data = new FormData(e.target);
    try {
      const resp = await fetch("https://formspree.io/f/myznnlqp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await resp.json();
      if (resp.ok) {
        setStatusMsg("Message sent! Thanks — we'll reply soon.");
        setStatusOK(true);
        e.target.reset();
      } else setStatusMsg("Failed to send message.");
    } catch {
      setStatusMsg("Network error. Try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      style={{ height: "100vh", background: BG, color: LIGHT }}
      className="d-flex align-items-center p-2"
    >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <p style={{ color: "#ddd" }}>
              Questions or feedback? Send us a message.
            </p>
            <div
              style={{
                background: ACCENT_DARK,
                padding: 20,
                borderRadius: 12,
                height: 430,
              }}
            >
              <center>
                <Mascot size={350} />
                <div className="small mt-2" style={{ color: "#ddd" }}>
                  We’ll get back within 2 business days.
                </div>
              </center>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form
              onSubmit={handleSubmit}
              style={{ background: ACCENT_DARK, padding: 20, borderRadius: 12 }}
            >
              <div className="mb-3">
                <label className="form-label small">Name</label>
                <input
                  name="name"
                  required
                  className="form-control"
                  style={{ background: BG, color: LIGHT }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-control"
                  style={{ background: BG, color: LIGHT }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="form-control"
                  style={{ background: BG, color: LIGHT }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={sending}
                type="submit"
                className="btn w-100 mt-2"
                style={{
                  background: sending ? ACCENT_DARK : ACCENT,
                  color: LIGHT,
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 0",
                  transition: "all 0.3s",
                  cursor: sending ? "not-allowed" : "pointer",
                }}
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>

              {statusMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 small"
                  style={{
                    color: statusOK ? "#8efca4" : "#f57c7c",
                    textAlign: "center",
                  }}
                >
                  {statusMsg}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
