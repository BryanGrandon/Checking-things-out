import "./hero-styles.css";

export default function Hero({ title, paragraph, paragraph2, svg }) {
  return (
    <section className="hero">
      <section className="hero__main">
        <section className="hero__section">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__paragraph">{paragraph}</p>
          {paragraph2 === undefined ? null : (
            <p className="hero__paragraph">{paragraph2}</p>
          )}
        </section>

        <img className="hero__svg" src={svg} alt={"SVG-" + title} />
      </section>
    </section>
  );
}
