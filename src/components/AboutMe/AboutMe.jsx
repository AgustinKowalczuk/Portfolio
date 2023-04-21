import gmail from "../../Icons/gmail.png";
import github from "../../Icons/github.png";
import linkedin from "../../Icons/linkedin.png";
import photo from "../../imgs/Me-photo.jpeg";
import "./AboutMe.style.css";

export default function AboutMe({ darkMode }) {
  const mode = darkMode ? "dark" : "light";

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
          <div className={`logo linkedin ${mode}`}>
            <img className="img-logo" src={linkedin} />
          </div>
          <div className={`logo git ${mode}`}>
            <img className="img-logo" src={github} />
          </div>
          <div className={`logo gmail ${mode}`}>
            <img className="img-logo" src={gmail} />
          </div>
        </div>
      </div>
      <div className="photo-me">
        <img className="photo" src={photo}></img>
      </div>
    </section>
  );
}
