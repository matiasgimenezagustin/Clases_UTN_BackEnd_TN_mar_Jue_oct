const express = require('express')
const dotenv = require('dotenv')
const hbs = require('hbs')
dotenv.config()


const Producto = require('./models/productModel')
const productService = require('./services/productService')
const { isExistentUser, createUser, loginUser } = require('./services/userService')

const app = express()


const dbConfig = require('./db/dbConfig')


const PORT = process.env.PORT || 4000


app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))//habilito que mi servidor pueda recibir formularios


//Configurar el Motor de plantillas

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')


const callProducts = async () => {
    /* const response = await isExistentUser('pepe@gmail.com')
    console.log(response) */
}


callProducts()

app.get('/home', (req, res) => {
    res.json({ ok: true })
})

app.get('/register', (req, res) => {
    res.render('register')
    /* res.sendStatus(200) */
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { name, lastname, age, email, password } = req.body
    const newUser = { name, lastname, age, email, password }
    const result = await createUser(newUser)
    if (result.ok) {
        res.status(201).json({ ok: true, message: 'usuario creado' })
    }
    else {
        res.render('register', { error: result.error })
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const result = await loginUser(email, password);
    if (result.ok) {
        res.json({ message: "Inicio de sesión exitoso", user: result.user });
    } else {
        res.render( "login", {error: result.error });
    }
});

const productRouter = require('./router/productRouter')

app.use('/products', productRouter)





app.listen(PORT, () => {
    console.log('Su aplicacion se escucha en http://localhost:' + PORT)
})
/* 
Loguear al usuario:

/login method: POST. Cuando recibamos un usuario para loguear usaremos un servicio llamado loginUser(user)
LoginUser debera verificar si el mail del usuario existe y en caso de existir
buscara dicho usuario y
Verificara que la contraseña sea igual a la contraseña del usuario encontrado
y lo devolvera en el sig formato {ok: true, user: user}

En caso de no ser iguales dira {ok: false, error: 'contraseña incorrecta'}

En caso de no existir devolvera un {ok: false, error: 'No existe el usuario'}

Luego nuestro endpoint en caso de que la funcion devuelva ok: true entonces vamos a responder con nuestro servidor que el usuario se logueo con exito.
Caso contrario responderemos con el error recibido
*/

/* implementar una vista de login en el endpoint /login donde yo tenga un formulario de login, dicho formualrio solicitara email y contraseña y tambien tendra un link que nos llevara a register en caso de que el usuario no tenga cuenta, el link puede decir <p>Aun no tienes cuenta? crea una <a>aqui</a></p> */

/* {fecha: new Date().toLocaleTimeString(), error: 'credenciales incorrectas'} */



/* Voy a crear un endpoint llamado /register con el metodo post, y voy a recibir los valores de mi formulario de registro, de los cuales voy a crear un objeto que represente cada valor de mi usuario.
Por ejemplo:


{
    name: 'Pepesito',
    lastName: 'Gimenez',
    age: 23,
    email: 'pepesitogimenez@gmail.com',
    password: 'pepe1234'
}
*/

/* NEXT.js / Remix / Nuxt.js == ssr = server side rendering */