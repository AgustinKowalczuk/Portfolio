import { useState } from "react";
import "./NavBar.style.css";

export default function NavBar({
  darkMode,
  setDarkMode,
  option,
  setOption,
  mode,
}) {
  const pressButton = (e) => {
    setOption(e.target.textContent);
  };

  const changeMode = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`nav ${mode}`}>
      <div className="sub-container">
        <span>Logo</span>
        <ul className={`nav-options ${mode}`}>
          <li className={`option ${option == "Sobre Mi" ? "active" : ""}`}>
            <button
              className={`button-option-menu  ${mode}`}
              onClick={pressButton}
            >
              Sobre Mi
            </button>
          </li>
          <li className={`option ${option == "Experiencia" ? "active" : ""}`}>
            <button
              className={`button-option-menu  ${mode}`}
              onClick={pressButton}
            >
              Experiencia
            </button>
          </li>
          <li className={`option ${option == "Proyectos" ? "active" : ""}`}>
            <button
              className={`button-option-menu  ${mode}`}
              onClick={pressButton}
            >
              Proyectos
            </button>
          </li>
          <li className={`option ${option == "Educacion" ? "active" : ""}`}>
            <button
              className={`button-option-menu  ${mode}`}
              onClick={pressButton}
            >
              Educacion
            </button>
          </li>
          <li className={`option ${option == "Contacto" ? "active" : ""}`}>
            <button
              className={`button-option-menu  ${mode}`}
              onClick={pressButton}
            >
              Contacto
            </button>
          </li>
        </ul>
        <label className="switch ">
          <input onClick={changeMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}
