const FOOTER_LINKS = {
  Company: ['About Us', 'Careers', 'Press', 'Partners'],
  Services: ['Architecture', 'Engineering', 'Planning', 'Consulting'],
  Resources: ['Blog', 'Case Studies', '360° Tours', 'Contact'],
};

const LOGO_LETTERS = 'MERIDIAN'.split('');

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand reveal">
            <div className="footer-logo" data-gravity="1.5">
              {LOGO_LETTERS.map((letter, i) => (
                <span key={i} className="logo-letter" style={{ animationDelay: `${i * 0.1}s` }}>
                  {letter}
                </span>
              ))}
            </div>
            <p className="footer-tagline">Architecture beyond gravity. Designing the impossible since 1994.</p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer-col reveal">
              <h4>{heading}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom reveal">
          <span>© 2026 Meridian Architecture. All rights reserved.</span>
          <div className="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

