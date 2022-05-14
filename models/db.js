require("dotenv").config();
const Sequelize = require('sequelize');

const bd_NAME = process.env.database;
const bd_USER = process.env.user;
const bd_PASS = process.env.password;
const bd_HOST = process.env.host;
const bd_DIALECT = process.env.dialect;

const sequelize = new Sequelize(bd_NAME, bd_USER, bd_PASS, {
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
    console.log(`ERRO: Não concectou`);
});

module.exports = sequelize