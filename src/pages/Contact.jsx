import { useState } from "react";
import { ArrowUpRight, Clock3, Instagram, MapPin, Phone } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-wrap">
        <div className="contact-info">
          <SectionTitle
            eyebrow="Appointments"
            title="Make time for yourself."
            description="Tell us what you are looking for and our beauty team will help shape the right appointment."
          />

          <div className="contact-details">
            <div><MapPin size={18} /><span>MAX BEAUTY<br />Dindigul, Tamil Nadu</span></div>
            <div><Phone size={18} /><span>+91 90000 00000</span></div>
            <div><Clock3 size={18} /><span>Tue–Sun · 10:00 AM–8:00 PM</span></div>
            <div><Instagram size={18} /><span>@max.beauty</span></div>
          </div>
        </div>

        <form className="appointment-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Phone
              <input required name="phone" placeholder="+91..." />
            </label>
          </div>

          <div className="form-row">
            <label>
              Service
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Signature Cut</option>
                <option>Colour Studio</option>
                <option>Blowout Ritual</option>
                <option>Hair Therapy</option>
                <option>Skin Ritual</option>
                <option>Bridal Studio</option>
              </select>
            </label>
            <label>
              Preferred date
              <input required type="date" name="date" />
            </label>
          </div>

          <label>
            Note
            <textarea name="message" rows="5" placeholder="Tell us anything you'd like us to know..." />
          </label>

          <button className="button button-primary submit-button" type="submit">
            {submitted ? "Request received" : "Request appointment"}
            <ArrowUpRight size={17} />
          </button>

          {submitted && (
            <p className="success-message">
              Thank you. Your appointment request has been captured for this demo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
