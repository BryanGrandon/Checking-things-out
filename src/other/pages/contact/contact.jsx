import ContactForm from "../../components/form/contact-form/contact-form";
import Navbar from "../../components/navbar/navbar";
import contactUsSVG from "../../assets/contact-us.svg";

import "./contact-styles.css";
import Hero from "../../components/hero/hero";
import InfoList from "../../components/lists/info-list/info-list";
import MainHeader from "../../componentss/header/main-header/main-header";

export default function Contact() {
  return (
    <>
      <Navbar />

      <MainHeader
        title="Contact Us"
        paragraph="Feel free to contact us any time. We will get back to you as soon as we can!"
      />

      <article className="contact-container">
        <article className="contact">
          <section className="contact-form-container">
            <ContactForm />
          </section>

          <section className="info-list-container">
            <h3 className="info-list-container__title">Contact Information</h3>
            <InfoList />
          </section>
        </article>
      </article>
    </>
  );
}
