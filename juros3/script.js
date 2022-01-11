const fname = document.getElementById("fname");
const purchase = document.getElementById("valor");
const date = document.getElementById("data");
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const filtro1 = document.getElementById("filtro1");
const filtro2 = document.getElementById("filtro2");
let i = 0;
let debits = [];
let tableHead = result.innerHTML;

filter.addEventListener("change", function(){
    switch (filter.value) {
        case 'data':
            filtro1.type = "date";
            filtro2.type = "date";
            break;
        case 'valor':
            filtro1.type = "number";
            filtro1.placeholder = "valor mínimo";
            filtro2.type = "number";
            filtro2.placeholder = "valor máximo";
            break;
        case 'mes':
            filtro1.type = "text";
            filtro1.placeholder = "Digite o mês (ex: Julho)";
            filtro2.type = "text";
            filtro2.placeholder = "Digite o ano (ex: 2022)";
            break;
        case '-1':
            filtro1.type = 'text';
            filtro1.placeholder = '';
            filtro1.value = ''
            filtro2.type = 'text';
            filtro2.placeholder = '';
            filtro2.value = '';
            break;
    }
});

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

function doFilter() {    
    if (filter.value === '-1') {
        exibirFiltrado(debits);
    } else if (filter.value === 'data') {
        let filtered = debits.filter(element => {
            if (filtro1.value && filtro2.value) {
                return (element.date >= filtro1.value && element.date <= filtro2.value)
            }
            if (filtro1.value) {
                return (element.date >= filtro1.value)
            }
            if (filtro2.value) {
                return (element.date <= filtro2.value)
            }
        });
        exibirFiltrado(filtered);        
    } else if (filter.value === 'valor') {
        let filtered = debits.filter(element => {
            if (filtro1.value && filtro2.value) {
                return (parseFloat(element.purchase) >= parseFloat(filtro1.value) && parseFloat(element.purchase) <= parseFloat(filtro2.value))
            }
            if (filtro1.value) {
                return (parseFloat(element.purchase) >= parseFloat(filtro1.value))
            }
            if (filtro2.value) {
                return (parseFloat(element.purchase) <= parseFloat(filtro2.value))
            }
        });
        exibirFiltrado(filtered);
    }  else {
        let mes
        switch ((filtro1.value).toLowerCase()) {
            case 'janeiro' :
                mes="01";
                break;
            case 'fevereiro' :
                mes="02";
                break;
            case 'março' :
                mes="03";
                break;
            case 'abril' :
                mes="04";
                break;
            case 'maio' :
                mes="05";
                break;
            case 'junho' :
                mes="06";
                break;
            case 'julho' :
                mes="07";
                break;
            case 'agosto' :
                mes="08";
                break;
            case 'setembro' :
                mes="09";
                break;
            case 'outubro' :
                mes="10";
                break;
            case 'novembro' :
                mes="11";
                break;
            case 'dezembro' :
                mes="12";
                break;
            default:
                alert("Mes inválido");
        }
        let data = filtro2.value+"-"+mes+"-";
        let filtered = debits.filter(element => {
            return (element.date >= (data+"01") && element.date <= (data+"31"))
        });
        exibirFiltrado(filtered);
    }
}

function exibirFiltrado(arr) {
    result.innerHTML = tableHead;
    arr.forEach(clientes => {
        result.innerHTML += "<tr><th>"+clientes.fname+"</th><th>"+clientes.purchase+"</th><th>"+clientes.date+"</th><th>"+clientes.toPay+"</th></tr>"        
    });
}