# Mental Health Support App

Este proyecto es una aplicación móvil que proporciona recursos de salud mental, grupos de apoyo y ayuda profesional. Está desarrollado utilizando React Native y el stack MERN (MongoDB, Express, React, Node.js) con TypeScript.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de archivos:

En la carpeta "mobile":
- `src/components/Button.tsx`: Este archivo exporta un componente de botón para su uso en la aplicación móvil.
- `src/screens/HomeScreen.tsx`: Este archivo exporta una pantalla de inicio que muestra los recursos de salud mental disponibles.
- `src/screens/SupportGroupScreen.tsx`: Este archivo exporta una pantalla que muestra los grupos de apoyo disponibles.
- `src/services/api.ts`: Este archivo exporta funciones para interactuar con la API del servidor, como obtener recursos de salud mental y grupos de apoyo.
- `src/App.tsx`: Este archivo es el punto de entrada de la aplicación móvil. Configura la navegación y renderiza las pantallas.
- `src/index.tsx`: Este archivo inicia la aplicación móvil.

En la carpeta "server":
- `src/controllers/userController.ts`: Este archivo exporta un controlador de usuario que maneja las solicitudes relacionadas con los usuarios, como la autenticación y el registro.
- `src/models/userModel.ts`: Este archivo exporta un modelo de usuario que define la estructura de los datos de usuario almacenados en la base de datos.
- `src/routes/userRoutes.ts`: Este archivo exporta las rutas relacionadas con los usuarios, como las rutas para el inicio de sesión y el registro.
- `src/server.ts`: Este archivo es el punto de entrada del servidor. Configura las rutas y la conexión a la base de datos.
- `package.json`: Este archivo es el archivo de configuración de npm. Lista las dependencias y scripts del proyecto.
- `tsconfig.json`: Este archivo es el archivo de configuración de TypeScript. Especifica las opciones del compilador y los archivos a incluir en la compilación.
- `.env`: Este archivo es un archivo de configuración que contiene variables de entorno para el servidor, como la URL de la base de datos.

## Instalación

1. Clona este repositorio.
2. Navega a la carpeta "mobile" y ejecuta `npm install` para instalar las dependencias de la aplicación móvil.
3. Navega a la carpeta "server" y ejecuta `npm install` para instalar las dependencias del servidor.
4. Configura las variables de entorno en el archivo `.env` del servidor.
5. Ejecuta `npm start` en la carpeta "mobile" para iniciar la aplicación móvil.
6. Ejecuta `npm start` en la carpeta "server" para iniciar el servidor.

¡Disfruta de la aplicación de apoyo a la salud mental!
```

Recuerda que este archivo es solo una plantilla inicial y puedes personalizarlo según las necesidades de tu proyecto.