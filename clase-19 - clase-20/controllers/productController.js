const { getProductById } = require("../services/products/serviceProduct")




const getProductByIdController = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductById(pid)
}

const getAllProductsController = (req, res) =>{

}

module.exports = {getProductByIdController, getAllProductsController}