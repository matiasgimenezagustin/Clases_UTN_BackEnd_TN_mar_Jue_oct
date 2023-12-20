const express = require('express')
const { getProductByIdController, getAllProductsController } = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('/', getAllProductsController)


productRouter.get("/:pid", getProductByIdController)


module.exports = productRouter



