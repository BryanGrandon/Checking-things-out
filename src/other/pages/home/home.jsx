import React from "react";
import Navbar from "../../components/navbar/navbar";
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
    </>
  );
}
