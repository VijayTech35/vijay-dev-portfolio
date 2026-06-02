import { motion } from "framer-motion";

export const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <motion.a
            href="#home"
            className="footer-logo"
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            whileHover={{ scale: 1.05 }}
          >
            {'<'}<span>VK</span>{'/>'}
          </motion.a>
          <div className="footer-links">
            {['about', 'stats', 'skills', 'projects', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className="footer-socials">
            {[
              { href: "https://github.com/VijayTech35", icon: "\uD83D\uDCBB" },
              { href: "https://www.linkedin.com/in/vijay-kumar-78454925b/", icon: "\uD83D\uDCBC" },
              { href: "mailto:vijayyadav352005@gmail.com", icon: "\u2709\uFE0F" },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Built with <span style={{ color: '#FF6B6B' }}>&#10084;</span> by{' '}
            <a href="https://github.com/VijayTech35" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              Vijay Kumar
            </a>
            {' '}&copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
};
