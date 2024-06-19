# CustomerSuccess Balancing

Este projeto implementa um sistema para distribuir clientes entre Customer Success (CSs) baseado na experiência de cada CS e no tamanho dos clientes.

## Como Rodar

Certifique-se de ter o Node.js instalado na sua máquina.

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/eduardomds1996/RD_Challenge
   cd RD_Challenge

2. **Instale as dependências:**

Não há dependências externas para este projeto além do Node.js.

3. **Edite o arquivo main.js:**

Abra o arquivo main.js.
Substitua ou adicione os arrays cs_id_and_level, customer_id_and_level e unavailable_cs_ids com os seus próprios dados de entrada conforme necessário.

4. **Execute o código:**

No terminal, execute o seguinte comando para rodar o script:


 ```bash
node main.js
```

Isso irá rodar o script JavaScript que resolverá o problema de balanceamento entre clientes e CSs baseado nos dados de entrada fornecidos.

5. **Resultado Esperado: **

O script irá imprimir o ID do CS que pode atender o maior número de clientes. Se houver um empate no número máximo de clientes atendidos entre dois ou mais CSs, o resultado será 0.

**Exemplo**

Para entender como os dados de entrada são organizados e como o código funciona, veja o exemplo fornecido no arquivo main.js. Este exemplo demonstra como configurar os arrays de entrada e como o resultado é calculado.

 ```bash

// Exemplo de entrada e uso do script
let cs_id_and_level = [
    [1, 50],
    [2, 100],
    [3, 70],
    [4, 90]
];

let customer_id_and_level = [
    [1, 20],
    [2, 30],
    [3, 35],
    [4, 40],
    [5, 60],
    [6, 80]
];

let unavailable_cs_ids = [2, 4];

console.log(customerSuccessBalancing(cs_id_and_level, customer_id_and_level, unavailable_cs_ids)); // Deve imprimir 1
```
