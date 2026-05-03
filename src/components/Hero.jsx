import { useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImg from '../assets/Profile.png';

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
          <h1>Hi, I'm <br /><span className="text-gradient name-title">Mahendrapallavan G</span></h1>
          <p className="hero-subtitle">Geoinformatics Engineering Graduate specializing in spatial analysis, mobile mapping, and responsive web technologies.</p>
          <div className="btn-group">
            <a href="#contact" className="btn btn-primary hover-target">Get in Touch</a>
            <a href="#projects" className="btn btn-outline hover-target">View Work</a>
          </div>
          <div className="social-links" style={{ justifyContent: 'flex-start', marginTop: '2rem' }}>
            <a href="https://www.linkedin.com/in/mahendrapallavan" target="_blank" rel="noopener noreferrer" className="social-icon hover-target">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MasterMahi" target="_blank" rel="noopener noreferrer" className="social-icon hover-target">
              <FaGithub />
            </a>
          </div>
        </div>
        <div
          className="hero-card-container reveal"
          style={{ transitionDelay: '0.2s' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-card" id="hero-card" ref={cardRef}>
            <div className="hero-image-container">
              <img src={profileImg} alt="Mahendrapallavan G" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
