// models/department.js
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Department = sequelize.define("Department", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Department;
};
