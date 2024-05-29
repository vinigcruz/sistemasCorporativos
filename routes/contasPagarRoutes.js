// routes/contasPagarRoutes.js

const express = require('express');
const router = express.Router();
const ContasPagarService = require('../services/contasPagarService');
const ContasPagarController = require('../controllers/contasPagarController');

const contasPagarService = new ContasPagarService();
const contasPagarController = new ContasPagarController(contasPagarService);

router.post('/titulos', (req, res) => contasPagarController.criarTitulo(req, res));
router.post('/movimentos', (req, res) => contasPagarController.criarMovimentoContasPagar(req, res));
router.get('/titulos', (req, res) => contasPagarController.buscarTodosTitulos(req, res));
router.get('/titulos/:id', (req, res) => contasPagarController.buscarTituloPorId(req, res));
router.get('/titulos/:idTitulo/movimentos', (req, res) => contasPagarController.buscarTodosMovimentosPorIdTitulo(req, res));

module.exports = router;
