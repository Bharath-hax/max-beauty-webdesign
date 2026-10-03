import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import images from "../data/images.json";

const filters = ["All", "Space", "Hair", "Ritual"];

const gallery = [
  ["01", "Space", "The signature studio", images.gallery1.url, images.gallery1.alt],
  ["02", "Hair", "The styling ritual", images.gallery2.url, images.gallery2.alt],
  ["03", "Space", "Quiet details", images.gallery3.url, images.gallery3.alt],
  ["04", "Ritual", "A moment for you", images.gallery4.url, images.gallery4.alt],
  ["05", "Hair", "Modern finishing", images.gallery5.url, images.gallery5.alt],
  ["06", "Ritual", "The final touch", images.gallery6.url, images.gallery6.alt]
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? gallery : gallery.filter((item) => item[1] === filter);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <SectionTitle
          eyebrow="Visual Journal"
          title="Inside the Studio."
          description="A glimpse into the textures, spaces and beauty rituals that shape the studio."
        />

        <div className="gallery-toolbar">
          <div className="filters">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "selected" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <span>{String(visible.length).padStart(2, "0")} images</span>
        </div>

        <div className="gallery-grid">
          {visible.map(([number, category, title, image, alt], index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={number}>
              <img src={image} alt={alt || title} loading="lazy" />
              <figcaption>
                <span>{category}</span>
                <strong>{title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
