import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../../components/House/Slideshow.jsx"
import Information from "../../components/House/information.jsx";


function Logement() {
    const [house, setHouse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate(); /* Pour rediriger l'user à la page d'erreur si 1 maison n'est pas trouvée*/


    /* uE-> charger les données de la maison */
    
    useEffect(() => {
        fetch('/Houselist.json')
            .then(response => response.json())
            .then(data => {
                
                const foundHouse = data.find(house => house.id === id); /*Recherche la maison avec ID */
                
                if (foundHouse) {
                    setHouse(foundHouse);
                } else {
                    navigate("/error");
                }
            })
    }, [id, navigate]);


    /*Permet d'éviter les erreurs */
    if (!house) {
        return 
    }
    
 /* Composant recoit l'objet house comme prop */
    return (
        <div>
            <Slideshow house={house}/>
            <Information house={house} />
        </div>
    );
}

export default Logement

