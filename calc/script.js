const fvalue = document.getElementById('fvalue');
const svalue = document.getElementById('svalue');
const result = document.querySelector('span');

function operator(op){
    switch (op) {
        case '+':
            result.innerHTML = (parseFloat(fvalue.value) + parseFloat(svalue.value)).toFixed(2);
            break;
        case '-':
            result.innerHTML = (parseFloat(fvalue.value) - parseFloat(svalue.value)).toFixed(2);
            break;
        case 'x':
            result.innerHTML = (parseFloat(fvalue.value) * parseFloat(svalue.value)).toFixed(2);
            break;
        case '/':
            result.innerHTML = (parseFloat(fvalue.value) / parseFloat(svalue.value)).toFixed(2);
            break;
        default:
            result.innerHTML = "Como diabos você chegou aqui?"
    }
}
function reset() {
    fvalue.value = "";
    svalue.value = "";
    result.innerHTML = "Resultado";
}