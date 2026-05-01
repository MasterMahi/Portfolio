const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container reveal">
          <h2 className="section-title">Let's <span>Connect</span></h2>
          
          <div className="avatar-container hover-target">
            <div className="avatar-ripple"></div>
            <div className="avatar">MG</div>
          </div>
          
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi!
          </p>
          
          <div className="contact-info">
            <div className="contact-card">
              <h4 style={{ color: 'var(--indigo)', marginBottom: '0.5rem' }}>Email</h4>
              <p>mahendrapallavan2003@gmail.com</p>
            </div>
            <div className="contact-card">
              <h4 style={{ color: 'var(--cyan)', marginBottom: '0.5rem' }}>Phone</h4>
              <p>+91 6379887559</p>
            </div>
            <div className="contact-card">
              <h4 style={{ color: 'var(--pink)', marginBottom: '0.5rem' }}>Location</h4>
              <p>Neyveli Ts – 607801</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <a href="mailto:mahendrapallavan2003@gmail.com" className="btn btn-primary hover-target">Say Hello</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Mahendrapallavan G. Built with React & Vite.</p>
      </footer>
    </>
  );
};

export default Contact;
