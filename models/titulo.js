const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
const titulo = sequelize.define('titulo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    notaFiscal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nParcela: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    valorOriginal: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dtVcto: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    situacao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    noNotaFiscal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
}