import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const glow = ref.current;
    if (!glow) return;

    const trail = [];
    const trailContainer = document.createElement('div');
    trailContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998';
    document.body.appendChild(trailContainer);

    for (let i = 0; i < 8; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position:absolute;width:4px;height:4px;border-radius:50%;
        background:rgba(0,188,212,${0.15 - i * 0.015});
        pointer-events:none;transition:all 0.1s ease;
      `;
      trailContainer.appendChild(dot);
      trail.push(dot);
    }

    const onMove = (e) => {
      glow.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

      trail.forEach((dot, i) => {
        setTimeout(() => {
          dot.style.left = `${e.clientX}px`;
          dot.style.top = `${e.clientY}px`;
        }, i * 20);
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      trailContainer.remove();
    };
  }, []);

  return <div className="cursor-glow" ref={ref} />;
};
