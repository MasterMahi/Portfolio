const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title reveal">Professional <span>Experience</span></h2>
        <div className="timeline">
          
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Feb 2026 – Present</span>
              <h3 className="timeline-title">Mobile Mapping and GIS Trainee</h3>
              <p className="timeline-company">Naksha Tech Pvt.Ltd | Bengaluru</p>
              <ul className="timeline-list">
                <li>Processing spatial data in ArcGIS Pro and QGIS (cleaning, validation, layer organization).</li>
                <li>Assisting in map layout creation and cartographic outputs.</li>
                <li>Performing attribute validation and cross-checking for data accuracy.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">July 2025 – Aug 2025</span>
              <h3 className="timeline-title">Junior GIS Engineer</h3>
              <p className="timeline-company">Niruvanam Ltd | Chennai</p>
              <ul className="timeline-list">
                <li>Performed 2D & 3D feature extraction, vector digitization, and road/residential feature mapping using geospatial datasets.</li>
                <li>Conducted spatial data validation, geometry checks, and QA/QC processes to ensure high data accuracy and consistency.</li>
                <li>Performed ortho imagery processing, network analysis, file handling and GIS data management.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
