// File: /mental_health_support/server/src/routes/userRoutes.ts

import express from 'express';
import { loginUser, registerUser } from '../controllers/userController';

const router = express.Router();

// Ruta para el inicio de sesión de usuario
router.post('/login', loginUser);

// Ruta para el registro de usuario
router.post('/register', registerUser);

export default router;
