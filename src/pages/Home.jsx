import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import images from "../data/images.json";

export default function Home() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="section hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-copy reveal">
        <span className="eyebrow">
          <Sparkles size={14} />
          EST. 2026 · SIGNATURE BEAUTY STUDIO
        </span>

        <h1>MAX BEAUTY</h1>
        <p className="hero-subtitle">Beauty, refined.</p>

        <p>
          An elevated beauty experience crafted around timeless elegance,
          modern artistry, and you.
        </p>

        <div className="hero-actions">
          <button className="button button-primary" onClick={() => go("contact")}>
            Reserve your moment
            <ArrowUpRight size={17} />
          </button>

          <button className="text-button" onClick={() => go("gallery")}>
            Explore the studio
            <ArrowDown size={16} />
          </button>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="hero-frame">
          <img src={images.hero.url} alt={images.hero.alt} />
          <div className="hero-overlay" />
          <div className="hero-stamp">
            <span>MB</span>
            <small>MAX BEAUTY</small>
          </div>
        </div>

        <div className="floating-note">
          <span>01</span>
          <p>Designed around<br />your ritual.</p>
        </div>
      </div>
    </section>
  );
}
