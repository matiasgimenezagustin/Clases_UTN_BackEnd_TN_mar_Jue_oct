const Product = require("../models/productModel")


const getProductsFromMongo = async () =>{
    return await Product.find({})
} 

const getProductByIdFromMongo = async (pid) =>{
    return await Product.findOne({_id: pid})
}

const updateProductoByIdFromMongo = async (pid, productoActualizado) => {
    return await Product.findOneAndUpdate({id: pid}, productoActualizado, {new: true})
}

module.exports = {getProductsFromMongo, getProductByIdFromMongo, updateProductoByIdFromMongo}



/* 
Generar un modelo para el usuario

el usuario debe tener: 
name, 
lastname, 
age, 
email, 
password

Crear un servicio que se llame userService y crearemos dentro de el la funcionalidad createUser que reciba un objeto y lo guarde en la DB

Crear la funcion isExistentUser(email) y devuelva true o false dependiendo de si existe el usuario con el email pasado
*/