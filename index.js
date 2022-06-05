const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const PORT = 3000
const Usuario = require('./models/Usuario')
const Curriculo = require('./models/Curriculo')
const path = require("path")


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

    //Pagina inicial - nenhum registro
    //app.get('/', (req, res) => {
        //res.render('welcome.handlebars')
    //})

    //Pagina inicial - registro cadastrado
    app.get('/', (req, res) => {
        res.render('index.handlebars')
    })

    //Novo curriculo
    app.get('/add', (req, res) => {
        res.render('getin.handlebars')
    })

    //Editar curriculo
    app.get('/edit', (req, res) => {
        res.render('edit.handlebars')
    })

    //Apagar curriculo
    app.get('/delete', (req, res) => {
        res.render('#')
    })

    //Sobre a pagin
    app.get('/about', (req, res) => {
        res.render('about.handlebars')
    })

    //Apresentando dados
    app.get('/home', function (req, res){
        Usuario.findAll().then(function(usuarios){
            res.render('home.handlebars', {teste: "Fernando"})
            console.log(teste)
        })
    })

    //Salvando dados
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

// Public
    app.use(express.static(path.join(__dirname + "/public")))

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
  console.log(`Para acessar: http://localhost:3000`)
})