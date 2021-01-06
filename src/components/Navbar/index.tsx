import React, { useRef } from 'react';

import logotipo from '../../assets/images/icons/logo.png';
import imgPerfil from '../../assets/images/perfil.png';

import './styles.css';


function Navbar() {

  return (
    <div className="navbar ">

      <img src={logotipo} alt="logo-talkis"/>

      <div className="left-content">
        <label htmlFor="perfil">Igor Sales</label>
        <img src={imgPerfil} alt="img-perfil"/>
      </div>

    </div>
  )
}

export default Navbar;