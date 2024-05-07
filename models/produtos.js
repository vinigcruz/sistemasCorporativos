// ./models/produto.js

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
     const Produto = sequelize.define('Produto',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    nome:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull:false,
        unique: true
    }
    });
    return Produto;
};
