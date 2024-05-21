// services/supplierService.js
class SupplierService {
  constructor(supplierModel) {
    this.Supplier = supplierModel;
  }

  async create(name, contactPerson, email, phone, address) {
    try {
      const newSupplier = await this.Supplier.create({
        name,
        contactPerson,
        email,
        phone,
        address,
      });
      return newSupplier ? newSupplier : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allSuppliers = await this.Supplier.findAll();
      return allSuppliers ? allSuppliers : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const supplier = await this.Supplier.findByPk(id);
      return supplier ? supplier : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, name, contactPerson, email, phone, address) {
    try {
      const supplier = await this.Supplier.findByPk(id);
      if (!supplier) {
        return null;
      }
      supplier.name = name;
      supplier.contactPerson = contactPerson;
      supplier.email = email;
      supplier.phone = phone;
      supplier.address = address;
      await supplier.save();
      return supplier;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const supplier = await this.Supplier.findByPk(id);
      if (!supplier) {
        return null;
      }
      await supplier.destroy();
      return supplier;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SupplierService;
