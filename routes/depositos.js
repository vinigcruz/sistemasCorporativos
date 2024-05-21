var express = require("express");
var router = express.Router();

const db = require("../models");
const DepositoService = require("../services/depositoService");
const DepositoController = require("../controllers/depositoController");

const depositoService = new DepositoService(db.Deposito);
const depositoController = new DepositoController(depositoService);

router.post("/novoDeposito", (req, res, next) => {
  depositoController.create(req, res);
});

router.get("/", (req, res, next) => {
  depositoController.findAll(req, res);
});

router.get("/:id", (req, res, next) => {
  depositoController.findOne(req, res);
});

router.put("/:id", (req, res, next) => {
  depositoController.update(req, res);
});

router.delete("/:id", (req, res, next) => {
  depositoController.delete(req, res);
});

module.exports = router;
