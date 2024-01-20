import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from '../../components/AboutPage/collapse.jsx';
import '../../styles/information.sass';
import '../../styles/collapse_information.sass';
import etoileRouge from '../../assets/Etoile_rouge.png';
import etoileGrise from '../../assets/Etoile_grise.png';

function Information() {
    const [houses, setHouses] = useState([]);
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Houselist.json')
            .then(response => response.json())
            .then(data => setHouses(data))
    }, []);

    const house = houses.find(house => house.id === id);

    if (!house) {
        navigate("/error");
        return ("/error");
    }

    const stars = [...Array(5)].map((_, index) => (
        <img key={index} src={index < house.rating ? etoileRouge : etoileGrise} alt={index < house.rating ? 'Étoile rouge' : 'Étoile grise'} />
    ));

    return (

        <div className="conteneur_ensemble">

                <div className="conteneur_1">

                    <div className="title_emplacement">
                        <h1 className="title">{house.title}</h1>
                        <p className="localisation">{house.location}</p>
                    </div>

                    <div className="tags">
                        {house.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
                    </div>
                    
                </div>

                <div className="conteneur_2">
                    <div className="hote_et_nom">
                        <img className="photo_hote" src={house.host.picture} alt='Profil de l’hôte' />
                        <p className="nom_hote">{house.host.name}</p>
                    </div>
                    <div className="stars">{stars}</div>
                </div>

        
            <div className="container_collapse_house">
            <Collapse collapseType="Description" collapseValue={house.description} className="conteneur_titre_texte"/>
            <Collapse collapseType="Équipements" collapseValue={<ul>{house.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} className="conteneur_titre_texte"/>
            </div>
            
        </div>
    );
}

export default Information;
