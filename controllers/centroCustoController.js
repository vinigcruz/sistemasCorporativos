// controllers/costCenterController.js
class CostCenterController {
  constructor(costCenterService) {
    this.costCenterService = costCenterService;
  }

  async create(req, res) {
    const { code, name } = req.body;
    try {
      const newCostCenter = await this.costCenterService.create(code, name);
      res.status(200).json(newCostCenter);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar centro de custos." });
    }
  }

  async findAll(req, res) {
    try {
      const allCostCenters = await this.costCenterService.findAll();
      res.status(200).json(allCostCenters);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar centros de custos." });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const costCenter = await this.costCenterService.findOne(id);
      if (!costCenter) {
        return res
          .status(404)
          .json({ error: "Centro de custos não encontrado." });
      }
      res.status(200).json(costCenter);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar centro de custos." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { code, name } = req.body;
    try {
      const updatedCostCenter = await this.costCenterService.update(
        id,
        code,
        name
      );
      if (!updatedCostCenter) {
        return res
          .status(404)
          .json({ error: "Centro de custos não encontrado." });
      }
      res.status(200).json(updatedCostCenter);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar centro de custos." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedCostCenter = await this.costCenterService.delete(id);
      if (!deletedCostCenter) {
        return res
          .status(404)
          .json({ error: "Centro de custos não encontrado." });
      }
      res
        .status(200)
        .json({ message: "Centro de custos deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar centro de custos." });
    }
  }
}

module.exports = CostCenterController;
