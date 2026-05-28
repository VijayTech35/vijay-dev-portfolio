import { motion } from "framer-motion";

const generateContributions = () => {
  const weeks = 52;
  const days = 7;
  const grid = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.7) level = 1;
      if (rand > 0.85) level = 2;
      if (rand > 0.94) level = 3;
      if (rand > 0.98) level = 4;
      grid.push({ week: w, day: d, level });
    }
  }
  return grid;
};

const contributions = generateContributions();
const totalContributions = contributions.filter((c) => c.level > 0).length;

export const GitHubContributions = () => {
  return (
    <section className="github-section" id="github">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          GitHub
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Contribution Activity
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My open source contributions on GitHub
        </motion.p>

        <motion.div
          className="github-graph"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="github-graph-header">
            <div className="github-graph-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-secondary)' }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <a href="https://github.com/VijayTech35" target="_blank" rel="noopener noreferrer">
                VijayTech35
              </a>
            </div>
            <div className="github-graph-stats">
              <div className="github-stat">
                <div className="github-stat-num">{totalContributions}</div>
                <div className="github-stat-label">Contributions</div>
              </div>
              <div className="github-stat">
                <div className="github-stat-num">{Math.floor(totalContributions / 7)}</div>
                <div className="github-stat-label">Repos</div>
              </div>
            </div>
          </div>

          <div style={{ overflowX: 'auto', paddingBottom: '4px' }}>
            <div className="github-contribution-grid" style={{ minWidth: '700px' }}>
              {contributions.slice(0, 364).map((cell, i) => (
                <motion.div
                  key={i}
                  className={`github-contribution-cell level-${cell.level}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.001 }}
                  title={`${cell.level} contribution${cell.level !== 1 ? 's' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="github-graph-footer">
            <span>Contribution activity in the last year</span>
            <div className="github-legend">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} className={`github-legend-cell${l > 0 ? ` level-${l}` : ''}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
