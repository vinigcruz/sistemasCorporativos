// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();

const db = require("../models");
const DepartmentService = require("../services/departmentService");
const DepartmentController = require("../controllers/departmentController");

const departmentService = new DepartmentService(db.Department);
const departmentController = new DepartmentController(departmentService);

router.post("/", (req, res, next) => {
  departmentController.create(req, res);
});

router.get("/", (req, res, next) => {
  departmentController.findAll(req, res);
});

router.get("/:id", (req, res, next) => {
  departmentController.findOne(req, res);
});

router.put("/:id", (req, res, next) => {
  departmentController.update(req, res);
});

router.delete("/:id", (req, res, next) => {
  departmentController.delete(req, res);
});

module.exports = router;
