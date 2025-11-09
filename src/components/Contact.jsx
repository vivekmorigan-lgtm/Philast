import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    top: 30px;
    left: 5px;
    animation: speeder 0.4s linear infinite;
    margin: 40px auto;
    width: 200px;
    height: 50px;
  }
  .loader > span {
    height: 5px;
    width: 35px;
    background: #006b96ff;
    position: absolute;
    top: -2px;
    right: 20px;
    border-radius: 2px 10px 1px 0;
  }
  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-right: 100px solid #000;
    border-bottom: 6px solid transparent;
  }
  .base span:before {
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    right: -110px;
    top: -16px;
  }
  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 55px solid #000;
    border-bottom: 16px solid transparent;
    top: -16px;
    right: -98px;
  }
  .face {
    position: absolute;
    height: 12px;
    width: 20px;
    background: #006b96ff;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -20px;
    top: -15px;
  }
  .face:after {
    content: "";
    height: 12px;
    width: 12px;
    background: #000;
    right: 4px;
    top: 7px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }
  .loader > span > span {
    width: 30px;
    height: 5px;
    background: #a0a0a0ff;
    position: absolute;
    animation: fazer1 0.2s linear infinite;
  }
  .loader > span > span:nth-child(2) {
    top: 3px;
    animation: fazer2 0.4s linear infinite;
  }
  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
  }
  .loader > span > span:nth-child(4) {
    top: 4px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
  }
  @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -80px;
      opacity: 0;
    }
  }
  @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -100px;
      opacity: 0;
    }
  }
  @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -50px;
      opacity: 0;
    }
  }
  @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -150px;
      opacity: 0;
    }
  }
  @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .longfazers span {
    position: absolute;
    height: 2px;
    width: 20%;
    background: #000;
  }
  .longfazers span:nth-child(1) {
    top: 20%;
    animation: lf 0.6s linear infinite;
    animation-delay: -5s;
  }
  .longfazers span:nth-child(2) {
    top: 40%;
    animation: lf2 0.8s linear infinite;
    animation-delay: -1s;
  }
  .longfazers span:nth-child(3) {
    top: 60%;
    animation: lf3 0.6s linear infinite;
  }
  .longfazers span:nth-child(4) {
    top: 80%;
    animation: lf4 0.5s linear infinite;
    animation-delay: -3s;
  }
  @keyframes lf,
    lf2,
    lf3,
    lf4 {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
`;

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
                textAlign: "center",
              }}
            >
              <div className="small mt-2" style={{ color: "#ddd" }}>
                We’ll get back within 2 business days.
              </div>
              <div
                style={{
                  background: "#d7d7d7ff",
                  borderRadius: "12px",
                  padding: "20px",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledWrapper>
                  <div className="loader">
                    <span>
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                    <div className="base">
                      <span />
                      <div className="face" />
                    </div>
                  </div>
                  <div className="longfazers">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </StyledWrapper>
              </div>
            </div>
          </div>

          {/* Right side form */}
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
