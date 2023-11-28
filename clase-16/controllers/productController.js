const { getProductsFromMongo } = require("../services/productService")

const getProducts = async (req, res) =>{
    const result = await getProductsFromMongo()
    res.status(200).render('home',{products: result})
}




module.exports = {getProducts}