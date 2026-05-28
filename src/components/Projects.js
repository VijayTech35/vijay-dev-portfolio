import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const categories = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "mobile", label: "Mobile Apps" },
];

const projects = [
  {
    title: "Digital Marketing Landing Page",
    description: "Modern, responsive landing page for a digital marketing agency with sleek animations and call-to-action sections.",
    tags: ["React.js", "CSS", "UI/UX", "Responsive"],
    tagClasses: ["react", "css", "uiux", "responsive"],
    gradient: "linear-gradient(135deg, #FF6B6B, #6C63FF)",
    liveUrl: "https://digital-marketing-landing-page-lyart.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-digital-marketing.png",
    category: "fullstack",
    accent: "#FF6B6B",
  },
  {
    title: "TripBuddy - Travel App",
    description: "Travel planning platform for route optimization, budget management, and smart itineraries.",
    tags: ["React.js", "JavaScript", "APIs", "CSS"],
    tagClasses: ["react", "js", "api", "css"],
    gradient: "linear-gradient(135deg, #00D4FF, #009BFF)",
    liveUrl: "https://trip-and-travel-app-wac2.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-tripbuddy.png",
    category: "fullstack",
    accent: "#00D4FF",
  },
  {
    title: "Fraud Identity Dashboard",
    description: "Fraud detection and identity monitoring dashboard with real-time analytics and alerts.",
    tags: ["React.js", "Dashboard UI", "APIs"],
    tagClasses: ["react", "css", "api"],
    gradient: "linear-gradient(135deg, #FF6B6B, #EE5A24)",
    liveUrl: "https://fraud-identity-dashboard.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-fraud.png",
    category: "ai",
    accent: "#FF6B6B",
  },
  {
    title: "Restaurant Management System",
    description: "Full-stack system with CRUD operations, inventory tracking, and RESTful API integration.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    tagClasses: ["mongo", "express", "react", "node"],
    gradient: "linear-gradient(135deg, #00C9A7, #009B7D)",
    liveUrl: null,
    githubUrl: "https://github.com/VijayTech35",
    imgSrc: "/img/project-restaurant.png",
    category: "fullstack",
    accent: "#00C9A7",
  },
  {
    title: "Namma Homestay Android App",
    description: "Android-based homestay booking platform with property listings and seamless booking flow.",
    tags: ["Android", "Java", "UI Design"],
    tagClasses: ["android", "java", "css"],
    gradient: "linear-gradient(135deg, #A29BFE, #6C5CE7)",
    liveUrl: "https://vijaytech35.github.io/namma-homestay-android/",
    githubUrl: "https://github.com/VijayTech35/namma-homestay-android.git",
    imgSrc: "/img/project-homestay.png",
    category: "mobile",
    accent: "#A29BFE",
  },
  {
    title: "NutriGenZ AI - Meal Planner",
    description: "AI-powered meal planner offering personalized diet suggestions via smart APIs and a responsive UI.",
    tags: ["React.js", "JavaScript", "AI APIs", "CSS"],
    tagClasses: ["react", "js", "api", "css"],
    gradient: "linear-gradient(135deg, #7C3AED, #6C63FF)",
    liveUrl: "https://nutrigenz-meal-planner.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-nutrigenz.png",
    category: "ai",
    accent: "#7C3AED",
  },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Featured Work
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Projects built with modern technologies and best practices
        </motion.p>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`project-filter-btn ${activeFilter === cat.key ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={stagger.container}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
