import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import './styles.css';

const options = [
  { value: 1, label: 'Filtrar'},
  { value: 2, label: 'Segunda'},
  { value: 3, label: 'Terceira'},
  { value: 4, label: 'Quarta'},
  { value: 5, label: 'Quinta'},
]

function Dashboard() {

  return (
    <div className="container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        
        <div className='grid-cards'>
          {/* RESUMO DA SEMANA */}
          <article className="week-summary">
                <header className="week-header">
                      <div className="ws-top-container">
                          <p>Resumo da semana</p>
                          
                          {/* { link && (
                              <Link to= {link}>
                                  Novo Formulário
                                  <img src={addIcon} alt="Novo cadastro"/>
                              </Link>
                          )} */}
                          <select name="filtrar" id="select-block">
                          {options.map(option => {
                            return <option key={option.value} value={option.value}>{option.label}</option>
                          })}
                          </select>
                      </div>
                  </header>
                          
                  {/* Colocar os graficos  aqui*/}

              </article>


              {/* ALCANCE POR PAÍS */}
              <article className="countries-range">
                <header className="cr-header">
                      <div className="cr-top-container">
                          <p>Alcance por País</p>
                          
                          {/* { link && (
                              <Link to= {link}>
                                  Novo Formulário
                                  <img src={addIcon} alt="Novo cadastro"/>
                              </Link>
                          )} */}

                          <Link  to="#">Ver tudo</Link>
                          
                      </div>
                  </header>
                          
                  {/* Colocar os graficos  aqui*/}
              </article>

              {/*PROGRESSO DA SEMANA*/}
              <article className="progress-week">
                <header className="pw-header">
                      <div className="pw-top-container">
                          <p>Progresso da Semana</p>
                          
                          {/* { link && (
                              <Link to= {link}>
                                  Novo Formulário
                                  <img src={addIcon} alt="Novo cadastro"/>
                              </Link>
                          )} */}
                          <select name="filtrar" id="select-block">
                            {options.map(option => {
                              return <option key={option.value} value={option.value}>{option.label}</option>
                            })}
                          </select>
                          
                      </div>
                  </header>
                          
                  {/* Colocar os graficos  aqui*/}

              </article>

              {/* TOTOTAL VIEWS */}
              <article className="total-views">
                <header className="tv-header">
                  <div className="tv-top-container">
                      <p>Total Views</p>
                      
                      {/* { link && (
                          <Link to= {link}>
                              Novo Formulário
                              <img src={addIcon} alt="Novo cadastro"/>
                          </Link>
                      )} */}
                      
                  </div>
                </header>
                      
                {/* Colocar os graficos  aqui*/}

              </article>

              
          
          {/* SOLICITAÇÕES */}
          <article className="solicitations">
                <header className="solicitations-header">
                      <div className="solicitations-top-container">
                          <p>Solicitações</p>
                          
                          {/* { link && (
                              <Link to= {link}>
                                  Novo Formulário
                                  <img src={addIcon} alt="Novo cadastro"/>
                              </Link>
                          )} */}
                          
                      </div>
                  </header>
                          
                  {/* Colocar os graficos  aqui*/}
              </article>


        </div>

      </div>
    </div>

  )
}

export default Dashboard;