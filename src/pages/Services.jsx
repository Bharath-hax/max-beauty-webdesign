import {
  Brush,
  Droplets,
  Gem,
  Scissors,
  Sparkles,
  Sun
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import TiltCard from "../components/TiltCard";

const services = [
  ["01", Scissors, "Signature Cut", "A considered cut shaped around your features, texture and everyday rhythm.", "From ₹1,800"],
  ["02", Brush, "Colour Studio", "Dimensional colour, glossing and tonal refinement with a consultation-first approach.", "From ₹3,500"],
  ["03", Sparkles, "Blowout Ritual", "A polished finish with movement, shine and a soft, long-lasting silhouette.", "From ₹1,200"],
  ["04", Droplets, "Hair Therapy", "A restorative ritual focused on hydration, softness and scalp comfort.", "From ₹1,500"],
  ["05", Sun, "Skin Ritual", "A calming facial experience designed to refresh the skin and reset the senses.", "From ₹2,000"],
  ["06", Gem, "Bridal Studio", "Private styling and beauty preparation for weddings and once-in-a-lifetime moments.", "Consultation"]
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionTitle
          eyebrow="Our Services"
          title="Rituals, not routines."
          description="Tailored beauty services created to feel luxurious from consultation to the final mirror check."
          align="center"
        />

        <div className="service-grid">
          {services.map(([number, Icon, title, text, price]) => (
            <TiltCard className="service-card" key={title}>
              <div className="service-top">
                <span>{number}</span>
                <Icon size={21} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="service-bottom">
                <span>{price}</span>
                <span className="service-line" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
