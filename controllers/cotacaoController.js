// controllers/quotationController.js

class QuotationController {
    constructor(quotationService) {
      this.quotationService = quotationService;
    }
  
    async create(req, res) {
      const { productId, supplierId, price, buyerId, validityDate } = req.body;
      try {
        const newQuotation = await this.quotationService.create(
          productId,
          supplierId,
          price,
          buyerId,
          validityDate
        );
        res.status(200).json(newQuotation);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cotação.' });
      }
    }
  
    async findAll(req, res) {
      try {
        const quotations = await this.quotationService.findAll();
        res.status(200).json(quotations);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cotações.' });
      }
    }
  
    async findOne(req, res) {
      const { id } = req.params;
      try {
        const quotation = await this.quotationService.findOne(id);
        if (!quotation) {
          return res.status(404).json({ error: 'Cotação não encontrada.' });
        }
        res.status(200).json(quotation);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cotação.' });
      }
    }
  
    async update(req, res) {
      const { id } = req.params;
      const { productId, supplierId, price, buyerId, validityDate } = req.body;
      try {
        const updatedQuotation = await this.quotationService.update(
          id,
          productId,
          supplierId,
          price,
          buyerId,
          validityDate
        );
        if (!updatedQuotation) {
          return res.status(404).json({ error: 'Cotação não encontrada.' });
        }
        res.status(200).json(updatedQuotation);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cotação.' });
      }
    }
  
    async delete(req, res) {
      const { id } = req.params;
      try {
        const deletedQuotation = await this.quotationService.delete(id);
        if (!deletedQuotation) {
          return res.status(404).json({ error: 'Cotação não encontrada.' });
        }
        res.status(200).json({ message: 'Cotação deletada com sucesso.' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cotação.' });
      }
    }
  }
  
  module.exports = QuotationController;
  