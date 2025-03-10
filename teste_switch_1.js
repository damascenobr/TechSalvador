//ESTRUTURA DE CONDICIONAL / SWITCH..CASE

let alimento = prompt("Digite o nome de um alimento: ")
let grupo_alimentar 
switch (alimento.toLowerCase()){
    case "maça":
    case "banana":
    case "laranja":
            grupo_alimentar = "Frutas"
            break
    case "cenoura":
    case "batata":
    case "beterraba":
            grupo_alimentar = "legumes"
            break
    default:
            grupo_alimentar = "Grupo Alimentar inválido"
} 
alert(grupo_alimentar)

// Claro! Vamos analisar o código passo a passo para entender o que ele faz e como ele funciona. Este código utiliza uma estrutura condicional `switch..case` para determinar a qual grupo alimentar um alimento pertence, com base na entrada fornecida pelo usuário.

// ### 1. `let alimento = prompt("Digite o nome de um alimento: ")`
// - **O que faz**: Aqui, o `prompt()` exibe uma caixa de entrada que pede ao usuário para digitar o nome de um alimento. O valor inserido pelo usuário é armazenado na variável `alimento`. O valor que será recebido é uma **string** e pode ser qualquer nome de alimento digitado.

//   **Exemplo de uso**: Se o usuário digitar "maça", o valor da variável `alimento` será "maça".

// ### 2. `let grupo_alimentar`
// - **O que faz**: Aqui, uma variável chamada `grupo_alimentar` é declarada, mas ainda não foi atribuída a nenhum valor. Ela será usada mais tarde para armazenar o grupo alimentar correspondente ao alimento digitado pelo usuário.

// ### 3. `switch (alimento.toLowerCase()) {`
// - **O que faz**: O `switch` é uma estrutura de controle condicional que permite avaliar uma expressão (neste caso, o valor da variável `alimento`). O método `.toLowerCase()` é utilizado para converter o valor de `alimento` para minúsculas, o que ajuda a garantir que a comparação seja feita de maneira insensível a maiúsculas e minúsculas. 
//   Por exemplo, se o usuário digitar "Maça", o código irá comparar com "maça" (tudo em minúsculo).

//   **Exemplo**: Se o usuário digitou "Maça", a expressão `alimento.toLowerCase()` irá retornar "maça".

// ### 4. `case "maça":`
// - **O que faz**: Esta é uma das condições que o `switch` irá verificar. Ele verifica se o valor da variável `alimento` é **"maça"** (lembrando que o valor foi convertido para minúsculo com `toLowerCase()`). Se for, o código dentro desse `case` será executado. 

//   **Exemplo**: Se o usuário digitar "Maça", o código entra neste `case`.

// ### 5. `case "banana":`
// - **O que faz**: Este `case` verifica se o valor da variável `alimento` é **"banana"**. Se for, o código associado a este `case` será executado.

// ### 6. `case "laranja":`
// - **O que faz**: Este `case` verifica se o valor da variável `alimento` é **"laranja"**. Se for, o código associado a este `case` será executado.

// ### 7. `grupo_alimentar = "Frutas"`
// - **O que faz**: Esta linha é executada quando o valor de `alimento` é "maça", "banana" ou "laranja". Assim, a variável `grupo_alimentar` recebe o valor **"Frutas"**, indicando que o alimento inserido pertence ao grupo das frutas.

// ### 8. `break`
// - **O que faz**: O comando `break` é utilizado para interromper a execução do `switch`. Quando o código chega a essa linha, ele sai do bloco `switch` e não verifica mais as outras condições. Sem o `break`, o código continuaria a verificar os outros `case` mesmo depois de encontrar uma correspondência.

// ### 9. `case "cenoura":`
// - **O que faz**: Este `case` verifica se o valor da variável `alimento` é **"cenoura"**. Se for, o código dentro desse `case` será executado.

// ### 10. `case "batata":`
// - **O que faz**: Este `case` verifica se o valor da variável `alimento` é **"batata"**. Se for, o código dentro desse `case` será executado.

// ### 11. `case "beterraba":`
// - **O que faz**: Este `case` verifica se o valor da variável `alimento` é **"beterraba"**. Se for, o código dentro desse `case` será executado.

// ### 12. `grupo_alimentar = "legumes"`
// - **O que faz**: Se o valor de `alimento` for "cenoura", "batata" ou "beterraba", a variável `grupo_alimentar` recebe o valor **"legumes"**, indicando que o alimento inserido pertence ao grupo dos legumes.

// ### 13. `default:`
// - **O que faz**: O `default` é uma opção que é executada se nenhum dos `case` anteriores for atendido. Ou seja, se o alimento inserido não for nem uma fruta nem um legume, ele irá executar o código dentro do bloco `default`. É uma forma de tratar entradas inesperadas ou inválidas.

// ### 14. `grupo_alimentar = "Grupo Alimentar inválido"`
// - **O que faz**: Caso o valor de `alimento` não corresponda a nenhum dos `case` (nem uma fruta, nem um legume), a variável `grupo_alimentar` recebe o valor **"Grupo Alimentar inválido"**. Isso indica que o alimento fornecido não é reconhecido pelos grupos alimentares definidos no código.

// ### 15. `alert(grupo_alimentar)`
// - **O que faz**: Esta linha exibe uma mensagem de alerta (um pop-up) na tela com o valor da variável `grupo_alimentar`. Dependendo do que o usuário digitou, ele verá uma mensagem que pode ser:
//   - "Frutas" (se o alimento for uma maçã, banana ou laranja)
//   - "Legumes" (se o alimento for uma cenoura, batata ou beterraba)
//   - "Grupo Alimentar inválido" (se o alimento não for reconhecido)

// ---

// ### Exemplo de Execução

// - Se o usuário digitar **"Maça"**:
//   - O valor de `alimento` será "maça" (devido ao `toLowerCase()`).
//   - O código entra no `case "maça"`, atribui **"Frutas"** à variável `grupo_alimentar`, e a mensagem **"Frutas"** será exibida.
  
// - Se o usuário digitar **"Batata"**:
//   - O valor de `alimento` será "batata".
//   - O código entra no `case "batata"`, atribui **"Legumes"** à variável `grupo_alimentar`, e a mensagem **"Legumes"** será exibida.

// - Se o usuário digitar **"Arroz"** (um alimento que não está nos `case`):
//   - O valor de `alimento` será "arroz".
//   - O código entra no `default`, atribui **"Grupo Alimentar inválido"** à variável `grupo_alimentar`, e a mensagem **"Grupo Alimentar inválido"** será exibida.

// ---

// ### Usabilidade em Sistemas de Gestão

// Esse tipo de estrutura condicional pode ser útil em sistemas de gestão de estoque ou sistemas nutricionais. Por exemplo:

// 1. **Gestão de Estoque de Alimentos**:
//    - Um sistema pode classificar alimentos automaticamente em diferentes categorias (como frutas, legumes, carnes, etc.), baseando-se no nome do produto inserido. Isso pode ajudar a organizar melhor os produtos no estoque ou no inventário.
   
// 2. **Sistema Nutricional**:
//    - Em um aplicativo de acompanhamento de dieta, ao inserir alimentos, o sistema pode automaticamente determinar em qual grupo alimentar o item se encaixa, ajudando o usuário a manter um equilíbrio adequado entre os grupos alimentares.

// ### Conclusão

// Esse código é um bom exemplo de como a estrutura `switch..case` pode ser usada para categorizar ou classificar informações de forma eficiente. Ele permite que a aplicação execute diferentes ações dependendo do valor de entrada e é especialmente útil em casos onde você tem múltiplas condições que precisam ser avaliadas para uma única variável.