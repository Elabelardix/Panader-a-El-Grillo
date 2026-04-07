import { useState, useEffect } from 'react';
import styles from './AdminPanel.module.css';
import { fetchSales, createSale } from '../../services/api';

const AdminPanel = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form states
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Carga inicial de ventas
  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {
    setLoading(true);
    setError(null);
    try {
      const dbSales = await fetchSales();
      setSales(dbSales);
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setError('El servidor backend no está disponible. Asegúrate de iniciarlo.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const saleData = {
      name: name,
      price: Number(price),
      quantity: Number(quantity)
    };

    try {
      await createSale(saleData);
      
      // Limpiar el formulario
      setName('');
      setPrice('');
      setQuantity('');
      
      // Refrescar la lista de ventas
      await loadSales();
      
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.title}>Panel de Administrador (Ventas)</h1>

      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}

      <div className={styles.content}>
        <section className={styles.formSection}>
          <h2>Registrar Venta</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="productName">Producto</label>
              <input
                type="text"
                id="productName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del pan/factura..."
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="price">Precio Unitario ($)</label>
              <input
                type="number"
                id="price"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="quantity">Cantidad</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="1"
                required
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={submitting}
            >
              {submitting ? 'Registrando...' : 'Registrar Venta'}
            </button>
          </form>
        </section>

        <section className={styles.listSection}>
          <h2>Listado de Ventas</h2>
          
          {loading ? (
            <p className={styles.loadingText}>Cargando ventas...</p>
          ) : sales.length === 0 ? (
            <p className={styles.emptyText}>No hay ventas registradas todavía.</p>
          ) : (
            <div className={styles.tableResponsive}>
              <table className={styles.salesTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Cant.</th>
                    <th>Precio Uni.</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale) => (
                    <tr key={sale.id}>
                      <td>{String(sale.id).slice(-6)}</td>
                      <td>{sale.name}</td>
                      <td>{sale.quantity}</td>
                      <td>${sale.price.toFixed(2)}</td>
                      <td><b>${sale.total.toFixed(2)}</b></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminPanel;
