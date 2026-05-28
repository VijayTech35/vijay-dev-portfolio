import { motion } from "framer-motion";
import { Particles } from "./Particles";

const floatingIcons = [
  { icon: "\u269B\uFE0F", top: "10%", left: "5%", delay: 0 },
  { icon: "\uD83C\uDF10", top: "15%", right: "10%", delay: 1 },
  { icon: "\u2615", bottom: "20%", left: "10%", delay: 2 },
  { icon: "\uD83D\uDEE0\uFE0F", bottom: "15%", right: "5%", delay: 0.5 },
  { icon: "\uD83D\uDD17", top: "40%", right: "0%", delay: 1.5 },
  { icon: "\uD83C\uDF34", top: "5%", left: "40%", delay: 2.5 },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export const Hero = () => {
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

            <motion.h2 className="hero-stack" variants={stagger.item}>
              Full Stack Developer <span style={{color:'var(--text-muted)'}}>—</span> <span className="highlight">MERN</span> <span style={{color:'var(--text-muted)'}}>|</span> Java <span style={{color:'var(--text-muted)'}}>|</span> React
            </motion.h2>

            <motion.p className="hero-desc" variants={stagger.item}>
              I build scalable, user-friendly applications with modern technologies — from AI-powered meal planners to full-stack management systems. Passionate about solving real-world problems through clean code and great design.
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
                <span>View Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </motion.a>
              <motion.button
                className="btn-primary-custom"
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: 'linear-gradient(135deg, #00D4FF, #6C63FF)' }}
              >
                <span>Hire Me</span>
              </motion.button>
            </motion.div>

            <motion.div className="hero-socials" variants={stagger.item}>
              {[
                { href: "https://github.com/VijayTech35", icon: "\uD83D\uDCBB", label: "GitHub" },
                { href: "https://www.linkedin.com/in/vijay-kumar-78454925b/", icon: "\uD83D\uDCBC", label: "LinkedIn" },
                { href: "mailto:vijayyadav352005@gmail.com", icon: "\u2709\uFE0F", label: "Email" },
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

              <div className="hero-floating-icons">
                {floatingIcons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="floating-icon"
                    style={{
                      top: item.top, left: item.left, bottom: item.bottom, right: item.right,
                    }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>

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
