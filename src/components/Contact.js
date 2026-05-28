import { useState } from "react";
import { motion } from "framer-motion";

const contactItems = [
  { label: "Email", value: "vijayyadav352005@gmail.com", icon: "\u2709\uFE0F", href: "mailto:vijayyadav352005@gmail.com" },
  { label: "Phone", value: "+91-6204373073", icon: "\uD83D\uDCF1", href: "tel:+916204373073" },
  { label: "Location", value: "Bengaluru, India", icon: "\uD83D\uDCCD", href: null },
  { label: "WhatsApp", value: "+91-6204373073", icon: "\uD83D\uDCF1", href: "https://wa.me/916204373073" },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  },
};

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', text: 'Thanks for reaching out! I will get back to you soon.' });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("vijayyadav352005@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-grid"
          variants={stagger.container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="contact-info" variants={stagger.item}>
            <motion.p className="section-subtitle" variants={stagger.item}>Contact</motion.p>
            <motion.h2 variants={stagger.item}>
              Let's <span>Work Together</span>
            </motion.h2>
            <motion.p variants={stagger.item}>
              Have a project in mind or just want to say hi? I'd love to hear from you.
              Feel free to reach out through any of the channels below.
            </motion.p>
            {contactItems.map((item, i) => (
              <motion.div key={i} className="contact-item" variants={stagger.item}>
                <div className="contact-item-icon">{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="contact-item-label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="contact-item-value"
                      target={item.href.startsWith('http') ? '_blank' : ''}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-item-value">{item.value}</div>
                  )}
                </div>
                {item.label === 'Email' && (
                  <motion.button
                    onClick={copyEmail}
                    className="btn-outline-custom"
                    style={{ padding: '6px 12px', fontSize: '11px', borderWidth: '1px', flexShrink: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </motion.button>
                )}
              </motion.div>
            ))}
            <motion.div className="contact-socials" variants={stagger.item}>
              {[
                { href: "https://github.com/VijayTech35", icon: "\uD83D\uDCBB", label: "GitHub" },
                { href: "https://www.linkedin.com/in/vijay-kumar-78454925b/", icon: "\uD83D\uDCBC", label: "LinkedIn" },
                { href: "https://wa.me/916204373073", icon: "\uD83D\uDCF1", label: "WhatsApp" },
                { href: "mailto:vijayyadav352005@gmail.com", icon: "\u2709\uFE0F", label: "Email" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  title={link.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={stagger.item}
          >
            <h3>Send a Message</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary-custom"
              style={{ width: '100%', justifyContent: 'center' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </motion.button>
            {status && (
              <motion.div
                className={`status-message ${status.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.text}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
