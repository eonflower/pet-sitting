import React from 'react';
import Hex1 from './Hex1';
import Hex2 from './Hex2';
import Hex3 from './Hex3';
import Hex4 from './Hex4';
import Hex5 from './Hex5';
import Hex6 from './Hex6';


const HexContainer = () => {
  return (
    <div className="hex-container">
      <ul id='hexgrid'>
      <li className='hex1 welcome'><Hex1 /></li>
      <li className='hex hex2'><Hex2 /></li>
      <li className='hex hex3'><Hex3 /></li>
      <li className='hex hex4'><Hex4 /></li>
      <li className='hex hex5'><Hex5 /></li>
      <li className='hex1 hex6'><Hex6 /></li>
      </ul>
      
    </div>
  );
}

export default HexContainer;
