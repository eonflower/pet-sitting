import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import config from '../config';

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
  
    // Define regex pattern for validation
    const namePattern = /^[A-Za-z\s]{1,15}$/;
  
    // Validate based on input name
    let isValid = true;
    if (name === 'name') {
      isValid = value === '' || namePattern.test(value);
    } 
  
    // Update state only if the input is valid
    if (isValid) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

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
    <div className='form-container'>
    <form ref={form} onSubmit={sendEmail}>
        <span className='inputs'>
        <label className='label name-label' htmlFor='name'>
          name
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
        </span>
        <span>

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
        </span>
        <input className='form-button' type='submit' value='submit' />
      </form></div>
  );
}
