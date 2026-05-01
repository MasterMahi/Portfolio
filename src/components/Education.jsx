const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title reveal">Education & <span>Certifications</span></h2>
        <div className="edu-grid">
          
          <div className="edu-column reveal">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--amber)' }}>Academic Background</h3>
            <div className="edu-card" style={{ marginBottom: '1rem' }}>
              <h4>B.E. Geo Informatics (2021-2025)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>University VOC College of Engineering, Thoothukudi</p>
              <p style={{ color: 'var(--cyan)', marginTop: '0.5rem', fontWeight: 'bold' }}>CGPA: 7.80/10</p>
            </div>
            <div className="edu-card" style={{ marginBottom: '1rem' }}>
              <h4>Higher Secondary (2020-2021)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Jawahar Matriculation HSS, Neyveli</p>
              <p style={{ color: 'var(--cyan)', marginTop: '0.5rem', fontWeight: 'bold' }}>Percentage: 79%</p>
            </div>
            <div className="edu-card">
              <h4>Secondary (2018-2019)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Jawahar Matriculation HSS, Neyveli</p>
              <p style={{ color: 'var(--cyan)', marginTop: '0.5rem', fontWeight: 'bold' }}>Percentage: 66%</p>
            </div>
            
            <div className="edu-card" style={{ marginTop: '1rem' }}>
              <h4>Languages Known</h4>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', fontSize: '0.9rem' }}>English</span>
                <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', fontSize: '0.9rem' }}>Tamil</span>
              </div>
            </div>
          </div>

          <div className="edu-column reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--pink)' }}>Key Certifications</h3>
            <div className="cert-list">
              <div className="cert-item hover-target">
                <span className="cert-icon">📜</span>
                <div>
                  <h4>Learning ArcGIS Python Scripting</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn Learning</p>
                </div>
              </div>
              <div className="cert-item hover-target">
                <span className="cert-icon">🤖</span>
                <div>
                  <h4>AI & ML Fundamentals</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Microsoft, SAP, TNSDC (June 2024)</p>
                </div>
              </div>
              <div className="cert-item hover-target">
                <span className="cert-icon">🗺️</span>
                <div>
                  <h4>Mapping Toolboxes for Geoinformatics</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>POSTULATE (Oct 2023)</p>
                </div>
              </div>
              <div className="cert-item hover-target">
                <span className="cert-icon">⛈️</span>
                <div>
                  <h4>Disaster Management (Floods/Hazards)</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>National Institute of Disaster Mgmt (2022)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
