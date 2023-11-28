const express = require('express')
const { getProducts } = require('../controllers/productController')

const productRouter = express.Router()



productRouter.get('/', getProducts)



module.exports = productRouter

/* Ahora te toca crear la ruta de los productos

GET /products => debera renderizar una vista de hbs y pasarle la lista de productos
*/