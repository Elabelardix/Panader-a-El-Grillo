/**
 * Middleware de Autenticación
 * 
 * Este middleware intercepta las peticiones y verifica si las credenciales
 * proporcionadas son correctas. Las credenciales pueden venir en:
 * 1. Los query parameters: ?user=admin&pass=1234
 * 2. Los headers (Authorization): Por simplicidad esperaremos un string que contenga "admin:1234" 
 *    o algo similar, pero para ser más flexibles podemos chequear un header custom o Authorization estándar.
 *    Aquí lo haremos con un formato muy básico en los headers para propositos de demo.
 */

const authMiddleware = (req, res, next) => {
    const { user, pass } = req.query;
    
    // Obtener el header Authorization (si usáramos Basic auth o un token hardcodeado)
    const authHeader = req.headers.authorization;

    // Verificar query parameters (prioridad 1)
    if (user === 'admin' && pass === '1234') {
        return next(); // Autenticación exitosa, pasar al siguiente middleware/controlador
    }

    // Verificar header (prioridad 2)
    // Ejemplo: Esperaríamos que desde el frontend envíen un header de autorización
    // "Authorization: Bearer admin:1234" (formato inventado para este caso simple)
    if (authHeader && authHeader.includes('admin:1234')) {
        return next(); // Autenticación exitosa
    }

    // Si nada coincide, devolver error 401 Unauthorized
    return res.status(401).json({ error: 'No autorizado. Credenciales inválidas.' });
};

module.exports = authMiddleware;
