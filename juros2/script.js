const fname = document.getElementById("fname");
const purchase = document.getElementById("valor");
const date = document.getElementById("data");
const result = document.getElementById("result");
let i = 0;
let debits = [];

function adcionar(){
    debits.push({ fname:(fname.value), purchase:(purchase.value), date:(date.value), toPay:"" });
    result.innerHTML += '<tr><th>'+debits[i].fname+'</th><th>'+debits[i].purchase+'</th><th>'+debits[i].date+'</th><th id=toPay'+i+'></th></tr>';
    fname.value = "";
    purchase.value = "";
    date.value = "";
    i = i + 1;
}

function calcular(){
    i = 0
    let total = debits.map (element => {
        let diffDate = calcDate(element.date)
        let toPay = parseFloat(element.purchase)

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
        debits[i].toPay = element;
        i=i+1; 
    });
}

function calcDate(purchase) {
    let today = parseInt((Date.now() - 10800000)/86400000);
    let ms = Date.parse(purchase);
    let date = new Date(ms)/86400000;
    let diffDate = today - date;
    if (diffDate > 0) {
        return diffDate;
    }
    else {
        return 0;
    }
}

function agruparPor(propriedade) {
    result.innerHTML = "";

    const reducedArr = debits.reduce(function (clientAcc, clientAtual) {
        let key = clientAtual[propriedade];
        
        if (!clientAcc[key]) clientAcc[key] = [];
        clientAcc[key].push(clientAtual);
        return clientAcc;
    }, {});
    listarGrupo(reducedArr);
}

function listarGrupo(arr) {
    for (let key in arr) {
        result.innerHTML += "<tr><th>"+key+"</th></tr>"
        arr[key].forEach(clientes => {
            result.innerHTML += "<tr><th>"+clientes.fname+"</th><th>"+clientes.purchase+"</th><th>"+clientes.date+"</th><th>"+clientes.toPay+"</th></tr>"
        });
    }
}