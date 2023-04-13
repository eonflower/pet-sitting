import React from 'react';
import dog from "../assets/animals/dog5.png"

const Hex5 = () => {
  return (
		<div className="hexIn">
		<a className="hexLink" href="#">
			<img src={dog}alt="gray tabby sitting pretty" />
			<h1 className='misc-title'>Miscellaneous</h1>
			<p className='hex-p-misc'>
			~ Other critter rates are case by case basis
			<br />
			<br />
			~ Additional fees may be added on for pets with higher needs
			<br />
			<br />
			~ Discounted rates available for BIPOC and trans folks
			</p>
		</a>
	</div>
  );
}

export default Hex5;

