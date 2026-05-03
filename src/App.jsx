import { useScrollReveal } from './hooks/useScrollReveal';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

function App() {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Cursor />
      <div className="noise"></div>
      <div className="bg-image-overlay"></div>
      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
