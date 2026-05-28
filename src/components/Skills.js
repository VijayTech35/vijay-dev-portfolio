import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90, note: "Semantic, accessible markup for all devices" },
      { name: "CSS", level: 85, note: "Responsive layouts, animations, design systems" },
      { name: "JavaScript", level: 82, note: "Modern ES6+, async patterns, DOM manipulation" },
      { name: "React", level: 80, note: "Built scalable dashboards and interactive UIs" },
      { name: "Next.js", level: 70, note: "SSR, static generation, API routes" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78, note: "REST APIs, real-time features, microservices" },
      { name: "Express.js", level: 75, note: "Middleware, routing, error handling patterns" },
      { name: "Spring Boot", level: 70, note: "Designed REST APIs for enterprise systems" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 75, note: "Schema design, aggregation pipelines, indexing" },
      { name: "MySQL", level: 72, note: "Complex queries, normalization, performance tuning" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85, note: "Version control, branching strategies, CI/CD" },
      { name: "Docker", level: 65, note: "Containerization, multi-service deployments" },
      { name: "AWS", level: 60, note: "EC2, S3, basic cloud infrastructure" },
      { name: "Postman", level: 78, note: "API testing, collections, workflow automation" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 80, note: "OOP, multithreading, Spring ecosystem" },
      { name: "JavaScript", level: 82, note: "Full-stack, async, functional programming" },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", level: 75, note: "Problem-solving, algorithms, data structures" },
      { name: "OOP", level: 80, note: "Design patterns, SOLID, encapsulation" },
      { name: "DBMS", level: 72, note: "ACID, normalization, query optimization" },
    ],
  },
];

const getProficiency = (level) => {
  if (level >= 85) return { label: "Proficient", color: "var(--neon-green)" };
  if (level >= 70) return { label: "Intermediate", color: "var(--secondary)" };
  return { label: "Beginner", color: "var(--accent)" };
};

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

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

        <div className="skills-accordion">
          {skillCategories.map((cat, ci) => {
            const isOpen = openCategory === ci;
            return (
              <div key={ci} className={`skill-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="skill-accordion-header"
                  onClick={() => toggleCategory(ci)}
                >
                  <span className="skill-accordion-title">{cat.title}</span>
                  <span className="skill-accordion-count">{cat.skills.length} skills</span>
                  <motion.span
                    className="skill-accordion-arrow"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="skill-accordion-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="skill-pills-grid">
                        {cat.skills.map((skill, si) => {
                          const prof = getProficiency(skill.level);
                          return (
                            <motion.div
                              key={si}
                              className="skill-pill-card"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25, delay: si * 0.05 }}
                            >
                              <div className="skill-pill-top">
                                <span className="skill-pill-name">{skill.name}</span>
                                <span
                                  className="skill-pill-level"
                                  style={{ color: prof.color, borderColor: prof.color }}
                                >
                                  {prof.label}
                                </span>
                              </div>
                              <p className="skill-pill-note">{skill.note}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};