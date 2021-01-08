import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <Link to="#"> Dashboard</Link>
        <Link to="#"> Agendamento</Link>
        <Link to="#"> Atendimento</Link>
        <Link to="#"> Formulários</Link>
        <Link to="#"> Crédito</Link>
      </div>
      <div className="footer-sidebar">
        <Link to="#"> Configurações</Link>
        <Link to="#"> Sair</Link>
      </div>
   </div>
  )
}

export default Sidebar;