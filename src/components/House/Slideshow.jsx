import "../../styles/Slideshow.sass"

import angle_left from "../../assets/angle_left.svg"
import angle_right from "../../assets/angle_right.svg"


import { useState } from "react";

function Slideshow({house}) {
   
    const [indexPictures, setIndexPictures] = useState(0);

    const { pictures } = house; /*Image*/
    const picturesLength = pictures.length; /* Pour avoir le nb d'image total  */
    const currentPicture = pictures[indexPictures];/*Permet d'avoir le num image actuelle  */

    const prevClick = () => {
        setIndexPictures(indexPictures === 0 ? picturesLength - 1 : indexPictures - 1); /* Si 1er pic alors passe à la derniere pic */
    };

    const clickNext = () => {
        setIndexPictures(indexPictures === picturesLength - 1 ? 0 : indexPictures + 1);/* Si derniere pic alors passe à la 1er pic */
    };

    
    return (
        <div className="margin_page">
            {picturesLength > 1 && ( /* Condition si il y a + 1pic  alors les btn apparait*/
                <> 
                    <button onClick={prevClick} className="btn_carrousel_prev"> 
                        <img src={angle_left} alt="Précédent" /> 
                    </button>
                    
                    <button onClick={clickNext} className="btn_carrousel_next">
                        <img src={angle_right} alt="Suivant" />
                    </button>
                </>
            )}
            
            <img src={currentPicture} alt="Carrousel d'une illustration" className="img_carrousel"/>
            
            <p className="index_image">{indexPictures + 1}/{picturesLength}</p>
        </div>
    );
    
}


export default Slideshow;
