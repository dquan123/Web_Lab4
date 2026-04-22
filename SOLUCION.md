### Error #1: Paréntesis de cierre faltante en `http.createServer(...)`
 
**Ubicación:** Línea 30 del archivo original  
**Tipo de error:** Sintaxis  
**Qué estaba mal:**  
La llamada a `http.createServer(async (req, res) => { ... }` cierra la función arrow con `}` pero le falta el `)` de cierre del `createServer(`. Node.js lanza un `SyntaxError: missing ) after argument list` al intentar ejecutar el archivo.
 
**Cómo lo corregí:**
```js
// Antes
}   // ← solo cierra la función arrow, falta el ) de createServer
 
// Después
})  // ← cierra la función arrow Y la llamada a createServer


### Error #2: Paréntesis de cierre faltante en `server.listen(PORT, () => {`
 
**Ubicación:** Línea 34 del archivo original  
**Tipo de error:** Sintaxis  
**Qué estaba mal:**  
La llamada a `server.listen(PORT, () => { ... }` cierra la función arrow con `}` pero le falta el `)` de cierre. Node.js lanza un `SyntaxError: missing ) after argument list` al intentar ejecutar el archivo.
 
**Cómo lo corregí:**
```js
// Antes
}   // ← solo cierra la función arrow, falta el ) de server.listen(...
 
// Después
})  // ← cierra la función arrow Y la llamada a server.listen
```


### Error #3: Cuerpo de respuesta en `/info` no es JSON
 
**Ubicación:** Línea 15 del archivo original  
**Tipo de error:** HTTP / Protocolo  
**Qué estaba mal:**  
La ruta `/info` declara `Content-Type: application/json` pero responde con texto plano (`"Ruta de información"`), lo que es una contradicción. El cliente espera JSON y recibe un string sin estructura.
 
**Cómo lo corregí:**
```js
// Antes
res.end("Ruta de información")
 
// Después
res.end(JSON.stringify({ mensaje: "Ruta de información" }))
```


### Error #4: Cuerpo de respuesta en `/info` no es JSON
 
**Ubicación:** Línea 16 del archivo original  
**Tipo de error:** HTTP / Protocolo  
**Qué estaba mal:**  
La ruta `/info` declara `Content-Type: application/json` pero responde con texto plano (`"Ruta de información"`), lo que es una contradicción. El cliente espera JSON y recibe un string sin estructura.
 
**Cómo lo corregí:**
```js
// Antes
res.end("Ruta de información")
 
// Después
res.end(JSON.stringify({ mensaje: "Ruta de información" }))
```
 
**Por qué funciona ahora:**  
Ahora el cuerpo es un objeto JSON válido serializado con `JSON.stringify()`, consistente con el `Content-Type` declarado.
 
---


### Error #5: `fs.readFile` sin `await`
 
**Ubicación:** Línea 22 del archivo original  
**Tipo de error:** Asincronía  
**Qué estaba mal:**  
`fs.readFile` (de `fs/promises`) devuelve una `Promise`, no el contenido del archivo directamente. Al no usar `await`, la variable `texto` recibe el objeto `Promise` pendiente, no el texto leído.
 
**Cómo lo corregí:**
```js
// Antes
const texto = fs.readFile(filePath, "utf-8")
 
// Después
const texto = await fs.readFile(filePath, "utf-8")
```
 
**Por qué funciona ahora:**  
`await` suspende la ejecución hasta que la Promise se resuelve, entregando el contenido real del archivo como string.
 
---


### Error #6: `JSON.stringify` aplicado sobre un string ya JSON
 
**Ubicación:** Línea 21 del archivo original  
**Tipo de error:** Lógica  
**Qué estaba mal:**  
`fs.readFile` con encoding `"utf-8"` ya devuelve el contenido del archivo como string. Al pasarlo por `JSON.stringify()`, se produce un doble-encoding: el objeto JSON del archivo queda envuelto en comillas y con caracteres escapados, enviando al cliente un string inválido como JSON.
 
**Cómo lo corregí:**
```js
// Antes
res.end(JSON.stringify(texto))
// Enviaba: "{\"nombre\":\"Tu Nombre\",...}" (string serializado, no objeto)
 
// Después
res.end(texto)
// Envía: {"nombre":"Tu Nombre",...} (JSON válido)
```
 
**Por qué funciona ahora:**  
Como `datos.json` ya es JSON válido, se puede enviar el string directamente. `JSON.stringify` solo se necesita cuando se tiene un objeto JavaScript que convertir, no un string JSON preexistente.
 
---


### Error #7: Código de estado 200 para ruta no encontrada
 
**Ubicación:** Línea 28 del archivo original  
**Tipo de error:** HTTP / Protocolo  
**Qué estaba mal:**  
Cuando el servidor no reconoce la ruta solicitada, responde con código `200 OK`. Esto engaña a los clientes haciéndoles creer que la solicitud fue exitosa, cuando en realidad la ruta no existe.
 
**Cómo lo corregí:**
```js
// Antes
res.writeHead(200, { "Content-Type": "text/plain" })
res.end("Ruta no encontrada")
 
// Después
res.writeHead(404, { "Content-Type": "application/json" })
res.end(JSON.stringify({ error: "Ruta no encontrada" }))
```
 
**Por qué funciona ahora:**  
El código HTTP `404 Not Found` es el estándar para indicar que el recurso solicitado no existe. También se mejoró el `Content-Type` a JSON para consistencia y se estructuró la respuesta como objeto.
 
---
