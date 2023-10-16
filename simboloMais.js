// Elabore uma função que recebe um número como parâmetro
//e retorne uma string com o símbolo "+" na quantidade
//especificada no parâmetro



function simboloMais(quantidade){
    const qnt = quantidade;
    const mais = '+';
    if(qnt < 0) {
        return '';
    } else {
      return  mais.repeat(quantidade);
    }
}
console.log(simboloMais(22));


const simbolosMais = (qnt) => {
    if(qnt < 0) {
        return '';
    } else {
        return '+'.repeat(qnt);
    }
}
console.log(simbolosMais(50));


const mais = (qnt ) => qnt < 0 ? '' : '+'.repeat(qnt);
console.log(mais(3));