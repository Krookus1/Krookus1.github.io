import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaEnvelope, FaPhone, FaInfoCircle } from 'react-icons/fa';


function Contactform() {
  const [isDisabled, setIsDisabled] = useState(false);
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const apiService = import.meta.env.VITE_SERVICE_ID;
    const apiTemplate = import.meta.env.VITE_TEMPLATE_ID;
    const apiPublic = import.meta.env.VITE_PUBLIC_KEY;
    
    emailjs
      .sendForm(`${apiService}`, `${apiTemplate}`, form.current, {
        publicKey: `${apiPublic}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.href = "/";
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
    //
      return  (
        <div className="form-container">
      <form ref={form} onSubmit={sendEmail} className="form-wrapper">
        <h2 className="form-title">Kirjuta oma soovist</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Name, Email, and Phone */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {/* Name Input */}
            <div className="input-group">
              <FaUser className="absolute left-3 text-gray-400" />
              <input
              name="user_name"
                type="text"
                placeholder="Nimi"
                className="input-field"
              />
            </div>

            {/* Email Input */}
            <div className="input-group">
              <FaEnvelope className="absolute left-3 text-gray-400" />
              <input
              name="kasutaja_mail"
                type="email"
                placeholder="Email"
                className="input-field"
              />
            </div>

            {/* Phone Input */}
            <div className="input-group">
              <FaPhone className="absolute left-3 text-gray-400" />
              <input
              name="tel_nr"
                type="tel"
                placeholder="Telefon"
                className="input-field"
              />
            </div>
          </div>

          {/* Right Side: Extra Info */}
          <div className="input-group flex-grow relative">
            <FaInfoCircle className="absolute left-3 top-3 text-gray-400" />
            <textarea
            name="message"
              placeholder="Info"
              className="textarea-field"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="submit-button input-group flex-grow relative"
        >
          SAADA
        </button>
        
      </form>
    </div>
      );
}

export default Contactform;