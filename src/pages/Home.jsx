import React from 'react';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import './Page.css';

const Home = () => {
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Unilibre</h1>
          <p className="hero-subtitle">
            La plataforma profesional para transformar tu negocio con tecnología moderna
          </p>
          <button className="cta-button">
            Explorar Más <ArrowRight size={20} />
          </button>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <Code size={32} />
          </div>
          <div className="floating-card card-2">
            <Zap size={32} />
          </div>
          <div className="floating-card card-3">
            <Globe size={32} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Nuestras Características</h2>
        <div className="features-grid">
          {[
            { icon: <Code size={40} />, title: 'Tecnología Moderna', desc: 'Desarrollado con React y las mejores prácticas' },
            { icon: <Zap size={40} />, title: 'Rápido y Eficiente', desc: 'Rendimiento optimizado para mejor experiencia' },
            { icon: <Globe size={40} />, title: 'Totalmente Responsivo', desc: 'Funciona perfectamente en todos los dispositivos' },
          ].map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
