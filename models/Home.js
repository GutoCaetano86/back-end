const Sequelize = require('sequelize');
const db = require("./db");

const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text_one: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text_two: {
        type: Sequelize.STRING,
        allowNull: false
    },
    text_three: {
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    btn_link: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Criar tabela no banco de dados
//Home.sync()

//Altera a tabela já criada
//Home.sync({ alter: true });

//exclui a tabela e depois inclui ela novamente
//Home.sync({ force: true });

module.exports = Home