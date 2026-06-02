import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Particles } from "./Particles";

const typingTexts = [
  "Full Stack Developer \u00B7 MERN \u00B7 React",
  "Java \u00B7 Spring Boot \u00B7 Node.js",
  "Problem Solver \u00B7 Tech Enthusiast",
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentText = typingTexts[textIndex];
    let timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), 30);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
        timeout = setTimeout(() => {}, 200);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), 50);
      } else {
        if (textIndex === 0) {
          setIsPaused(true);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, isPaused]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <Particles />
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={stagger.container}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={stagger.item}>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hero-badge-dot" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={stagger.item}>
              Hi, I'm{' '}
              <span className="highlight">Vijay Kumar</span>
            </motion.h1>

            <motion.div className="typing-wrapper" variants={stagger.item}>
              <span className="typing-text">
                {typingTexts[textIndex].substring(0, charIndex)}
              </span>
              <span className="typing-cursor" />
            </motion.div>

            <motion.p className="hero-tagline" variants={stagger.item}>
              I build fast, scalable web apps that solve real problems.
            </motion.p>

            <motion.p className="hero-desc" variants={stagger.item}>
              From AI-powered meal planners to full-stack management systems —
              I craft modern web experiences with clean code and great design.
            </motion.p>

            <motion.div className="hero-buttons" variants={stagger.item}>
              <motion.button
                className="btn-primary-custom"
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </motion.button>
              <motion.a
                href="https://drive.google.com/file/d/1Fjnkfo8Cw06yRiGDikDxJ7XmpAhR6MN3/view"
                className="btn-outline-custom"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download CV</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </motion.a>
            </motion.div>

            <motion.div className="hero-socials" variants={stagger.item}>
              {[
                { href: "https://github.com/VijayTech35", label: "GitHub",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href: "https://www.linkedin.com/in/vijay-kumar-78454925b/", label: "LinkedIn",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: "mailto:vijayyadav352005@gmail.com", label: "Email",
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title={link.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            variants={stagger.item}
          >
            <div className="hero-image-container">
              <div className="hero-glow-ring-3" />
              <div className="hero-glow-ring" />
              <div className="hero-glow-ring-2" />

              <motion.div
                className="hero-image-bg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/img/profile-pic.jpg" alt="Vijay Kumar" className="hero-image-inner" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
