//ESCREVA UM PROGRAMA QUE LEIA A IDADE DE UMA PESSOA E VERIFIQUE SE ELA É MENOR DE IDADE (MENOS DE 18 ANOS), MAIOR DE IDADE (ENTRE 18 E 64 ANOS) OU IDOSA (65 ANOS OU MAIS)

let idade = parseInt(prompt("Digite sua idade: "))

if(idade <= 17){
    document.write("Você é menor de idade!")
}
else if(idade <= 65){
    document.write("VocÊ é maior idade!")
}
else{
    document.write("Você é idoso!")

}