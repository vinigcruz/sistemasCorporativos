// services/departmentService.js
class DepartmentService {
  constructor(departmentModel) {
    this.Department = departmentModel;
  }

  async create(name, description) {
    try {
      const newDepartment = await this.Department.create({ name, description });
      return newDepartment ? newDepartment : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allDepartments = await this.Department.findAll();
      return allDepartments ? allDepartments : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const department = await this.Department.findByPk(id);
      return department ? department : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, name, description) {
    try {
      const department = await this.Department.findByPk(id);
      if (!department) {
        return null;
      }
      department.name = name;
      department.description = description;
      await department.save();
      return department;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const department = await this.Department.findByPk(id);
      if (!department) {
        return null;
      }
      await department.destroy();
      return department;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DepartmentService;
