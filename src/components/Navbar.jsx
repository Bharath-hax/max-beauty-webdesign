import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Services"],
  ["gallery", "Gallery"],
  ["contact", "Contact"]
];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <button
        className="brand"
        onClick={() => go("home")}
        aria-label="MAX BEAUTY home"
      >
        <span className="brand-mark" aria-hidden="true">
          MB
        </span>
        <span className="brand-name">MAX BEAUTY</span>
      </button>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([id, label]) => (
          <button
            key={id}
            className={active === id ? "active" : ""}
            onClick={() => go(id)}
          >
            {label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => go("contact")}>
          Book Appointment
        </button>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
