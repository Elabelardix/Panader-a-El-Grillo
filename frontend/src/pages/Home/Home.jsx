import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const featuredProduct = productsData.find(p => p.highlight);
  const someProducts = productsData.filter(p => !p.highlight).slice(0, 3);

  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Panadería El Grillo</h1>
            <p className={styles.slogan}>Panadería El Grillo ofrece productos frescos y de alta calidad, elaborados de manera artesanal.</p>
            <Link to="/products" className={styles.ctaButton}>Ver Productos</Link>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Especialidad de la Casa</h2>
          {featuredProduct && (
            <div className={styles.featuredWrapper}>
               <ProductCard product={featuredProduct} />
            </div>
          )}
        </div>
      </section>

      <section className={styles.latestSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Recién Horneados</h2>
          <div className={styles.productsGrid}>
            {someProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.centerAction}>
             <Link to="/products" className={styles.secondaryButton}>Ver Carta Completa</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
