const express = require('express')

const app = express()

const PORT = 3000


app.use(express.json())


app.get('/', (req, res) =>{
    console.log('se hizo un get')
    res.json({ok: true})
})

const usuarios = [
    {
        name: 'cosme',
        email: 'cosme@gmail.com',
        password: 'cosme123'
    },
    {
        name: 'cosme1',
        email: 'cosme1@gmail.com',
        password: 'cosme1234'
    },
    {
        name: 'cosme2',
        email: 'cosme2@gmail.com',
        password: 'cosme12345'
    }
]

/* 
Registrar el endpoint 

/api/login

POST vamos a enviar un body con el email y el password y vamos a verificar en un array de usuarios si existe dicho usuario

En caso de existir vamos a responder con un {ok: true, message: "Logged! :)"}

En caso de no existir dicho usuario vamos a responder con un {ok: false, message: "User not found"}


/api/register

POST vamos a enviar un body con un email un password y un name. En caso de existir los 3 datos (sino se devolvera un {ok: false, message: 'datos no validos :("")}).
Se debera comprobar si no existia previamente dicho email en caso de existir se devolvera un {ok: false, message: 'Email ya registrado'} 
sino se devolvera un {ok: true, message: 'usuario registrado con exito'} ademas de guardar en el array de usuarios dicho usuario registrado.



*/

app.post('/api/login', (req, res) =>{
    const {email, password } = req.body
    res.json({ok: true, message: 'Received'})
})



app.listen(PORT, () =>{
    console.log('El servidor se esta escuhando en: http://localhost:'+PORT)
})