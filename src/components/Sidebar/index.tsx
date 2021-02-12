import React from 'react';
import { NavLink } from 'react-router-dom';

import { logout } from '../../services/auth';

import { FaCog, FaColumns, FaRegCalendarAlt, FaRegEnvelope, FaRegSmile, FaSignOutAlt } from 'react-icons/fa';

import './styles.css';

function Sidebar() {

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <NavLink to="/dashboard" activeClassName="selected" ><FaColumns size={15}/>Dashboard</NavLink>
        <NavLink to="/link-account" activeClassName="selected" ><FaRegCalendarAlt size={15}/> Agendamento</NavLink>
        <NavLink to="/attendance" activeClassName="selected"><FaRegSmile size={15} /> Atendimento</NavLink>
        <NavLink to="/capture-forms" activeClassName="selected"><FaRegEnvelope size={15} /> Formulários</NavLink>
        <NavLink to="/credit-package" activeClassName="selected"><FaRegEnvelope size={15} /> Crédito</NavLink>
      </div>
      <div className="footer-sidebar">
        <NavLink to="/settings" activeClassName="selected" ><FaCog size={15} /> Configurações</NavLink>
        <NavLink to="/login" ><FaSignOutAlt size={15} onClick={handleLogout}/> Sair</NavLink>
      </div>
   </div>
  )
}

export default Sidebar;