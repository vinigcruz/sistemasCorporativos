// services/requestService.js
class RequestService {
  constructor(requestModel) {
    this.Request = requestModel;
  }

  async create(userId, productId, quantity, costCenterId) {
    try {
      const newRequest = await this.Request.create({
        userId,
        productId,
        quantity,
        costCenterId,
      });
      return newRequest ? newRequest : null;
    } catch (error) {
      throw error;
    }
  }

  async cancel(id) {
    try {
      const request = await this.Request.findByPk(id);
      if (!request) {
        return null;
      }
      request.status = "cancelada";
      await request.save();
      return request;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const allRequests = await this.Request.findAll();
      return allRequests ? allRequests : null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RequestService;
