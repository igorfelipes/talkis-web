import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import NavbarSchedule from '../../components/NavbarSchedule';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Select from '../../components/Select';

import './styles.css';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Upload from '../../components/Upload';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

interface NewPostData {
  selectedAccounts: string;
  date: string;
  time: string;
  channels: string;
  subtitle: string;
}


function NewForm() {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<NewPostData> = async data => {

    console.log('submit handle')
    
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-new-form">

          <div className="container-progressbar">
            <Link to="/capture-forms">
              <FaArrowCircleLeft size={21}/>
            </Link>
            <div className="progress-bar">
              <div className="circle-progress"/>
              <hr/>
              <div className="circle-progress"/>
              <hr/>
              <div className="circle-progress"/>
            </div>
          </div>

          <div className="newform-container">
            <div className="form-block">
              <h1>Configuração Inicial</h1>
            </div>
            <div className="form-block">
              <h1>Campos do Formulário</h1>
            </div>
            <div className="form-block">
              <h1>Finalizado</h1>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default NewForm;