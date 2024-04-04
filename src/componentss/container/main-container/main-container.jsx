import PropType from "prop-types";
import styles from "./main-container.module.css";

export default function MainContainer({
  containerClass = "",
  contentClass = "",
  children,
}) {
  return (
    <article className={containerClass}>
      <section className={`${styles.content} ${contentClass}`}>
        {children}
      </section>
    </article>
  );
}

MainContainer.propType = {
  containerClass: PropType.string,
  contentClass: PropType.string,
};
