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
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non, repellendus blanditiis amet reiciendis voluptatibus officia recusandae ipsam repellat provident."
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
