const dbQueryAsync = require('../../config/dbConfig')


const createProduct = async ({nombre, precio, stock, descripcion}) =>{
    try{
        const query = 'INSERT INTO productos (nombre, precio, stock, descripcion) VALUES (?,?,?,?)'
        return await dbQueryAsync(query, [nombre, precio, stock, descripcion])
    }
    catch(error){
        console.error('error')
        return false
    }
    
}

const getAllProducts = async (limit) => {
    try{
        const query = 'SELECT * FROM productos'
        const result = await dbQueryAsync(query)

        if(limit){
            return result.splice(limit )
        }
        else{
            return result
        }
        
    }
    catch(error){
        console.error(error)
    }
  
}

const getProductById = async (pid) => {
    try{
        const query = `SELECT * FROM productos WHERE Id = (?)`
        const result = await dbQueryAsync(query,[pid])
        return result[0]
    }
    catch(error){
        console.error(error)
        return false
    }        
}
/* callback hell */

const deleteProductById = async (pid) => {
    try{
        const query = `DELETE FROM productos WHERE Id = (?)`
        const result = await dbQueryAsync(query,[pid])
        console.log(`El producto fue eliminado exitosamente`)
        return result
    }
    catch(error){
        console.error(error)
        return false
    } 
}


/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = {createProduct, getAllProducts, deleteProductById, getProductById}

/* createProduct({nombre: 'teclado logitech', precio: 50, stock: 30, descripcion: 'teclado funcional mecanico'}) */