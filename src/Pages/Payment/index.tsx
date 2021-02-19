import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import { formatarCampo } from '../../utils/masks';
import { ApplicationState } from '../../store';

import { FaBarcode, FaRegCreditCard } from 'react-icons/fa';

import './styles.css';
import { paymentPage } from '../../store/modules/screen/types';
import { setPaymentOption } from '../../store/modules/screen/actions';




interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
}


function Payment() {

  const { screen } = useSelector( (state: ApplicationState) => state); 
  
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch()
  
  const [fullName, setFullName] = useState('');
  const [CPF_CNPJ, setCPF_CNPJ] = useState('');

  
  const handleSubmit: SubmitHandler<ProfileData> = async data => {

    console.log('submit handle')
    
  }

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>)  => {
    setFullName(e.target.value)
    console.log(fullName)
    
  }
  const handleChangeCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCPF_CNPJ(formatarCampo(e.target.value))
    console.log(CPF_CNPJ)
  }

  const handlePaymentMethod = (paymentMethod: paymentPage)=> {
    dispatch(setPaymentOption(paymentMethod))
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <PageBody title="Formas de Pagamento" >
          <div className="payment-container">

            <div className="payment-choice">
              <h1>Escolha sua forma de pagamento</h1>
              <div className="buttons-payment">
                <button 
                  onClick={() => handlePaymentMethod(paymentPage.Cartao)}
                  className={screen.payment === paymentPage.Cartao? 'button-active': ''}
                >
                  <FaRegCreditCard size={30}/> 
                  Cartão de crédito
                </button>
                <button 
                  onClick={()=> handlePaymentMethod(paymentPage.Boleto)}
                  className={screen.payment === paymentPage.Boleto? 'button-active': ''}
                >
                  <FaBarcode size={30}/> 
                  Boleto Bancário
                </button>
              </div>
            </div>



            <div className="payment-data">
              <Form onSubmit={handleSubmit} ref={formRef}>

                { screen.payment === paymentPage.Cartao?                 
                    <div className="viewform-block">
                      <Input name="cardNumber" label="Número do cartão" />
                    </div> 
                  : ''
                }

                <div className="viewform-block">
                  <Input name="name" label="Nome completo" onChange={handleChangeFullName} />
                  { screen.payment === paymentPage.Cartao? '' : <Input name="address" label="Endereço" />}
                </div>
                <div className="viewform-block">
                  <Input name="cpfOrCnpj" label="CPF/CNPJ" onChange={handleChangeCPF} value={CPF_CNPJ}/>
                  { screen.payment === paymentPage.Cartao? '' : <Input name="complement" label="Complemento" />}
                  
                </div>
                <div className="viewform-block">
                  <Input name="email" label="Email"/>
                </div>
                { screen.payment === paymentPage.Cartao?                 
                    <div className="viewform-block">
                      <Input name="dueData" label="Data de Vencimento" />
                      <Input name="securityCode" label="Código de segurança" />
                    </div> 
                  : ''
                }

              </Form>
            </div>

            <div className="resume-payment">
              <h1>Resumo da compra</h1>
              <div className="credit-block">
                <div className="credit-price">
                  <h1>50.000 Créditos</h1>
                  <h1>R$ 98,90</h1>
                </div>
                <div className="credit-data">
                  <p>{fullName}</p>
                  <p>{CPF_CNPJ}</p>
                </div>

              </div>
              <div className="button-container">
                <button type="submit" >Finalizar Compra</button>
              </div>


            </div>
          </div>
        </PageBody>
      </div>
    </div>

  )
}

export default Payment;