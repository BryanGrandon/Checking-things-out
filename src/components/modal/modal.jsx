import styles from "./modal.module.css";
import { MdOutlineClose } from "react-icons/md";

export default function Modal({ theModalIsOpen, info, theFunction }) {
  if (!theModalIsOpen) return null;
  console.log(info);
  return (
    <article className={styles.modal}>
      <article className={styles.modalContent}>
        <section className={styles.info}>
          <p>
            <span className={styles.names}>Name: </span> {info.name}
          </p>
          <p>
            <span className={styles.names}>User Name: </span>
            {info.username}
          </p>
          <p>
            <span className={styles.names}>Email: </span>
            {info.email}
          </p>
          <p>
            <span className={styles.names}>Phone: </span>
            {info.phone}
          </p>
          <p>
            <span className={styles.names}>Website: </span>
            {info.website}
          </p>
          <p>
            <span className={styles.names}>Company: </span>
            {info.company.name}
          </p>
          <p>
            <span className={styles.names}>Address: </span>

            <ul className={styles.addressList}>
              <li>
                - <span className={styles.names}>Street: </span>
                {info.address.street}
              </li>
              <li>
                - <span className={styles.names}>Suite: </span>
                {info.address.suite}
              </li>
              <li>
                - <span className={styles.names}>Zip Code: </span>
                {info.address.zipcode}
              </li>
            </ul>
          </p>
        </section>
        <button onClick={theFunction} className={styles.button}>
          Close
        </button>
      </article>
    </article>
  );
}
