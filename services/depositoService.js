class DepositoService {
  constructor(depositoModel) {
    this.Deposito = depositoModel;
  }

  async create(descricao, valor) {
    try {
      const novoDeposito = await this.Deposito.create({ descricao, valor });
      return novoDeposito ? novoDeposito : null;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const todosDepositos = await this.Deposito.findAll();
      return todosDepositos ? todosDepositos : null;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id) {
    try {
      const deposito = await this.Deposito.findByPk(id);
      return deposito ? deposito : null;
    } catch (error) {
      throw error;
    }
  }

  async update(id, descricao, valor) {
    try {
      const deposito = await this.Deposito.findByPk(id);
      if (!deposito) {
        return null;
      }
      deposito.descricao = descricao;
      deposito.valor = valor;
      await deposito.save();
      return deposito;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const deposito = await this.Deposito.findByPk(id);
      if (!deposito) {
        return null;
      }
      await deposito.destroy();
      return deposito;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DepositoService;
