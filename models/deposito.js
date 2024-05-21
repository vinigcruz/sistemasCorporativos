const Sequelize = require("sequelize");
module.exports = (sequelize) => {
  const Deposito = sequelize.define("Deposito", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });
  return Deposito;
};
