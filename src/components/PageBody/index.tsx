import React from 'react';

import { Link } from 'react-router-dom';

import { FaArrowLeft, FaLink, FaPlus, FaTrash } from 'react-icons/fa';
// import addIcon from '../../assets/images/icons/add-white.svg';

import './styles.css'

interface PageBodyProps {
    title: string;
    link?: string;
    newPost?: boolean;
    trash?: boolean;
}

const  PageBody: React.FC<PageBodyProps> = ({ title, link,  children, newPost, trash}) => {
    return (
        // <div className="container">
            <article className="page-body">
               <header className="top-header">
                    <div className="top-bar-container">
                        <div className="wrap-title">
                            <Link to="/dashboard">
                                <FaArrowLeft size={20}/>
                            </Link>
                            <h1>{title}</h1>
                            { newPost && <FaLink size={20}/>}
                        </div>

                       <div className="wrapper-buttons">
                        { trash && (
                                <Link to="#" className="trash">
                                    <FaTrash size={17} />
                                    Excluir
                                    {/* <img src={addIcon} alt="Novo cadastro"/> */}
                                </Link>
                            )}
                            
                            { link && (
                                <Link to= {link}>
                                    Novo Formulário
                                    <FaPlus size={17}/>
                                    {/* <img src={addIcon} alt="Novo cadastro"/> */}
                                </Link>
                            )}
                       </div>
                        
                    </div>
                </header>
               
               
                {children}
            </article>
 
        // </div>
    )
}

export default PageBody;