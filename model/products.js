const Sequelize = require('sequelize');
const sequelize = require('../utils/database');


const products = sequelize.define('product',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    productPrice : {
    type : Sequelize.INTEGER,
    allowNull: false
    },
    productName : {
        type : Sequelize.STRING,
        allowNull : false
    }
})


module.exports = products;