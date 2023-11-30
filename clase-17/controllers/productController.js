const { getProductsFromMongo, getProductByIdFromMongo, updateProductByIdFromMongo } = require("../services/productService")

const getProducts = async (req, res) =>{
    const result = await getProductsFromMongo()
    res.status(200).render('home',{products: result})
}

const getProductById = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductByIdFromMongo(pid)
    console.log(result)
    if(result){
        res.status(200).render('detail', {product: result})
    }
    else{
        res.status(404).render('errorView', {error: 'Product not found 404'})
    }
}

const updateProductById = async (req, res) => {
    console.log(req.body);
    
    const { title, description, price, stock, id } = req.body;
    const updatedProduct = { title, description, price, stock };

    try {
        const result = await updateProductByIdFromMongo(id, updatedProduct);

        if (result) {
           
            res.status(200).render('detail', { product: result });
        } else {
            res.status(404).render('errorView', {error: 'Product not Found :('})
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).render('errorView', {error: 'Internal server error'})
    }
};

const createNewProductRequest = async (req, res) =>{
     /* Esta fucion es para /products/new con metodo get*/
    /* Cuando soliciten este controlador vamos a mostrar la vista de hbs llamada newProduct (deben crearla) */
}

const createNewProduct = async() =>{
    /* Esta fucion es para /products/new con metodo post*/
    /* Aqui va la logica para poder manejar la creacion del producto NO LA INTERACCION CON LA BASE DE DATOS */
}


const editRequest  = async (req, res ) =>{
    const {pid} = req.query
    console.log('me consultaron para editar el producto con id: ' + pid)
    const result = await getProductByIdFromMongo(pid)
    if(result){
        res.status(200).render('detail', {product: result, editMode:true})
    }
    else{
        res.status(404).render('errorView', {error: 'Product not found 404'})
    }
}



module.exports = {getProducts, getProductById, updateProductById, editRequest, createNewProductRequest}