const input = document.getElementById("input");
function logMaker(callback){    
    console.log(callback());
}

function pegaDados(){    
    return (input.value);
}