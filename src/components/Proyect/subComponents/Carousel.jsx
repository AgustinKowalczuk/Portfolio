import dbFake from "../proyects.fakeDB.json";
import CardProyect from "./CardProyect";
import './CC.styles.css'

export default function Carousel() {
  return (
    <div className="Carousel-component">
      {dbFake.proyects.map((pro) => {
        {/* console.log(pro); */}
        return <CardProyect className={`proyect-card`} key={pro.id} data={pro}/>;
      })}
    </div>
  );
}
