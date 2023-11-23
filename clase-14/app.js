const express = require('express')
const dbConfig = require('./db/dbConfig')
const Producto = require('./models/productModel')
const productService = require('./services/productService')
const app = express()

const PORT = 4010

const callProducts = async () =>{
    const productSelected = await productService.getProductById('655d426e257afc8edb12509d')
    console.log(productSelected)

}


callProducts()



app.listen(PORT, ()=>{
    console.log('Su aplicacion se escucha en http://localhost:' + PORT)
})
