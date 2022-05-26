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

app.get("/products", async (req, res) => {

    container.getAll().then(exitoCallback, falloCallback);

});

app.use("/api", routes);

// Listen on port 8080
http.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});

function exitoCallback(resultado) {
    res.end(resultado[0])
}

function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
}