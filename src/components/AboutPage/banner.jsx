import banner_1 from '../../assets/Banner_aboutpage.png'
import '../../styles/Font.sass'
import '../../styles/Banner.sass'

function Banner() {

    return(
        <div className='conteneur_banner'>
            <img src= {banner_1} alt="Illustration d'un paysage montagneux" className='img_banner'/>
        </div>
    )
}

export default Banner