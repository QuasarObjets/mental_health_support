// /app-salud-mental/api/src/models/usuarioModel.js

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;