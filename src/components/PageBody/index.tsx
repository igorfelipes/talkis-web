import React from 'react';

import { Link } from 'react-router-dom';

import { FaArrowLeft, FaLink, FaPlus } from 'react-icons/fa';
import addIcon from '../../assets/images/icons/add-white.svg';

import './styles.css'

interface PageBodyProps {
    title: string;
    link?: string;
    newPost?: boolean;
}

const  PageBody: React.FC<PageBodyProps> = ({ title, link,  children, newPost}) => {
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
                        
                        { link && (
                            <Link to= {link}>
                                Novo Formulário
                                <FaPlus size={17}/>
                                {/* <img src={addIcon} alt="Novo cadastro"/> */}
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