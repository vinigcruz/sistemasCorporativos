// routes/purchaseRoutes.js

const express = require('express');
const router = express.Router();

const db = require('../models');
const PurchaseService = require('../services/compraService');
const PurchaseController = require('../controllers/comprasController');

const purchaseService = new PurchaseService(db.Purchase);
const purchaseController = new PurchaseController(purchaseService);

router.post('/', (req, res) => purchaseController.create(req, res));
router.put('/:id/complete', (req, res) => purchaseController.completePurchase(req, res));
router.get('/', (req, res) => purchaseController.findAll(req, res));
router.get('/:id', (req, res) => purchaseController.findById(req, res));
router.delete('/:id', (req, res) => purchaseController.cancel(req, res));

module.exports = router;
