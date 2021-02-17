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
    console.log(user)  
  }, [dispatch, user])

  return (
    <div className="navbar ">

      <img src={logotipo} alt="logo-talkis"/>

      <div className="left-content">
        { console.log(user.data)}
        <label htmlFor="perfil">{user.data?.user ? user.data.user.first_name + user.data.user.last_name: undefined}</label>
        <img src={imgPerfil} alt="img-perfil"/>
      </div>

    </div>
  )
}

export default Navbar;