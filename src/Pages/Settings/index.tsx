/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { ApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import imgPerfil from '../../assets/images/perfil.png';

import { FaPen } from 'react-icons/fa';

import { updateUser } from '../../store/modules/user/actions';
import { ProfileData } from '../../store/modules/user/types';
import api from '../../services/api';

import './styles.css';


interface PasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function Settings() {

  const dispatch = useDispatch()
  const formRef = useRef<FormHandles>(null);

  const { user } = useSelector( (state: ApplicationState) => state); 

  
  const handleChangeProfile: SubmitHandler<ProfileData> = async data => {

    console.log('submit handle')

     try{
        formRef.current?.setErrors({});

        const schemaDoc = Yup.object().shape({        
            first_name: Yup.string().required('O nome é obrigatório'),
            last_name: Yup.string().required('O nome é obrigatório'),
            email: Yup.string().required('O email é obrigatório'),
          })
  
        await schemaDoc.validate(data, {
          abortEarly: false,
        })




        api.put(`user/${user.data?.user?.id}`, data).then((res) =>{

          console.log('UPDATE SUCCESSFULL')
          alert('UPDATE SUCCESSFULL')

          dispatch(updateUser(data));
        }).catch((err) => {
          console.log(err)
          // alert('UPDATE FAILED')
        })


        console.log(data)
        
      }catch(err){
        if(err instanceof Yup.ValidationError){

          err.inner.forEach( error => {
              error.path ? 
              formRef.current?.setFieldError(error.path, error.message) 
              : undefined
          })   
        }
      }
    
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
                  <Link to="#">
                    <div className="edit-icon">
                      <FaPen size={8.6} className="fa-pen"/>
                    </div>
                  </Link>
                  <img src={imgPerfil} alt="img-perfil"/>
              </div>
              <label htmlFor="perfil">Igor Sales</label>
              <div className="button-remove">
                <button type="submit" >Remover</button>
              </div>
            </div>

            <div className="user-data">
              <Form onSubmit={handleChangeProfile} ref={formRef} initialData={user.data?.user}>
                <div className="username-block">
                  <Input name="first_name" label="Usuário" />
                  <Input name="last_name" label="&nbsp;" />
                </div>

                <div className="email-block">
                  <Input name="email" label="Email" />
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