let repeat;
let contador;
let i;
const result = document.getElementById("result");
const writer = document.querySelectorAll(".writer")


function escreve(){
    repeat = document.getElementById("repeat").value;
    contador = 1;
    while (repeat > 0){
        repeat = repeat - 1;

        if (((contador % 22) - 1) == 0){
            writer.forEach(element => {
                element.innerHTML = "";
            });
        }
        if (contador <= 22){            
            i = contador - 1
            writer[i].innerHTML = "Eu não gritarei “Fogo” em uma sala de aula cheia";            
        } else if ((contador % 22) == 0) {
            i = 21;
            writer[i].innerHTML = "Eu não gritarei “Fogo” em uma sala de aula cheia"
        } else {
            i = (contador % 22) - 1
            writer[i].innerHTML = "Eu não gritarei “Fogo” em uma sala de aula cheia"
        }

        result.innerHTML = parseInt(contador / 22)+" lousas e "+Math.ceil((contador % 22)/2)+" linha(s)";
        contador = contador + 1;
    }    
}