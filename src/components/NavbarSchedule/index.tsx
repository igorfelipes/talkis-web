import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FaPlusCircle, FaRegCalendarAlt, FaSyncAlt } from 'react-icons/fa'

import './styles.css';


function NavbarSchedule() {

  return (
    <section className="section-bar">
      <Link   to="#">
        <FaSyncAlt size={24}/>
        Vincular Conta
      </Link >
      <Link  to="#">
        <FaPlusCircle size={24}/>
        Novo Post
      </Link >
      <Link  to="#">
        <FaRegCalendarAlt size={24}/>
        Calendário
      </Link >
      <Link  to="#">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </Link >
      <Link  to="#">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </Link >
      <Link  to="#">
        <FaRegCalendarAlt size={24}/>
        Loren Ipsun
      </Link >
    </section>
  )
}

export default NavbarSchedule;