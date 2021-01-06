import React from 'react';

import './styles.css';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <a href="#"> Dashboard</a>
        <a href="#"> Agendamento</a>
        <a href="#"> Atendimento</a>
        <a href="#"> Formulários</a>
        <a href="#"> Crédito</a>
      </div>
      <div className="footer-sidebar">
        <a href="#"> Configurações</a>
        <a href="#"> Sair</a>
      </div>
   </div>
  )
}

export default Sidebar;