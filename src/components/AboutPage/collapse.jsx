import { useState } from "react";


import angle_up from "../../assets/angle_up.svg"
import "../../styles/Font.sass"



function Collapse({ collapseValue, collapseType }) {
    
  const [open, setOpen] = useState(false); /* Gérer l'état d'ouverture */
  
    const toggleCollapse = () => {
      setOpen(!open);  /*Inverse l'état de open à chaque clique */
    };
  
    return (
      <div className="all_conteneur">
      
      <div className="conteneur_titre">
        <p>{collapseType}</p>
        <button onClick={toggleCollapse}>
          <img className={open ? 'rotate180' : ''} src={angle_up} alt="icone flèche d'angle" />
        </button>
      </div>
      
      <div className={`conteneur_texte ${open ? 'open' : 'closed'}`}>
        <div className="txt_collapse">{collapseValue}</div>
      </div>
    </div>
    );
  }
  
  export default Collapse