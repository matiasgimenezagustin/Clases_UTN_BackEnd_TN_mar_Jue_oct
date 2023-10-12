/* 
Practica de POO con TS

Generar la class Product
Propiedades:
title: string
price: number
stock: number
id: string
quantity: number

Generar la class Cart 
Propiedades:
cart: Product[]
id: number
getCartById() recibe un id y devuelve el carrito buscado o null en caso de no existir 

Generar una clase llamada CartManager:
Propiedades: 
-carts (empieza como arr vacio) : Cart[]
-id (0)

Metodos:

createCart() => creara un carrito con las propiedades cart (empieza como array vacio) y id (cada nuevo carrito debera tener un id distinto)

getCartById(cid) => recibira un cartId y devolvera el carrito buscado sino devuelve null

addProductCart(cid, product, quantity) => recibira un cartId y un product : Product y una cantidad : number,
Si el producto ya existe en el carrito: 

-Incrementara la quantity del producto ya existente por la quantity pasada por parametro

Sino:

-Agregara la propiedad quantity a el product y a ese product lo agregara al array del carrito cuyo id sea identico al cid pasado por parametro.

getTotalCart(cid) => recibira un cartId y devolvera un total numerico que sera la suma de todos los precios por la cantidad en la prop cart Product[]


*/

