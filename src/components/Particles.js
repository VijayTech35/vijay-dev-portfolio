import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 50;

export const Particles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement('div');
      el.className = 'particle';
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      const colors = ['rgba(108,99,255,0.3)', 'rgba(0,212,255,0.2)', 'rgba(124,58,237,0.25)'];
      el.style.cssText = `
        width:${size}px;height:${size}px;
        left:${x}%;top:${y}%;
        background:${colors[i % 3]};
        animation: particle-drift ${duration}s ${delay}s linear infinite;
      `;
      container.appendChild(el);
      particles.push(el);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return <div className="particles-container" ref={containerRef} />;
};
