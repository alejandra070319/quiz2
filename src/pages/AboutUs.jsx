import React from 'react';
import { Target, Heart } from 'lucide-react';
import './Page.css';

const AboutUs = () => {
  return (
    <div className="page-container about-page">
      {/* Header */}
      <div className="page-header">
        <h1>Quiénes Somos</h1>
        <p>Conoce nuestra historia y misión</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <section className="about-section">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en 2024, Unilibre es una plataforma innovadora dedicada a proporcionar
            soluciones tecnológicas de clase mundial. Nuestro equipo está comprometido con
            ofrecer la mejor experiencia a nuestros usuarios.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mv-card">
            <Target size={40} />
            <h3>Nuestra Misión</h3>
            <p>Empoderar negocios con tecnología moderna y accesible para todos.</p>
          </div>
          <div className="mv-card">
            <Heart size={40} />
            <h3>Nuestros Valores</h3>
            <p>Innovación, calidad y servicio al cliente son nuestros pilares fundamentales.</p>
          </div>
        </div>

        {/* Team */}
        <section className="about-section">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            {[
              { name: 'Juan Pérez', role: 'Director General', emoji: '👨‍💼' },
              { name: 'María García', role: 'Directora Técnica', emoji: '👩‍💻' },
              { name: 'Carlos López', role: 'Diseñador UX/UI', emoji: '🎨' },
              { name: 'Ana Martínez', role: 'Gerente de Proyectos', emoji: '📊' },
            ].map((member, idx) => (
              <div key={idx} className="team-member">
                <div className="member-avatar">{member.emoji}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <h2>Nuestros Logros</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Clientes Satisfechos</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Proyectos Completados</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Soporte Disponible</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p>Disponibilidad del Servicio</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
