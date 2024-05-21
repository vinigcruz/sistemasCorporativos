// routes/requestRoutes.js
const express = require("express");
const router = express.Router();

const db = require("../models");
const RequestService = require("../services/requestService");
const RequestController = require("../controllers/requestController");

const requestService = new RequestService(db.Request);
const requestController = new RequestController(requestService);

router.post("/", (req, res, next) => {
  requestController.create(req, res);
});

router.put("/:id/cancelar", (req, res, next) => {
  requestController.cancel(req, res);
});

router.get("/", (req, res, next) => {
  requestController.findAll(req, res);
});

module.exports = router;
