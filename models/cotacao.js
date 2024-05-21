// models/quotation.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const Quotation = sequelize.define('Quotation', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    supplierId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Suppliers',
        key: 'id',
      },
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    buyerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    validityDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  Quotation.associate = (models) => {
    Quotation.belongsTo(models.Product, { as: 'produto', foreignKey: 'productId' });
    Quotation.belongsTo(models.Supplier, { as: 'fornecedor', foreignKey: 'supplierId' });
    Quotation.belongsTo(models.User, { as: 'comprador', foreignKey: 'buyerId' });
  };

  return Quotation;
};
