import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../../components/House/Slideshow.jsx"
import Information from "../../components/House/information.jsx";


function Logement() {
    const [house, setHouse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Houselist.json')
            .then(response => response.json())
            .then(data => {
                
                const foundHouse = data.find(house => house.id === id);
                
                if (foundHouse) {
                    setHouse(foundHouse);
                } else {
                    navigate("/error");
                }
            })
    }, [id, navigate]);

    if (!house) {
        return
    }

    return (
        <div>
            <Slideshow house={house}/>
            <Information house={house} />
        </div>
    );
}

export default Logement

