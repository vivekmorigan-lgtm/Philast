import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import style from "../Styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg`}>
      <div className={style.container}>
        <div className={style.logo}>
          <Logo />
          <h1 className="fw-bold fs-3 text-light">
            Philast
          </h1>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                to="/Dashborad"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                onClick={() => setOpen(false)}
              >
                Dashboard
              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? `${style.link} ${style.active}` : style.link
                }
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
