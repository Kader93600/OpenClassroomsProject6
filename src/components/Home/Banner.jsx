import banner from '../../assets/Banner_home.png'
import '../../styles/Banner.sass'

function Banner(){
   
    const title ='Chez vous, partout et ailleurs'

    return(
        <div className='conteneur_banner'>
            <img src={banner} alt="Une bannière d'un paysage bord de côte avec une forêt" className='img_banner'/>
            <h1 className='title'>{title}</h1>
    </div>
    )
}


export default Banner