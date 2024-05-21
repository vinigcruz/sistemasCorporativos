class ProductService {
  constructor(productModel) {
    this.Product = productModel;
  }

  async create(name, description, price) {
    try {
      const newProduct = await this.Product.create({
        name: name,
        description: description,
        price: price,
      });
      return newProduct ? newProduct : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allProducts = await this.Product.findAll();
      return allProducts ? allProducts : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const product = await this.Product.findByPk(id);
      return product ? product : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, newData) {
    try {
      const product = await this.Product.findByPk(id);
      if (!product) {
        throw new Error("Produto não encontrado.");
      }
      await product.update(newData);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const deletedProduct = await this.Product.destroy({ where: { id: id } });
      return deletedProduct ? deletedProduct : null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
