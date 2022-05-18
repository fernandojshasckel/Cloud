const express = require('express')
const app = express()
const PORT = 3000
/**
 * send manda uma informação
 * sendFile serve para mandar arquivo
 * __dirname retorna o diretorio raiz da minha aplicação
*/

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/main.html")
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/main.html")
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
  console.log(`Para acessar: http://localhost:3000`)
})