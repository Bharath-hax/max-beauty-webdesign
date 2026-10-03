const footerLinks = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["gallery", "Gallery"],
  ["contact", "Contact"]
];

export default function Footer() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="brand-mark small" aria-hidden="true">
          MB
        </span>
        <div className="footer-title">
          <strong>MAX BEAUTY</strong>
          <small>Beauty, refined.</small>
        </div>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map(([id, label]) => (
          <button
            key={id}
            className="footer-link"
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="footer-contact">
        <p>Dindigul, Tamil Nadu</p>
        <p>+91 90000 00000</p>
        <p>@max.beauty</p>
      </div>

      <span className="footer-legal">
        © {new Date().getFullYear()} MAX BEAUTY
      </span>
    </footer>
  );
}