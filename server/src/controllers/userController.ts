// File: /mental_health_support/server/src/controllers/userController.ts

import { Request, Response } from 'express';
import UserModel from '../models/userModel';

// Controlador para el registro de usuarios
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new UserModel({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controlador para el inicio de sesión de usuarios
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña del usuario
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
```

Este es el contenido del archivo `userController.ts` en la ruta `/mental_health_support/server/src/controllers/userController.ts`. El archivo contiene dos controladores: `registerUser` para el registro de usuarios y `loginUser` para el inicio de sesión de usuarios. Estos controladores manejan las solicitudes relacionadas con los usuarios y envían respuestas adecuadas según el resultado de la operación.