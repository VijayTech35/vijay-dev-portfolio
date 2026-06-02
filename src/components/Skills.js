import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brandColors = {
  React: "#61DAFB",
  "Next.js": "#ffffff",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Tailwind CSS": "#06B6D4",
  Redux: "#764ABC",
  "Node.js": "#339933",
  "Express.js": "#ffffff",
  MongoDB: "#47A248",
  PostgreSQL: "#4169E1",
  "REST APIs": "#00bcd4",
  "Spring Boot": "#6DB33F",
  Git: "#F05032",
  GitHub: "#ffffff",
  Docker: "#2496ED",
  AWS: "#FF9900",
  Postman: "#FF6C37",
  "VS Code": "#007ACC",
  Figma: "#F24E1E",
};

const levelColors = {
  Expert: { bg: "rgba(0, 230, 118, 0.15)", color: "#00E676" },
  Advanced: { bg: "rgba(124, 58, 237, 0.15)", color: "#a78bfa" },
  Intermediate: { bg: "rgba(255, 193, 7, 0.15)", color: "#FFD600" },
  Beginner: { bg: "rgba(156, 163, 175, 0.15)", color: "#9CA3AF" },
};

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Expert", icon: "react" },
      { name: "Next.js", level: "Expert", icon: "nextjs" },
      { name: "JavaScript", level: "Expert", icon: "javascript" },
      { name: "TypeScript", level: "Advanced", icon: "typescript" },
      { name: "HTML5", level: "Expert", icon: "html5" },
      { name: "CSS3", level: "Expert", icon: "css3" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwindcss" },
      { name: "Redux", level: "Advanced", icon: "redux" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Expert", icon: "nodejs" },
      { name: "Express.js", level: "Expert", icon: "express" },
      { name: "MongoDB", level: "Advanced", icon: "mongodb" },
      { name: "PostgreSQL", level: "Intermediate", icon: "postgresql" },
      { name: "REST APIs", level: "Expert", icon: null },
      { name: "Spring Boot", level: "Intermediate", icon: "spring" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Expert", icon: "git" },
      { name: "GitHub", level: "Expert", icon: "github" },
      { name: "Docker", level: "Intermediate", icon: "docker" },
      { name: "AWS", level: "Intermediate", icon: "amazonwebservices" },
      { name: "Postman", level: "Advanced", icon: null },
      { name: "VS Code", level: "Expert", icon: "vscode" },
      { name: "Figma", level: "Intermediate", icon: "figma" },
    ],
  },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Technical Expertise
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Technologies and tools I work with to build amazing applications
        </motion.p>

        <div className="skills-tabs">
          {categories.map((cat, ci) => (
            <button
              key={ci}
              className={`skills-tab ${activeTab === ci ? "active" : ""}`}
              onClick={() => setActiveTab(ci)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {categories[activeTab].skills.map((skill, si) => (
              <motion.div
                key={si}
                className="skill-pill"
                style={{
                  borderLeft: `3px solid ${brandColors[skill.name]}`,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: si * 0.06 }}
                whileHover={{
                  y: -3,
                  boxShadow: `0 8px 30px ${brandColors[skill.name]}44`,
                }}
              >
                <div className="skill-pill-logo">
                  {skill.icon ? (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}${skill.icon === 'amazonwebservices' ? '-original-wordmark' : '-original'}.svg`}
                      alt={skill.name}
                      className="skill-pill-img"
                    />
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColors[skill.name]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )}
                </div>
                <span className="skill-pill-name">{skill.name}</span>
                <span
                  className="skill-pill-level"
                  style={{
                    background: levelColors[skill.level].bg,
                    color: levelColors[skill.level].color,
                  }}
                >
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
