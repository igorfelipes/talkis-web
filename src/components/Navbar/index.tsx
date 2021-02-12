import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import logotipo from '../../assets/images/icons/logo-sm.png';
import imgPerfil from '../../assets/images/perfil.png';

import { getUser } from '../../store/modules/user/actions';

import './styles.css';


function Navbar() {

  const dispatch = useDispatch()
  const { user } = useSelector( (state: ApplicationState) => state);
  
  useEffect(()=>{
    dispatch(getUser())
      
  }, [dispatch])

  return (
    <div className="navbar ">

      <img src={logotipo} alt="logo-talkis"/>

      <div className="left-content">
        <label htmlFor="perfil">{user.data? user.data.user?.name : undefined}</label>
        <img src={imgPerfil} alt="img-perfil"/>
      </div>

    </div>
  )
}

export default Navbar;