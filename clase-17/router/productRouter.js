const express = require('express')
const { getProducts, getProductById, updateProductById, editRequest, createNewProductRequest, createNewProduct } = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('/', getProducts)
productRouter.get('/new', createNewProductRequest)
productRouter.post('/editRequest',editRequest) 
productRouter.post('/new', createNewProduct)


productRouter.get('/:pid', getProductById)
productRouter.post('/:pid', updateProductById)



module.exports = productRouter

/* Ahora te toca crear la ruta de los productos

GET /products => debera renderizar una vista de hbs y pasarle la lista de productos
*/