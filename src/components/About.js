import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Projects" },
  { number: "2", label: "Internships" },
  { number: "16+", label: "Technologies" },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="about-grid"
          variants={stagger.container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="about-image-container" variants={stagger.item}>
            <div className="about-card-glow">
              <div className="about-card-inner">
                <motion.div
                  className="about-avatar"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src="/img/profile-pic.jpg" alt="Vijay Kumar" className="about-avatar-img" />
                </motion.div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center' }}>
                  Full Stack Developer
                </p>
                <div style={{
                  display: 'flex', gap: '8px', fontSize: '18px',
                  color: 'var(--text-muted)'
                }}>
                  <span>�️</span>
                  <span>💼</span>
                  <span>✉️</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-content" variants={stagger.item}>
            <motion.p className="section-subtitle" variants={stagger.item}>About Me</motion.p>
            <motion.h2 variants={stagger.item}>
              Turning Ideas Into <span>Reality</span>
            </motion.h2>
            <motion.p variants={stagger.item}>
              I am a passionate Full Stack Developer skilled in Java, JavaScript, React.js, Node.js,
              Spring Boot, REST APIs, MongoDB, and MySQL. I enjoy building AI-powered applications,
              scalable web platforms, and responsive user experiences.
            </motion.p>
            <motion.p variants={stagger.item}>
              I have internship experience in frontend and full stack development and love solving
              real-world problems through technology. Currently pursuing my B.Tech in Electronics &
              Communication Engineering at HKBK College of Engineering, Bengaluru.
            </motion.p>
            <motion.div className="about-stats" variants={stagger.item}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="about-stat"
                  whileHover={{ y: -4, scale: 1.02 }}
                  variants={stagger.item}
                >
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
