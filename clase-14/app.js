const express = require('express')
const dbConfig = require('./db/dbConfig')
const Producto = require('./models/productModel')
const app = express()

const PORT = 4010





app.listen(PORT, ()=>{
    console.log('Su aplicacion se escucha en http://localhost:' + PORT)
})
