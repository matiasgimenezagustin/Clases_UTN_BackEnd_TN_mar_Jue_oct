
/* Contar la cantidad total de caracteres de los sig nombres */
const nombres = ['juan', 'lucas', 'pepe']

//JOIN

console.log(nombres.join('').length)

const numeros = [1, 2, 4, 2]

/* Dado un array de numeros quiero obtener un array con el sig formato */

//['⭐','⭐⭐', '⭐⭐⭐⭐'...]

console.log('⭐'.repeat(8))
console.log(numeros.map(p=>'⭐'.repeat(p)))