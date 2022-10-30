import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
      }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Agradecemos pela preferência!</h2>
        <p className="email-msg">Recibo enviado ao seu email.</p>
        <p className="description">
          envie-nos um email em caso de duvidas.
          <a className="email" href="mailto:spjcarlosh@gmail.com">
          spjcarlosh@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success