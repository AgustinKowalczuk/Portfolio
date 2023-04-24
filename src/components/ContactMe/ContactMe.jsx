import gmail from "../../Icons/gmail.png";
import github from "../../Icons/github.png";
import linkedin from "../../Icons/linkedin.png";
import "./ContactMe.style.css";

export default function ContactMe() {
  return (
    <section className="ContactMe">
      <h1>Formas de contactar</h1>
      <ul className="Contact-options-container">
        <li>
          <button
            className="Button-Mailto"
            onClick={(e) => {
              window.location.href =
                "mailto:Kowalczukagustin@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
            }}
          >
            <img
              className="img-logo"
              src={gmail}
              alt="Aqui va una red Social"
            />
          </button>
        </li>
        <li>
          <a href="https://github.com/AgustinKowalczuk" target="_blank">
            <img
              className="img-logo"
              src={github}
              alt="Aqui va una red Social"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/agustinkowalczuk/"
            target="_blank"
          >
            <img
              className="img-logo"
              src={linkedin}
              alt="Aqui va una red Social"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
