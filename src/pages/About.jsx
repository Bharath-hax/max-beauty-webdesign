import { Heart, Leaf, WandSparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import TiltCard from "../components/TiltCard";
import images from "../data/images.json";

const values = [
  {
    icon: Heart,
    title: "Personal",
    text: "Every appointment begins with listening, so the result feels distinctly yours."
  },
  {
    icon: Leaf,
    title: "Considered",
    text: "We choose refined techniques and products with an emphasis on care and comfort."
  },
  {
    icon: WandSparkles,
    title: "Artful",
    text: "From consultation to the final detail, beauty is treated as a craft."
  }
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle
          eyebrow="The Studio"
          title="A quieter kind of luxury."
          description="MAX BEAUTY is imagined as a space where contemporary beauty feels intimate, tactile and unhurried."
        />

        <div className="about-grid">
          <TiltCard className="about-image-card">
            <img src={images.about.url} alt={images.about.alt} />
            <div className="image-caption">
              <span>THE SPACE</span>
              <strong>Warm light. Clean lines. Soft rituals.</strong>
            </div>
          </TiltCard>

          <div className="about-copy">
            <span className="large-number">01</span>
            <p className="lead">
              We believe a salon should feel less like a stop on your schedule
              and more like a beautiful pause.
            </p>
            <p>
              Our approach combines modern styling, restorative treatments and
              thoughtful hospitality. The result is a studio experience that
              feels polished without ever feeling distant.
            </p>

            <div className="values">
              {values.map(({ icon: Icon, title, text }) => (
                <div className="value-row" key={title}>
                  <div className="value-icon"><Icon size={18} /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
