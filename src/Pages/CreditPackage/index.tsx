import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';


import './styles.css';


function CreditPackage() {

  const handleCreditPay = () => {
    console.log('handle credit')
  }


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
                <Link className="card-creditpay" to='/credit-package/payment' onClick={handleCreditPay}>
                  <h1>2.500</h1>
                  <p>créditos</p>
                  <div className="value-block">
                   <h2>R$</h2><h1>0,14</h1>
                  </div>
                  <p>*por mensagem</p>
                </Link>
                <Link className="card-creditpay second"to='/credit-package/payment' onClick={handleCreditPay}>
                  <h1>5.000</h1>
                  <p>créditos</p>
                  <div className="value-block">
                   <h2>R$</h2><h1>0,10</h1>
                  </div>
                  <p>*por mensagem</p> 
                </Link>
                <Link className="card-creditpay third" to='/credit-package/payment' onClick={handleCreditPay}>
                  <h1>10.000</h1>
                  <p>créditos</p> 
                  <div className="value-block">
                   <h2>R$</h2><h1>0,07</h1>
                  </div>
                  <p>*por mensagem</p>
                </Link>
                <Link className="card-creditpay last" to='/credit-package/payment' onClick={handleCreditPay}>
                  <h1>50.000</h1>
                  <p>créditos</p>  
                  <div className="value-block">
                   <h2>R$</h2><h1>0,05</h1>
                  </div>
                  <p>*por mensagem</p> 
                </Link>
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