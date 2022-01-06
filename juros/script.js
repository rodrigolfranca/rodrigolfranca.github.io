const fname = document.getElementById("fname");
const purchase = document.getElementById("valor");
const date = document.getElementById("data");
const result = document.getElementById("result");
let i = 0;
let debits = [];

/* Essa função inseri os valores no formulário dentro do vetor de objetos e reseta o formulário */
function adcionar(){
    debits.push({ fname:(fname.value), purchase:(purchase.value), date:(date.value) });
    result.innerHTML += '<tr><th>'+debits[i].fname+'</th><th>'+debits[i].purchase+'</th><th>'+debits[i].date+'</th><th id=toPay'+i+'></th></tr>';
    fname.value = "";
    purchase.value = "";
    date.value = "";
    i = i + 1;
}

/* Essa função faz o map do vetor de objetos criado na adcionar() realizando o calculo dos juros e adciona os resultados na tabela */
function calcular(){
    i = 0
    let total = debits.map (function (element){
        let diffDate = calcDate(element.date);
        let toPay = parseFloat(element.purchase);
        if (diffDate > 0) {
            let mora = toPay*0.02;
            let byDay = toPay*(diffDate*0.001);
            toPay = toPay+mora+byDay;
            return toPay.toFixed(2);
        } else {
            return toPay.toFixed(2);
        }
    });
    total.forEach(element => {        
        document.getElementById(("toPay"+i)).innerHTML = element;
        i=i+1; 
    });
}

/* Essa função confere se existe a diferença entre a data nos parametros e a data atual e,
 se houver diferença, retorna essa diferença em dias */
function calcDate(purchase) {
    let today = parseInt((Date.now() - 10800000)/(1000 * 60 * 60 * 24));
    let ms = Date.parse(purchase);
    let date = new Date(ms)/(1000 * 60 * 60 * 24);
    let diffDate = today - date;
    if (diffDate > 0) {
        return diffDate;
    }
    else {
        return 0;
    }
}