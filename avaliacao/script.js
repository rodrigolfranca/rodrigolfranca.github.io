const fname = document.getElementById("fname");
const genre = document.getElementById("genero");
const email = document.getElementById("email");
const share = document.querySelectorAll(".radio");
const text = document.getElementById("input-mensagem");
const result = document.getElementById("result");

function submit() {
    result.innerHTML = "Nome: "+fname.value+"<br />";
    result.innerHTML += "Genero: "+genre.value+"<br />";
    result.innerHTML += "E-mail: "+email.value+"<br />";
    share.forEach(e => {
        if (e.checked){
            result.innerHTML += "Indicaçao: "+e.value+"<br />";
        }
    });
    result.innerHTML += "Sugestão: "+text.value;
}