const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          
          <div className="project-card reveal hover-target">
            <div className="project-emoji">🌍</div>
            <h3 className="project-title">GIS Based Soil Moisture Mapping</h3>
            <div className="project-tags">
              <span>#ArcGIS</span><span>#QGIS</span><span>#RemoteSensing</span>
            </div>
            <p className="project-desc">Collected and analyzed satellite and GIS data for soil moisture assessment in Thoothukudi District. Processed spatial datasets to create thematic maps for visualization and interpretation.</p>
          </div>

          <div className="project-card reveal hover-target" style={{ transitionDelay: '0.1s' }}>
            <div className="project-emoji">🚁</div>
            <h3 className="project-title">Ortho Image Generation via Drones</h3>
            <div className="project-tags">
              <span>#AgisoftMetashape</span><span>#UAV</span><span>#3DModeling</span>
            </div>
            <p className="project-desc">Generated high-resolution Orthomosaic images using UAV data. Performed image alignment, dense point cloud generation, and 3D model reconstruction with spatial coordinate correction.</p>
          </div>

          <div className="project-card reveal hover-target" style={{ transitionDelay: '0.2s' }}>
            <div className="project-emoji">🏆</div>
            <h3 className="project-title">Event Highlights & Expo</h3>
            <div className="project-tags">
              <span>#Presentation</span><span>#GISMapping</span>
            </div>
            <p className="project-desc">Secured 1st Prize in Inter-Department Project Expo (April 2024) and 2nd Prize in GIS Mapping event, showcasing strong analytical and presentational skills.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
