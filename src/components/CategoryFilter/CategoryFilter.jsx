import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className={styles.filterContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
