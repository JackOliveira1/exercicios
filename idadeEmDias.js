// Escreva uma função que receba a idade de uma pessoa em anos
//e retorne a mesma idade em dias. Considere que um ano tem 365 dias.


function Idade (idade){

    const ano = 365;
    return idade * ano + ' Dias';

}
console.log(Idade(23));


const age = (age) => {

    const ano = 365
    return age * ano + ' Dias';
}
console.log(age(15));


const idade = (age) => { return age * 365 + ' Dias';}
console.log(idade(1));