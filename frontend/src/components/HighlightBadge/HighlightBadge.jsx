import React from 'react';
import styles from './HighlightBadge.module.css';
import { FiStar } from 'react-icons/fi';

const HighlightBadge = ({ text }) => {
  return (
    <div className={styles.badge}>
      <FiStar className={styles.icon} />
      <span>{text}</span>
    </div>
  );
};

export default HighlightBadge;
