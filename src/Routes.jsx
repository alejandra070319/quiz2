import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import './Routes.css';

/**
 * AppRoutes - Configuración central de rutas
 * Gestiona toda la navegación de la aplicación
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/quienes-somos" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;
