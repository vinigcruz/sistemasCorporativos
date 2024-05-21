// controllers/supplierController.js
class SupplierController {
  constructor(supplierService) {
    this.supplierService = supplierService;
  }

  async create(req, res) {
    const { name, contactPerson, email, phone, address } = req.body;
    try {
      const newSupplier = await this.supplierService.create(
        name,
        contactPerson,
        email,
        phone,
        address
      );
      res.status(200).json(newSupplier);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar fornecedor." });
    }
  }

  async findAll(req, res) {
    try {
      const allSuppliers = await this.supplierService.findAll();
      res.status(200).json(allSuppliers);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar fornecedores." });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const supplier = await this.supplierService.findOne(id);
      if (!supplier) {
        return res.status(404).json({ error: "Fornecedor não encontrado." });
      }
      res.status(200).json(supplier);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar fornecedor." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, contactPerson, email, phone, address } = req.body;
    try {
      const updatedSupplier = await this.supplierService.update(
        id,
        name,
        contactPerson,
        email,
        phone,
        address
      );
      if (!updatedSupplier) {
        return res.status(404).json({ error: "Fornecedor não encontrado." });
      }
      res.status(200).json(updatedSupplier);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar fornecedor." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedSupplier = await this.supplierService.delete(id);
      if (!deletedSupplier) {
        return res.status(404).json({ error: "Fornecedor não encontrado." });
      }
      res.status(200).json({ message: "Fornecedor deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar fornecedor." });
    }
  }
}

module.exports = SupplierController;
