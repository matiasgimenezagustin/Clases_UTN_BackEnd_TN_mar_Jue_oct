const Product = require("../models/productModel")


const getProductsFromMongo = async () =>{
    return await Product.find({})
} 

const getProductByIdFromMongo = async (pid) =>{
    return await Product.findOne({_id: pid})
}
const updateProductByIdFromMongo = async (pid, productoActualizado) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: pid }, productoActualizado, { new: true });
        return updatedProduct;
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        throw error; // Puedes manejar el error según tus necesidades
    }
};


module.exports = {getProductsFromMongo, getProductByIdFromMongo, updateProductByIdFromMongo}



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