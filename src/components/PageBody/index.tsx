import React from 'react';

import { Link } from 'react-router-dom';

import addIcon from '../../assets/images/icons/add-white.svg';

import './styles.css'

interface PageBodyProps {
    title: string;
    link?: string;
}

const  PageBody: React.FC<PageBodyProps> = ({ title, link,  children}) => {
    return (
        // <div className="container">
            <article className="page-body">
               <header className="top-header">
                    <div className="top-bar-container">
                        <h1>{title}</h1>
                        
                        { link && (
                            <Link to= {link}>
                                Novo Formulário
                                <img src={addIcon} alt="Novo cadastro"/>
                            </Link>
                        )}
                        
                    </div>
                </header>
               
               
                {children}
            </article>
 
        // </div>
    )
}

export default PageBody;