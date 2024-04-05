import "./hero-image-styles.css";

export default function HeroImage({ svg, alt }) {
  return (
    <article className="hero-image">
      <img className="hero-image-svg" src={svg} alt={alt} />
    </article>
  );
}
