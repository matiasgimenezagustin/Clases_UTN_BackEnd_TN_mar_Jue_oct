let nombre : string | undefined = 'maria'
let edad : number = 40
let estaPrendida : boolean = true 
let indefinido : undefined = undefined
let apellido : any = 40
apellido = 'pepe'
nombre = 'pepe'
console.log("Mi nombre es " + nombre)

const edades : number[]  = [3, 10, 50, 23, 4]
const nombres : string[] = ['pepe', 'juan', 'lucas']


interface Persona {
    nombre: string,
    edad: number
} 
const persona : Persona = {
    nombre: 'pepe',
    edad: 90
}
const persona2 : Persona = {
    nombre: 'juan',
    edad: 12
}
const personas : Persona[] = [
    persona, persona2, {nombre: 'maria', edad: 45}
]

console.log(personas[2])


const calcular = (a : number, b : number) : number =>{

    return a + b
}
const saludar = (nombre: string) : void =>{
    console.log("hola buen dia " + nombre)
}
saludar('pepe')