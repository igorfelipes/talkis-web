import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import imgPerfil from '../../assets/images/perfil.png';

import { FaCircle, FaPen } from 'react-icons/fa';

import './styles.css';

interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function Settings() {

  const formRef = useRef<FormHandles>(null);

  
  const handleSubmit: SubmitHandler<ProfileData> = async data => {

    console.log('submit handle')
    
  }
  const handleChangePassword: SubmitHandler<PasswordData> = async data => {

    console.log('Handle Change Password')
    
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Meu Perfil" >
          <div className="profile-container">

            <div className="profile-header">
              <div className="img-perfil">
                  <div className="edit-icon">
                    <FaPen size={8.6} className="fa-pen"/>
                  </div>
                  <img src={imgPerfil} alt="img-perfil"/>
              </div>
              <label htmlFor="perfil">Igor Sales</label>
              <div className="button-remove">
                <button type="submit" >Remover</button>
              </div>
            </div>

            <div className="user-data">
              <Form onSubmit={handleSubmit} ref={formRef}>
                <div className="username-block">
                  <Input name="firstname" label="Usuário" value="Igor"/>
                  <Input name="lastname" label="&nbsp;" value="Sales"/>
                </div>

                <div className="email-block">
                  <Input name="email" label="Email" value="igor@acutistecnologia.com.br"/>
                  <div className="button-container">
                    <button type="submit" >Salvar</button>
                  </div>
                </div>
              </Form>
            </div>

            <div className="change-password">
              <h1>Alterar Senha</h1>
              <Form onSubmit={handleChangePassword} ref={formRef}>
                <Input 
                  name="oldPassword" 
                  label="" 
                  type="password" 
                  placeholder="Senha Atual"
                /> 
                <Input 
                  name="newPassword" 
                  label="" 
                  type="password" 
                  placeholder="Nova Senha"
                /> 
                <Input 
                  name="confirmPassword" 
                  label="" 
                  type="password" 
                  placeholder="Confirmar Senha"
                /> 

                <div className="button-container">
                  <button type="submit" >Mudar senha</button>
                </div>

              </Form>
            </div>
          </div>
        </PageBody>
      </div>
    </div>

  )
}

export default Settings;