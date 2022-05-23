const db = require('./db')

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

// So executar uma vez que serve para criar ou recriar a tabela
//Usuario.sync({force: true})

// Exporto para poder usuar em outros arquivos
module.exports = Usuario