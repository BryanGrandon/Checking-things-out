import "./contact-form-styles.css";
import {
  MdOutlineEmail,
  MdOutlineMessage,
  MdOutlinePermIdentity,
} from "react-icons/md";

export default function ContactForm() {
  const eventSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  return (
    <form className="contact-form" onSubmit={eventSubmit}>
      <label className="contact-form__label">
        <MdOutlinePermIdentity />
        <input
          className="contact-form__input"
          name="name"
          type="text"
          placeholder="Name"
        />
      </label>
      <label className="contact-form__label">
        <MdOutlineEmail />
        <input
          className="contact-form__input"
          name="email"
          type="email"
          placeholder="Email"
        />
      </label>
      <label className="contact-form__label">
        <MdOutlineMessage />
        <input
          className="contact-form__input"
          name="message"
          type="text"
          placeholder="Message"
        />
      </label>
      <button className="contact-form__button">SEND</button>
    </form>
  );
}
