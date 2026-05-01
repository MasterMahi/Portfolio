import { useRef } from 'react';

const Hero = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      if (card) card.style.transition = 'transform 0.1s';
    }, 500);
  };

  return (
    <section id="home">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <h1>Hi, I'm <br/><span className="text-gradient">Mahendrapallavan G</span></h1>
          <p className="hero-subtitle">Geoinformatics Engineering Graduate specializing in spatial analysis, mobile mapping, and responsive web technologies.</p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary hover-target">Get in Touch</a>
            <a href="#projects" className="btn btn-outline hover-target">View Work</a>
          </div>
        </div>
        <div 
          className="hero-card-container reveal" 
          style={{ transitionDelay: '0.2s' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-card" id="hero-card" ref={cardRef}>
            <h3>Quick Stats</h3>
            <div className="stat-grid">
              <div className="stat-item">
                <h4>7.80</h4>
                <p>CGPA</p>
              </div>
              <div className="stat-item">
                <h4>1+</h4>
                <p>Years Tech Exp</p>
              </div>
              <div className="stat-item">
                <h4>2+</h4>
                <p>GIS Projects</p>
              </div>
              <div className="stat-item">
                <h4>8</h4>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
