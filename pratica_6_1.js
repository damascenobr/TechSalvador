//CRIE UM ALGORITMO QUE LEIA UM VALOR DOLARES E CONVERTA PARA REAIS, UTILIZE UMA TAXA DE CAMBIO FIXA: 1 USD = 6.04 BRL

let valor_em_dolar = parseFloat(prompt("Digite o valor que quer converter para real: "))

const USD1 = 6.04 

let calculo_conversao = (valor_em_dolar * USD1)

document.write("$ "+valor_em_dolar+" dolares representa R$ "+calculo_conversao.toFixed(2)+" reais")