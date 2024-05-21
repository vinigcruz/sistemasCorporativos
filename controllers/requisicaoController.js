// controllers/requestController.js
class RequestController {
  constructor(requestService) {
    this.requestService = requestService;
  }

  async create(req, res) {
    const { userId, productId, quantity, costCenterId } = req.body;
    try {
      const newRequest = await this.requestService.create(
        userId,
        productId,
        quantity,
        costCenterId
      );
      res.status(200).json(newRequest);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar requisição." });
    }
  }

  async cancel(req, res) {
    const { id } = req.params;
    try {
      const canceledRequest = await this.requestService.cancel(id);
      if (!canceledRequest) {
        return res.status(404).json({ error: "Requisição não encontrada." });
      }
      res.status(200).json(canceledRequest);
    } catch (error) {
      res.status(500).json({ error: "Erro ao cancelar requisição." });
    }
  }

  async findAll(req, res) {
    try {
      const allRequests = await this.requestService.findAll();
      res.status(200).json(allRequests);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar requisições." });
    }
  }
}

module.exports = RequestController;
