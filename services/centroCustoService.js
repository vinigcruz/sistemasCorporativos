// services/costCenterService.js
class CostCenterService {
  constructor(costCenterModel) {
    this.CostCenter = costCenterModel;
  }

  async create(code, name) {
    try {
      const newCostCenter = await this.CostCenter.create({ code, name });
      return newCostCenter ? newCostCenter : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allCostCenters = await this.CostCenter.findAll();
      return allCostCenters ? allCostCenters : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const costCenter = await this.CostCenter.findByPk(id);
      return costCenter ? costCenter : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, code, name) {
    try {
      const costCenter = await this.CostCenter.findByPk(id);
      if (!costCenter) {
        return null;
      }
      costCenter.code = code;
      costCenter.name = name;
      await costCenter.save();
      return costCenter;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const costCenter = await this.CostCenter.findByPk(id);
      if (!costCenter) {
        return null;
      }
      await costCenter.destroy();
      return costCenter;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CostCenterService;
