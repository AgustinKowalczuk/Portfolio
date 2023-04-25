import gmail from "../../Icons/gmail.png";
import github from "../../Icons/github.png";
import linkedin from "../../Icons/linkedin.png";
import photo from "../../imgs/Me-photo3.jpeg";
import "./AboutMe.style.css";

export default function AboutMe({ darkMode }) {
  return (
    <section className={`AboutMe-component ${darkMode}`}>
      <div className="AboutMe-SocialMedia">
        <div>
          <h1 className="Me">Agustin Kowalczuk</h1>
          <p className="aboutMe-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui totam
            numquam voluptatibus voluptate non voluptatum eum, enim facere dolor
            deleniti quos pariatur praesentium sit consequuntur tempore, dolore
            rerum architecto fuga. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="container-logo">
          <a
            href="https://www.linkedin.com/in/agustinkowalczuk/"
            target="_blank"
          >
            <div className={`logo linkedin ${darkMode}`}>
              <img className="img-logo" src={linkedin} />
            </div>
          </a>
          <a href="https://github.com/AgustinKowalczuk" target="_blank">
            <div className={`logo git ${darkMode}`}>
              <img className="img-logo" src={github} />
            </div>
          </a>
          <button
            className="Button-Mailto"
            onClick={(e) => {
              window.location.href =
                "mailto:Kowalczukagustin@gmail.com?Subject=Me%20gustaria%20contactar%20contigo.";
            }}
          >
            <div className={`logo gmail ${darkMode}`}>
              <img className="img-logo" src={gmail} />
            </div>
          </button>
        </div>
      </div>
      <img className="photo" src={photo}></img>
    </section>
  );
}
