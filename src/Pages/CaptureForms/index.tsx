import React from 'react';
import { FaPen, FaRegClipboard, FaRegEye, FaRegTrashAlt } from 'react-icons/fa';
import CardCapForm from '../../components/CardCapForm';

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
        <PageBody title="Formulários de captura" link="#">
          <div className="card-container">
            <CardCapForm />
            <CardCapForm />
            <CardCapForm />
            <CardCapForm />
            <CardCapForm />
          </div>
        </PageBody>
      </div>
    </div>

  )
}

export default CaptureForms;