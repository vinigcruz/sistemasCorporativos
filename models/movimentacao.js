// models/movement.js
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Movement = sequelize.define("Movement", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM("entrada", "saída"),
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  });

  return Movement;
};
