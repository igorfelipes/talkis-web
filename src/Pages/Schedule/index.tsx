import React from 'react';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';

import { FaPlusCircle, FaRegCalendarAlt, FaSyncAlt } from 'react-icons/fa'

import './styles.css';
import { Link } from 'react-router-dom';

function Schedule() {

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">
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
          <PageBody title="Novo Post" newPost={true}/>
        </div>
      </div>
    </div>

  )
}

export default Schedule;