import PropType from "prop-types";
import styles from "./header-container.module.css";

export default function HeaderContainer({
  containerClass = "",
  contentClass = "",
  children,
}) {
  return (
    <article className={containerClass}>
      <section className={styles.opacity}>
        <section className={`${styles.content} ${contentClass}`}>
          {children}
        </section>
      </section>
    </article>
  );
}

HeaderContainer.propType = {
  containerClass: PropType.string,
  contentClass: PropType.string,
};
