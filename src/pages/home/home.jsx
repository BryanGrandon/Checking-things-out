import React from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import homeSVG from "../../assets/home.svg";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero
        title="JSON Project"
        paragraph="JSON Project offers you a space to create a blog to your liking. Meet people who have the same tastes as you."
        svg={homeSVG}
      />

      <article className="project-container">
        <article className="content">
          <h2 className="content__title"></h2>
        </article>
      </article>
    </>
  );
}
