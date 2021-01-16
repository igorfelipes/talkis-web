import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';

import Navbar from '../../components/Navbar';
import NavbarSchedule from '../../components/NavbarSchedule';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';
import Select from '../../components/Select';

import './styles.css';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Upload from '../../components/Upload';
import CardCapForm from '../../components/CardCapForm';

interface NewPostData {
  selectedAccounts: string;
  date: string;
  time: string;
  channels: string;
  subtitle: string;
}

const optionsAccounts = [
  { value: 1, label: 'Selecione as contas'},
  { value: 2, label: 'Segunda'},
  { value: 3, label: 'Terceira'},
  { value: 4, label: 'Quarta'},
  { value: 5, label: 'Quinta'},
]
const optionsChannels = [
  { value: 1, label: 'Canais'},
  { value: 2, label: 'Canal 1'},
  { value: 3, label: 'Canal 2'},
  { value: 4, label: 'Canal 3'},
  { value: 5, label: 'Canal 4'},
]

function LinkAccount() {

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="body-schedule">
          <NavbarSchedule />
          <PageBody title="Vincular Conta" newPost={true}>
            <div className="link-account">
              <div className="card-account">


              
              </div>
            </div>
          </PageBody>
        </div>
      </div>
    </div>

  )
}

export default LinkAccount;