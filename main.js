//declaração de variaveis 
let operação = prompt("Informe a operação desejada: ")
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))

//verificar a operação matemática selecionada
if (operação == "+") {
    let resultado = numero1 + numero2
    // prompt ("O resultado da soma é " + resultado + ".")
    document.write('O resultado da soma é ' + resultado + '!');
}
if (operação == "-") {
    let resultado = numero1 - numero2
    // console.log ("O resultado da subtração é " + resultado + ".")
    document.write('O resultado da subtração é ' + resultado + '!');
}if (operação == "*") {
    let resultado = numero1 * numero2
    // console.log ("O resultado da multiplicação é " + resultado + ".")
    document.write('O resultado da multiplicação é ' + resultado + '!');
}if (operação == "/") {
    let resultado = numero1 / numero2
    // console.log ("O resultado da divisão é " + resultado + ".")
    document.write('O resultado da divisão é ' + resultado + '!');
}