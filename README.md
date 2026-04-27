# Laboratorio 4 - JavaScript API

**Curso:** Sistemas y Tecnologías Web  
**Universidad:** Universidad del Valle de Guatemala  
**Estudiante:** Diego Quan
**Carnet:** 24336

---

## Descripción

API REST construida con Node.js y Express para gestionar una colección de canciones. Permite realizar operaciones CRUD completas sobre el recurso, con validación de datos, códigos HTTP correctos y filtrado por query parameters.

---

## Estructura del proyecto

Lab4/

├── parte1/

│   ├── servidor-malo.js      ← servidor original con errores

│   ├── servidor-corregido.js ← servidor corregido

│   ├── datos.json

│   └── SOLUCION.md           ← documentación de errores encontrados

├── index.js                  ← API REST con Express

├── package.json

└── README.md

---

## Cómo correr el proyecto

### Parte 1 — Servidor corregido
```bash
cd parte1
node servidor-corregido.js
```
Servidor disponible en: `http://localhost:3000`

### Parte 2 — API con Express
```bash
node index.js
```
API disponible en: `http://localhost:3001`

---

## Endpoints

### Informativos

| Método | Ruta | Descripción | Respuesta |
|--------|------|-------------|-----------|
| GET | `/` | Documentación de endpoints | HTML |
| GET | `/info` | Información de la API | JSON |
| GET | `/saludo` | Saludo personalizado | Texto plano |
| GET | `/api/status` | Estado del servidor | JSON |

### CRUD — Canciones

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/canciones` | Obtener todas las canciones |
| GET | `/api/canciones?genero=Pop` | Filtrar canciones por género |
| GET | `/api/canciones/:id` | Obtener una canción por ID |
| POST | `/api/canciones` | Crear una nueva canción |
| PUT | `/api/canciones/:id` | Reemplazar una canción completa |
| PATCH | `/api/canciones/:id` | Actualizar campos parcialmente |
| DELETE | `/api/canciones/:id` | Eliminar una canción |

---

## Estructura de una canción

```json
{
  "id": "uuid generado automáticamente",
  "titulo": "Bohemian Rhapsody",
  "artista": "Queen",
  "genero": "Rock",
  "duracion": "5:55",
  "favorita": true
}
```

**Campos obligatorios para POST y PUT:** `titulo`, `artista`, `genero`, `duracion`  
**Campo opcional:** `favorita` (default: `false`)

---

## Formato de respuestas

Todas las respuestas siguen una estructura consistente:

```json
// Éxito
{ "ok": true, "data": { } }

// Error
{ "ok": false, "error": "Mensaje descriptivo" }
```

## Códigos HTTP utilizados

| Código | Significado | Cuándo se usa |
|--------|-------------|---------------|
| 200 | OK | Respuestas exitosas |
| 201 | Created | Creación exitosa (POST) |
| 400 | Bad Request | Datos inválidos o incompletos |
| 404 | Not Found | Recurso o ruta no encontrada |

---

## Tecnologías

- Node.js
- Express 4
- ES Modules (import/export)
