import { useEffect, useState } from "react";
import '../../styles/Card.sass'

function Card() {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch('/Houselist.json')
            .then(response => response.json())
            .then(data => {
                setHouses(data) // MAJ des maisons
            })
    }, []) 

    return (
        <div className="all_card">
            {houses.map(home => ( // Utilisez 'home' pour accéder aux propriétés de chaque maison.
                <div key={home.id} className="card">
                    <a href={'/House/' + home.id} className='link_card'>
                        <img className="img_card" src={home.cover} alt="Illustration d'un logement" />
                        <p className="txt_card">{home.title}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Card;