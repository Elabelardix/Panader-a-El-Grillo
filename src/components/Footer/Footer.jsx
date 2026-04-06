import React from 'react';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
          <h3 className={styles.brand}>Panadería El Grillo</h3>
          <p className={styles.tagline}>Calidad y sabor artesanal en cada momento del día.</p>
        </div>
        
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FiMapPin className={styles.icon} />
            <div>
              <h4>Ubicación</h4>
              <p>Avenida Alem 117</p>
              <p>Palmira, Mendoza, Argentina</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <FiClock className={styles.icon} />
            <div>
              <h4>Horarios</h4>
              <p>Lun - Sáb: 8:00–13:30 / 17:00–21:00</p>
              <p>Dom: 8:30–13:30 / 17:00–20:00</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FiPhone className={styles.icon} />
            <div>
              <h4>Contacto</h4>
              <a href="tel:+5492634202292" className={styles.phoneLink}>2634202292</a>
              <p className={styles.deliveryNote}>* No contamos con servicio de delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Panadería El Grillo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
