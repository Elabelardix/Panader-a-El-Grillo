/**
 * Servicio para manejar la comunicación con nuestra API Backend.
 * Centraliza los "fetch" para hacer el código de React más limpio.
 */

// Usamos la variable de entorno configurada en Vite (.env)
// Si no existe, usamos localhost por defecto.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Credenciales hardcodeadas por el momento (según los requerimientos actuales)
const DEFAULT_AUTH_PARAMS = '?user=admin&pass=1234';

/**
 * Función para obtener todas las ventas
 * @returns {Promise<Array>} Un array de ventas
 */
export const fetchSales = async () => {
    try {
        const response = await fetch(`${API_URL}/ventas${DEFAULT_AUTH_PARAMS}`);
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('No autorizado. Credenciales inválidas.');
            }
            throw new Error(`Error en el servidor: ${response.status}`);
        }

        const data = await response.json();
        return data.sales; // Del array devuelto por el backend
    } catch (error) {
        console.error("Error fetching sales:", error);
        throw error;
    }
};

/**
 * Función para registrar una nueva venta
 * @param {Object} saleData - Objeto con name, price y quantity.
 * @returns {Promise<Object>} La respuesta con el nuevo objeto registrado
 */
export const createSale = async (saleData) => {
    try {
        const response = await fetch(`${API_URL}/venta${DEFAULT_AUTH_PARAMS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saleData)
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('No autorizado para subir una nueva venta.');
            }
            throw new Error(`Error al crear la venta: ${response.status}`);
        }

        const data = await response.json();
        return data.sale; 
    } catch (error) {
        console.error("Error creating a sale:", error);
        throw error;
    }
};
