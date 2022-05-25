const path = "public/cart.json";
const Cart = require("../../models/cart");
const cart = new Cart(path);

const getCart = async (req, res) => {
    const id = Number(req.params.cartId);
    const cartFinded = await cart.getCart(id);
    res.json(cartFinded);
};
module.exports = getCart;