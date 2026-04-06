# Aplicación React

## Descripción

Aplicación web full-stack para gestionar notas personales. Permite a los usuarios registrarse, autenticarse y crear, editar y eliminar notas. Desarrollada con tecnologías modernas de JavaScript (React, Node.js y Express).

## Requisitos Previos

Antes de iniciar, asegúrate de tener instalado:

- **Node.js** (v14 o superior)
- **npm** (gestor de paquetes)
- **MongoDB** (la aplicación utiliza MongoDB como base de datos)

## Instalación

### 1. Backend (Servidor Node.js + Express)

```bash
# Navega a la carpeta backend
cd ./backend

# Instala las dependencias
npm install

# Configura las variables de entorno
# Crea un archivo .env en la carpeta backend con tus configuraciones
# (consulta la sección de Configuración)
```

### 2. Frontend (Aplicación React + Vite)

```bash
# Navega a la carpeta frontend
cd ./frontend

# Instala las dependencias
npm install
```

## Configuración

### Variables de Entorno (Backend)

Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

```
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta_jwt
PORT=5000
```

## Ejecución

Para ejecutar la aplicación, necesitas abrir **dos terminales** (una para el backend y otra para el frontend):

### Terminal 1 - Backend

```bash
cd ./backend
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Terminal 2 - Frontend

```bash
cd ./frontend
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
entorno-react/
├── backend/                    # Servidor API REST
│   ├── src/
│   │   ├── config/            # Configuración de base de datos
│   │   ├── controllers/       # Lógica de negocio
│   │   ├── helpers/           # Funciones auxiliares (JWT, bcrypt)
│   │   ├── middlewares/       # Middlewares de autenticación
│   │   ├── models/            # Modelos de datos (Mongoose)
│   │   └── routes/            # Definición de rutas
│   ├── app.js                 # Configuración principal
│   └── package.json
│
└── frontend/                   # Aplicación React
    ├── src/
    │   ├── components/        # Componentes reutilizables
    │   ├── pages/            # Páginas de la aplicación
    │   ├── routes/           # Configuración de rutas
    │   ├── hooks/            # Hooks personalizados
    │   ├── assets/           # Recursos estáticos
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Tecnologías Utilizadas

### Backend

- **Node.js** - Runtime de JavaScript
- **Express** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **bcryptjs** - Encriptación de contraseñas
- **JWT** - Autenticación por tokens

### Frontend

- **React** - Biblioteca UI
- **Vite** - Herramienta de construcción
- **React Router** - Enrutamiento

## Características

✅ Autenticación y autorización de usuarios  
✅ CRUD completo de notas  
✅ Restricción de acceso por propietario  
✅ Contraseñas encriptadas  
✅ Tokens JWT para sesiones seguras

## Solución de Problemas

- **Error de conexión a MongoDB**: Verifica que el servidor MongoDB esté corriendo y que la URI en `.env` sea correcta
- **Puerto en uso**: Si el puerto 5000 o 5173 está en uso, modifica la configuración en el archivo `.env` o `vite.config.js`
- **Dependencias no instaladas**: Ejecuta `npm install` en ambas carpetas

## Licencia

Este proyecto se proporciona tal cual, sin licencia específica.

---
