// Crie uma função que receba dois números e retorne
//se o primeiro é maior ou igual ao segundo



function MaiorIgual(primeiro, segundo){

    if(primeiro === segundo){
        console.log('Os números são iguais!');
    }

    if(primeiro > segundo) {
        console.log(primeiro + ' É maior que ' + segundo);
    }

    if(segundo > primeiro) {
        console.log('O primeiro número precisa ser maior que o segundo!!');
    }
}

MaiorIgual(3,1);


const primeiroMaior = (primeiro, segundo) => {
    if(primeiro === segundo){
        console.log('Os números são iguais!');
    }

    if(primeiro > segundo) {
        console.log(primeiro + ' É maior que ' + segundo);
    }

    if(segundo > primeiro) {
        console.log('O primeiro número precisa ser maior que o segundo!!');
    }
}

primeiroMaior(100,10);


const firstOrSecond = (first, second) => {
    if(first === second){
        console.log('Number are equals')
    } else {
        first > second && first !== second ? console.log(first +' Is bigger than ' + second) : console.log('First number needs be bigger than second!!');
    }
}

firstOrSecond(15,15);