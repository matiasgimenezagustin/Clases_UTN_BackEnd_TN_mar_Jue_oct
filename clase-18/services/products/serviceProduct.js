const db = require('../../config/dbConfig')


const createProduct = ({nombre, precio, stock, descripcion}) =>{
    const query = 'INSERT INTO productos (nombre, precio, stock, descripcion) VALUES (?,?,?,?)'
    db.query(query, [nombre, precio, stock, descripcion], (error) =>{
        if(error){
            console.error(error)
        }
        else{
            console.log('El producto se creo exitosamente')
            
        }
    })
}

const getAllProducts = (limit) => {
    const query = 'SELECT * FROM productos'
    db.query(query, (error, result) =>{
        if(error){
            console.error(error)
        }
        else{
            if(limit){
                result.splice(limit )
                console.log(result)
            }
            else{
                console.log(result)
            }

        }
    })
}

/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = {createProduct, getAllProducts}

/* createProduct({nombre: 'teclado logitech', precio: 50, stock: 30, descripcion: 'teclado funcional mecanico'}) */