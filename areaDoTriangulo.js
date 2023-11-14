// Faça uma fórmula que recebe a base e a altura de um triangulo
//e retorne a área desse triângulo. A precisão deverá ser de duas
//casas decimais, arredondando se necessário


function areaDoTriangulo (base, altura) {
    return Math.round(base * altura / 2).toFixed(2);
}

const areaTriangulo = (base, altura) => {
    return Math.round(base * altura / 2).toFixed(2);
}

const area = (base, altura) => Math.round(base * altura / 2).toFixed(2);


console.log(areaDoTriangulo(10,15));