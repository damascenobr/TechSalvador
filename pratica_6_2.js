//DESENVOLVA UM ALGORITMO QUE LEIA O PREÇO DE UM PRODUTO E UM PERCENTUAL DE DESCONTO, CALCULE E MOSTRE O PREÇO FINAL APÓS DESCONTO 

let preco_produto = parseFloat(prompt("Qual o valor do produto? "))
let desconto_percentual = parseInt(prompt("Qual o percentual de desconto do produto? "))

let conversao_percentual = (desconto_percentual/ 100)// valor conveetidpo da porcetagem 
let desconto_valor = (preco_produto * conversao_percentual) // valor que é descontado do preço do produto

let preco_final = (preco_produto - desconto_valor)

document.write("O preço do produto com desconto é: R$ "+preco_final.toFixed(2))
