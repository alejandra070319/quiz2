import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Page.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container contact-page">
      <div className="page-header">
        <h1>Contacto</h1>
        <p>¿Tienes preguntas? Nos encantaría ayudarte</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <Mail size={32} />
            <h3>Email</h3>
            <p>info@unilibre.com</p>
          </div>
          <div className="info-card">
            <Phone size={32} />
            <h3>Teléfono</h3>
            <p>+57 (1) 2345-6789</p>
          </div>
          <div className="info-card">
            <MapPin size={32} />
            <h3>Ubicación</h3>
            <p>Bogotá, Colombia</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            <Send size={18} /> Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
