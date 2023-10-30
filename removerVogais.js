// Desenvolva uma função que receba uma string como parâmetro e retorne
//uma string essa string somente com as consoantes, ou seja, sem as vogais




function removerVogais(str){
    return str.replace(/(a|ã|á|à|â|e|ê|è|é|i|ì|í|î|o|õ|ô|ó|ò|u|ú|ù|û|)/gi, '');
}

const primeiroTeste = 'Este é o primeiro teste';
console.log(removerVogais(primeiroTeste));


const removerTodasVogais =(str) => {
    return str.replace(/(a|ã|á|à|â|e|ê|è|é|i|ì|í|î|o|õ|ô|ó|ò|u|ú|ù|û|)/gi, '');
}

const segundoTeste = 'Este é o segundo teste';
console.log(removerTodasVogais(segundoTeste));



const removeVowels = (str) => str.replace(/(a|ã|á|à|â|e|ê|è|é|i|ì|í|î|o|õ|ô|ó|ò|u|ú|ù|û|)/gi, '');

const secondTest = 'This is my second test';
console.log(removeVowels(secondTest));