import React from "react";
import Navbar from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import homeSVG from "../../assets/home.svg";
import "./home.css";
import HomeTodos from "../../containers/home/home-todos/home-todos";
import MainHeader from "../../componentss/header/main-header/main-header";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainHeader
        title="JSON Project "
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non, repellendus blanditiis amet reiciendis voluptatibus officia recusandae ipsam repellat provident."
      />

      <Hero
        title="JSON Project"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non, repellendus blanditiis amet reiciendis voluptatibus officia recusandae ipsam repellat provident."
        svg={homeSVG}
      />

      <article>
        <article className="content">
          <h2 className="content__title">To-Dos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quae!
            Sunt enim laborum accusamus, ut debitis dicta id dignissimos
            eveniet.
          </p>
          <HomeTodos />
        </article>
      </article>
    </>
  );
}
