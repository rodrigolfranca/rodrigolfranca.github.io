const bread = document.getElementsByName("bread");
const ham = document.getElementsByName("ham");
const cheese = document.getElementsByName("cheese");
const salad1 = document.getElementById("salad1");
const salad2 = document.getElementById("salad2");
const send = document.getElementById("enviar");
const purchase = document.getElementById("pedido");
const spanIngredients = document.getElementById("especificacoes")
const spanPrice = document.getElementById("total")
let selector;
let result = "";
let price = 0.00;

function submeter() {
    send.style.display = "none";
    purchase.style.display = "block";
    bread.forEach(element => {
        if (element.checked) {
            selector = element.value;
            switch (selector) {
                case 'bread1':
                    result = "Pão Francês + ";
                    price = 3.00;
                    selector = "";
                    break;
                case 'bread2':
                    result = "Pão Australiano + ";
                    price = 8.00;
                    selector = "";
                    break;
                case 'bread3':
                    result = "Pão de Brioche + ";
                    price = 6.00;
                    selector = "";
                    break;
            }
        }
    });
    ham.forEach(element => {
        if (element.checked) {
            selector = element.value;
            switch (selector) {
                case 'ham1':
                    result += "Hamburguer de Costela + ";
                    price = price + 10.00;
                    selector = "";
                    break;
                case 'ham2':
                    result += "Hamburguer de Picanha + ";
                    price = price + 13.00;
                    selector = "";
                    break;
                case 'ham3':
                    result += "Hamburguer Vegano + ";
                    price = price + 12.00;
                    selector = "";
                    break;
            }
        }
    });
    cheese.forEach(element => {
        if (element.checked) {
            selector = element.value;
            switch (selector) {
                case 'cheese1':
                    result += "Queijo Mussarela ";
                    price = price + 3.00;
                    selector = "";
                    break;
                case 'cheese2':
                    result += "Queijo Prato ";
                    price = price + 3.00;
                    selector = "";
                    break;
                case 'cheese3':
                    result += "Queijo Cheddar ";
                    price = price + 5.00;
                    selector = "";
                    break;
            }
        }
    });
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