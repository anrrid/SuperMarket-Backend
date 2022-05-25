const path = "public/cart.json";
const Cart = require("../../models/cart");
const cart = new Cart(path);
const getLocalTime = require("../../../utils/functions");

const CreateCart = async (req, res) => {
    const products = req.body;
    let timestamp = new Date();
    const newCart = await cart.createCart(products, getLocalTime(timestamp));
    res.json(newCart);
};

module.exports = CreateCart;