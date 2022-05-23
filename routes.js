import express from "express";

const routes = express.Router();

/**
 * send manda uma informação
 * sendFile serve para mandar arquivo
 * __dirname retorna o diretorio raiz da minha aplicação
*/

routes.get('/', function (req, res) {
  res.sendFile(__dirname + "/main.html")
})

export { routes as default };