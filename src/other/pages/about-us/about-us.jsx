import HeroImage from "../../components/hero-image/hero-image";
import Navbar from "../../components/navbar/navbar";
import aboutUsSVG from "../../assets/about-us.svg";
import AboutUsCard from "../../components/cards/about-us-card/about-us-card";
import "./about-us-styles.css";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <HeroImage svg={aboutUsSVG} />

      <article className="about-us">
        <AboutUsCard
          title="Oru Vision"
          paragraphs="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, et natus eos animi repudiandae rerum minima eius quam
            inventore reprehenderit ullam porro dignissimos recusandae aliquid
            iste quos tempora facere unde?"
        />

        <AboutUsCard
          title="Oru Approach"
          paragraphs=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et
          placeat expedita similique maiores nemo a, nisi magnam aut culpa.
          Commodi, cum alias at voluptas necessitatibus perspiciatis
          consequatur vel doloremque suscipit facilis incidunt corrupti
          inventore corporis illo vitae explicabo nulla sapiente soluta?"
        />

        <AboutUsCard
          title="Oru Process"
          paragraphs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quod eum cumque corporis sit assumenda commodi perspiciatis at
          eveniet eligendi provident ut, dolore dolores aliquid facere! Enim
          dignissimos nesciunt porro, consectetur laudantium nulla voluptatum
          modi nisi, rerum reiciendis, voluptatem quidem. Porro exercitationem
          voluptate sapiente, dolorem tenetur voluptatum, ullam optio natus
          adipisci sed totam molestias!"
        />
      </article>
    </>
  );
}
