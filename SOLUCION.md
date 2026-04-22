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

