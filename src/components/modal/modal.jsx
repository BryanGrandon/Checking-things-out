import styles from "./modal.module.css";

export default function Modal({ theModalIsOpen, info }) {
  if (!theModalIsOpen) return null;
  console.log(info);
  return (
    <article className={styles.modal}>
      <article>ss</article>
    </article>
  );
}
