import React from 'react';


import Navbar from '../../components/Navbar';
import NavbarSchedule from '../../components/NavbarSchedule';
import PageBody from '../../components/PageBody';
import Sidebar from '../../components/Sidebar';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiGooglemybusiness  } from 'react-icons/si';
import CardAccount from '../../components/CardAccount';

import './styles.css';


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
              <div className="top-links">
                <CardAccount name="Facebook">
                  <FaFacebookSquare size={40}/>
                </CardAccount>
                <CardAccount name="Twitter" className="face-account twitter">
                  <FaTwitter size={40}/>
                </CardAccount>
                <CardAccount name="Instagram" className="face-account instagram">
                  <FaInstagram size={40}/>
                </CardAccount>
                <CardAccount name="Google Meu Negócio" className="face-account gmn">
                  <SiGooglemybusiness size={40}/>
                </CardAccount>            
              </div>

            </div>
          </PageBody>
        </div>
      </div>
    </div>

  )
}

export default LinkAccount;