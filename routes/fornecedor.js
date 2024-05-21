// routes/supplierRoutes.js
const express = require("express");
const router = express.Router();

const db = require("../models");
const SupplierService = require("../services/supplierService");
const SupplierController = require("../controllers/supplierController");

const supplierService = new SupplierService(db.Supplier);
const supplierController = new SupplierController(supplierService);

router.post("/", (req, res, next) => {
  supplierController.create(req, res);
});

router.get("/", (req, res, next) => {
  supplierController.findAll(req, res);
});

router.get("/:id", (req, res, next) => {
  supplierController.findOne(req, res);
});

router.put("/:id", (req, res, next) => {
  supplierController.update(req, res);
});

router.delete("/:id", (req, res, next) => {
  supplierController.delete(req, res);
});

module.exports = router;
