import PropTypes from "prop-types";
import HeaderContainer from "../../container/header-container/header-container";
import styles from "./main-header.module.css";

export default function MainHeader({ title = "Assign Title", paragraph = "" }) {
  return (
    <HeaderContainer
      containerClass={styles.background}
      contentClass={styles.contentOrder}
    >
      <section className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{paragraph}</p>
      </section>
    </HeaderContainer>
  );
}

MainHeader.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};
