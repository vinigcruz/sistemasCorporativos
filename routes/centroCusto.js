// routes/costCenterRoutes.js
const express = require("express");
const router = express.Router();

const db = require("../models");
const CostCenterService = require("../services/costCenterService");
const CostCenterController = require("../controllers/costCenterController");

const costCenterService = new CostCenterService(db.CostCenter);
const costCenterController = new CostCenterController(costCenterService);

router.post("/", (req, res, next) => {
  costCenterController.create(req, res);
});
