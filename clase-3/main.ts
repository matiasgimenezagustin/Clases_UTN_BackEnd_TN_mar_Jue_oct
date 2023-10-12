console.log('hola mundo')


/* const numeros = [8, 19, 30, 80, 72, 90, 10, 40] */

//Crea una funcion que se llame filtrarPorIntervalos(numeros, inicio, fin)
//Esta funcion va a devolver un array con todos los numeros que esten dentro del intervalo

//ej: filtrarPorIntervalos(70, 85) => [80, 72]

//LOS METODOS AVANZADOS TAMBIEN TIENEN TIPADO EN SUS CALLBACKS

/* const arr : string[] = ['pepe', 'juan']

arr.map((nombre: string) : string =>{
    return nombre + 'a'
})

const filtrarPorIntervalo = (numeros:number[], start: number, end: number) : number[] => {
  
    return numeros.filter(
        (num:number) : boolean => num > start && num < end
    )
}
const resultado : number[] = filtrarPorIntervalo(numeros, 70, 85)
console.log(resultado) */


class Usuario {
    nombre: string
    constructor(nombre: string){
        this.nombre = nombre
    }

    saludar(nombre : string) : void {
        console.log('hola ' + nombre + ', buen dia!')
    }
}

const usuario1 : Usuario = new Usuario('pepe')

usuario1.saludar('pepe')


/* Definir una clase llamada Empleado con los atributos, salarioBase, puesto, nombre, antiguedad*/

interface Trabajo {
    nombre: string,
    duracion: number
}

class Empleado{
    nombre: string
    salarioBase: number
    puesto: string
    antiguedad: number
    trabajosAsignados: Trabajo[]
    estaVivo: boolean
    constructor( nombre:string,salarioBase: number,puesto: string,antiguedad:number){
        this.nombre = nombre,
        this.salarioBase = salarioBase,
        this.puesto = puesto,
        this.antiguedad = antiguedad
        this.trabajosAsignados = []
        this.estaVivo = true
    }

    asignarTrabajo (trabajo : Trabajo) : void {
        this.trabajosAsignados.push(trabajo)
    }
}

class Desarrollador extends Empleado{
    constructor(nombre:string, salarioBase: number, puesto: string, antiguedad:number){
        super(nombre, salarioBase, puesto, antiguedad)
    }
    trabajar(horas: number) : void{
        console.log(this.nombre + ' hace tiki tiki tiki por ' + horas + ' horas ')
    }
}

class Diseñadora extends Empleado{
    herramientaFavorita : string
    constructor(nombre:string, salarioBase: number, antiguedad:number, herramientaFavorita : string){
        super(nombre, salarioBase, "Diseñadora", antiguedad)
        this.herramientaFavorita = herramientaFavorita
    }
    diseñar(horas: number, motivacion: number) : void{
        if(motivacion > 50){
            console.log(this.nombre + ' hace tiki tiki tiki en figma por ' + horas + ' horas ')
        }
        else{
            console.log(this.nombre + ' hace tiki tiki tiki en figma por ' + horas/2 + ' horas ')
        }
    }
}

interface Persona {
    nombre: string,
    edad: number
} 

/* Crear una interface llamada Trabajo que tendra una duracion, nombre */
/* Creamos un nuevo atributo a empeado que se llame tareas asignadas y que sea de tipo array de Trabajos *///EL VALOR INICIAL DE TAREAS ASIGNADAS ES ARRAY VACIO
/* Creamos un metodo llamado asignarTrabajo al empleado que recibira un trabajo y lo agregara al array de tareasAsignados */


const desarrollador = new Desarrollador('juanito', 470000, 'maquetador web', 1)
const samantha = new Diseñadora('Samantha', 490000, 1.3, 'Adobe XD')

samantha.diseñar(4, 30)
samantha.diseñar(4, 70)
desarrollador.asignarTrabajo({nombre: 'hacer una landing', duracion: 3})
desarrollador.trabajar(8)

console.log(desarrollador)

/* Vamos a crear una nueva class llamada project manager que provenga de Empleado

Esta clase va a tener los metodos asignarTareaAEmpleado (recibe una tarea y un empleado )
y usaremos el metodo de class empleado para asignarle una tarea a este empleado

a proyectManager agrgerle una propiedad llamada equipo que tenga el tipo empleado array e inicialize comoa array vacio.
Luego crear el metodo agregarAlEquipo (empleado) y lo agrega al array equipo

*/

class ProjectManager extends Empleado{
    constructor(nombre:string, salarioBase: number, puesto: string, antiguedad:number){
        super(nombre, salarioBase, puesto ,antiguedad)
    }

    asignarTareaAEmpleado(trabajo: Trabajo, empleado : Empleado) : void {
        empleado.asignarTrabajo(trabajo)
    }
}


const rodolfo = new ProjectManager('rodolfo', 320000, 'project manager', 2)

rodolfo.asignarTareaAEmpleado({duracion: 50, nombre: 'Diseñar el login y prototipar'}, samantha)


//ARREGLAR EL GITHUB