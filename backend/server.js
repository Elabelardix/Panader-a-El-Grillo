const express = require('express');
const cors = require('cors');
const ventasRoutes = require('./routes/ventasRoutes');

const app = express();
const PORT = 3000;

// Enable CORS for connecting with the React frontend
app.use(cors());

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Main route for sales related operations
app.use('/', ventasRoutes);

// General route to check if server is working
app.get('/', (req, res) => {
    res.send('Panaderia Backend is running.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
