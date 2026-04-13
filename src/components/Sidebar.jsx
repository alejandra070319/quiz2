import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Layers, Package, Mail, Users } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/catalogo', label: 'Catálogo', icon: Layers },
    { path: '/productos', label: 'Productos', icon: Package },
    { path: '/contacto', label: 'Contacto', icon: Mail },
    { path: '/quienes-somos', label: 'Quiénes somos', icon: Users },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Header con Logo */}
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-circle">U</div>
            <h1 className="logo-text">Unilibre</h1>
          </div>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={20} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {isActive && <div className="active-indicator"></div>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <p className="footer-text">© 2024 Unilibre</p>
          <p className="footer-version">v1.0.0</p>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        className={`sidebar-toggle ${isOpen ? 'hidden' : 'visible'}`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Overlay móvil */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
