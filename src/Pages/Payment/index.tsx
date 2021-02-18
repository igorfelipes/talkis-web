import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';

import imgPerfil from '../../assets/images/perfil.png';

import { FaBarcode, FaPen, FaRegCreditCard } from 'react-icons/fa';

import './styles.css';
import { Link } from 'react-router-dom';
import Select from '../../components/Select';
import { formatarCampo } from '../../utils/masks';

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

const optionsStates = [
  { value: 1, label: 'Canais'},
  { value: 2, label: 'Canal 1'},
  { value: 3, label: 'Canal 2'},
  { value: 4, label: 'Canal 3'},
  { value: 5, label: 'Canal 4'},
]

function Payment() {

  const formRef = useRef<FormHandles>(null);
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
                <button><FaRegCreditCard size={30}/> Cartão de crédito</button>
                <button><FaBarcode size={30}/> Boleto Bancário</button>
              </div>
            </div>



            <div className="payment-data">
              <Form onSubmit={handleSubmit} ref={formRef}>

                <div className="viewform-block">
                  <Input name="name" label="Nome completo" onChange={handleChangeFullName} />
                  <Input name="address" label="Endereço" />
                </div>
                <div className="viewform-block">
                  <Input name="cpfOrCnpj" label="CPF/CNPJ" onChange={handleChangeCPF} value={CPF_CNPJ}/>
                  <Input name="complement" label="Complemento" />
                </div>
                <div className="viewform-block">
                  <Input name="email" label="Email"/>
                </div>

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