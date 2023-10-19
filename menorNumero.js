// Crie uma função que receba um array de números 
//e retorne o menor número desse array.



function menorN(arr) {
    const min = arr.reduce((a,b) => Math.min(a,b));
    console.log('O menor número é: ', min);
}

const array = [10, 2, 5, 4];
menorN(array);


const smaller = (arr) => {
    const min = arr.reduce((a,b)=> Math.min(a,b));
    console.log('O menor número é: ', `${min}`);
}

const numbers = [5234,67,75,8.1];
smaller(numbers);


const intNumbers = [8485, 453232, 564654, 458, 57];
const smallerOrLarger = Math.min(...intNumbers);
console.log('The smallest number is: ', smallerOrLarger);