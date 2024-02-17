import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import de Link
import '../../styles/Card.sass'

function Card() {

    const [houses, setHouses] = useState([])


    /* useEffect pour charger les données juste après que le composant apparait */
    useEffect(() => {
        fetch('/Houselist.json')
            .then(response => response.json())
            .then(data => {
                setHouses(data) /* MAJ des maisons */
            })
    }, []) 

    return (
      <div className="all_card">
      {houses.map(home => (
          <div key={home.id} className="card">
              <Link to={'/House/' + home.id} className='link_card'>
                  <div className="img_container">
                      <div className="img_gradient"></div>
                      <img className="img_card" src={home.cover} alt="Illustration d'un logement" />
                  </div>
                  <p className="txt_card">{home.title}</p>
              </Link>
          </div>
      ))}
  </div>
      );
    }
    
    export default Card;