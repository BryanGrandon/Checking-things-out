import styles from "./modal.module.css";
import PropTypes from "prop-types";

export default function Modal({ theModalIsOpen, buttonFunction, children }) {
  if (!theModalIsOpen) return null;

  return (
    <article className={styles.modal}>
      <article className={styles.modalContent}>
        {children}
        <button onClick={buttonFunction} className={styles.button}>
          Close
        </button>
      </article>
    </article>
  );
}
Modal.propTypes = {
  theModalIsOpen: PropTypes.bool,
  buttonFunction: PropTypes.func,
};
