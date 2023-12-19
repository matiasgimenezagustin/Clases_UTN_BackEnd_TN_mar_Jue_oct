const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')


dotenv.config()

const dbQueryAsync = require('./config/dbConfig')






/* const serviceProduct = require('./services/products/serviceProduct') */

const app = express()
const PORT = process.env.PORT || 8081


app.use(express.static(__dirname + '/public'))

class MailingService {
    constructor(){
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        })
    }
}

const mailerService = new MailingService()


const mail = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'Soy un mail de prueba',
    html: `
    <h1 style='background-color: blue; color: white;'>Este es un mensaje de mail</h1>
    <p>Soy un parrafo</p>
    <img src='https://media.tycsports.com/files/2023/11/10/644568/messi-en-la-noche-de-oro_416x234.webp'/>
    <a href='#'>Vista este sitio</a>
    `
}

/* mailerService.transport.sendMail(mail, (error, info) => {
    if(error){
        console.log('No se pudo enviar el mensaje')
    }
    else{
        console.log('mensaje enviado con exito')
    }
})
 */



app.get('/api/products/:pid', async (req, res) =>{
    try{
        
        const query = `SELECT * FROM productos WHERE Id = (?)`
        const {pid} = req.params
        const result = await dbQueryAsync(query,[pid])
        if(result.length == 0){
            res.status(404).json({message: 'ERROR: Not found'})
        }
        else{
            res.status(200).json({message: 'correcto', product: result[0]})
        }
       
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: 'error'})
    }
})

/* app.get('/fulano/:id', (req, res) =>{

    const result = serviceProduct.getProductById()

    const query = `SELECT * FROM productos WHERE Id = (?)`
    db.query(query,[pid], (error, result)=>{
        if(error){
            res.status(500).json({message: 'error'})
        }
        else{
            res.status(200).json({message: 'correcto', product: result[0]})
        }
    }) */

  /*   if(!result){
        res.status(500).json({message: 'Internal server error'})
    }
    res.status(200).json({product: product, status: 200, message: 'product found' }) */
/* })
 */

app.listen(PORT, () =>{
    console.log('El servidor se esta escuhando en http://localhost:' + PORT + '/')
})




/* 

LIBRERIAS:

Express
nodemon
dotenv

EJEMPLO DE RUTA: 

app.get('/fulano', (req, res) =>{
    res.status(200).json({product: product, status: 200, message: 'product found' })
})



=> /api/products

GET => 
recibe el id por params y devuelve el producto 200 'product found'
Si no existe devuelve 404 con un mensaje de error 'not found'
Si falla SQL devuelve un 500 'internal server error'


GET =>
Puede recibir limit por query param
Devuelve todos los productos (limitados si es que hay limite) 200
Si falla SQL devuelve un 500 'internal server error'


POST =>
Recibe un body en JSON con todos los datos para crear un producto ([nombre, precio, stock, descripcion])
Verificaremos que todos los datos existan
Una vez creado devolveremos un 201  'product created'

Si no estan todos los datos devolvemos un '400' 'bad request'
Si falla SQL devuelve un 500 'internal server error'

(
    PROXIMAMENTE... cuando alguien postee algo enviaremos un mail de support a nuestro propio mail 
    que informara acerca del producto creado
)


DELETE =>
recibe el id por params y elimina el producto 200 'product deleted'
Si no existe devuelve 404 con un mensaje de error 'not found'
Si falla SQL devuelve un 500 'internal server error'



PUT


*/