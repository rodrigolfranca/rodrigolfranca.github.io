const bread = document.getElementsByName("bread");
const ham = document.getElementsByName("ham");
const cheese = document.getElementsByName("cheese");
const salad1 = document.getElementById("salad1");
const salad2 = document.getElementById("salad2");
const send = document.getElementById("enviar");
const purchase = document.getElementById("pedido");
const spanIngredients = document.getElementById("especificacoes")
const spanPrice = document.getElementById("total")
let result = "";
let price = 0.00;

function submeter() {
    send.style.display = "none";
    purchase.style.display = "block";
    if (bread[0].checked) {
        result = "Pão Francês + ";
        price = 3.00;        
    } else if (bread[1].checked) {
        result = "Pão Australiano + ";
        price = 8.00;        
    } else if (bread[2].checked) {
        result = "Pão de Brioche + ";
        price = 6.00;        
    }
    if (ham[0].checked) {
        result += "Hamburguer de Costela + ";
        price = price + 10.00;        
    } else if (ham[1].checked) {
        result += "Hamburguer de Picanha + ";
        price = price + 13.00;
    } else if (ham[2].checked) {
        result += "Hamburguer Vegano + ";
        price = price + 12.00;
    }
    if (cheese[0].checked) {
        result += "Queijo Mussarela ";
        price = price + 3.00;
    } else if (cheese[1].checked) {
        result += "Queijo Prato ";
        price = price + 3.00;
    } else if (cheese[2].checked) {
        result += "Queijo Cheddar ";
        price = price + 5.00;
    }    
    if ( salad1.checked || salad2.checked) {
        result += "com "
    } else {
        result += "sem salada"
    }
    if ( salad1.checked && salad2.checked) {
        result += "Alface e Tomate"
        price = price + 3.00;
    } else if (salad1.checked) {
        result += "Tomate"
        price = price + 1.50;
    } else if (salad2.checked) {
        result += "Alface"
        price = price + 1.50;
    }
    spanIngredients.innerHTML = result;
    spanPrice.innerHTML = "R$ "+price.toFixed(2);
}

function voltar() {
    send.style.display = "block";
    purchase.style.display = "none";
    result = "";
    price = 0;
}