const { getProductById } = require("../services/products/serviceProduct")




const getProductByIdController = async (req, res) =>{
    const {pid} = req.params
    const result = await getProductById(pid)
    if(!result){
        res.status(500).json({message: 'error'})
    }
    else if(result.length == 0){
        res.status(404).json({message: 'ERROR: Not found'})
    }
    else{
        res.status(200).json({message: 'correcto', product: result[0]})
    }
    
}

const postProductController = async (req, res) =>{
    const {/* Las propiedades del producto nombre, precio, stock, descripcion */} = req.body
}

const getAllProductsController = (req, res) =>{

}

const deleteProductController = (req, res) =>{
    const {pid} = req.params
}

module.exports = {getProductByIdController, getAllProductsController, postProductController, deleteProductController}