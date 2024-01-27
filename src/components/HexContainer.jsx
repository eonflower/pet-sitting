import React from 'react';
import Hex from './Hex';
import cat from "../assets/animals/cat4.png"
import dog from "../assets/animals/dog4.png"
import cat2 from "../assets/animals/cat5.png"
import dog2 from "../assets/animals/dog5.png"


const HexContainer = () => {
  return (
    <>
      <ul id='hexgrid'>
      <li className='hex1 welcome'>
        <Hex/></li>
      <li className='hex hex2'>
        <Hex
          img={dog}
          altText={"patchy black and white dog with floppy ears"}
          text={""}/>
        </li>
      <li className='hex hex3'>
      <Hex
          img={cat}
          altText={"cute calico cat with a patchy black face"}
          text={""}/>
      </li>
      <li className='hex hex4'>
      <Hex
          img={cat2}
          altText={"pretty black cat with amber eyes"}
          text={""}/>
      </li>
      <li className='hex hex5'>
      <Hex
          img={dog2}
          altText={"patchy black and white dog with pointy ears and speckles"}
          text={"hiya"}/>
      </li>
      <li className='hex1 hex6'>
        <Hex/></li>
      </ul>
      
    </>
  );
}

export default HexContainer;
