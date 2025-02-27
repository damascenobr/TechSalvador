#include <stdio.h>

//Desafio Super Trunfo
//Tema 1 - cadastro das cartas 

int main (){
    char estado;
    char codigo_da_carta [4];
    char cidade [10];
    int populacao;
    float area;
    float pib;
    int num_pontos_turisticos;

// CADASTRO DA PRIMEIRA CARTA 
// CADA ETAPA SOLICITAMOS UM DADO ESPÉCIFICO AO USUÁRIO E ARMAZENA O VALOR VARIÁVEL CORRESPONDENTE

printf("Vamos cadastrar a primeira carta.\n\n");

printf("Digite a letra do Estado de 'A a H': ");
scanf("%c", &estado);

printf("Digite o código da carta de '01 a 04' (ex: A01, B03): ");
scanf("%s", &codigo_da_carta);

printf("Digite o nome da cidade: ");
scanf("%s", &cidade);

printf("Digite o número de habitantes da cidade: ");
scanf("%d", &populacao);

printf("Digite a área da cidade em quilômetros quadrados: ");
scanf("%f", &area);

printf("Digite o PIB da cidade: ");
scanf("%f", &pib);

printf("Digite a quantidade de pontos turísticos: ");
scanf("%d", &num_pontos_turisticos);

//Exibição dos dados cadastrados 

printf("Carta cadastrada com sucesso!!!\n\n");
printf("Carta 1: \n");
printf("Estado: %c\n", estado);
printf("Código da carta: %s\n", codigo_da_carta);
printf("Nome da Cidade: %s\n", cidade);
printf("População: %d\n", populacao);
printf("Área: %.2f km²\n", area);
printf("PIB: %.2f bilhões de reais\n\n", pib);

printf("Vamos cadastrar a Segunda carta.\n\n");


printf("Digite a letra do Estado de 'A a H': ");
scanf(" %c", &estado);

printf("Digite o código da carta de '01 a 04' (ex: A01, B03): ");
scanf("%s", &codigo_da_carta);

printf("Digite o nome da cidade: ");
scanf("%s", &cidade);

printf("Digite o número de habitantes da cidade: ");
scanf("%d", &populacao);

printf("Digite a área da cidade em quilômetros quadrados: ");
scanf("%f", &area);

printf("Digite o PIB da cidade: ");
scanf("%f", &pib);

printf("Digite a quantidade de pontos turísticos: ");
scanf("%d", &num_pontos_turisticos);

//Exibir os dados cadastrados 
printf("Carta cadastrada com sucesso!!!\n\n");
printf("Carta 2: \n");
printf("Estado: %c\n", estado);
printf("Código da carta: %s\n", codigo_da_carta);
printf("Nome da Cidade: %s\n", cidade);
printf("População: %d\n", populacao);
printf("Área: %.2f km²\n", area);
printf("PIB: %.2f bilhões de reais\n", pib);


return 0;






}
