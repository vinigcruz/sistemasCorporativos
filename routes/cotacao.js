// routes/quotationRoutes.js

const express = require('express');
const router = express.Router();

const db = require('../models');
const QuotationService = require('../services/cotacaoService');
const QuotationController = require('../controllers/cotacaoController');

const quotationService = new QuotationService(db.Quotation);
const quotationController = new QuotationController(quotationService);

router.post('/', (req, res) => quotationController.create(req, res));
router.get('/', (req, res) => quotationController.findAll(req, res));
router.get('/:id', (req, res) => quotationController.findOne(req, res));
router.put('/:id', (req, res) => quotationController.update(req, res));
router.delete('/:id', (req, res) => quotationController.delete(req, res));

module.exports = router;
