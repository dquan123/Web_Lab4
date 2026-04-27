# PRUEBAS.md — Evidencia de pruebas con Postman

## Endpoints Informativos

### 1. GET /
- **URL:** `http://localhost:3001/`
- **Resultado:** 200 OK — HTML con lista de endpoints
- **Captura:** screenshots/documentacion.png

### 2. GET /info
- **URL:** `http://localhost:3001/info`
- **Resultado:** 200 OK — JSON con mensaje, curso, tecnologia, version
- **Captura:** screenshots/info.png

### 3. GET /saludo
- **URL:** `http://localhost:3001/saludo`
- **Resultado:** 200 OK — Texto plano con saludo
- **Captura:** screenshots/saludo.png

### 4. GET /api/status
- **URL:** `http://localhost:3001/api/status`
- **Resultado:** 200 OK — JSON con ok, status, puerto, timestamp
- **Captura:** screenshots/status.png

---

## Endpoints CRUD

### 5. GET /api/canciones — Todas
- **URL:** `http://localhost:3001/api/canciones`
- **Resultado:** 200 OK — Lista de canciones
- **Captura:** screenshots/canciones.png

### 6. GET /api/canciones?genero=Pop — Filtro
- **URL:** `http://localhost:3001/api/canciones?genero=Pop`
- **Resultado:** 200 OK — Solo canciones del género filtrado
- **Captura:** screenshots/query_p.png

### 7. GET /api/canciones/:id — Por ID válido
- **URL:** `http://localhost:3001/api/canciones/{id}`
- **Resultado:** 200 OK — Canción encontrada
- **Captura:** screenshots/get_id.png

### 8. GET /api/canciones/:id — ID inexistente
- **URL:** `http://localhost:3001/api/canciones/id-falso-123`
- **Resultado:** 404 — `{ "ok": false, "error": "Canción no encontrada" }`
- **Captura:** screenshots/no_encontrado.png

### 9. POST /api/canciones — Crear válido
- **URL:** `http://localhost:3001/api/canciones`
- **Body:**
```json
{
  "titulo": "Shape of You",
  "artista": "Ed Sheeran",
  "genero": "Pop",
  "duracion": "3:53",
  "favorita": true
}
```
- **Resultado:** 201 Created — Canción creada con id generado
- **Captura:** screenshots/post.png

### 10. POST /api/canciones — Campos incompletos
- **URL:** `http://localhost:3001/api/canciones`
- **Body:**
```json
{
  "titulo": "Sin artista"
}
```
- **Resultado:** 400 — `{ "ok": false, "error": "Faltan campos obligatorios" }`
- **Captura:** screenshots/post_ejemplo_error.png

### 11. PUT /api/canciones/:id — Reemplazar completo
- **URL:** `http://localhost:3001/api/canciones/{id}`
- **Body:**
```json
{
  "titulo": "Shape of You (Edit)",
  "artista": "Ed Sheeran",
  "genero": "Pop",
  "duracion": "3:00",
  "favorita": false
}
```
- **Resultado:** 200 OK — Canción completamente reemplazada
- **Captura:** screenshots/put.png

### 12. PATCH /api/canciones/:id — Actualizar parcial
- **URL:** `http://localhost:3001/api/canciones/{id}`
- **Body:**
```json
{
  "favorita": true
}
```
- **Resultado:** 200 OK — Solo campo favorita actualizado
- **Captura:** screenshots/patch.png

### 13. PATCH /api/canciones/:id — Body vacío
- **URL:** `http://localhost:3001/api/canciones/{id}`
- **Body:** `{}`
- **Resultado:** 400 — `{ "ok": false, "error": "Debes enviar al menos un campo para actualizar" }`
- **Captura:** screenshots/patch_ejemplo_error.png

### 14. DELETE /api/canciones/:id — Eliminar válido
- **URL:** `http://localhost:3001/api/canciones/{id}`
- **Resultado:** 200 OK — Canción eliminada devuelta en data
- **Captura:** screenshots/delete.png

### 15. DELETE /api/canciones/:id — ID inexistente
- **URL:** `http://localhost:3001/api/canciones/id-falso-123`
- **Resultado:** 404 — `{ "ok": false, "error": "Canción no encontrada" }`
- **Captura:** screenshots/delete_ejemplo_error.png

---

## Ruta 404

### 16. Ruta inexistente
- **URL:** `http://localhost:3001/ruta-que-no-existe`
- **Resultado:** 404 — JSON con error, ruta, metodo y sugerencia
- **Captura:** screenshots/ruta_no_encontrada.png