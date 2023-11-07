class ProductManager {
    constructor(path){
        this.productos = [];
        this.path = path
    }
    async obtenerProductos () {
        return await filesystem.promises.readFile(this.path,'utf-8');
    }
    async agregarProducto(producto){
        try{
            let productos = await this.obtenerProductos()
            let contador2 = await filesystem.promises.readFile('contador2.json','utf-8');
            //parseamos el contador
            let contador2Parseado = JSON.parse(contador2);
            let currentId = contador2Parseado.counterId  
            //parseamos los productos
            let productosParseados = JSON.parse(productos)
            productosParseados.push({...producto, id: ++currentId}) 
            contador2Parseado.counterId = currentId 

            filesystem.promises.writeFile('contador2.json',JSON.stringify(contador2Parseado) ,'utf-8')
            filesystem.promises.writeFile('productosManager.json',JSON.stringify(productosParseados) ,'utf-8')
            console.log(`Producto ${producto.nombre} agregado con exito.`)
        }
        catch(error){
            console.error('Error al agregar el producto:', error);
            throw error;
        }
    }
    async consultarProducto(id){
        try{
            const data = await this.obtenerProductos()
            const productos = JSON.parse(data);
            const productoConsultado = productos.find(product => id === product.id);
            if(productoConsultado){
                return productoConsultado;
            }
            else{
                return null;
            }
        }
        catch (error){
            console.error('Error al consultar el producto:', error);
            throw error;
        }

    }
    async modificarProducto(productToModify, pid){
        try{
            const currentProduct = await this.consultarProducto(pid)
            const newProduct = {...currentProduct, ...productToModify}
            let productos =  await this.obtenerProductos()
            let posProductos  = productos.findIndex((product) => product.id == pid)

            productos[posProductos] = newProduct
            filesystem.promises.writeFile(this.path, JSON.stringify(productos) ,'utf-8')
        }
        catch(err){
            console.error(err)
            throw err;
        }
    }
    async eliminarProductoPorId(id){
            const data = await this.obtenerProductos()
            const productos = JSON.parse(data);
            const productosActualizados = productos.filter(product => id !== product.id);
        
        filesystem.promises.writeFile(this.path, JSON.stringify(productosActualizados) ,'utf-8')

    }
}

const manager1 = new ProductManager('productosManager.json');

manager1.consultarProducto(2)
    .then(productoConsultado => {
        console.log(productoConsultado)
    })
    .catch (error => {
        console.error('Error al consultar el producto:', error);
    })

//manager1.eliminarProductoPorId(5)

manager1.agregarProducto({title: 'Producto D', descripcion: `Otro producto del monton`, price: 240, stock: 160})





/* if(id){
    const data = await filesystem.promises.readFile('productosManager.json','utf-8');
    const productos = JSON.parse(data);
    const productosActualizados = productos.filter(product => id !== product.id);
}
else{
    console.log(`El id del producto a eliminar no corresponde con ningun producto actual.`)
} */