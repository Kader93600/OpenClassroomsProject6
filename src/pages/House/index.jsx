import Slideshow from"../../components/House/Slideshow.jsx"
import Information from "../../components/House/information.jsx"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function Logement(){

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



    return (
        <div>
            <Slideshow house={house}/>
            <Information house={house}/>
        </div>
    )

}

export default Logement