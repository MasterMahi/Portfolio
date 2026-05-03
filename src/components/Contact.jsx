import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
              <FaEnvelope style={{ color: 'var(--indigo)', fontSize: '1.5rem', marginBottom: '1rem' }} />
              <h4>Email</h4>
              <p>mahendrapallavan2003@gmail.com</p>
            </div>
            <div className="contact-card">
              <FaPhoneAlt style={{ color: 'var(--cyan)', fontSize: '1.5rem', marginBottom: '1rem' }} />
              <h4>Phone</h4>
              <p>+91 6379887559</p>
            </div>
            <div className="contact-card">
              <FaMapMarkerAlt style={{ color: 'var(--pink)', fontSize: '1.5rem', marginBottom: '1rem' }} />
              <h4>Location</h4>
              <p>Neyveli Ts – 607801</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form action="https://formspree.io/f/mjglgebn" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-input hover-target" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-input hover-target" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input hover-target" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary hover-target" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/mahendrapallavan" target="_blank" rel="noopener noreferrer" className="social-icon hover-target">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MasterMahi" target="_blank" rel="noopener noreferrer" className="social-icon hover-target">
              <FaGithub />
            </a>
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
