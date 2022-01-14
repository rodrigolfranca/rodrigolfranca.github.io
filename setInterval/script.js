const sorteado = [];
const interval = setInterval( megaSena() , 1000 );

// Realiza o sorteio //
function megaSena(){
    let numero = sorteio();    
    while (sorteado.indexOf(numero) != -1) numero = sorteio();
    sorteado.push(numero);
    console.log("numero"+sorteado.length+": "+numero);

    if (sorteado.length === 6) {
        console.log('a')
        clearInterval(interval);
    }
}

// Gera um número entre 1 e 60 //
function sorteio(){
	return parseInt(Math.random() * (61 - 1) + 1);
}