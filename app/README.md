# Aplicación de Salud Mental

Este proyecto es una aplicación móvil que proporciona recursos de salud mental, grupos de apoyo y ayuda profesional. Está desarrollada utilizando el stack MERN (MongoDB, Express, React, Node) y React Native.

## Estructura de archivos

El proyecto tiene la siguiente estructura de archivos:

En la carpeta "api":
- `api/src/controllers/usuarioController.js`: Este archivo exporta un controlador llamado `usuarioController` que contiene métodos para manejar las operaciones relacionadas con los usuarios.
- `api/src/models/usuarioModel.js`: Este archivo exporta un modelo llamado `usuarioModel` que define la estructura de los datos de un usuario en la base de datos.
- `api/src/routes/usuarioRoutes.js`: Este archivo exporta un enrutador llamado `usuarioRoutes` que maneja las rutas relacionadas con los usuarios.
- `api/src/app.js`: Este archivo es el punto de entrada de la aplicación de Express. Configura la aplicación, los middleware y las rutas.
- `api/package.json`: Este archivo es el archivo de configuración de npm. Lista las dependencias y scripts del proyecto.
- `api/README.md`: Este archivo contiene la documentación para la carpeta "api".
- `api/.env`: Este archivo contiene las variables de entorno para la configuración de la aplicación.

En la carpeta "app":
- `app/src/components/Chat.js`: Este archivo exporta un componente llamado `Chat` que muestra la funcionalidad de chat en la aplicación móvil.
- `app/src/components/GruposApoyo.js`: Este archivo exporta un componente llamado `GruposApoyo` que muestra la funcionalidad de grupos de apoyo en la aplicación móvil.
- `app/src/components/Recursos.js`: Este archivo exporta un componente llamado `Recursos` que muestra la funcionalidad de recursos en la aplicación móvil.
- `app/src/screens/HomeScreen.js`: Este archivo exporta un componente llamado `HomeScreen` que muestra la pantalla de inicio de la aplicación móvil.
- `app/src/screens/LoginScreen.js`: Este archivo exporta un componente llamado `LoginScreen` que muestra la pantalla de inicio de sesión de la aplicación móvil.
- `app/src/screens/ProfileScreen.js`: Este archivo exporta un componente llamado `ProfileScreen` que muestra la pantalla de perfil de usuario en la aplicación móvil.
- `app/src/App.js`: Este archivo es el punto de entrada de la aplicación móvil. Configura la navegación y muestra las pantallas correspondientes.
- `app/src/README.md`: Este archivo contiene la documentación para la carpeta "app".
- `app/package.json`: Este archivo es el archivo de configuración de npm. Lista las dependencias y scripts del proyecto.
- `app/README.md`: Este archivo contiene la documentación para la carpeta raíz del proyecto.

## Configuración

Antes de ejecutar la aplicación, asegúrate de seguir los siguientes pasos de configuración:

1. En la carpeta "api", crea un archivo llamado `.env` y configura las variables de entorno necesarias para la conexión a la base de datos MongoDB y otras configuraciones específicas de tu entorno.

## Ejecución

Sigue estos pasos para ejecutar la aplicación:

1. En la carpeta "api", ejecuta el siguiente comando para instalar las dependencias del servidor:
   ```
   npm install
   ```

2. En la carpeta "api", ejecuta el siguiente comando para iniciar el servidor:
   ```
   npm start
   ```

3. En la carpeta "app", ejecuta el siguiente comando para instalar las dependencias de la aplicación móvil:
   ```
   npm install
   ```

4. En la carpeta "app", ejecuta el siguiente comando para iniciar la aplicación móvil:
   ```
   npm start
   ```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con el nombre de tu nueva funcionalidad o mejora.
3. Realiza los cambios necesarios en tu rama.
4. Haz un pull request a la rama principal de este repositorio.

¡Gracias por tu contribución!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.