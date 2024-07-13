const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Configurar middleware
app.use(express.json());

// Configurar rutas
app.use('/usuarios', usuarioRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = app;