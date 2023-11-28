const { getProductsFromMongo, getProductByIdFromMongo } = require("../services/productService")

const getProducts = async (req, res) =>{
    const result = await getProductsFromMongo()
    res.status(200).render('home',{products: result})
}

const getProductById = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductByIdFromMongo(pid)
    res.status(200).render('detail', {product: result})
}




module.exports = {getProducts, getProductById}