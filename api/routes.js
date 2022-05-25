const express = require("express");
const { Router } = express;

// Products Controller

const getAll = require("./controllers/products/getAll");
const getById = require("./controllers/products/getById");
const save = require("./controllers/products/saveProduct");
const updateItem = require("./controllers/products/updateProduct");
const deleteById = require("./controllers/products/deleteById");

//Cart Controllers
const createNewCart = require("./controllers/cart/createCart");
const deleteCart = require("./controllers/cart/deleteCart");
const getCart = require("./controllers/cart/getCart");
const deleteProduct = require("./controllers/cart/deleteProduct");
const addToCart = require("./controllers/cart/addToCart");

const router = new Router();

// Routes
router.get("/products", getAll);
router.get("/products/:id", getById);
router.post("/products", save);
router.put("/products/:id", updateItem);
router.delete("/products/:id", deleteById);

router.post("/cart", createNewCart);
router.delete("/cart/:cartId", deleteCart);
router.get("/cart/:cartId/products", getCart);
router.post("/cart/:cartId/products", addToCart);
router.delete("/cart/:cartId/products/:productId", deleteProduct);

module.exports = router; 