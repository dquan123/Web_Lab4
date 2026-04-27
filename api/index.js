import express from "express"
import crypto from "crypto"

const app = express()
const PORT = 3001

// Middleware para parsear JSON en el body
app.use(express.json())

// Datos iniciales
let canciones = [
  {
    id: crypto.randomUUID(),
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    genero: "Rock",
    duracion: "5:55",
    favorita: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    genero: "Pop",
    duracion: "3:20",
    favorita: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "HUMBLE.",
    artista: "Kendrick Lamar",
    genero: "Hip-Hop",
    duracion: "2:57",
    favorita: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "bad guy",
    artista: "Billie Eilish",
    genero: "Pop",
    duracion: "3:14",
    favorita: false
  }
]

// GET / - Documentación HTML
app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>API de Canciones</h1>
    <h2>Endpoints informativos</h2>
    <ul>
      <li>GET /info</li>
      <li>GET /saludo</li>
      <li>GET /api/status</li>
    </ul>
    <h2>Endpoints CRUD</h2>
    <ul>
      <li>GET /api/canciones</li>
      <li>GET /api/canciones/:id</li>
      <li>POST /api/canciones</li>
      <li>PUT /api/canciones/:id</li>
      <li>PATCH /api/canciones/:id</li>
      <li>DELETE /api/canciones/:id</li>
    </ul>
  `)
})

// GET /info - Info de la API en JSON
app.get("/info", (req, res) => {
  res.status(200).json({
    ok: true,
    data: {
      mensaje: "API REST de Canciones",
      curso: "Sistemas y Tecnologías Web",
      tecnologia: "Node.js + Express",
      version: "1.0.0"
    }
  })
})

// GET /saludo - Texto plano personalizado
app.get("/saludo", (req, res) => {
  res.status(200).send("¡Hola! Bienvenido a la API de Canciones 🎵")
})

// GET /api/status - Estado del servidor
app.get("/api/status", (req, res) => {
  res.status(200).json({
    ok: true,
    status: "online",
    puerto: PORT,
    timestamp: new Date()
  })
})

// GET /api/canciones - Obtener todas (con filtro opcional por genero)
app.get("/api/canciones", (req, res) => {
  const { genero } = req.query

  if (genero) {
    const filtradas = canciones.filter(
      c => c.genero.toLowerCase() === genero.toLowerCase()
    )
    return res.status(200).json({ ok: true, data: filtradas })
  }

  res.status(200).json({ ok: true, data: canciones })
})