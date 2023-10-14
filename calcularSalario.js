// Desenvolva uma função que receba dois parâmetros,
//um é a quantidade de horas trabalhadas por um funionário
//num mês, e o quanto ele recebe por hora. O retorno da
//função deve ser a String "Salário igual a R$X", em que X
//é quanto o funionário ganhou no mês.


function calcularSalario(trabalhada, recebida){
    return 'Salário igual a R$' + trabalhada * recebida
}
console.log(calcularSalario(150, 40.5));



const salario = (trabalhada, recebida) => {return 'Salário igual a R$' + trabalhada * recebida}
console.log(salario(100, 40));



const mensal = (trabalhada, recebida) => 'Salário igual a R$' + trabalhada * recebida;
console.log(mensal(15,20))