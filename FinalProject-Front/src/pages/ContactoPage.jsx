import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [messageSend, setMensajeSend] = useState(false)
  const [ submit, setSubmit] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    setTimeout(() => {
      setFormData({nombre:'', email:'', mensaje:''})
      setMensajeSend(true);
      setTimeout(() => setMensajeSend(false), 2000)
      setSubmit(false)
    }, 300);
  };

  return (
    <div>
      <div  className="contact-container">
      <h2 className="contact-title">¡Contáctanos!</h2>
      <p className="contact-description">Si tienes dudas o sugerencias, completa el siguiente formulario.</p>

    {messageSend && <p className='success-message'> Mensaje enviado correctamente</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <p>Nombre:</p>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <p>Email:</p>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <p>Mensaje:</p>
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />

        <button type="submit" className="contact-button">Enviar</button>
      </form>

      <div className="contact-info">
        <p>📧 Email: contacto@pokemonbattle.com</p>
        <p>📍 Dirección: Calle Pikachu 25, Kanto</p>
      </div>

      <button className="contact-home-button" onClick={() => navigate('/')}>Volver al Inicio</button>
      </div>
    </div>
  );
};

export default ContactoPage;
