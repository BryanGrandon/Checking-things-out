import React from "react";
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
            <span className="icon"></span> {name}
          </p>
          <p className="card__email">
            <span className="icon"></span>
            {email}
          </p>
          <p className="card__phone">
            <span className="icon"></span>
            {phone}
          </p>
          <p className="card__website">
            <span className="icon"></span>
            <a href={website}>{website}</a>
          </p>
        </section>
      </article>
    </>
  );
}
