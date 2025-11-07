import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import style from "../Styles/App.module.css";

const ACCENT_DARK = "#2c503cff";
const ACCENT = "#2ab46fff";

export default function Navbar({ toggleTheme, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: `linear-gradient(90deg, ${ACCENT_DARK}, ${ACCENT})`,
        backdropFilter: "blur(6px)",
      }}
    >
      <div className={style.container}>
        <div className={style.logo}>
          <Logo />
          <Link className="navbar-brand fw-bold fs-3" to="/">
            Philast
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <Link
                className="nav-link fs-6"
                to="/"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-6"
                to="/dashboard"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-6"
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
