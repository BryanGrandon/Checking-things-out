import "./about-us-card-styles.css";

export default function AboutUsCard({ title, paragraphs }) {
  return (
    <section className="about">
      <h2 className="about__title">{title}</h2>
      <p className="about__paragraph">{paragraphs}</p>
    </section>
  );
}
