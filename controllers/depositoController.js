class DepositoController {
  constructor(depositoService) {
    this.depositoService = depositoService;
  }

  async create(req, res) {
    const { descricao, valor } = req.body;
    try {
      const novoDeposito = await this.depositoService.create(descricao, valor);
      res.status(200).json(novoDeposito);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar depósito." });
    }
  }

  async findAll(req, res) {
    try {
      const todosDepositos = await this.depositoService.findAll();
      res.status(200).json(todosDepositos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar depósitos." });
    }
  }

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const deposito = await this.depositoService.findOne(id);
      if (!deposito) {
        return res.status(404).json({ error: "Depósito não encontrado." });
      }
      res.status(200).json(deposito);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar depósito." });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { descricao, valor } = req.body;
    try {
      const depositoAtualizado = await this.depositoService.update(
        id,
        descricao,
        valor
      );
      if (!depositoAtualizado) {
        return res.status(404).json({ error: "Depósito não encontrado." });
      }
      res.status(200).json(depositoAtualizado);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar depósito." });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const depositoDeletado = await this.depositoService.delete(id);
      if (!depositoDeletado) {
        return res.status(404).json({ error: "Depósito não encontrado." });
      }
      res.status(200).json({ message: "Depósito deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar depósito." });
    }
  }
}

module.exports = DepositoController;
