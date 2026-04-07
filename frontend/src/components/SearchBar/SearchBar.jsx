import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchWrapper}>
      <FiSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
