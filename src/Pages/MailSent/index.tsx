import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
// import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import * as Yup from 'yup';

// import Input from '../../components/Input';
// import SaveForm from '../../components/SaveForm';

// import api from '../../services/api';
// import { login } from '../../services/auth';
// import { errorLogin } from '../../utils/Notifications';

import './styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import MailSentImg from '../../assets/images/mail-sent.svg';
// import { User } from '../../store/modules/login/types';
// import { setUser } from '../../store/modules/login/actions';
// import { useDispatch } from 'react-redux';


interface LoginData {
  username: string;
  password: string;
}

function MailSent() {

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
    <div className="container-mail">
      <div className="mail-header">
        <Link to="/forgot-password">
          <FaArrowLeft size={20}/>
        </Link>
      </div>

      <div className="mail-left">
        <div className="right-wrapper">

          <h1>O email foi enviado!</h1>
          <p>Por favor, abra sua caixa de entrada e clique no link 
            recebido para alterar sua senha, caso não tenha encontrado,
            verifique a lixeira ou caixa de spam.
          </p>


          <div className="button-container">
            <span>Não recebeu o email?</span>
            <button type="submit" >Enviar novamente</button>
          </div>

        </div>   

      </div>

      <div className="mail-right">
        <img src={MailSentImg} alt="forgot-img"/>
      </div>

    </div>
  )
}

export default MailSent;