// Exercício 1 - A:
const array1 = [2 , 3 , 4 , 5];
function multiplicadora(n1 , n2 , n3, n4) {
    return (n1 * n2 * n3 * n4);
}
console.log("Exercício 1-A: "+multiplicadora(...array1));

//Exercício 1 - B
const array2 = [6 , 7 , 8 , 9];
function concatenadora(arr1, arr2){
    return [...arr1, ...aar2];
}
console.log("Exercício 1-B: "+concatenadora(array1, array2));

//Exercício 1-C
function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function maxRandom(){
    const resultado = [];
    while (resultado.length < 10) {
        resultado.push(parseInt(geraRandom(0, 11)));
    }
    console.log("Vetor final: "+resultado);
    console.log("Maior valor: "+Math.max(...resultado));
    return true
}
maxRandom();