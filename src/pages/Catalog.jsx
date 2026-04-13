import React from 'react';
import { Layers, Filter, Search } from 'lucide-react';
import './Page.css';

const Catalog = () => {
  const categories = [
    { id: 1, name: 'Categoría 1', icon: '📦', count: 12 },
    { id: 2, name: 'Categoría 2', icon: '🎯', count: 18 },
    { id: 3, name: 'Categoría 3', icon: '⭐', count: 25 },
    { id: 4, name: 'Categoría 4', icon: '🚀', count: 15 },
    { id: 5, name: 'Categoría 5', icon: '💡', count: 20 },
    { id: 6, name: 'Categoría 6', icon: '🎨', count: 16 },
  ];

  return (
    <div className="page-container catalog-page">
      <div className="page-header">
        <h1>Catálogo</h1>
        <p>Explora nuestras categorías disponibles</p>
      </div>

      {/* Search and Filter */}
      <div className="search-bar">
        <Search size={20} />
        <input type="text" placeholder="Buscar categorías..." />
      </div>

      {/* Categories Grid */}
      <div className="catalog-grid">
        {categories.map((category) => (
          <div key={category.id} className="catalog-card">
            <div className="catalog-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <p className="catalog-count">{category.count} items</p>
            <button className="catalog-btn">Ver más →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
