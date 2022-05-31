const express = require("express");
const { Router } = express;

// Products Controller

const updateById = require("./classes/containerProds");
const saveProds = require("./classes/containerProds");
const deleteById = require("./classes/containerProds");
const getProdById = require("./classes/containerProds");
const getProds = require("./classes/containerProds");

//Cart Controllers
const getAllCarts = require("./classes/containerCarts");
const create = require("./classes/containerCarts");
const deleteCartByID = require("./classes/containerCarts");
const getByIdProds = require("./classes/containerCarts");
const saveById = require("./classes/containerCarts");
const updateCartById = require("./classes/containerCarts");

const router = new Router();

// Routes

//prods
router.get("/", getProds);
router.post("/", saveProds);
router.get("/:id", getProdById);
router.delete("/:id", deleteById);
router.put("/:id", updateById);


//carts
router.get("/", getAllCarts);
router.post("/", create);
router.delete("/:id", deleteCartByID);
router.get("/:id/productos", getByIdProds);
router.post("/:id/productos/:id_prod", getProdById)
router.delete("/:id/productos/:id_prod", updateCartById);

module.exports = router; 