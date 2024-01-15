import { useState } from "react";

import angle_down from "../../assets/angle_down.svg"
import angle_up from "../../assets/angle_up.svg"
import "../../styles/Font.sass"



function Collapse({collapseValue,collapseType}){
    const [open, setOpen] = useState(false)

        return open ? ( 
            <div className="all_conteneur">
                <div className="conteneur_titre">
                    <p>{collapseType}</p>
                    <button onClick={()=> setOpen(false)}> <img src={angle_up} alt="icone flèche d'angle visant le haut" /></button>
                </div>
                <div className="conteneur_texte">
                    <div>{collapseValue}</div>
                </div>
            </div>
        ) : (
            <div className="conteneur_titre">
                    <p>{collapseType}</p>
                    <button onClick={()=> setOpen(true)}> <img src={angle_down} alt="icone flèche d'angle visant le bas" /></button>
                </div>
        )
}


export default Collapse