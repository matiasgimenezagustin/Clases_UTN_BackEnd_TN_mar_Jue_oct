const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()



const db = require('./config/dbConfig')
const serviceProduct = require('./services/products/serviceProduct')

const app = express()
const PORT = process.env.PORT || 8081





app.listen(PORT, () =>{
    console.log('El servidor se esta escuhando en http://localhost:' + PORT + '/')
})


