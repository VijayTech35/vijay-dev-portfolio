import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Projects Completed", icon: "\uD83D\uDE80" },
  { number: "2", label: "Internships", icon: "\uD83D\uDCBC" },
  { number: "16+", label: "Technologies", icon: "\uD83D\uDEE0\uFE0F" },
  { number: "185+", label: "GitHub Contributions", icon: "\uD83D\uDCF7" },
  { number: "24/7", label: "Dedication", icon: "\uD83D\uDCAA" },
];

const container = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Stats = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          By the Numbers
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Impact in Numbers
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A snapshot of my professional journey and achievements
        </motion.p>

        <motion.div
          className="stats-grid"
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
