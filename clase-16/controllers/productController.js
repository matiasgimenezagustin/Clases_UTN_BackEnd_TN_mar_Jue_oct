const { getProductsFromMongo, getProductByIdFromMongo } = require("../services/productService")

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
  
    console.log(req.body)
    const {title, description, price, stock, id} = req.body
    const newProduct = {title, description, price, stock} 


    console.log('nuevoProducto: ', newProduct)
    const result = await updateProductById(id, newProduct)
    if(result){
        res.status(200).render('detail', newProduct)
    }
}


const editRequest  = async (req, res ) =>{
    const {pid} = req.query
    console.log('me consultaron para editar el producto con id: ' + pid)
    const result = await getProductByIdFromMongo(pid)
    res.status(200).render('detail', {product: result, editMode:true})
}



module.exports = {getProducts, getProductById, updateProductById, editRequest}