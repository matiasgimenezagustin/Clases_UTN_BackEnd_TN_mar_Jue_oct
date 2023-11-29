const express = require('express')
const { getProducts, getProductById, updateProductById, editRequest } = require('../controllers/productController')

const productRouter = express.Router()



productRouter.get('/', getProducts)
productRouter.get('/:pid', getProductById)
productRouter.post('/editRequest',editRequest)  
productRouter.post('/:pid', updateProductById)


module.exports = productRouter

/* Ahora te toca crear la ruta de los productos

GET /products => debera renderizar una vista de hbs y pasarle la lista de productos
*/