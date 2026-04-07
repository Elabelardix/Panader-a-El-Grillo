const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');
const authMiddleware = require('../middlewares/auth');

// Rutas protegidas por el middleware de autenticación
// Si la autenticación falla, la ejecución se corta en authMiddleware

// GET /venta -> Retorna información de acceso al panel de administrador
router.get('/venta', authMiddleware, ventasController.getAdminPanel);

// POST /venta -> Permite registrar una nueva venta
router.post('/venta', authMiddleware, ventasController.registerSale);

// GET /ventas -> Retorna el listado de todas las ventas almacenadas en memoria
router.get('/ventas', authMiddleware, ventasController.getAllSales);

module.exports = router;
