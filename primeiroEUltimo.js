// Crie uma função que receba um array e retorne o primeiro
//e o último elemento desse array como um novo array



function PrimeiroEUltimo(arr){
    if (arr.length === 0) {
        return [];
      } else {
        return [arr[0], arr[arr.length - 1]];
      }
}
const meuArray = [1,3,4,5,63]
console.log('Resultado: ', PrimeiroEUltimo(meuArray));

const firstLast = (arr) => {
    if(arr.length === 0){
        return [];
    } else {
        return [arr[0], arr[arr.length - 1]];
    }
}

const anotherArray = [1,5,7,9,78];
console.log('Another Result: ', firstLast(anotherArray));



const firstAndLast = (arr) => arr.length === 0 ? [] : [arr[0], arr[arr.length - 1]];

const anotherOne = [5,587,'Hello']
console.log('Final Result: ', firstAndLast(anotherOne))