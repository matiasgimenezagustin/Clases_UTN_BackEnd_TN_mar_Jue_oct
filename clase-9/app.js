const filesystem = require('fs')

/* filesystem.promises.writeFile('text.txt', 'hola', 'utf-8') */

/* filesystem.promises.readFile('text.txt', 'utf-8')
.then(result => console.log(result))
 */
/* 

*/

/* Hacer una funcion que se llame leer txt que nos lea el txt por consola SIN USAR THEN */

const leerTxt = async () =>{
    let result = await filesystem.promises.readFile('text.txt', 'utf-8')
    console.log(result)
}   


leerTxt()


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

const decodificador = async (inputFile) => {
    let text = await filesystem.promises.readFile(inputFile, 'utf-8')
    text = text.replaceAll('%20', ' ').replaceAll('XeX', 'a').replaceAll('$palabraClave', 'hola')
    filesystem.promises.writeFile('output.txt', text, 'utf-8')
}


decodificador('text.txt')