// controllers/departmentController.js
class DepartmentController {
  constructor(departmentService) {
    this.departmentService = departmentService;
  }

  async create(req, res) {
    const { name, description } = req.body;
    try {
      const newDepartment = await this.departmentService.create(
        name,
        description
      );
      res.status(200).json(newDepartment);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar departamento." });
    }
  }

  async findAll(req, res) {
    try {
      const allDepartments = await this.departmentService.findAll();
      res.status(200).json(allDepartments);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar departamentos." });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const department = await this.departmentService.findOne(id);
      if (!department) {
        return res.status(404).json({ error: "Departamento não encontrado." });
      }
      res.status(200).json(department);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar departamento." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const updatedDepartment = await this.departmentService.update(
        id,
        name,
        description
      );
      if (!updatedDepartment) {
        return res.status(404).json({ error: "Departamento não encontrado." });
      }
      res.status(200).json(updatedDepartment);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar departamento." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedDepartment = await this.departmentService.delete(id);
      if (!deletedDepartment) {
        return res.status(404).json({ error: "Departamento não encontrado." });
      }
      res.status(200).json({ message: "Departamento deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar departamento." });
    }
  }
}

module.exports = DepartmentController;
