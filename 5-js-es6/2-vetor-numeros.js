// vetor de números 

const numeros= [1, 2, 3, 4 , 5]

console.log('/nExibindo todos os números')
console.log(numeros)

console.log('n/Multiplicando todos os números por 2: ')
console.log(numeros)
console.log (numerosMultiplicadosPorDois)

console.log('n/Exibindo apenas os números pares: ')
console.log(numeros)
const numerosPares = numeros.filter(n=> n % 2 === 0)
console.log(numerosPares)

console.log('/nExibindo soma de todos os numeros:')
console.log(numeros)
const soma = numeros.reduce((soma, atual)=> soma + atual, 0)
console.log(soma)
