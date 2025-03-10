// FAÇA UM ALGORITMO QUE LEIA AS 3 NOTAS DE UM ALUNO E CALCULE A MÉDIA FINAL DESTE ALUNO. CONSIDERE QUE A MÉDIA É PONDERADA E QUE O PESO DAS NOTAS É: 2, 3 E 5, RESPECTIVAMENTE.

let nota1 = parseFloat(prompt("Digite sua nota 1: "))
let nota2 = parseFloat(prompt("Digite sua nota 2: "))
let nota3 = parseFloat(prompt("Digite sua nota 3: "))

let peso1 = 2
let peso2 = 3
let peso3 = 5
let soma_peso = (peso1 + peso2 + peso3)

let media_ponderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)
    media_ponderada = media_ponderada / soma_peso

document.write ("A média ponderada é: "+media_ponderada.toFixed(1))

