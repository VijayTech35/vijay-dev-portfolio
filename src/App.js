import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { GitHubContributions } from "./components/GitHubContributions";
import { LeetCodeStats } from "./components/LeetCodeStats";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.06 } },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#06060f' : '#f0f2ff';
    document.body.style.color = darkMode ? '#ffffff' : '#0a0a1a';
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="app-loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="app-loader-inner">
              <motion.div
                className="app-loader-icon"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {'{ }'}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Initializing...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <NavBar />
            <motion.div variants={sectionVariants}><Hero /></motion.div>
            <motion.div variants={sectionVariants}><About /></motion.div>
            <motion.div variants={sectionVariants}><Stats /></motion.div>
            <motion.div variants={sectionVariants}><Skills /></motion.div>
            <motion.div variants={sectionVariants}><Experience /></motion.div>
            <motion.div variants={sectionVariants}><Projects /></motion.div>
            <motion.div variants={sectionVariants}><GitHubContributions /></motion.div>
            <motion.div variants={sectionVariants}><LeetCodeStats /></motion.div>
            <motion.div variants={sectionVariants}><Certifications /></motion.div>
            <motion.div variants={sectionVariants}><Contact /></motion.div>
            <motion.div variants={sectionVariants}><Footer /></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
