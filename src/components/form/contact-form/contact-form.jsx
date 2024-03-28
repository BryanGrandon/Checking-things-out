import "./contact-form-styles.css";
import {
  MdOutlineEmail,
  MdOutlineMessage,
  MdOutlinePermIdentity,
} from "react-icons/md";

export default function ContactForm() {
  const eventSubmit = (e) => {
    e.preventDefault();
    const infoUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(infoUser);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
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
          required
        />
      </label>
      <label className="contact-form__label">
        <MdOutlineEmail />
        <input
          className="contact-form__input"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </label>
      <label className="contact-form__label">
        <MdOutlineMessage />
        <input
          className="contact-form__input"
          name="message"
          type="text"
          placeholder="Message"
          required
        />
      </label>
      <button className="contact-form__button">SEND</button>
    </form>
  );
}
