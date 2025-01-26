const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('node-complete','root','vini0520',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;
