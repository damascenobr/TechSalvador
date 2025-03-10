//Crie um algoritmo que leia uma temperatura em Celsius e a converta para Fahrenheit
// F = 9/5 X C + 32 

let temperatura_celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "))

let Fahrenheit_calculo = (temperatura_celsius * (9/5))
    Fahrenheit_calculo = Fahrenheit_calculo + 32


document.write(`${temperatura_celsius} °C equivalem a ${Fahrenheit_calculo} °F`)