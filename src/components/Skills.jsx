const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <div className="skills-container">
          <div className="skill-group reveal">
            <h3>Technical Proficiency</h3>
            
            <div className="skill-bar-container">
              <div className="skill-info"><span>Python & R</span><span>85%</span></div>
              <div className="skill-track"><div className="skill-fill" data-width="85%"></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info"><span>ArcGIS & QGIS</span><span>90%</span></div>
              <div className="skill-track"><div className="skill-fill" data-width="90%"></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info"><span>HTML, CSS, JS</span><span>80%</span></div>
              <div className="skill-track"><div className="skill-fill" data-width="80%"></div></div>
            </div>
            <div className="skill-bar-container">
              <div className="skill-info"><span>Spatial Analysis</span><span>88%</span></div>
              <div className="skill-track"><div className="skill-fill" data-width="88%"></div></div>
            </div>
          </div>
          
          <div className="skill-group reveal" style={{ transitionDelay: '0.2s' }}>
            <h3>Tools & Technologies</h3>
            <div className="tech-chips">
              <div className="chip hover-target">ArcGIS Pro</div>
              <div className="chip hover-target">QGIS</div>
              <div className="chip hover-target">Google Earth Pro</div>
              <div className="chip hover-target">Python</div>
              <div className="chip hover-target">R Programming</div>
              <div className="chip hover-target">JavaScript</div>
              <div className="chip hover-target">HTML/CSS</div>
              <div className="chip hover-target">PHP</div>
              <div className="chip hover-target">Git/GitHub</div>
              <div className="chip hover-target">Agisoft Metashape</div>
              <div className="chip hover-target">GPS Survey Eq.</div>
            </div>
            <h3 style={{ marginTop: '2rem' }}>Soft Skills</h3>
            <div className="tech-chips">
              <div className="chip hover-target">Problem Solving</div>
              <div className="chip hover-target">Time Management</div>
              <div className="chip hover-target">Teamwork</div>
              <div className="chip hover-target">Adaptability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
