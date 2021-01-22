import React, { HTMLAttributes } from 'react';

import './styles.css';

interface CardAccountProps extends HTMLAttributes<HTMLInputElement>{
  name: string
}

const CardAccount: React.FC<CardAccountProps> = ({ name, children, ...rest }) => {

  return (
    <div className="face-account" {...rest}>

      { children }
      <h1>{name}</h1>
      <div className="button-container">
        <button type="submit" >Vincular</button>
      </div>
    </div>
  )
}

export default CardAccount;