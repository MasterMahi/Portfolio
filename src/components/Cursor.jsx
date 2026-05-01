import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (window.innerWidth <= 768) return; // Disable on mobile

    const onMouseMove = (e) => {
      if (dot) {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }
      setTimeout(() => {
        if (ring) {
          ring.style.left = e.clientX + 'px';
          ring.style.top = e.clientY + 'px';
        }
      }, 50);
    };

    const addHoverEffect = () => {
      if (ring) ring.classList.add('hovered');
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    };

    const removeHoverEffect = () => {
      if (ring) ring.classList.remove('hovered');
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', onMouseMove);

    // Initial attachment to hover targets
    const attachHoverEvents = () => {
      const hoverTargets = document.querySelectorAll('.hover-target, a, button, .chip');
      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', addHoverEffect);
        target.addEventListener('mouseleave', removeHoverEffect);
      });
    };
    
    // Slight delay to allow DOM to render fully
    setTimeout(attachHoverEvents, 500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      const hoverTargets = document.querySelectorAll('.hover-target, a, button, .chip');
      hoverTargets.forEach(target => {
        target.removeEventListener('mouseenter', addHoverEffect);
        target.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default Cursor;
