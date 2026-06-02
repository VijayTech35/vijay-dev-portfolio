import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Shahi Scoops",
    description: "Premium ice cream brand website with a rich, royal flavour experience. Features a modern responsive design, smooth animations, and an engaging UI for showcasing artisanal frozen desserts.",
    tags: ["Next.js", "React", "CSS", "Vercel"],
    tagClasses: ["react", "react", "css", "api"],
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    liveUrl: "https://shahi-scoops-official.vercel.app",
    githubUrl: "https://github.com/VijayTech35/shahi-scoops-official",
    imgSrc: "/img/project-shahi-scoops.png",
    accent: "#f7971e",
    featured: true,
  },
  {
    title: "Fraud Identity Dashboard",
    description: "Fraud detection and identity monitoring dashboard with real-time analytics and alerts. Leverages AI to detect suspicious patterns and prevent identity theft.",
    tags: ["React.js", "Dashboard UI", "APIs"],
    tagClasses: ["react", "css", "api"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: "https://fraud-identity-dashboard.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-fraud.png",
    accent: "#00bcd4",
  },
  {
    title: "Digital Marketing Landing Page",
    description: "Modern, responsive landing page for a digital marketing agency with sleek animations and call-to-action sections.",
    tags: ["React.js", "CSS", "UI/UX", "Responsive"],
    tagClasses: ["react", "css", "uiux", "responsive"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: "https://digital-marketing-landing-page-lyart.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-digital-marketing.png",
    accent: "#00bcd4",
  },
  {
    title: "TripBuddy - Travel App",
    description: "Travel planning platform for route optimization, budget management, and smart itineraries.",
    tags: ["React.js", "JavaScript", "APIs", "CSS"],
    tagClasses: ["react", "js", "api", "css"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: "https://trip-and-travel-app-wac2.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-tripbuddy.png",
    accent: "#00bcd4",
  },
  {
    title: "Restaurant Management System",
    description: "Full-stack system with CRUD operations, inventory tracking, and RESTful API integration.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    tagClasses: ["mongo", "express", "react", "node"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: null,
    githubUrl: "https://github.com/VijayTech35",
    imgSrc: "/img/project-restaurant.png",
    accent: "#00bcd4",
  },
  {
    title: "Namma Homestay Android App",
    description: "Android-based homestay booking platform with property listings and seamless booking flow.",
    tags: ["Android", "Java", "UI Design"],
    tagClasses: ["android", "java", "css"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: "https://vijaytech35.github.io/namma-homestay-android/",
    githubUrl: "https://github.com/VijayTech35/namma-homestay-android.git",
    imgSrc: "/img/project-homestay.png",
    accent: "#00bcd4",
  },
  {
    title: "NutriGenZ AI - Meal Planner",
    description: "AI-powered meal planner offering personalized diet suggestions via smart APIs and a responsive UI.",
    tags: ["React.js", "JavaScript", "AI APIs", "CSS"],
    tagClasses: ["react", "js", "api", "css"],
    gradient: "linear-gradient(135deg, #00bcd4, #0097a7)",
    liveUrl: "https://nutrigenz-meal-planner.vercel.app",
    githubUrl: null,
    imgSrc: "/img/project-nutrigenz.png",
    accent: "#00bcd4",
  },
];

const featured = projects.find(p => p.featured);
const rest = projects.filter(p => !p.featured);

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

export const Projects = () => {
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

        {featured && (
          <motion.div
            className="featured-project"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="featured-project-inner">
              <div className="featured-image" style={{ background: featured.gradient }}>
                <img src={featured.imgSrc} alt={featured.title} />
              </div>
              <div className="featured-body">
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                <div className="project-card-tags">
                  {featured.tags.map((tag, i) => (
                    <span key={i} className={`project-tag ${featured.tagClasses[i] || ''}`}>{tag}</span>
                  ))}
                </div>
                <div className="project-card-actions">
                  {featured.liveUrl && (
                    <motion.a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </motion.a>
                  )}
                  {featured.githubUrl && (
                    <motion.a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn-outline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="projects-grid"
          variants={stagger.container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {rest.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
