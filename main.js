function customerSuccessBalancing(cs_id_and_level, customer_id_and_level, unavailable_cs_ids) {
    // Filtrando os CSs disponíveis
    let availableCSs = cs_id_and_level.filter(cs => !unavailable_cs_ids.includes(cs[0]));
    
    // Variáveis para acompanhar o CS que atende mais clientes e quantos clientes ele atende
    let maxCustomers = 0;
    let csWithMaxCustomers = 0;
    
    // Percorrendo os CSs disponíveis
    for (let cs of availableCSs) {
        let csId = cs[0];
        let csLevel = cs[1];
        let currentCustomers = 0;
        
        // Contando quantos clientes este CS pode atender
        for (let customer of customer_id_and_level) {
            let customerId = customer[0];
            let customerLevel = customer[1];
            
            if (csLevel >= customerLevel) {
                currentCustomers++;
            }
        }
        
        // Verificando se este CS atende mais clientes que o máximo atual
        if (currentCustomers > maxCustomers) {
            maxCustomers = currentCustomers;
            csWithMaxCustomers = csId;
        } else if (currentCustomers === maxCustomers) {
            // Em caso de empate, retornar 0
            return 0;
        }
    }
    
    return csWithMaxCustomers;
}

// Exemplo de uso:
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
