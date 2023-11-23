const express = require('express')
const dbConfig = require('./db/dbConfig')
const Producto = require('./models/productModel')
const productService = require('./services/productService')
const { isExistentUser } = require('./services/userService')
const app = express()

const PORT = 4010

const callProducts = async () =>{
    /* const response = await isExistentUser('pepe@gmail.com')
    console.log(response) */
}


callProducts()

app.get('/home', (req, res) =>{
    res.json({ok: true})
})


app.listen(PORT, ()=>{
    console.log('Su aplicacion se escucha en http://localhost:' + PORT)
})


