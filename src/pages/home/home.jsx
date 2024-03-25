import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="header">
        <h1 className="title">Project React</h1>
        <p className="header__text">
          Un lugar agradable para conocer personas mediante blogs o albunes de
          fotografia
        </p>
      </header>

      <article className="project-container">
        <article className="content">
          <h2 className="content__title"></h2>
          <p></p>
        </article>
      </article>
    </>
  );
}
