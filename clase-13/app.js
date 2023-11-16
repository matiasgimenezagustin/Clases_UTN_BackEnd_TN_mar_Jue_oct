const express = require('express')
const hbs = require('hbs')
const PORT = 9000
const app = express()

/* Middlewere de cofiguracion de los archivos estaticos */

app.use(express.static(__dirname + '/public'))



//Configurar el Motor de plantillas

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/pepe', (req, res) =>{
    res.render('pepe', {error: 'no estas Logueado'})
})




app.listen(PORT, () =>{
    console.log('el servidor se escucha en http://localhost:' + PORT )
})

