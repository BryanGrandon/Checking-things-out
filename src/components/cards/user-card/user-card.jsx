import React from "react";
import "./user-card-styles.css";
import { FaPhone, FaUser } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

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
              <FaUser />
            </span>{" "}
            {name}
          </p>
          <p className="card__email">
            <span className="icon">
              <MdEmail />
            </span>
            {email}
          </p>
          <p className="card__phone">
            <span className="icon">
              <FaPhone />
            </span>
            {phone}
          </p>
          <p className="card__website">
            <span className="icon">
              <HiOutlineCursorClick />
            </span>
            <a href={website}>{website}</a>
          </p>
        </section>
      </article>
    </>
  );
}
