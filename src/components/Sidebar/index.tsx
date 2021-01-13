import React from 'react';
import { Link } from 'react-router-dom';

import { FaCog, FaColumns, FaRegCalendarAlt, FaRegEnvelope, FaRegSmile, FaSignOutAlt } from 'react-icons/fa';
import DashboardIcon from '../../assets/images/icons/dashboard.svg'

import './styles.css';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <Link to="/dashboard"><FaColumns size={15}/>Dashboard</Link>
        <Link to="schedule"><FaRegCalendarAlt size={15}/> Agendamento</Link>
        <Link to="#"><FaRegSmile size={15} /> Atendimento</Link>
        <Link to="/capture-forms"><FaRegEnvelope size={15} /> Formulários</Link>
        <Link to="#"><FaRegEnvelope size={15} /> Crédito</Link>
      </div>
      <div className="footer-sidebar">
        <Link to="#"><FaCog size={15} /> Configurações</Link>
        <Link to="#"><FaSignOutAlt size={15} /> Sair</Link>
      </div>
   </div>
  )
}

export default Sidebar;