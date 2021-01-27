import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import './styles.css';
import { Link } from 'react-router-dom';
import Select from '../../components/Select';

interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
}


const optionsStates = [
  { value: 1, label: 'Canais'},
  { value: 2, label: 'Canal 1'},
  { value: 3, label: 'Canal 2'},
  { value: 4, label: 'Canal 3'},
  { value: 5, label: 'Canal 4'},
]

function ViewForm() {

  const formRef = useRef<FormHandles>(null);

  
  const handleSubmit: SubmitHandler<ProfileData> = async data => {

    console.log('submit handle')
    
  }


  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Visualizar Formulário" link="new-form" trash={true}>
          <div className="viewform-container">
            <div className="left-form">
              <div className="title-form">
                <h1>Dados Pessoais</h1>
              </div>
              <Form onSubmit={handleSubmit} ref={formRef}>

                <div className="viewform-block">
                  <Input name="firstname" label="Nome" value="Igor Sales"/>
                  <Select label="Estados" name="states" options={optionsStates}/>
                </div>
                <div className="viewform-block">
                  <Input name="email" label="Email" value="-"/>
                  <Select name="selection" label="Seleção" options={optionsStates}/>
                </div>
                <div className="viewform-block">
                  <Input name="birth" label="Data de Nascimento" value="-"/>
                  <Input name="wpp" label="Whatsapp" value="-"/>
                </div>
              <div className="viewform-block">
                <Select name="city" label="Cidade" options={optionsStates}/>
              </div>

              </Form>
            </div>

            <div className="right-form">

              <div className="title-form">
                <h1>Dados Pessoais</h1>
              </div>
              <Form onSubmit={handleSubmit} ref={formRef}>

                <div className="viewform-block">
                  <Input name="nameform" label="Nome" value="Formulário FNO Online"/>
                  <Input name="funilLead" label="Funil de destino do Lead" value="Funil #1"/>
                </div>
                <div className="viewform-block">
                  <Select name="buttonTitle" label="Título do botão" options={optionsStates}/>
                  <Input name="sequence" label="Sequência" value="Sequência #1"/>
                </div>
                <div className="viewform-block">
                  <Select name="buttonText" label="Texto do botão" options={optionsStates}/>
                </div>
              <div className="viewform-block">
                <Select name="buttonColor" label="Cor do botão" options={optionsStates}/>
              </div>

              </Form>

            </div>
          </div>
          <div className="new-tab">
              <Link to="#">Abrir em outra aba</Link>
          </div>
        </PageBody>
      </div>
    </div>

  )
}

export default ViewForm;