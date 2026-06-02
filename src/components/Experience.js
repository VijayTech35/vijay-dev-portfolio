import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Windflex Creative Pvt. Ltd.",
    companyShort: "WC",
    period: "Nov 2025 – April 2026",
    bullets: [
      "Built and deployed full-stack web apps using React.js and Node.js, reducing delivery time by 25%",
      "Developed 15+ REST APIs for internal tools, cutting integration time for new features by 40%",
      "Optimized SQL queries to improve database read performance by 20% for high-traffic endpoints",
      "Managed 50+ pull requests across 4 team members using Git workflows, accelerating release cycles",
    ],
    badges: ["Full Stack", "REST APIs", "SQL", "Git", "React.js"],
    color: "#00bcd4",
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
  },
  {
    role: "Front-End Developer Intern",
    company: "HEAL Bharat",
    companyShort: "HB",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Built responsive UI components with React.js, achieving 95+ Lighthouse scores across all pages",
      "Improved page load speed by 30% through image optimization, lazy loading, and code splitting",
      "Implemented accessible design patterns, enhancing UX for 500+ daily active users",
      "Reduced mobile bounce rate by 15% with responsive layouts and touch-friendly interactions",
    ],
    badges: ["React.js", "UI/UX", "Performance", "Responsive", "Accessibility"],
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.2 } } },
  item: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
};

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Where I've <span>Worked</span>
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Professional experience in full stack and frontend development
        </motion.p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              variants={stagger.container}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div
                className="timeline-dot"
                style={{ background: exp.gradient }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
              />
              <motion.div
                className="timeline-content"
                variants={stagger.item}
                whileHover={{ y: -6 }}
                style={{ borderColor: `${exp.color}22` }}
              >
                <div className="timeline-card-glow" style={{ background: `radial-gradient(ellipse at top, ${exp.color}22, transparent 70%)` }} />
                <div className="timeline-header">
                  <div className="timeline-logo-badge" style={{ background: exp.gradient }}>
                    <span>{exp.companyShort}</span>
                  </div>
                  <div className="timeline-header-info">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company" style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      className="timeline-bullet"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + bi * 0.1 }}
                    >
                      <span className="timeline-bullet-dot" style={{ background: exp.color }} />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
                <div className="timeline-badges">
                  {exp.badges.map((badge, bi) => (
                    <motion.span
                      key={bi}
                      className="timeline-badge"
                      style={{ borderColor: `${exp.color}44`, color: exp.color, background: `${exp.color}11` }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + bi * 0.08 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
                <div className="timeline-bottom-border" style={{ background: exp.gradient }} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
