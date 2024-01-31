import "../../styles/Slideshow.sass"

import { useState } from "react";

function Slideshow({house}) {
   
    const [indexPictures, setIndexPictures] = useState(0);

    const { pictures } = house;
    const picturesLength = pictures.length;
    const currentPicture = pictures[indexPictures];

    const prevClick = () => {
        setIndexPictures(indexPictures === 0 ? picturesLength - 1 : indexPictures - 1);
    };

    const clickNext = () => {
        setIndexPictures(indexPictures === picturesLength - 1 ? 0 : indexPictures + 1);
    };

    
    return (
        <div className="margin_page">
            
            <button onClick={prevClick} className="btn_carrousel_prev">{"<"}</button>
            <img src={currentPicture} alt="Carrousel d'une illustration" className="img_carrousel"/>
            
            <button onClick={clickNext} className="btn_carrousel_next">{">"}</button>
            <p className="index_image">{indexPictures + 1}/{picturesLength}</p>
        </div>
    );
    
}

export default Slideshow;
