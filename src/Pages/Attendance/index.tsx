import React, { useRef } from 'react';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import MessageBlock from '../../components/MessageBlock';

import exampleImg from '../../assets/images/example.jpg';
import { FaCircle, FaPaperclip } from 'react-icons/fa';

import './styles.css';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { FormHandles, SubmitHandler } from '@unform/core';


interface SendMessageData {
  message: string;
}

function Attendance() {


  const formRef = useRef<FormHandles>(null);

  
  const handleSendMessage: SubmitHandler<SendMessageData> = async data => {

    console.log('submit handle')
    
  }



  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />

        <div className="chat">
          <div className="message-container">
            <MessageBlock />
            <MessageBlock />
            <MessageBlock />
            <MessageBlock />
            <MessageBlock />
            <MessageBlock />
          </div>


          <div className="message-chat">
            <div className="header-chat">
              <img src={exampleImg} alt="img conversation"/>
              <div className="header-content">
                  <div className="chat-info">
                    <h2>Igor Sales</h2>
                    <p>+55 91 9984000132 - Brasil</p>
                  </div>
                  <div className="right-info">
                    <FaCircle size={40}/>
                    <FaCircle size={40}/>
                    <FaCircle size={40}/>
                    <FaCircle size={40}/>
                    <FaCircle size={40}/>
                  </div>
              </div>
            </div>
            <div className="body-chat">
              <div className="content-conversation">

              </div>
              <div className="send-message">
                <Form onSubmit={handleSendMessage} ref={formRef}>
                  <Input 
                    name="message" 
                    label="" 
                    placeholder="Digite uma mensagem"
                  /> 
                  <div className="buttons-container">
                    <button><FaPaperclip size={15}/></button>
                    <button>Enviar</button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Attendance;