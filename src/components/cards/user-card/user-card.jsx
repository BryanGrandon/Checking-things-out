import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./user-card-styles.css";

export function UserCard({ name, email, phone, website, company }) {
  return (
    <>
      <article className="card">
        <section className="card__header">
          <p className="card__company">{company}</p>
        </section>
        <section className="card__info">
          <p className="card__name">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            {name}
          </p>
          <p className="card__email">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {email}
          </p>
          <p className="card__phone">
            <span className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            {phone}
          </p>
          <p className="card__website">
            <span className="icon">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <a href={website}>{website}</a>
          </p>
        </section>
      </article>
    </>
  );
}
