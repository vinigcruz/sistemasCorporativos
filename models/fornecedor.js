// models/supplier.js
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Supplier = sequelize.define("Supplier", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactPerson: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });

  return Supplier;
};
