import React, { useState, useEffect } from 'react';
import styles from "../Styles/Footer.module.css";
import Logo from "../components/Logo";

const Footer = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      size: 2 + Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.content}>

          <div className={styles.grid}>
            <div className={styles.logo}>
              <Logo />
              <h1 className="fw-bold fs-3 text-light">
                Philast
              </h1>
            </div>

            <div className={styles.column}>
              <h3 className={styles.heading}>Quick links</h3>
              <ul className={styles.list}>
                <li><a href="#" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>Dashboard</a></li>
                <li><a href="#" className={styles.link}>Contact</a></li>
                <li><a href="#" className={styles.link}>Support</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>© 2025 Your Company. All rights reserved.</p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>GitHub</a>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <svg className={styles.particles} xmlns="http://www.w3.org/2000/svg">
          {particles.map(particle => (
            <circle
              key={particle.id}
              className={styles.particle}
              cx={`${particle.x}%`}
              cy="50%"
              r={particle.size}
              fill="rgba(255, 255, 255, 0.6)"
              style={{
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </svg>

        {/* Glowing Orbs */}
        <svg className={styles.orbs} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="orbGradient1">
              <stop offset="10%" stopColor="#667eea" stopOpacity="0.8" />
              <stop offset="90%" stopColor="#667eea" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="orbGradient2">
              <stop offset="0%" stopColor="#f093fb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="0.8" />
            </radialGradient>
          </defs>
          <circle className={styles.orb1} cx="10%" cy="30%" r="100" fill="url(#orbGradient1)" />
          <circle className={styles.orb2} cx="90%" cy="70%" r="120" fill="url(#orbGradient2)" />
        </svg>
      </footer>
    </>
  );
};

export default Footer;