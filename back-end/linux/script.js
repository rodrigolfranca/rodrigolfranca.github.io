const table = document.querySelector("table");
const params = document.getElementById("params");
const valor = document.getElementById("valor");
const tableHead = table.innerHTML;
const regex = /^([1-9][0-9]+|[1-9])$/;
let resultado;
function executar() {
  table.innerHTML = tableHead;
  if (params.value == 'id') {
    if (!regex.test(valor.value)) {
      alert("IDs são números inteiros.")
    } else {
      requisicao(params.value , valor.value);
    }
  }
  if (params.value == 'name') {
    requisicao(params.value , valor.value)
  }
  if (params.value == 'email') {
    requisicao(params.value , valor.value)
  }
}
function requisicao(param , value){     
  fetch('http://192.168.1.150:3000/'+param+'/'+value)
  .then(function(promise){
      promise = promise.json();
      return promise;
  })
  //resposta neste then é o array de objetos captados do servidor
  .then(function (resposta){
    if (params.value == 'id') {
      resposta = resposta[0];        
      table.innerHTML += "<tr><th>"+resposta.id+"</th><th>"+resposta.name+"</th><th>"+resposta.email+"</th></tr>";
    } else {
      resposta.forEach(objeto => {
        table.innerHTML += "<tr><th>"+objeto.id+"</th><th>"+objeto.name+"</th><th>"+objeto.email+"</th></tr>";                
      });
    }
  })
}