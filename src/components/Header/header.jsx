import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/LOGO_Header.png';
import '../../styles/Header.sass';

function Header() {
  const location = useLocation();

  /*Déterminer le soulignement basée sur le chemin*/

  const getUnderlineWidth = (path) => {
      return location.pathname === path ? '100%' : '0';
  };

  return (
      <div className='conteneur_header'>
          <div><img src={Logo} alt="Logo Kasa" /></div>
          <nav>
              <Link to="/">
                  Accueil
                  <span className="underline" style={{ width: getUnderlineWidth('/') }}></span>
              </Link>
              <Link to="/AboutPage">
                  A Propos
                  <span className="underline" style={{ width: getUnderlineWidth('/AboutPage') }}></span>
              </Link>
          </nav>
      </div>
  );
}

export default Header;
