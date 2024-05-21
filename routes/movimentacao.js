// routes/movementRoutes.js
const express = require("express");
const router = express.Router();

const db = require("../models");
const MovementService = require("../services/movementService");
const MovementController = require("../controllers/movementController");

const movementService = new MovementService(db.Movement);
const movementController = new MovementController(movementService);

router.post("/", (req, res, next) => {
  movementController.create(req, res);
});

router.get("/", (req, res, next) => {
  movementController.findAll(req, res);
});

router.get("/:id", (req, res, next) => {
  movementController.findOne(req, res);
});

router.put("/:id", (req, res, next) => {
  movementController.update(req, res);
});

router.delete("/:id", (req, res, next) => {
  movementController.delete(req, res);
});

module.exports = router;
