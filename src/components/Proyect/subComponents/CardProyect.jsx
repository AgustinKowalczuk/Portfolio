import './CC.styles.css'

export default function CardProyect({data}){
    return(
        <div key={data.id} className="cards">
            <h2>{data.name}</h2>
            <p>{data.img}</p>
            <p>{data.desc}</p>
            <ul>
                <li key={data.links.demo}>{data.links.demo}</li>
                <li key={data.links.git}>{data.links.git}</li>
            </ul>
        </div>
    )
}