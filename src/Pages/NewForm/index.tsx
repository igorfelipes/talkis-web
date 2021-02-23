import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { FaArrowCircleLeft } from 'react-icons/fa';

import './styles.css';
import LabelDashed from '../../components/LabelDashed';



interface NewPostData {
  // openNewTab: boolean;
  formName: string;
  buttonTitle: string;
  buttonText: string;
  buttonColor: string;
  funilLead: string;
  sequence: string;
}

const funilLeadOptions = [
  { value: 1, label: 'Funil #1'},
  { value: 2, label: 'Funil #2'},
  { value: 3, label: 'Funil #3'},
  { value: 4, label: 'Funil #4'},
  { value: 5, label: 'Funil #5'},
]
const sequenceOptions = [
  { value: 1, label: 'Sequencia #1'},
  { value: 2, label: 'Sequencia #2'},
  { value: 3, label: 'Sequencia #3'},
  { value: 4, label: 'Sequencia #4'},
  { value: 5, label: 'Sequencia #5'},
]

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
            <Form onSubmit={handleSubmit} ref={formRef}>

              <div className="form-block">
                <h1>Configuração Inicial</h1>
                <Input name="formName" label="" placeholder="Nome do formulário" />
                <Input name="buttonTitle" label=""  placeholder="Título do botão"/>
                <Input name="buttonText" label="" placeholder="Texto do botão"/>
                <Input name="buttonColor"  label="" placeholder="Cor do botão"/>
                <Select options={funilLeadOptions} label="" name="funilLead" />
                <Select options={sequenceOptions} label="" name="sequence"/>
                <div className="save-block">
                  <button>Salvar</button>
                </div>
              </div>
              <div className="form-block">
                <h1>Campos do Formulário</h1>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="name" label="" type="checkbox" placeholder="Nome do formulário" />
                  </LabelDashed>
                <div className="save-block">
                  <button>Salvar</button>
                </div>
              </div>
              <div className="form-block">
                <h1>Finalizado</h1>
                <div className="finish-block">
                  <h1>Clique em publicar para gerar os códigos</h1>
                </div>
                <div className="save-block">
                  <button>Publicar</button>
                </div>
              </div>
              
            </Form>
          </div>

        </div>
      </div>
    </div>

  )
}

export default NewForm;