const db = require('./db')

const Curriculo = db.sequelize.define('curriculos', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    skills: {
        type: db.Sequelize.STRING
    },
    languajes: {
        type: db.Sequelize.STRING
    },
    profile: {
        type: db.Sequelize.STRING
    },
    wordexperience: {
        type: db.Sequelize.STRING
    },
    education: {
        type: db.Sequelize.STRING
    },
})

//Curriculo.sync({force: true})
module.exports = Curriculo