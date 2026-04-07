/**
 * Base de datos en memoria para simular el registro de ventas.
 * Eventualmente, esto será reemplazado por una base de datos real (como MongoDB, PostgreSQL, etc).
 */
let sales = [];

// Retorna un mensaje indicando que el acceso al panel ha sido exitoso
const getAdminPanel = (req, res) => {
    res.json({
        message: 'Acceso concedido al panel de administrador.',
        status: 'success'
    });
};

// Registra una nueva venta
const registerSale = (req, res) => {
    const { name, price, quantity } = req.body;

    // Validación básica de los datos recibidos
    if (!name || isNaN(price) || isNaN(quantity)) {
        return res.status(400).json({ error: 'Faltan datos obligatorios o los tipos son incorrectos. (name, price, quantity)' });
    }

    // Crear un objeto de venta
    const newSale = {
        id: Date.now(), // ID único simple basado en el timestamp actual
        name,
        price: Number(price),
        quantity: Number(quantity),
        total: Number(price) * Number(quantity),
        date: new Date().toISOString()
    };

    // Guardar en la base de datos en memoria
    sales.push(newSale);

    // Responder al cliente con un estado 201 (Created)
    res.status(201).json({
        message: 'Venta registrada con éxito.',
        sale: newSale
    });
};

// Devuelve todas las ventas registradas
const getAllSales = (req, res) => {
    res.json({
        message: 'Listado de ventas.',
        count: sales.length,
        sales: sales
    });
};

module.exports = {
    getAdminPanel,
    registerSale,
    getAllSales
};
