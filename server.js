const express = require('express');
const app = express();
const routes = require("./api/routes");
const containerProd = require('./api/classes/containerProds.js');
const containerCart = require('./api/classes/containerCarts.js');
// const prods = new Router();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))

const errObj = { error: 'Producto no encontrado' };
const err401 = { error: 'No estás autorizado para acceder a ésta URL' }

const admin = true;

//PRODS
routes.get('/', async (req, res) => {
    const objetos = await containerProd.getProds()
    res.send(objetos)
});


routes.post('/', async (req, res) => {
    const a = req.body
    const add = await containerProd.saveProds(a)

    if (admin != true) {
        res.send(err401)
    } else {
        res.send(add)
    }
})


routes.get('/:id', async (req, res) => {
    const id = req.params.id
    const objetos = await containerProd.getProdById(id)
    res.send(objetos)
})

routes.delete('/:id', async (req, res) => {
    const idDelete = req.params.id
    const deleteId = await containerProd.deleteById(idDelete)
    res.send(deleteId)
})

routes.put('/:id', async (req, res) => {
    const ids = req.params.id;
    const obj = req.body;
    const updatedObj = await containerProd.updateById(ids, obj);
    res.send(updatedObj)
})

// CARTS

routes.get('/', async (req, res) => {
    const carros = await containerCart.getAllCarts()
    res.send(carros);
});

routes.post('/', async (req, res) => {
    containerCart.create().then(resp => res.send(resp))
})

routes.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deleteCart = await containerCart.deleteCartByID(id)
    if (isNaN(id)) {
        res.send('El valor ingresado no es un numero')
    } else {
        res.send(deleteCart)
    }
})

routes.get('/:id/productos', async (req, res) => {
    const id = req.params.id
    const idProd = await containerCart.getByIdProds(id)
    res.send(idProd)
})

routes.post('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id
    const id_prod = req.params.id_prod
    containerProd.getProdById(id_prod)
        .then(resp => {
            containerCart.saveById(resp, id).then(respuesta => res.send(respuesta))
        })
})

routes.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id
    const id_prod = req.params.id_prod
    const updCartId = await containerCart.updateCartById(id, id_prod)
    res.send(updCartId)
})

app.use("/api", routes);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`El server está a la escucha en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error al iniciar el servidor: ${error}`));
