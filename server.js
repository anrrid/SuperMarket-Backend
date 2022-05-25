const { config } = require("dotenv");
const express = require("express");

const app = express();
require("dotenv").config();
const routes = require("./api/routes");
const http = require("http").Server(app);
const Container = require("./utils/classes/Container");
const container = new Container(path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use("/static", express.static(__dirname + "/public"));



app.get("/products", async (req, res) => {
    res.render({ products: await container.getAll() });
});

app.use("/api", routes);

// Listen on port 8080
http.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}!`);
});




