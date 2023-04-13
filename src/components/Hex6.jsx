import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import config from '../config';

const Hex6 = () => {
	const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

	const sendEmail = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      name: '',
      email: '',
      message: '',
    }));

    emailjs
      .sendForm(
        `${config.SERVICE_ID}`,
        `${config.TEMPLATE_ID}`,
        form.current,
        `${config.PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hexIn">
          <a className="hexLink">
            <h1 className='contact-title'> contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label className='label name-label' htmlFor='name'>
          name:
        </label>
        <input
          required
          className='name-input'
          type='text'
          name='name'
					placeholder='your name'
          value={formData.name}
          onChange={handleChange}
        />
        <label className='label email-label' htmlFor='email'>
          email:
        </label>
        <input
          required
          className='email-input'
          type='email'
					placeholder='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <label className='label msg-label' htmlFor='message'>
          message:
        </label>
        <textarea
          className='form-text msg-input'
          name='message'
					placeholder='tell me about your pet!'
          value={formData.message}
          onChange={handleChange}
        />
        <input className='form-button' type='submit' value='send' />
      </form>
            
          </a>
    </div>
  );
}

export default Hex6;

