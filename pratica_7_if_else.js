//Leia um número e informe se o mesmo é negativo ou positivo. 

let numero = prompt("Insira um número: ")

if(numero > 0){
    document.write("O número é positivo");
}
else if(numero < 0){
    document.write("O número é negativo");
}
else{
    document.write("O número é neutro");
}