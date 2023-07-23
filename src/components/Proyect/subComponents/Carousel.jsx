import { useEffect, useState } from "react";
import dbFake from "../proyects.fakeDB.json";
import CardProyect from "./CardProyect";
import './CC.styles.css'
import arrowIcon from '../../../Icons/buttonArrow.png'

export default function Carousel({darkMode}) {
  const [current, setCurrent] = useState(0)
  const [progValue, setProgValue] = useState(10)
  const cards = dbFake.proyects.map((pro) => { return <CardProyect className={`cards ${current}`} key={pro.id} data={pro} />; })

  const setCurrentToPast = () => {
    if (current == 0) {
      return setCurrent(cards.length - 1)
    }
    return setCurrent(current - 1)
  }
  const setCurrentToNext = () => {
    if (current == cards.length - 1) {
      return setCurrent(0)
    }
    return setCurrent(current + 1)
  }

  // const progress = () => {
  //   setCurrentToNext()
  // }

  // setTimeout(() => {
  //   // console.log(progValue)
  //   if (progValue >= 100) return setProgValue(10)
  //   return setProgValue(progValue + 10)
  // }, 1000)

  // setTimeout(progress, 5000)

  return (
    <div className="Carousel-component">
      <button className={`button-carousel bPast ${darkMode}`}  type="image"  onClick={setCurrentToPast}>

        <img src={arrowIcon}></img>
      </button>
      <section className="ProyectCard">
        {cards[current]}
      </section>
      <button className={`button-carousel bNext ${darkMode}`}  type="image"  onClick={setCurrentToNext}>

        <img src={arrowIcon}></img>
      </button>
      {/* <button className={`button-carousel bNext ${darkMode}`}  type="image" src={arrowIcon} onClick={setCurrentToNext}/> */}
      {/* <progress className="progress" max={9} value={progValue}></progress> */}
      {/* <div className="progress">
        <div className="progress-bar" style={{width:progValue/2+"%"}}>
          <span className="progress-bar-text"></span>
        </div>
      </div> */}
    </div>
  );
}
