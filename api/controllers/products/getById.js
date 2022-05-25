const path = "public/products.json";
const Product = require("../../models/products");
const product = new Product(path);

const getById = async (req, res) => {
    const id = Number(req.params.id);

    const setProduct = await product.getItemById(id);
    res.json(setProduct);
};

module.exports = getById;