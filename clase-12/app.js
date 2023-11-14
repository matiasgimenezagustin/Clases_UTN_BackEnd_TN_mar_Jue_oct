const express = require('express')
const loginRouter = require('./router/loginRouter')
const { usuarios } = require('./manger/userManager')
const app = express()

const PORT = 3000


app.use(express.json())


app.get('/', (req, res) => {
    console.log('se hizo un get')
    res.json({ ok: true })
})


app.use('/api/login', loginRouter)


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


/api/register/:email
DELETE

Vamos a recibir por param un email y por body el password 

Verificamos si el usuario existe (con email)

Si existe vamos a verificar si la contraseña para ese mail es correcta

Si es correcta la contraseña vamos a eliminar el usuario y vamos a devolver un {ok: true, message: "usuario eliminado con exito"}

Si no es correcta la contraseña se devolvera {ok: false, message: 'credenciales invalidas'}

Si no existe el usuario con ese email se devolvera {ok: false, message: 'User not found'}

*/


app.delete('/api/register/:email', (req, res)=> {
    const {email} = req.params
    const { password} = req.body

    const usuarioEliminar = usuarios.find(usuario => usuario.email === email)
    if(!usuarioEliminar){
        return res.json({ok:false, message: 'User not found'})
    }
    const passwordCorrecta = usuarioEliminar.password === password
    if(passwordCorrecta){
        let posicionUsuario = usuarios.findIndex(usuario =>  usuario.email === usuarioEliminar.email)
        usuarios.splice(posicionUsuario, 1)
        return res.json({ok:true, message: 'Usuario eliminado con éxito'})
    }
    else{
        return res.json({ok:false, message: 'Credenciales invalidas'})
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


app.put("/api/register", (req, res) => {
    const { campo, value, email } = req.body;
    // Verifico si el usuario existe
    const userExist = usuarios.findIndex((user) => user.email === email);
    if (userExist === -1) {
        res.json({ ok: false, message: "usuario no encontrado" });
    }
    // Verificar que el campo sea 'password' o 'name'
    if (campo !== "password" && campo !== "name") {
        res.json({ ok: false, message: "Forbidden action" });
    }
    // Actualizar el campo con el nuevo valor
    usuarios[userExist][campo] = value;
    // Devolver la respuesta con el usuario modificado
    res.json({
        ok: true,
        message: "Usuario actualizado con éxito",
        user: usuarios[userExist],
    });
});


/* app.delete('/api/register/:email', (req, res) => {
    const { email } = req.params
    const { password } = req.body
    console.log({ email, password })
    res.json({ ok: true })
})

 */
app.listen(PORT, () => {
    console.log('El servidor se esta escuhando en: http://localhost:' + PORT)
})