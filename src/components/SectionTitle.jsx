export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return (
    <div className={`section-heading ${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}