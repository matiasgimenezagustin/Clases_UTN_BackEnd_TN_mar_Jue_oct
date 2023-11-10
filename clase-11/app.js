const express = require('express')

const app = express()

const PORT = 3000


app.use(express.json())


app.get('/', (req, res) => {
    console.log('se hizo un get')
    res.json({ ok: true })
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

POST 
vamos a enviar un body con un email un password y un name. En caso de existir los 3 datos (sino se devolvera un {ok: false, message: 'datos no validos :("")}).

Se debera comprobar si no existia previamente dicho email en caso de existir se devolvera un {ok: false, message: 'Email ya registrado'}

sino se devolvera un {ok: true, message: 'usuario registrado con exito'} ademas de guardar en el array de usuarios dicho usuario registrado.

/api/register

PUT
Vamos a recibir un body con 3 valores

campo a modificar (que puede ser 'password' o 'name')
nuevo valor (representa el valor por el que vamos a actualizar)
email representa el email del usuario 

POR EJEMPLO req.body = {"campo": "name", "value": "pepe", "email": "cosme@gmail.com"}

Vamos a verificar que el usuario con ese email exista

Si existe, vamos a verificar que el campo sea 'password' o 'name', sino se devolvera un {ok: false, message: "forbidden action"} 
Sino:
vamos a modificar el campo a modificar por el valor nuevo y vamos a devolver {ok: true, message: "usuario actualizado con exito", user: objetoModificado}

Si no existe vamos a devolver un {ok: false, message: "User not found"}

/api/register

DELETE

Vamos a recibir por param un email y por body el password 

Verificamos si el usuario existe (con email)

Si existe vamos a verificar si la contraseña para ese mail es correcta

Si es correcta la contraseña vamos a eliminar el usuario y vamos a devolver un {ok: true, message: "usuario eliminado con exito"}

Si no es correcta la contraseña se devolvera {ok: false, message: 'credenciales invalidas'}

Si no existe el usuario con ese email se devolvera {ok: false, message: 'User not found'}

*/



app.post('/api/login', (req, res) => {
    const { email, password } = req.body
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === password)
    if (usuarioEncontrado) {
        res.json({ ok: true, message: 'Logged! :)' })
    }
    else {
        res.json({ ok: false, message: 'User not Found' })
    }

})


app.post("/api/register", (req, res) => {
    const { email, password, name } = req.body;
    //verifico si los dstos no estan vacios
    if (!email || !password || !name) {
        return res.json({ ok: false, message: "Datos no validos" });

    }

    // Verifica si el mail ya esta registrado
    const emailExists = usuarios.some((user) => user.email === email);
    if (emailExists) {
        return res.json({ ok: false, message: "Email registrado" });

    }
    // Agrego el nuevo usuario
    usuarios.push({ email, password, name });
    return res.json({ ok: true, message: "Usuario registrado exitosamente" });
});



app.listen(PORT, () => {
    console.log('El servidor se esta escuhando en: http://localhost:' + PORT)
})