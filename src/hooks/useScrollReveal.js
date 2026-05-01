import { useEffect } from 'react';

export const useScrollReveal = (selector = '.reveal') => {
  useEffect(() => {
    const reveals = document.querySelectorAll(selector);
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
          
          if(entry.target.classList.contains('skill-group')) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach(fill => {
              fill.style.width = fill.getAttribute('data-width');
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    reveals.forEach(reveal => revealObserver.observe(reveal));

    return () => {
      reveals.forEach(reveal => revealObserver.unobserve(reveal));
    };
  }, [selector]);
};
