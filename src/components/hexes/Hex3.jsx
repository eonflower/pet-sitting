import React from 'react';
import dog from "../../assets/animals/dog4.png"


const Hex3 = () => {
  return (
    <div className="hexIn">
    <a className="hexLink" href="#">
    <img src={dog} alt="aussie mix with heterochromia" />
      <h1 className='rates-title'>Dog Rates</h1>
      <p className='hex-p'>
      <br />
      $45 per night for 1 dog
      <br />
      <br />
      <br />
      + $15 for an additional dog
      <br />
      <br />
      

      </p>
    </a>
  </div>
  );
}

export default Hex3;
