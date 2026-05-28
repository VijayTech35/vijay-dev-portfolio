import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Windflex Creative Pvt. Ltd.",
    period: "Nov 2025 \u2013 April 2026",
    bullets: [
      "Developed and deployed full-stack web applications using React.js and Node.js, improving delivery turnaround by 25%",
      "Built and documented 15+ REST APIs for internal tools, reducing integration time for new features",
      "Optimized SQL queries, improving database read performance by 20% for high-traffic endpoints",
      "Collaborated using Git workflows, managing 50+ pull requests across 4 team members",
    ],
    badges: ["Full Stack", "REST APIs", "SQL", "Git", "React.js"],
    icon: "\uD83D\uDCBB",
    color: "#6C63FF",
  },
  {
    role: "Front-End Developer Intern",
    company: "HEAL Bharat",
    period: "Aug 2025 \u2013 Oct 2025",
    bullets: [
      "Built responsive UI components with React.js, achieving 95+ Lighthouse scores across all pages",
      "Improved page load speed by 30% through image optimization, lazy loading, and code splitting",
      "Implemented accessible design patterns, enhancing user experience for 500+ daily active users",
      "Reduced mobile bounce rate by 15% with responsive layouts and touch-friendly interactions",
    ],
    badges: ["React.js", "UI/UX", "Performance", "Responsive", "Accessibility"],
    icon: "\uD83C\uDF10",
    color: "#00D4FF",
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
          Where I've Worked
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
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
              <motion.div
                className="timeline-content"
                variants={stagger.item}
                whileHover={{ y: -5 }}
              >
                <span className="timeline-date">
                  <span>{exp.icon}</span> {exp.period}
                </span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company" style={{ color: exp.color }}>{exp.company}</p>
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
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
                <div className="timeline-badges">
                  {exp.badges.map((badge, bi) => (
                    <motion.span
                      key={bi}
                      className="timeline-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + bi * 0.08 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
