const express = require('express');
const app = express();
const routesCart = require("./routes/routes2")
const routesProd = require("./routes/routes")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

const errObj = { error: 'Producto no encontrado' };
const err401 = { error: 'No estás autorizado para acceder a ésta URL' }

const admin = true;

app.use('/api/cart', routesCart)
app.use('/api/products', routesProd);


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`El server está a la escucha en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error al iniciar el servidor: ${error}`));
