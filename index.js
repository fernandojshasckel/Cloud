const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const PORT = 3000
const Usuario = require('./models/Usuario')


//Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main.handlebars',
        layoutsDir: "views/layout/"
    }));
    app.set('view engine', 'handlers')
    // Express
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

// Rotas
    app.get('/register', function (req, res){
        res.render('register.handlebars')
    })

    app.get('/', function (req, res){
        res.render('login.handlebars')
    })

    app.get('/home', function (req, res){
        Usuario.findAll().then(function(usuarios){
            res.render('home.handlebars', {teste: "Fernando"})
            console.log(teste)
        })
    })

    app.post('/add', function(req, res) {
        Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }).then(function(){
            res.redirect('/home')
        }).catch(function(erro){
            res.send(`Erro ao cadastrar usuario ${erro}`)
        })
    })

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
  console.log(`Para acessar: http://localhost:3000`)
})