// services/movementService.js
class MovementService {
  constructor(movementModel) {
    this.Movement = movementModel;
  }

  async create(productId, type, quantity) {
    try {
      const newMovement = await this.Movement.create({
        productId,
        type,
        quantity,
      });
      return newMovement ? newMovement : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allMovements = await this.Movement.findAll();
      return allMovements ? allMovements : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const movement = await this.Movement.findByPk(id);
      return movement ? movement : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, productId, type, quantity) {
    try {
      const movement = await this.Movement.findByPk(id);
      if (!movement) {
        return null;
      }
      movement.productId = productId;
      movement.type = type;
      movement.quantity = quantity;
      await movement.save();
      return movement;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const movement = await this.Movement.findByPk(id);
      if (!movement) {
        return null;
      }
      await movement.destroy();
      return movement;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MovementService;
