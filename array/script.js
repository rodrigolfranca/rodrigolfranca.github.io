let array = ["","","",""];
const inputs = document.querySelectorAll(".inputs");
let i, aux;

function save() {
    for (i=0; i<4; i++){
        array[i] = inputs[i].value
    }
    refresh()
}

function invert() {
    for (i=0; i<2; i++){
        aux = array[i]        
        array[i] = array[3-i]
        array[3-i] = aux;
    }
    refresh()
}

function increasing() {
    if (array[0] > array[1]) {
        aux = array[0];
        array[0] = array[1]
        array[1] = aux;
    }
    if (array[1] > array[2]) {
        aux = array[1];
        array[1] = array[2]
        array[2] = aux;
    }
    if (array[2] > array[3]) {
        aux = array[2];
        array[2] = array[3]
        array[3] = aux;
    }
    if (array[0] > array[1]) {
        aux = array[0];
        array[0] = array[1]
        array[1] = aux;
    }
    if (array[1] > array[2]) {
        aux = array[1];
        array[1] = array[2]
        array[2] = aux;
    }
    if (array[0] > array[1]) {
        aux = array[0];
        array[0] = array[1]
        array[1] = aux;
    }    
    refresh();
}

function refresh() {
    for (i=0; i<4; i++){
        inputs[i].value = array[i];
        inputs[i].disabled = true
    }
}