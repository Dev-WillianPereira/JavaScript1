// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return (a + b)
}
console.log("O valor da soma é de: ", soma(5, 10))

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a * b)
}
console.log("O valor da multiplicação é de: ", multiplicacao(10, 2));
/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a / b)
}
console.log("O valor da divisão é de: ", divisao(50, 10));
/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a - b)
}
console.log("O valor da subtração é de: ", subtracao(8, 4));
/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return (a % b)
}
console.log("O resto de divisão é: ", modulo(40, 13))
/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui]
  if (a > b)
    return ("O número maior é :", a)
  else if (a < b)
    return ("O número maior é: ", b)
}
console.log("O maior dos dois números é: ", max(10, 12))
// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
  return `${a} ${b}`
}
let a = "Olá"
let b = "Mundo!"

console.log("A concatenação ficou: ", strConcat(a, b))

// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string}
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero){
  // @todo implementar retorno da operação aqui
  if(numero > 10){
    return "O número é maior que 10"
  }
  
  else if(numero === 10){
    return "O número é igual a 10"
  }
  else{
    return "O número é menor que 10"
  }
}

  console.log (retornaNumero(20))
// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num){
  // @todo implementar retorno da operação aqui
    return (num >= 0)
}
console.log(ehPositivo(10))
console.log(ehPositivo(0))
console.log(ehPositivo(-10))
module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};