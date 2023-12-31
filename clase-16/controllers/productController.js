const { getProductsFromMongo, getProductByIdFromMongo, updateProductByIdFromMongo } = require("../services/productService")

const getProducts = async (req, res) =>{
    const result = await getProductsFromMongo()
    res.status(200).render('home',{products: result})
}

const getProductById = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductByIdFromMongo(pid)
    console.log(result)
    res.status(200).render('detail', {product: result})
}

const updateProductById = async (req, res) => {
    console.log(req.body);
    
    const { title, description, price, stock, id } = req.body;
    const updatedProduct = { title, description, price, stock };

    try {
        const result = await updateProductByIdFromMongo(id, updatedProduct);

        if (result) {
            // Puedes redirigir a una página de detalles o renderizar una vista, por ejemplo:
            res.status(200).render('detail', { product: result });
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send('Error interno del servidor');
    }
};


const editRequest  = async (req, res ) =>{
    const {pid} = req.query
    console.log('me consultaron para editar el producto con id: ' + pid)
    const result = await getProductByIdFromMongo(pid)
    res.status(200).render('detail', {product: result, editMode:true})
}



module.exports = {getProducts, getProductById, updateProductById, editRequest}