const Titulo = require('../models/titulo');
const MovimentoContasPagar = require('../models/movimentoContasPagar');

class ContasPagarService {
    async criarTitulo(dados) {
        return await Titulo.create(dados);
    }

    async criarMovimentoContasPagar(dados) {
        return await MovimentoContasPagar.create(dados);
    }

    async buscarTodosTitulos(pagina, tamanhoPagina) {
        return await Titulo.findAll({
            offset: (pagina - 1) * tamanhoPagina,
            limit: tamanhoPagina,
        });
    }

    async buscarTituloPorId(id) {
        return await Titulo.findByPk(id);
    }

    async buscarTodosMovimentosPorIdTitulo(idTitulo, pagina, tamanhoPagina) {
        return await MovimentoContasPagar.findAll({
            where: { idTitulo },
            offset: (pagina - 1) * tamanhoPagina,
            limit: tamanhoPagina,
        });
    }
}

module.exports = ContasPagarService;