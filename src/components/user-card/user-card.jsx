import React from "react";
import PropTypes from "prop-types";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import styles from "./user-card.module.css";

export default function UserCard({ name, email, buttonFunction, value }) {
  return (
    <section className={styles.card}>
      <section className={styles.card__info}>
        <p className={styles.card__name}>
          <FaUser />
          {name}
        </p>
        <p className={styles.card__email}>
          <MdEmail />
          {email}
        </p>
      </section>
      <button className={styles.button} onClick={buttonFunction} value={value}>
        More info
      </button>
    </section>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  buttonFunction: PropTypes.func,
  value: PropTypes.number,
};
