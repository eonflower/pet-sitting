import React from 'react';

const Hex = ({img, altText, text}) => {
  return (
    <div className="hexIn">
      <div className="hexLink">
      <img src={img} alt={altText}/>
      </div>
    </div>
  );
}

export default Hex;

