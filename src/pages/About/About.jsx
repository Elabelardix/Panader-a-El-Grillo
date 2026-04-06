import React from 'react';
import styles from './About.module.css';
import { FiCoffee, FiStar, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.aboutHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sobre Nosotros</h1>
        </div>
      </header>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>Tradición y Calidad</h2>
              <p>
                En <strong>Panadería El Grillo</strong> nos enorgullecemos de ofrecer productos frescos
                y de la más alta calidad. Cada uno de nuestros panificados y pastelería
                es elaborado de manera artesanal, respetando recetas tradicionales
                para llevar el mejor sabor a tu mesa.
              </p>
              <p>
                Seleccionamos cuidadosamente nuestros ingredientes, garantizando
                que cada factura, torta y pan tenga el sabor auténtico que nos caracteriza.
              </p>
            </div>
            <div className={styles.imageGallery}>
               <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600" alt="Artesanal" className={styles.imageMain} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
         <div className={styles.container}>
           <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                 <FiStar className={styles.icon} />
                 <h3>Alta Calidad</h3>
                 <p>Los mejores ingredientes seleccionados para un sabor inigualable.</p>
              </div>
              <div className={styles.valueCard}>
                 <FiHeart className={styles.icon} />
                 <h3>Artesanal</h3>
                 <p>Elaboración diaria con técnicas tradicionales y mucho amor.</p>
              </div>
              <div className={styles.valueCard}>
                 <FiCoffee className={styles.icon} />
                 <h3>Experiencia Café</h3>
                 <p>Acompañá nuestros productos con el mejor café en grano italiano.</p>
              </div>
           </div>
         </div>
      </section>

      <section className={styles.locationSection}>
         <div className={styles.container}>
            <div className={styles.locationContent}>
               <h2 className={styles.subtitle}>Encontranos</h2>
               <div className={styles.addressBox}>
                  <p className={styles.addressLine}>Avenida Alem 117</p>
                  <p className={styles.addressLine}>Palmira, Mendoza</p>
                  <p className={styles.addressLine}>Argentina</p>
                  <div className={styles.hours}>
                     <h4>Horarios de Atención:</h4>
                     <p>Lunes a Sábado: 8:00 – 13:30 hs y 17:00 – 21:00 hs</p>
                     <p>Domingo: 8:30 – 13:30 hs y 17:00 – 20:00 hs</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
