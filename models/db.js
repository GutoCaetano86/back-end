require("dotenv").config();
const Sequelize = require('sequelize');

const bd_NAME = process.env.bd_NAME;
const bd_USER = process.env.bd_USER;
const bd_PASS = process.env.bd_PASS;
const bd_HOST = process.env.bd_HOST;
const bd_DIALECT = process.env.bd_DIALECT;

const sequelize = new Sequelize(bd_NAME,bd_USER,bd_PASS, {
    host: bd_HOST,
    dialect: bd_DIALECT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
});

sequelize.authenticate()
.then(() => {
    console.log('Show. Conectou');
}).catch(() => {
    console.log('ERRO: Não concectou');
});

module.exports = sequelize