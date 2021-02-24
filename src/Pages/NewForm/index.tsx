import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup'

import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { FaArrowCircleLeft } from 'react-icons/fa';

import './styles.css';
import LabelDashed from '../../components/LabelDashed';
import api from '../../services/api';



interface NewFormData {
  // openNewTab: boolean;
  name: string;
  button_title: string;
  button_text: string;
  button_color: string;
  funil_lead: string;
  sequence: string;

  //fields
  flag_name: boolean
  flag_email: boolean
  flag_birth: boolean
  flag_whatsapp: boolean
  flag_city: boolean
  flag_state: boolean
  flag_selection: boolean
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

  const handleSubmit: SubmitHandler<NewFormData> = async data => {

    console.log('submit handle')
    console.log(data)


    try{
      formRef.current?.setErrors({})

      const schemaDoc = Yup.object().shape({        
              name: Yup.string().required('Por favor, digite o email do usuário'),
              button_title: Yup.string().required('Por favor, digite o Título do botão'),
              button_text: Yup.string().required('Por favor, digite o texto do botão'),
              button_color: Yup.string().required('Por favor, selecione a cor do botão'),
              funil_lead: Yup.string().required('Por favor, selecione o funil de destino'),
              sequence: Yup.string().required('Por favor, selecione a cor do botão'),
        })

      await schemaDoc.validate(data, {
        abortEarly: false,
      })
       
      api.post('capture-forms/', data).then((response) =>{    
        
        
        console.log(response)

      }).catch((err) => {
        console.log(err)
        // dispatch(setErrorLogin())
      })

    }catch(err){
      if(err instanceof Yup.ValidationError){
          err.inner.forEach( error => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              error.path ? 
                formRef.current?.setFieldError(error.path, error.message) 
                : undefined
             
            }) 
      } 
    }
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
                <Input name="name" label="" placeholder="Nome do formulário" />
                <Input name="button_title" label=""  placeholder="Título do botão"/>
                <Input name="button_text" label="" placeholder="Texto do botão"/>
                <Input name="button_color"  label="" placeholder="Cor do botão"/>
                <Select options={funilLeadOptions} label="" name="funil_lead" />
                <Select options={sequenceOptions} label="" name="sequence"/>
                <div className="save-block">
                  <button>Salvar</button>
                </div>
              </div>
              <div className="form-block">
                <h1>Campos do Formulário</h1>
                  <LabelDashed fieldName="Seu nome">
                    <Input name="flag_name" label="" type="checkbox" />
                  </LabelDashed>
                  <LabelDashed fieldName="E-mail">
                    <Input name="flag_email" label="" type="checkbox"  />
                  </LabelDashed>
                  <LabelDashed fieldName="Data de Nascimento">
                    <Input name="flag_birth" label="" type="checkbox" />
                  </LabelDashed>
                  <LabelDashed fieldName="Whatsapp">
                    <Input name="flag_whatsapp" label="" type="checkbox" />
                  </LabelDashed>
                  <LabelDashed fieldName="Cidade">
                    <Input name="flag_city" label="" type="checkbox" />
                  </LabelDashed>
                  <LabelDashed fieldName="Estado">
                    <Input name="flag_state" label="" type="checkbox" />
                  </LabelDashed>
                  <LabelDashed fieldName="Seleção">
                    <Input name="flag_selection" label="" type="checkbox" />
                  </LabelDashed>
                <div className="save-block">
                  <button type="submit">Salvar</button>
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