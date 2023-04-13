import React from 'react';
import cat from "../assets/animals/cat4.png"

const Hex2 = () => {
  return (
    <div className="hexIn">
          <a className="hexLink" href="#">
            <img src={cat} alt="pretty black cat with amber eyes" />
            <h1 className='accommodations-title'>Accommodations</h1>
            <p className='hex-p'> I offer professional pet sitting services that include house and plant watching to ensure your home and pets are safe and secure while you're away.</p>
          </a>
    </div>
  );
}

export default Hex2;
