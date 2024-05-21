// models/request.js
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Request = sequelize.define("Request", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    costCenterId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("pendente", "atendida", "cancelada"),
      allowNull: false,
      defaultValue: "pendente",
    },
  });

  return Request;
};
