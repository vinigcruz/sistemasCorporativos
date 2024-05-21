// controllers/movementController.js
class MovementController {
  constructor(movementService) {
    this.movementService = movementService;
  }

  async create(req, res) {
    const { productId, type, quantity } = req.body;
    try {
      const newMovement = await this.movementService.create(
        productId,
        type,
        quantity
      );
      res.status(200).json(newMovement);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao criar movimentação de produto no depósito." });
    }
  }

  async findAll(req, res) {
    try {
      const allMovements = await this.movementService.findAll();
      res.status(200).json(allMovements);
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Erro ao buscar movimentações de produtos no depósito.",
        });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const movement = await this.movementService.findOne(id);
      if (!movement) {
        return res
          .status(404)
          .json({
            error: "Movimentação de produto no depósito não encontrada.",
          });
      }
      res.status(200).json(movement);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro ao buscar movimentação de produto no depósito." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { productId, type, quantity } = req.body;
    try {
      const updatedMovement = await this.movementService.update(
        id,
        productId,
        type,
        quantity
      );
      if (!updatedMovement) {
        return res
          .status(404)
          .json({
            error: "Movimentação de produto no depósito não encontrada.",
          });
      }
      res.status(200).json(updatedMovement);
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Erro ao atualizar movimentação de produto no depósito.",
        });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedMovement = await this.movementService.delete(id);
      if (!deletedMovement) {
        return res
          .status(404)
          .json({
            error: "Movimentação de produto no depósito não encontrada.",
          });
      }
      res
        .status(200)
        .json({
          message: "Movimentação de produto no depósito deletada com sucesso.",
        });
    } catch (error) {
      res
        .status(500)
        .json({
          error: "Erro ao deletar movimentação de produto no depósito.",
        });
    }
  }
}

module.exports = MovementController;
