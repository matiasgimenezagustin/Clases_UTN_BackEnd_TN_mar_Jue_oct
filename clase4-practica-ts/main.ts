/* 
Practica de POO con TS

Generar la class Product
Propiedades:
title: string
price: number
stock: number
id: number
quantity: number

Generar la class Cart 
Propiedades:
cart: Product[]
id: number


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
class Product {
    title: string
    price: number
    stock: number
    id: string
    quantity: number
    constructor(title: string, price: number, stock: number, id: string) {
        this.title = title,
            this.price = price,
            this.stock = stock,
            this.id = id
        this.quantity = 0
    }
}

class Cart {
    cart: Product[];
    id: number;
    constructor(id: number) {
        this.cart = [];
        this.id = id;
    }
}


class CartManager {
    carts: Cart[];
    id: number;
    constructor() {
        this.carts = [];
        this.id = 0;
    }

    createCart(): number {
        const cart: Cart = new Cart(this.id++)
        this.carts.push(cart)
        return cart.id
    }
    getCartById(cid: number): undefined | Cart {
        return this.carts.find((cart: Cart): boolean => cart.id == cid)
    }
    addProductCart(cartId: number, product: Product, quantity: number): void {
        const cart = this.getCartById(cartId); //encuentra el carrito
        if (cart) {
            const existingProduct: Product | undefined = cart.cart.find(
                (item: Product) => item.id === product.id
            ); //
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                product.quantity = quantity;
                cart.cart.push(product);
            }
        }
    }

    getTotalCart(cartId: number): number {
        const cart : Cart | undefined = this.getCartById(cartId);
        if (cart) {
            let result : number = 0

            cart.cart.forEach(
                (product: Product) :void =>{
                    result += product.price * product.quantity
                }
            );
            return result
        }
        return 0;
    }
}

