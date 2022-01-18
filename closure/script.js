function createMultiplier (multiplicador) {
    return function(multiplicando) {
        return multiplicando * multiplicador;
    }
}

let multiplyBy100 = createMultiplier(100);

console.log(multiplyBy100(35));