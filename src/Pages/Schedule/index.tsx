import React from 'react';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';

import './styles.css';

function Schedule() {

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">
          <section className="section-bar">
            <a href="">Vincular Conta</a>
            <a href="">Novo Post</a>
            <a href="">Calendário</a>
            <a href="">Loren Ipsun</a>
            <a href="">Loren Ipsun</a>
            <a href="">Loren Ipsun</a>
          </section>
          <PageBody title="Novo Post" link="#" />
        </div>
      </div>
    </div>

  )
}

export default Schedule;