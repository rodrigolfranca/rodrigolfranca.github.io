const changeSize = [];
let controlador = 0
function makeSizer(size) {
    return function() {
        document.getElementById("texto").style.fontSize = size+"px";
    }
}

changeSize[0] = makeSizer(14);
changeSize[1] = makeSizer(16);
changeSize[2] = makeSizer(18);
changeSize[3] = makeSizer(20);
changeSize[4] = makeSizer(22);

function mais() {
    if (controlador < 4) controlador ++;
    changeSize[controlador]();
}

function menos() {
    if (controlador > 0) controlador --;
    changeSize[controlador]();
}

document.getElementById("menos").onclick = menos;
document.getElementById("mais").onclick = mais;