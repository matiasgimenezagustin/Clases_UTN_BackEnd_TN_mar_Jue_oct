const express = require('express')
const dbConfig = require('./db/dbConfig')
const Producto = require('./models/productModel')
const productService = require('./services/productService')
const { isExistentUser } = require('./services/userService')
const app = express()

const PORT = 4010


app.use(express.static(__dirname + '/public'))
/* app.use(express.json()) */
app.use(express.urlencoded({extended: true}))//habilito que mi servidor pueda recibir formularios


//Configurar el Motor de plantillas

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


const callProducts = async () =>{
    /* const response = await isExistentUser('pepe@gmail.com')
    console.log(response) */
}


callProducts()

app.get('/home', (req, res) =>{
    res.json({ok: true})
})

app.get('/register', (req, res) =>{
    res.render('register', {fecha: new Date().toLocaleTimeString(), error: 'credenciales incorrectas'})
})


app.listen(PORT, ()=>{
    console.log('Su aplicacion se escucha en http://localhost:' + PORT)
})


