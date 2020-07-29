import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css'
import Button from '../Button'
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLinkSemStyledComponents';


// Exportando funcao que retorna o menu superior do site
export default function Menu(){
    return(
        <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="AluraFlix logo" />
        </Link>
  
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo vídeo
        </Button>
      </nav>
    );
}