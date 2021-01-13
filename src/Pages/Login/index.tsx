import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../components/Input';
// import SaveForm from '../../components/SaveForm';

// import api from '../../services/api';
// import { login } from '../../services/auth';
// import { errorLogin } from '../../utils/Notifications';

import './styles.css';
import logotipo from '../../assets/images/icons/logo-xm.png';
// import { User } from '../../store/modules/login/types';
// import { setUser } from '../../store/modules/login/actions';
// import { useDispatch } from 'react-redux';


interface LoginData {
  username: string;
  password: string;
}

function Login() {

  // const dispatch = useDispatch()
  // const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<LoginData> = async data => {

    console.log('submit handle')
    // try{
    //   formRef.current?.setErrors({})

    //   const schemaDoc = Yup.object().shape({        
    //           username: Yup.string().required('Por favor, digite o nome de usuário'),
    //           password: Yup.string().required('Por favor, digite a senha'),
    //     })

    //   await schemaDoc.validate(data, {
    //     abortEarly: false,
    //   })
       
    //   api.post('sessions/', data).then((response) =>{    
    //     const userData: User = response.data;
        
    //     console.log(userData)

    //     if(userData.token){
    //       login(userData.token);
    //       dispatch(setUser(userData));

    //       history.push('/document');
    //     }

    //   }).catch((err) => {
    //     errorLogin()
    //   })

    // }catch(err){
    //   if(err instanceof Yup.ValidationError){
    //       err.inner.forEach( error => {
    //           formRef.current?.setFieldError(error.path, error.message)
    //         }) 
    //   } 
    // }
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
                <p>Não tem uma conta? <a href="">Registre-se</a></p>
                <Link to="">Esqueci minha senha</Link>
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