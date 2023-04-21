import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Proyects from "./components/Proyect/Proyects.jsx";
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
      {/* <h1 style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>ME FUI AL BAÑO</h1> */}
    </div>
  );
}

export default App;
