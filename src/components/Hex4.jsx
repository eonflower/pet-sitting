import React from 'react';
import cat from "../assets/animals/cat5.png"


const Hex4 = () => {
  return (
    <div className="hexIn">
          <a className="hexLink" href="#">
          <img src={cat} alt="" />
            <h1 className='rates-title'>Cat Rates</h1>
            <p className='hex-p'>
              $40 per night
              <br />
              <br />
              or
              <br />
              <br />
              $30/day for quick visits</p>
          </a>
    </div>
  );
}

export default Hex4;
