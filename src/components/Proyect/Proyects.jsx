import Carousel from "./subComponents/Carousel.jsx";
import './Proyects.style.css'

export default function Proyects({darkMode}) {
    return(
        <section className={`Proyects-component ${darkMode}`} style={{height:"400px"}}>
            <h1>Proyectos Carrusel</h1>
            <Carousel/>
        </section>
    )
}