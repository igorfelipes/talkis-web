import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import imgPerfil from '../../assets/images/perfil.png';

import { FaPen } from 'react-icons/fa';

import './styles.css';
import { Link } from 'react-router-dom';

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

function CreditPackage() {

  const formRef = useRef<FormHandles>(null);

  


  return (
    <div className="container">
      <Navbar />
      <div className="main-container credit-payment">
        <Sidebar />
        <PageBody title="Pacotes de Crédito" creditPage={true} >
          <div className="credit-container">


            <div className="credit-header">
              <h1>Escolha seu Plano de Crédito</h1>
              <p>Os créditos são consumidos apenas por mensagens enviadas e confirmadas</p>
            </div>
            <div className="gradient-block">
              <div className="wrapper-cards">
                <div className="card-creditpay">
                  <h1>2.500</h1>
                  <p>créditos</p>
                  <div className="value-block">
                   <h2>R$</h2><h1>0,14</h1>
                  </div>
                  <p>*por mensagem</p>
                </div>
                <div className="card-creditpay second" >
                  <h1>5.000</h1>
                  <p>créditos</p>
                  <div className="value-block">
                   <h2>R$</h2><h1>0,10</h1>
                  </div>
                  <p>*por mensagem</p> 
                </div>
                <div className="card-creditpay third">
                  <h1>10.000</h1>
                  <p>créditos</p> 
                  <div className="value-block">
                   <h2>R$</h2><h1>0,07</h1>
                  </div>
                  <p>*por mensagem</p>
                </div>
                <div className="card-creditpay last">
                  <h1>50.000</h1>
                  <p>créditos</p>  
                  <div className="value-block">
                   <h2>R$</h2><h1>0,05</h1>
                  </div>
                  <p>*por mensagem</p> 
                </div>
              </div>
              
            </div>
         

            <footer>
              (*) Consumo mínimo de 15 créditos diários por instância. Caso não 
              utilize a instância ou consuma menos de 15 créditos no dia, 
              será debitada a diferença em créditos.
            </footer>
          </div>
        </PageBody>
      </div>
    </div>

  )
}

export default CreditPackage;