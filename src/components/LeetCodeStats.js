import { motion } from "framer-motion";

const stats = [
  { label: "Problems Solved", value: "50+", icon: "\uD83D\uDCDD" },
  { label: "Easy", value: "25+", icon: "\uD83D\uDFE2" },
  { label: "Medium", value: "20+", icon: "\uD83D\uDFE1" },
  { label: "Hard", value: "5+", icon: "\uD83D\uDD34" },
  { label: "Contest Rating", value: "1200+", icon: "\uD83C\uDFC6" },
];

export const LeetCodeStats = () => {
  return (
    <section className="leetcode-section" id="leetcode">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Coding Profile
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          LeetCode & DSA Progress
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Consistency in problem-solving and algorithmic thinking
        </motion.p>

        <motion.div
          className="leetcode-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="leetcode-card leetcode-main">
            <div className="leetcode-main-top">
              <span className="leetcode-icon">�️</span>
              <span className="leetcode-icon-text">LeetCode</span>
            </div>
            <div className="leetcode-ring-container">
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                <motion.circle
                  cx="80" cy="80" r="70"
                  fill="none"
                  stroke="#6C63FF"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 70}
                  strokeDashoffset={2 * Math.PI * 70 * 0.55}
                  transform="rotate(-90 80 80)"
                  initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 70 * 0.55 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <text x="80" y="75" textAnchor="middle" fill="var(--text-primary)" fontSize="28" fontWeight="700" fontFamily="var(--font-display)">50+</text>
                <text x="80" y="95" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontFamily="var(--font-sans)">Solved</text>
              </svg>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center', marginTop: '8px' }}>
              "Consistency is key"
            </p>
          </div>

          <div className="leetcode-breakdown">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="leetcode-stat-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <span className="leetcode-stat-icon">{stat.icon}</span>
                <div>
                  <div className="leetcode-stat-label">{stat.label}</div>
                  <div className="leetcode-stat-value">{stat.value}</div>
                </div>
              </motion.div>
            ))}
            <motion.a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-profile-link"
              whileHover={{ scale: 1.02 }}
            >
              View LeetCode Profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
