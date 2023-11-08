const express = require('express')


const app = express()

const PORT = 3000

/* Middlewere: Habilita que envie JSON por el body de una consulta */
app.use(express.json())

app.get('/', (request, response) =>{
    console.log('alguien entro')
    response.send('<h1>Hola mundo <a href="/contacto">Contacto</a></h1>')
})

app.get('/:nombre/:apellido', (request, response) =>{
    const {nombre, apellido} = request.params

    response.send(`<h1>El nombre es: ${nombre} ${apellido}</h1>`)
} )

/* http://localhost:3000/product?nombre=maria&apellido=juana */

app.get('/product', (request, response) =>{

    const {nombre, apellido} = request.query
    response.send(`<h1>El nombre es ${nombre} ${apellido}</h1>`)
})

app.get('/contacto', (request, response) =>{
    response.send('<h1>Soy el contacto <a href="/">Pagina principal</a></h1>')
})

app.get('/test', (request, response) =>{
    const {nombre} = request.body
    response.json({nombre})
})

let products = []

app.post('/products', (request, response) =>{
    const {nombre, precio} = request.body
    const persona = {nombre, precio}
    products.push(persona)
    response.json(products)
})


/* Hacer que cuando se entre /contacto se muestre un h1 que diga 'soy el contacto' y un link que diga volver que vuelva a la pagina inicial */
app.listen(PORT, () =>{
    console.log(`El servidor se esta escuchando en direccion: http://localhost:${PORT}`)
})