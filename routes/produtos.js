const express = require("express");
const router = express.Router();

const db = require("../models");
const productService = require("../services/productService");
const Product = db.Product;
const ProductService = new productService(Product);

const productController = require("../controllers/productController");
const ProductController = new productController(ProductService);

router.get("/", ProductController.findAll.bind(ProductController));
router.post("/", ProductController.create.bind(ProductController));
router.get("/:id", ProductController.findOne.bind(ProductController));
router.put("/:id", ProductController.update.bind(ProductController));
router.delete("/:id", ProductController.delete.bind(ProductController));

module.exports = router;
