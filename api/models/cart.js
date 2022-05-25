const Container = require("../../utils/classes/Container");
const fs = require("fs");

class Cart extends Container {
    constructor(path) {
        super(path);
    }
    async getCartProducts(id) {
        const archive = await this.getAll();
        const cart = json.find((cart) => cart.cartId === id);
        return cart.products;
    }

    async deleteCartById(id) {
        const archive = await this.getAll();

        const newArray = json.filter((item) => item.cartId !== Number(id));
        fs.writeFileSync(this.path, JSON.stringify(newArray), function (err) {
            if (err) throw err;
            console.log("File is saved.");
        });
    }

    async createCart(arr, time) {
        const archive = await this.getAll();
        const lastElement = json[json.length - 1];
        const id = json.length > 0 ? lastElement.cartId + 1 : 1;
        const cart = {
            cartId: id,
            products: arr,
            timestamp: time,
        };
        json.push(cart);
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
        });
        return cart;
    }

    async deleteProductFromCart(cartId, productId) {
        const archive = await this.getAll();
        const cart = json.find((cart) => cart.id === cartId);
        const newArray = cart.products.filter(
            (product) => product.id !== productId
        );
        cart.products = newArray;
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
            return `Product with id: ${productId} is deleted from cart with id: ${cartId}`;
        });
    }
    async addProductToCart(cartId, product) {
        const archive = await this.getAll();
        const cart = json.find((cart) => cart.id === cartId);
        cart.products.push(product);
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
            return `Product with id: ${product.id} is added to cart with id: ${cartId}`;
        });
    }

    async addProductsToCart(cartId, products) {
        const archive = await this.getAll();
        const cart = json.find((cart) => cart.cartId === cartId);
        products.map((product) => {
            cart.products.push(product);
        });
        fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
            if (err) throw err;
            return `Products added to cart with id: ${cartId}`;
        });
    }
}

module.exports = Cart;