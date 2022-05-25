const Container = require("../../utils/classes/Container");
const fs = require("fs");

class Products extends Container {
    constructor(path) {
        super(path);
    }
    async getById(id) {
        const archive = await this.getAll();
        const item = archive.find((item) => item.id === id);
        if (typeof item === "undefined") {
            throw new Error("Product not found");
        } else {
            return item;
        }
    }

    async deleteById(id) {
        const archive = await this.getAll();
        const newArray = archive.filter((item) => item.id !== id);
        fs.writeFileSync(this.path, JSON.stringify(newArray), function (err) {
            if (err) throw err;
            console.log("Save");
        })
    }

    async createProduct(obj) {
        const archive = await this.getAll();
        const lastProduct = json[json.length - 1];
        const id = json.length > 0 ? lastProduct.id + 1 : 1;
        obj.id = id;
        console.log("obj", obj);
        const newProduct = json.some((item) => item.title === obj.title);
        if (newProduct) {
            throw new Error("Product already exists");
        } else {
            json.push(obj);
            fs.writeFileSync(this.path, JSON.stringify(obj), function (err) {
                if (err) throw err;
            });
            return obj;
        }
    }

    async updateProduct(id, obj) {
        const archive = await this.getAll();
        const item = archive.find((item) => item.id === id);
        if (typeof item === "undefined") {
            throw new Error("Product already exists");
        } else {
            item.title = obj.title;
            item.price = obj.price;
            item.thumbnail = obj.thumbnail;
            item.description = obj.description;
            fs.writeFileSync(this.path, JSON.stringify(json), function (err) {
                if (err) throw err;
            });
            return item
        }
    }

}


module.exports = Products;