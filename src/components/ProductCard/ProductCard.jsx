import React from 'react';
import styles from './ProductCard.module.css';
import HighlightBadge from '../HighlightBadge/HighlightBadge';

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.card} ${product.highlight ? styles.highlighted : ''}`}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />
        {product.highlight && <HighlightBadge text="¡Promo Especial!" />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{product.category}</span>
          <span className={styles.price}>${product.price}</span>
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
