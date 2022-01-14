const sorteado = [];
const interval = setInterval( megaSena , 1000 );

// Realiza o sorteio //
function megaSena(){
    let numero = sorteio();    
    if (sorteado.indexOf(numero) != -1) megaSena();
    sorteado.push(numero);
    document.getElementById("numero"+(sorteado.length-1)).innerHTML = numero;

    if (sorteado.length === 6) {
        clearInterval(interval);
    }
}

// Gera um número entre 1 e 60 //
function sorteio(){
	return parseInt(Math.random() * (61 - 1) + 1);
}