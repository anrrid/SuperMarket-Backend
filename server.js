const express = require("express");
const res = require("express/lib/response");

require("dotenv").config();
const routes = require("./api/routes");
const path = "./public/products.json";
const Container = require("./utils/classes/Container");
const container = new Container(path);
const app = express();
const http = require("http").Server(app);

app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/products', async (req, res) => {
    var json = await container.getAll()
    res.end(json)

});

app.use("/api", routes);

// Listen on port 8080
http.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});