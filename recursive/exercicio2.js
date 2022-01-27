const matriz = [[1 , 2 , 3], ["Maria", "João", "Pedro", ["José", "Zéquinha"]], [true , false], { teste: 'teste' }, [ undefined ]];

function mapeador(_dado) {
    if (typeof _dado === "object" && _dado[0] !== undefined) {
        _dado.forEach(dado => {
            mapeador(dado);            
        });
    } else {        
        console.log(_dado);
    }
}

mapeador(matriz);