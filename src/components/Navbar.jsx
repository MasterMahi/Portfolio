import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" style={{
      padding: scrolled ? '15px 5%' : '20px 5%',
      background: scrolled ? 'rgba(3, 3, 5, 0.85)' : 'rgba(3, 3, 5, 0.6)'
    }}>
      <a href="#home" className="logo">Mahendra<span style={{ color: 'var(--cyan)' }}>.</span></a>
      <ul className="nav-links">
        <li><a href="#home" className="hover-target">Home</a></li>
        <li><a href="#skills" className="hover-target">Skills</a></li>
        <li><a href="#experience" className="hover-target">Experience</a></li>
        <li><a href="#projects" className="hover-target">Projects</a></li>
        <li><a href="#education" className="hover-target">Education</a></li>
        <li><a href="#contact" className="hover-target">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
