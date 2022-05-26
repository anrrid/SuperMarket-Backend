const fs = require("fs");

class Container {
    constructor(path) {
        this.path = path
    }
    async getAll() {
        const data = await fs.promises.readFile(this.path, "utf-8", function (err, data) {
            if (err) throw err;
            return data;
        });
        return data;

    }

    async deleteAll() {
        const json = await this.getAll();
        for (let i = archive.length; i > 0; i--) {
            json.pop();
        }
        fs.writeFileSync(this.path, JSON.stringify(archive), function (err) {
            if (err) throw err;
            console.log("Save");
        });
    }
}

module.exports = Container;