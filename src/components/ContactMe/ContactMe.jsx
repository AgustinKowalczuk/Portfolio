import gmail from "../../Icons/gmail.png";
import github from "../../Icons/github.png";
import linkedin from "../../Icons/linkedin.png";
import './ContactMe.style.css';

export default function ContactMe() {
  return (
    <section className="ContactMe">
      <h1>Formas de contactar</h1>
      <ul className="Contact-options-container">
        <li>
          <img className="img-logo" src={gmail} alt="Aqui va una red Social" />
        </li>
        <li>
          <img className="img-logo" src={github} alt="Aqui va una red Social" />
        </li>
        <li>
          <img className="img-logo" src={linkedin} alt="Aqui va una red Social"/>
        </li>
      </ul>
    </section>
  );
}
