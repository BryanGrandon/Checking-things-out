import "./info-list-styles.css";
import { CiLocationOn, CiPhone, CiClock2 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

export default function InfoList() {
  return (
    <ul className="info-list">
      <li className="info-list__element">
        <MdAlternateEmail />
        <p className="info-list__text">info@jsonplaceholder.com</p>
      </li>
      <li className="info-list__element">
        <CiPhone />
        <p className="info-list__text">+43 65 21 479</p>
      </li>
      <li className="info-list__element">
        <CiLocationOn />
        <p className="info-list__text">14 Greenwood St.</p>
      </li>
      <li className="info-list__element">
        <CiClock2 />
        <p className="info-list__text">09:00 - 18:00</p>
      </li>
    </ul>
  );
}
