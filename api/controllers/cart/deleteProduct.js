const path = "public/cart.json";
const Cart = require("../../models/cart");
const cart = new Cart(path);

const deleteProduct = async (req, res) => {
    const { cartId, productId } = req.params;
    try {
        await cart.deleteProduct(Number(cartId), Number(productId));
        res.json({ message: "Product deleted from cart" });
    } catch (error) {
        res.json({ message: error.message });
    }
};
module.exports = deleteProduct;