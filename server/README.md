# ⚙️ K-Api — Backend de K-Wiki

Este es el **backend** del proyecto **K-Wiki**.  
Una **API REST** construida con **Node.js, Express y MongoDB** que gestiona datos de **grupos, álbumes, canciones, fandoms, integrantes y empresas de Kpop**.

---

## 🛠️ Tecnologías principales

- Node.js + Express  
- MongoDB + Mongoose  
- Dotenv (manejo de variables de entorno)  
- CORS  
- (Próximamente) JWT + Middleware de autenticación  

---

## 🚀 Instalación y uso en desarrollo

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/NicoolDqek/k-api
   cd k-api/server
   -npm install

##Ejecutar servidor en desarrollo:

- npm run dev   # con nodemon
# o
- node server.js

###📂 Estructura de carpetas
- server/
- │── configuracion/  # configuracion de la BD
- │── models/         # Modelos de MongoDB (Mongoose)
- │── routes/         # Definición de endpoints
- │── controllers/    # Lógica de negocio de cada entidad
- │── server.js       # Punto de entrada principal
- │── .env.example    # Variables de entorno ejemplo

##📡 Endpoints principales

### 🎤 Grupos
- http
- GET    /api/grupos         # Lista todos los grupos
- GET    /api/grupos/:id     # Obtiene un grupo por ID
- POST   /api/grupos         # Crea un nuevo grupo

###💿 Álbumes
- GET    /api/albums         # Lista todos los álbumes
- GET    /api/albums/:id     # Obtiene un álbum por ID
- POST   /api/albums         # Crea un nuevo álbum


###🎶 Canciones
- GET    /api/canciones      # Lista todas las canciones
- GET    /api/canciones/:id  # Obtiene una canción por ID
- POST   /api/canciones      # Crea una nueva canción


###👥 Integrantes
- GET    /api/integrantes       # Lista todos los integrantes
- GET    /api/integrantes/:id   # Obtiene un integrante por ID
- POST   /api/integrantes       # Crea un nuevo integrante


###🌐 Empresas
- GET    /api/empresas       # Lista todas las empresas
- GET    /api/empresas/:id   # Obtiene una empresa por ID
- POST   /api/empresas       # Crea una nueva empresa

###🔜 Próximas mejoras

- Autenticación con JWT
- Sistema de favoritos por usuario
- Roles y permisos
- Tests unitarios con Jest o Mocha

## 🔎 Endpoints con filtros

Además de los protocolos Base básicos, existen endpoints con filtros para realizar búsquedas específicas.

---

### 💿 Filtros de Álbumes
http
- GET /api/album/filtros
- GET /api/album/filtros?grupo=BLACKPINK&ordenar=asc

### 🎤 Filtros de Grupos
- GET /api/grupo/filtros?empresa=SM%20Entertainment&generacion=3

### 🎤 Filtros de Integrantes
- GET /api/integrante/filtros?empresa=SM%20Entertainment&generacion=3