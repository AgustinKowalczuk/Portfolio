import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Proyects from "./components/Proyects/Proyects";
import Experience from "./components/Experience/Experience";

function App() {
  const [option, setOption] = useState("Sobre Mi");
  const [darkMode, setDarkMode] = useState(false);

  const mode = darkMode ? "dark" : "light"


  return (
    <div className={`App ${mode}`}>
      <NavBar
        darkMode={darkMode}
        mode={mode}
        option={option}
        setOption={setOption}
        setDarkMode={setDarkMode}
      />
      <AboutMe darkMode={mode}/>
      <Proyects/>
      <Experience/>
    </div>
  );
}

export default App;
