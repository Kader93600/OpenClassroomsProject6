import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/LOGO_Header.png';
import '../../styles/Header.sass';

function Header() {
    const location = useLocation(); /*Savoir quelle route est active */
  
    const [underlineWidths, setUnderlineWidths] = useState(() => ({  
      accueil: location.pathname === '/' ? '100%' : '0', /* La clé 'accueil' check si le chemin actuel = '/' */
      aPropos: location.pathname === '/AboutPage' ? '100%' : '0',
    }));
  


    
    useEffect(() => { /*Réagit aux changement de l'URL utilisé quand la loc change */
      setUnderlineWidths({
        accueil: location.pathname === '/' ? '100%' : '0', /*Si chemin est accueil = soulignement à 100% sinon rien */
        aPropos: location.pathname === '/AboutPage' ? '100%' : '0',
      });
    }, [location.pathname]);/*Dependance assure que effet s'exécute à chaque changement route*/
  


    // Gère les événements de la souris pour les liens
    const handleMouse = (link, entering) => {
    
      /*Vérifie si  lien sur lequel la souris se trouve (ou quitte) correspond à la page actuelle. */
      const isCurrentPage = 
      (link === 'accueil' && location.pathname === '/') || 
      (link === 'aPropos' && location.pathname === '/AboutPage');
    
      /*MAJ le soulignement*/
    setUnderlineWidths({
        ...underlineWidths,
        [link]: entering || isCurrentPage ? '100%' : '0',
      });
    };
  



    return (
      <div className='conteneur_header'>
        <div><img src={Logo} alt="Logo Kasa" /></div>
        <nav>
          <Link to="/" onMouseEnter={() => handleMouse('accueil', true)} onMouseLeave={() => handleMouse('accueil', false)}>
            Accueil
            <span className="underline" style={{ width: underlineWidths.accueil }}></span>
          </Link>
          <Link to="/AboutPage" onMouseEnter={() => handleMouse('aPropos', true)} onMouseLeave={() => handleMouse('aPropos', false)}>
            A Propos
            <span className="underline" style={{ width: underlineWidths.aPropos }}></span>
          </Link>
        </nav>
      </div>
    );
  }

export default Header;