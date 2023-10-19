// Crie uma função que receba um array com uma quantidade
//indeterminada de números e retorne a média simples
//desses números



function CalcularMedia(arr){
    if(arr === 0) {
        return [];
    } else {
        const soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        const divisao = (soma + soma) / arr.length -1;
        return divisao;
    }
}
const numeros = [1,2,3,4,5];
console.log('A média é: ',CalcularMedia(numeros));


const calculoDeMedia = (arr) => {
    if(arr === 0) {
        return [];
    } else {
        const soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        const divisao = (soma + soma) / arr.length -1;
        return divisao;
    }
}
const medias = [2,3,4,5,6];
console.log('A média é: ', calculoDeMedia(medias));


const average = (arr) => {
    const sum = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const average = (sum + sum) / arr.length -1;
    return arr === 0 ? [] : console.log('The average is', average);
}
const averages = [3,4,5,6,7];
average(averages);