// services/quotationService.js

const { Quotation, Product, Supplier, User } = require('../models');

class QuotationService {
  async create(productId, supplierId, price, buyerId, validityDate) {
    try {
      const newQuotation = await Quotation.create({
        productId,
        supplierId,
        price,
        buyerId,
        validityDate,
      });
      return newQuotation;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const quotations = await Quotation.findAll({
        include: [
          { model: Product, as: 'produto' },
          { model: Supplier, as: 'fornecedor' },
          { model: User, as: 'comprador' },
        ],
      });
      return quotations;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const quotation = await Quotation.findByPk(id, {
        include: [
          { model: Product, as: 'produto' },
          { model: Supplier, as: 'fornecedor' },
          { model: User, as: 'comprador' },
        ],
      });
      return quotation;
    } catch (error) {
      throw error;
    }
  }

  async update(id, productId, supplierId, price, buyerId, validityDate) {
    try {
      const quotation = await Quotation.findByPk(id);
      if (!quotation) return null;

      await quotation.update({ productId, supplierId, price, buyerId, validityDate });
      return quotation;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const quotation = await Quotation.findByPk(id);
      if (!quotation) return null;

      await quotation.destroy();
      return quotation;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = QuotationService;
