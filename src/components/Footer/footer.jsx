import Logo from '../../assets/LOGO_Footer.png'
import '../../styles/Footer.sass'


function Footer () {
    return (
    <div className='conteneur_footer'>
        <div>
            <img src={Logo} alt="Logo Kasa"/>
        </div>
        <div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer