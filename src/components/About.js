import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Projects", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { number: "2", label: "Internships", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { number: "16+", label: "Technologies", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
];

const techTags = ["Java", "React.js", "Node.js", "MongoDB", "Spring Boot", "MySQL", "REST APIs", "Git", "JavaScript", "HTML/CSS"];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Turning Ideas Into <span>Reality</span>
        </motion.h2>

        <motion.div
          className="about-grid"
          variants={stagger.container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="about-profile-col" variants={stagger.item}>
            <div className="about-profile-card">
              <div className="about-profile-glow" />
              <div className="about-avatar-ring">
                <div className="about-avatar">
                  <img src="/img/profile.jpg" alt="Vijay Kumar" />
                  <div className="about-avatar-glow" />
                </div>
                <div className="about-ring" />
              </div>
              <h3 className="about-name">Vijay Kumar</h3>
              <p className="about-title">Full Stack Developer</p>
              <div className="about-status-bar">
                <span className="about-status-fill" style={{ width: '85%' }} />
              </div>
              <div className="about-status-text">
                <span>Junior</span><span>Senior</span>
              </div>
              <div className="about-tags">
                {techTags.slice(0, 5).map((tag, i) => (
                  <span key={i} className="about-tag">{tag}</span>
                ))}
              </div>
              <div className="about-tags" style={{ marginTop: 6 }}>
                {techTags.slice(5).map((tag, i) => (
                  <span key={i} className="about-tag">{tag}</span>
                ))}
              </div>
              <div className="about-open-badge">
                <span className="about-open-dot" />
                Open to opportunities
              </div>
              <div className="about-social-row">
                <a href="https://github.com/VijayTech35" target="_blank" rel="noopener noreferrer" className="about-social-link" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/vijay-kumar-78454925b/" target="_blank" rel="noopener noreferrer" className="about-social-link" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="mailto:vijayyadav352005@gmail.com" className="about-social-link" title="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-content" variants={stagger.item}>
            <motion.p variants={stagger.item} className="about-bio">
              I'm a Full Stack Developer with hands-on experience building modern web applications
              using Java, JavaScript, React.js, Node.js, Spring Boot, REST APIs, MongoDB, and MySQL.
            </motion.p>

            <motion.div className="about-highlights" variants={stagger.item}>
              <div className="about-highlight">
                <div className="about-highlight-icon" style={{ background: 'rgba(0,188,212,0.1)', color: '#00bcd4' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <strong>15+ REST APIs</strong> developed, <strong>20%</strong> faster SQL reads
                </div>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon" style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <div>
                  <strong>30% faster</strong> page loads, <strong>95+</strong> Lighthouse scores
                </div>
              </div>
              <div className="about-highlight">
                <div className="about-highlight-icon" style={{ background: 'rgba(0,200,83,0.1)', color: '#00C853' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <strong>50+ PRs</strong> managed across <strong>4</strong> team members
                </div>
              </div>
            </motion.div>

            <motion.p variants={stagger.item}>
              During my internships at <strong>Windflex Creative Pvt. Ltd.</strong> and <strong>HEAL Bharat</strong>, I built responsive
              UIs, developed REST APIs, optimized SQL queries, and improved
              page load speeds — all while collaborating via Git workflows across teams. I'm
              currently pursuing my B.Tech in Electronics & Communication Engineering at HKBK College
              of Engineering, Bengaluru.
            </motion.p>

            <motion.p variants={stagger.item}>
              What drives me is the craft of turning an idea into something people actually use.
              I care about performance, accessibility, and the details that separate a good product
              from a great one.
            </motion.p>

            <motion.div className="about-stats" variants={stagger.item}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="about-stat"
                  whileHover={{ y: -8, scale: 1.03 }}
                  variants={stagger.item}
                >
                  <div className="about-stat-top" />
                  <div className="about-stat-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={stat.icon} />
                    </svg>
                  </div>
                  <motion.div
                    className="about-stat-number"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
