const filesystem = require('fs')

/* filesystem.promises.writeFile('text.txt', 'hola', 'utf-8') */

/* filesystem.promises.readFile('text.txt', 'utf-8')
.then(result => console.log(result))
 */
/* 

*/

/* Hacer una funcion que se llame leer txt que nos lea el txt por consola SIN USAR THEN */

/* const leerTxt = async () =>{
    let result = await filesystem.promises.readFile('text.txt', 'utf-8')
    console.log(result)
}   


leerTxt() */


/* 
DECODIFICADOR

Tenemos dos archivos en nuestro programa, uno se llama input.txt y el otro output.txt

El txt en input es un texto con algunas imperfecciones

POR EJEMPLO

%20 = ' '
XeX = a
$palabraClave = hola

input.txt
$palabraClave%20como%20estXeX%20buen%20diXeX

output.txt
hola como estas buen dia

Crear un programa que lea el input.txt y genere/escriba en output.txt el texto decodificado

*/

/* const decodificador = async (inputFile) => {
    let text = await filesystem.promises.readFile(inputFile, 'utf-8')
    text = text.replaceAll('%20', ' ').replaceAll('XeX', 'a').replaceAll('$palabraClave', 'hola');
    filesystem.promises.writeFile('output.txt', text, 'utf-8');
}


decodificador('text.txt')
 */


/* filesystem.promises.writeFile('product.json', JSON.stringify({data: 'pepe'}), 'utf-8') */


/* 
Crea un array que se llame productos que empieze como array vacio

Crea una funcion que se llame crearProducto:
Recibe un producto 
Lee a products.json y guarda esta lectura en una variable llamada productos
luego hace el push sobre esta variable y por ultimo guarda el producto.
*/

/* 
Asegurarse de que todos los productos cuenten con precio y nombre y id

crear la funcion llamada obtenerTotal que nos devolvera un numero que sera el total de todos los precios sumados

crear una funcion llamada obtenerProductoPorId que leera los productos en nuestro json y luego nos devolvera el producto buscado
*/


const crearProducto = async (producto) =>{
    let productos = await filesystem.promises.readFile('products.json', 'utf-8')
    let contador = await filesystem.promises.readFile('contador.json', 'utf-8')
    let contadorParseado = JSON.parse(contador)
    let currentId = contadorParseado.counterId

    let productosParseados = JSON.parse(productos)
    productosParseados.push({...producto, id: ++currentId})
    contadorParseado.counterId = currentId

    /* Actualizamos el contador */
    filesystem.promises.writeFile('contador.json', JSON.stringify(contadorParseado), 'utf-8')
    /* Actualizamos el array */
    filesystem.promises.writeFile('products.json',JSON.stringify(productosParseados), 'utf-8')
}

crearProducto({precio: 10, nombre: 'pepe'})




/* const crearProducto = async (producto) => {
      const data = await filesystem.promises.readFile("products.json", "utf-8");
      const productosJSON = JSON.parse(data);
      productosJSON.push(producto);
      filesystem.promises.writeFile(
        "products.json",
        JSON.stringify(productosJSON),
        "utf-8"
      );
    }; */


