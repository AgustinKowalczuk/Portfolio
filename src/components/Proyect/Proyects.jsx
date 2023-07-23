import Carousel from "./subComponents/Carousel.jsx";
import './Proyects.style.css'

export default function Proyects({darkMode}) {
    return(
        <section className={`Proyects-component ${darkMode}`} >
            <h1>Proyectos Carrusel</h1>
            <Carousel darkMode={darkMode}/>
        </section>
    )
}