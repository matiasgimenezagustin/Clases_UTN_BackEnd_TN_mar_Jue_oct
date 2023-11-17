const express = require('express')
const hbs = require('hbs')
const users = require('./data')
const { login } = require('./manager/userManager')
const PORT = 9000
const app = express()

/* Middlewere de cofiguracion de los archivos estaticos */

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Configurar el Motor de plantillas

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) =>{
    let isAuth = false
    if(isAuth){
        return res.redirect('/home')
    }
    else{
        return res.redirect('/login')
    }
})

app.get('/login', (req, res) =>{
    res.render('login')
})
app.get('/home', (req, res) =>{
    res.render('home', {nombre: 'pepe'})
})

app.get('/pepe', (req, res) =>{
    res.render('pepe', {error: 'no estas Logueado'})
})


app.post('/login', (req, res) =>{
    const {email, contrasena} = req.body
    
    const result = login({email, contrasena})
    if(result.ok){
        res.redirect('/home')
    }
    else{
        res.render('login', {error: result.error})
    }
})


/* 
Crear el endpoint /home donde pasemos un nombre al home.hbs
para poder mostrar en la pagina un h1 que diga 'Hola ' + nombre
A
*/



app.listen(PORT, () =>{
    console.log('el servidor se escucha en http://localhost:' + PORT )
})

