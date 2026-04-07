import React, { useState, useMemo } from 'react';
import styles from './Products.module.css';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import SearchBar from '../../components/SearchBar/SearchBar';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Nuestros Productos</h1>
          <p className={styles.subtitle}>Descubre la variedad y calidad artesanal que tenemos para vos.</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.filtersWrapper}>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No se encontraron productos que coincidan con tu búsqueda.</p>
              <button 
                className={styles.resetButton}
                onClick={() => { setActiveCategory('Todos'); setSearchTerm(''); }}
              >
                Limpiar Filtros
              </button>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
