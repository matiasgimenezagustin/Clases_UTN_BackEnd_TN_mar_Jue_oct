/* 
Crear una funcion que se llame 
login(user)

Y va a verificar si existe un usuario con email y contrasena dados.
 En caso de existir va a devolver un objeto con la sintaxis

 ok true,  usuario

En caso de no existir devolvemos un objeto que diga

ok false, error: credenciales invalidas

*/

const users = require("../data");

const login = (userToAuth) => {
    const usuarioEncontrado = users.find(
        user => 
            user.email === userToAuth.email && user.contrasena === userToAuth.contrasena
        );

    if (usuarioEncontrado) {
        return { ok: true, usuario: usuarioEncontrado };
    } else {
        return { ok: false, error: "Credenciales invalidas" };
    }
}


module.exports = {login}