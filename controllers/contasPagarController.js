// controllers/contasPagarController.js

class ContasPagarController {
    constructor(contasPagarService) {
        this.contasPagarService = contasPagarService;
    }

    async criarTitulo(req, res) {
        try {
            const novoTitulo = await this.contasPagarService.criarTitulo(req.body);
            res.status(201).json(novoTitulo);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao criar título.' });
        }
    }

    async criarMovimentoContasPagar(req, res) {
        try {
            const novoMovimento = await this.contasPagarService.criarMovimentoContasPagar(req.body);
            res.status(201).json(novoMovimento);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao criar movimento de pagamento.' });
        }
    }

    async buscarTodosTitulos(req, res) {
        const { pagina = 1, tamanhoPagina = 10 } = req.query;
        try {
            const titulos = await this.contasPagarService.buscarTodosTitulos(parseInt(pagina), parseInt(tamanhoPagina));
            res.status(200).json(titulos);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar títulos.' });
        }
    }

    async buscarTituloPorId(req, res) {
        const { id } = req.params;
        try {
            const titulo = await this.contasPagarService.buscarTituloPorId(id);
            if (!titulo) {
                return res.status(404).json({ erro: 'Título não encontrado.' });
            }
            res.status(200).json(titulo);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar título.' });
        }
    }

    async buscarTodosMovimentosPorIdTitulo(req, res) {
        const { idTitulo } = req.params;
        const { pagina = 1, tamanhoPagina = 10 } = req.query;
        try {
            const movimentos = await this.contasPagarService.buscarTodosMovimentosPorIdTitulo(idTitulo, parseInt(pagina), parseInt(tamanhoPagina));
            res.status(200).json(movimentos);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar movimentos.' });
        }
    }
}

module.exports = ContasPagarController;
