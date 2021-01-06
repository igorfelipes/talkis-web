import React from 'react';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';

import './styles.css';

function CaptureForms() {

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Formulários de captura" link="#"/>
      </div>
    </div>

  )
}

export default CaptureForms;