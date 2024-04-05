import React from "react";
import styles from "./user-card.module.css";

export default function UserCard({ name, email, theFunction, btnValue }) {
  return (
    <article className={styles.card}>
      <section className={styles.info}>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </section>
      <button className={styles.button} onClick={theFunction} value={btnValue}>
        More info
      </button>
    </article>
  );
}
