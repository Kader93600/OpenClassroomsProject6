import { Link } from 'react-router-dom'
import Logo from '../../assets/LOGO_Header.png'
import '../../styles/Header.sass'


function Header () {
    return (
    <div className='conteneur_header'>
            <div>
            <Link to ="/"><img src={Logo} alt="Logo Kasa"/></Link>
            </div>
        <nav>
            <Link to ="/"> Accueil </Link>
            <Link to ="/AboutPage">A Propos </Link>
        </nav>
    </div>
    )
}


export default Header