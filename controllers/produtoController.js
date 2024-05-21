class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async create(req, res) {
    const { name, description, price } = req.body;
    try {
      const newProduct = await this.productService.create(
        name,
        description,
        price
      );
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Erro ao inserir novo produto." });
    }
  }

  async findAll(req, res) {
    try {
      const allProducts = await this.productService.findAll();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produtos." });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.findOne(id);
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado." });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produto." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      const updatedProduct = await this.productService.update(id, newData);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedProduct = await this.productService.delete(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Produto não encontrado." });
      }
      res.status(200).json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar produto." });
    }
  }
}

module.exports = ProductController;
