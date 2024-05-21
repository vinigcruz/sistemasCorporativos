// models/costCenter.js
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const CostCenter = sequelize.define("CostCenter", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return CostCenter;
};
