export default function ContactPage({
  formData,
  formStatus,
  launching,
  handleFormChange,
  handleSubmit,
}) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <span className="section-label reveal">Get in Touch</span>
        <h2 className="section-title reveal">Launch Your Vision</h2>

        <div className="contact-wrapper">
          <div className="contact-info reveal" data-gravity="1">
            <h3>Begin Your Anti-Gravity Journey</h3>
            <p>
              Share your project vision with our team. Every consultation is an opportunity to defy convention and
              create something extraordinary.
            </p>
            <span className="contact-detail">studio@meridian-arch.com</span>
            <span className="contact-detail">+1 (888) 456-7890</span>
            <span className="contact-detail">1200 Levitation Blvd, Dubai, UAE</span>
          </div>

          <form className="consultation-form reveal" onSubmit={handleSubmit} data-gravity="2" noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="+1 (000) 000-0000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="project">Project Type</label>
              <select id="project" name="project" value={formData.project} onChange={handleFormChange}>
                <option value="">Select a type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="cultural">Cultural</option>
                <option value="urban">Urban Planning</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Describe your vision..."
                required
              />
            </div>

            <button type="submit" className={`form-submit ${launching ? 'launching' : ''}`} disabled={launching}>
              {launching ? 'Launching...' : 'Send Consultation Request'}
            </button>

            {formStatus === 'success' && (
              <div className="form-status success" role="status">
                Your message has launched successfully. We will orbit back to you within 24 hours.
              </div>
            )}

            {formStatus === 'error' && (
              <div className="form-status error" role="alert">
                Please provide your name, a valid email, and a message before launch.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

