const express = require('express')
const { usuarios } = require('../manager/userManager')

const registerRouter = express.Router()

/* MERN */

registerRouter.delete('/:email', (req, res)=> {
    const {email} = req.params
    const { password} = req.body

    const usuarioEliminar = usuarios.find(usuario => usuario.email === email)
    if(!usuarioEliminar){
        return res.status(404).json({ok:false, message: 'User not found'})
    }
    const passwordCorrecta = usuarioEliminar.password === password
    if(passwordCorrecta){
        let posicionUsuario = usuarios.findIndex(usuario =>  usuario.email === usuarioEliminar.email)
        usuarios.splice(posicionUsuario, 1)
        return res.status(200).json({ok:true, message: 'Usuario eliminado con éxito'})
    }
    else{
        return res.status(400).json({ok:false, message: 'Credenciales invalidas'})
    }
})






registerRouter.post("/", (req, res) => {
    const { email, password, name } = req.body;
    //verifico si los dstos no estan vacios
    if (!email || !password || !name) {
        return res.status(400).json({ ok: false, message: "Datos no validos" });

    }

    // Verifica si el mail ya esta registrado
    const emailExists = usuarios.some((user) => user.email === email);
    if (emailExists) {
        return res.status(400).json({ ok: false, message: "Email YA registrado" });

    }
    // Agrego el nuevo usuario
    usuarios.push({ email, password, name });
    return res.status(201).json({ ok: true, message: "Usuario registrado exitosamente" });
});


registerRouter.put("/", (req, res) => {
    const { campo, value, email } = req.body;
    // Verifico si el usuario existe
    const userExist = usuarios.findIndex((user) => user.email === email);
    if (userExist === -1) {
        res.status(404).json({ ok: false, message: "usuario no encontrado" });
    }
    // Verificar que el campo sea 'password' o 'name'
    if (campo !== "password" && campo !== "name") {
        res.status(400).json({ ok: false, message: "No has colocado los campos correctos. Campos esperados: (password, name)" });
    }
    // Actualizar el campo con el nuevo valor
    usuarios[userExist][campo] = value;
    // Devolver la respuesta con el usuario modificado
    res.status(201).json({
        ok: true,
        message: "Usuario actualizado con éxito",
        user: usuarios[userExist],
    });
});


module.exports = registerRouter