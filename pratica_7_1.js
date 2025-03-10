//FAÇA UM ALGORITMO, QUE A PARTIR DA LEITURA DE TRÊS NOTAS, CALCULE A MÉDIA FINAL DA DISCIPLINA DE PROGRAMAÇÃO, MOSTRE A MÉDIA FINAL E TAMBÉM UMA MENSAGEM INFORMANDO SE O ALUNO FOI APROVADO 
//OU REPROVADO - TENDO EM VISTA QUE A MÉDIA DE APROVAÇÃO É 7 

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a primeira nota: "))
let nota3 = parseFloat(prompt("Digite a primeira nota: "))

const NOTA_CORTE = 7

let media_final = (nota1 + nota2 + nota3) / 3

if(media_final >= NOTA_CORTE){
    document.write("Sua foi média"+media_final.toFixed(1)+"Você foi aprovado!!!");
}
else{
    document.write("Sua foi média"+media_final.toFixed(1)+ "Você não está aprovado!!!")
}



