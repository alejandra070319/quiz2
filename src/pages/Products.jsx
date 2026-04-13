import React, { useState } from 'react';
import { ShoppingCart, Star, Filter } from 'lucide-react';
import './Page.css';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: 'Producto Premium', price: '$99.99', rating: 4.8, icon: '🎁' },
    { id: 2, name: 'Producto Estándar', price: '$49.99', rating: 4.5, icon: '📱' },
    { id: 3, name: 'Producto Básico', price: '$29.99', rating: 4.2, icon: '💼' },
    { id: 4, name: 'Producto Deluxe', price: '$149.99', rating: 4.9, icon: '👑' },
    { id: 5, name: 'Producto Plus', price: '$79.99', rating: 4.7, icon: '⚡' },
    { id: 6, name: 'Producto Lite', price: '$19.99', rating: 4.0, icon: '🌟' },
  ];

  return (
    <div className="page-container products-page">
      <div className="page-header">
        <h1>Productos</h1>
        <p>Descubre nuestro catálogo completo de productos</p>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <Filter size={20} />
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${filter === 'popular' ? 'active' : ''}`}
          onClick={() => setFilter('popular')}
        >
          Populares
        </button>
        <button
          className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
          onClick={() => setFilter('new')}
        >
          Nuevos
        </button>
        <button
          className={`filter-btn ${filter === 'sale' ? 'active' : ''}`}
          onClick={() => setFilter('sale')}
        >
          En Oferta
        </button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.icon}</div>
            <h3>{product.name}</h3>
            <div className="product-rating">
              <Star size={16} fill="#ffc107" color="#ffc107" />
              <span>{product.rating}</span>
            </div>
            <p className="product-price">{product.price}</p>
            <button className="product-btn">
              <ShoppingCart size={18} /> Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
