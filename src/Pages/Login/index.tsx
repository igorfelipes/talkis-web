import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Input from '../../components/Input';

import api from '../../services/api';
import { login } from '../../services/auth';

import logotipo from '../../assets/images/icons/logo-xm.png';

import './styles.css';
import { User } from '../../store/modules/user/types';
import { setUser } from '../../store/modules/user/actions';
import { ApplicationState } from '../../store';
// import { User } from '../../store/modules/login/types';
// import { setUser } from '../../store/modules/login/actions';


interface LoginData {
  email: string;
  password: string;
}

function Login() {

  const dispatch = useDispatch()
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<LoginData> = async data => {

    console.log('submit handle') 

    // window.location.href='/dashboard'
    try{
      formRef.current?.setErrors({})

      const schemaDoc = Yup.object().shape({        
              email: Yup.string().required('Por favor, digite o email do usuário'),
              password: Yup.string().required('Por favor, digite a senha'),
        })

      await schemaDoc.validate(data, {
        abortEarly: false,
      })
       
      api.post('session/', data).then((response) =>{    
        const userData: User = response.data;
        
        console.log(userData)

        if(userData.token){
          login(userData.token);
          dispatch(setUser(userData));

          history.push('/document');
        }

      }).catch((err) => {
        console.log(err)
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
    <div className="container-login">
      <div className="login-left">
          <div className="login-container">

            <div className="logotipo">
             <img src={logotipo} alt="logo-talkis"/>
            </div>
            
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input name="email" label="Email" placeholder="Digite seu e-mail"></Input>
              <Input name="password" label="Senha" type="password" placeholder="Digite sua senha"></Input>
              {/* <SaveForm title="Acessar"/> */}
              <div className="button-container">
                <button type="submit" >Entrar</button>
              </div>
              
              <div className="login-footer">
                <p>Não tem uma conta? <Link to="#">Registre-se</Link></p>
                <Link to="/forgot-password">Esqueci minha senha</Link>
              </div>

            </Form>
            
          </div>   
      </div>
      <div className="login-right">
        
      </div>
    </div>
  )
}

export default Login;