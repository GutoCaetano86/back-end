const Sequelize = require('sequelize');
const db = require("./db");

const MSGContact = db.define('msgs_contacts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Criar tabela no banco de dados
//MSGContact.sync()

//Altera a tabela já criada
//Home.sync({ alter: true });

//exclui a tabela e depois inclui ela novamente
//Home.sync({ force: true });

module.exports = MSGContact