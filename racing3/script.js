let voltas, aux, pontos = 0;
const lapradio = document.querySelectorAll(".input");
const min0 = document.getElementById("min0");
const max0 = document.getElementById("max0");
const derrapagem0 = document.getElementById("derrapagem0");
const min1 = document.getElementById("min1");
const max1 = document.getElementById("max1");
const derrapagem1 = document.getElementById("derrapagem1");
const min2 = document.getElementById("min2");
const max2 = document.getElementById("max2");
const derrapagem2 = document.getElementById("derrapagem2");
const winner = document.getElementById("vencedor");
const exp0 = document.getElementById("exp0");
const level0 = document.getElementById("level0");
const exp1 = document.getElementById("exp1");
const level1 = document.getElementById("level1");
const exp2 = document.getElementById("exp2");
const level2 = document.getElementById("level2");
//carros criados
let player = [
    {
        owner: "Pedro",
        car: {
        rarity: "",
        level: 1,
        speedMin: 0,
        speedMax: 0,
        skid: 0
        },
        speed: 0,
        voltas: 0,
        EXP: 0,
        level: 1,
    },
    {
        owner: "Juca",
        car: {
        rarity: "",
        level: 1,
        speedMin: 0,
        speedMax: 0,
        skid: 0
        },
        speed: 0,
        voltas: 0,
        EXP: 0,
        level: 1,
    },
    {
        owner: "Edna",
        car: {
        rarity: "",
        level: 1,
        speedMin: 0,
        speedMax: 0,
        skid: 0        
        },
        speed: 0,
        voltas: 0,
        EXP: 0,
        level: 1,
    }
]
//modelos de carro
let popular = {
    speedMax: [180 , 200] ,
    speedMax: [110 , 130] ,
    skid: [3 , 4]
}
let sport = {
    speedMax: [195 , 215] ,
    speedMax: [125 , 145] ,
    skid: [2 , 3]
}
let superSport = {
    speedMax: [210 , 230] ,
    speedMax: [125 , 145] ,
    skid: [1 , 1.75]
}
//fabricando carros
function makeCar(id) {
    aux = geraRandom(0 , 100);
    if (aux < 60) {
        player[id].car.rarity = "Popular"
    } else if ( aux < 95 ) {
        player[id].car.rarity = "Sport"
    } else {
        player[id].car.rarity = "Super Sport"
    }
    if ( player[id].car.rarity == "Popular") {        
        player[id].car.speedMin = parseInt(geraRandom(popular.speedMax[0] , popular.speedMax[1]));
        player[id].car.speedMax = parseInt(geraRandom(popular.speedMax[0] , popular.speedMax[1]));
        player[id].car.skid = geraRandom(popular.skid[0] , popular.skid[1]).toFixed(2);
    } else if (player[id].car.rarity == "Sport") {
        player[id].car.speedMin = parseInt(geraRandom(sport.speedMax[0] , sport.speedMax[1]));
        player[id].car.speedMax = parseInt(geraRandom(sport.speedMax[0] , sport.speedMax[1]));
        player[id].car.skid = geraRandom(sport.skid[0] , sport.skid[1]).toFixed(2);
    } else {
        player[id].car.speedMin = parseInt(geraRandom(superSport.speedMax[0] , superSport.speedMax[1]));
        player[id].car.speedMax = parseInt(geraRandom(superSport.speedMax[0] , superSport.speedMax[1]));
        player[id].car.skid = geraRandom(superSport.skid[0] , superSport.skid[1]).toFixed(2);
    }
    player[id].car.level = 1;
    document.getElementById("rarity"+id).innerHTML = "Raridade: "+player[id].car.rarity;
    document.getElementById("min"+id).innerHTML = "M??nima: "+player[id].car.speedMin+"Km/h";
    document.getElementById("max"+id).innerHTML = "M??xima: "+player[id].car.speedMax+"Km/h";
    document.getElementById("derrapagem"+id).innerHTML = "Derrapagem: "+player[id].car.skid+"%";
    return true;
}
//contando as voltas
function vai() {    
    if (lapradio[0].checked) {
        pontos = [200, 120, 50, 100]
        voltas = 10;
        race();
    }
    if (lapradio[1].checked) {
        pontos = [220, 130, 75, 115]
        voltas = 70;
        race();
    }
    if (lapradio[2].checked) {
        pontos = [250, 150, 90, 130]
        voltas = 160;
        race();
    }
    return true;
}

//corrida
function race(){
    player[0].voltas = 0;
    player[1].voltas = 0;
    player[2].voltas = 0;
    //atualizando valores por level
    player.forEach(elem => {
        if (elem.EXP > 450) {
            elem.EXP = elem.EXP - 450;            
            elem.level = elem.level + 1
        }
        if (elem.level > elem.car.level) {
            elem.car.speedMin = parseInt(elem.car.speedMin + ((elem.car.speedMin * (elem.level - elem.car.level))/100))
            elem.car.speedMax = parseInt(elem.car.speedMax + ((elem.car.speedMax * (elem.level - elem.car.level))/100))
            elem.car.level = elem.level            
        }
        if (elem.owner == "Pedro") {
            min0.innerHTML = "M??nima: "+elem.car.speedMin+"Km/h";
            max0.innerHTML = "M??xima: "+elem.car.speedMax+"Km/h";
            exp0.innerHTML = "EXP: "+elem.EXP;
            level0.innerHTML = "Level: "+elem.level;
        } else if (elem.owner == "Juca") {
            min1.innerHTML = "M??nima: "+elem.car.speedMin+"Km/h";
            max1.innerHTML = "M??xima: "+elem.car.speedMax+"Km/h";
            exp1.innerHTML = "EXP: "+elem.EXP;
            level1.innerHTML = "Level: "+elem.level;
        } else {
            min2.innerHTML = "M??nima: "+elem.car.speedMin+"Km/h";
            max2.innerHTML = "M??xima: "+elem.car.speedMax+"Km/h";
            exp2.innerHTML = "EXP: "+elem.EXP;
            level2.innerHTML = "Level: "+elem.level;
        }
    });
    //A Corrida
    for (let i=0; i<=voltas-1; i++) {        
        player[0].speed = (geraRandom(player[0].car.speedMin , player[0].car.speedMax)) * (1 - (player[0].car.skid / 100));
        player[1].speed = (geraRandom(player[1].car.speedMin , player[1].car.speedMax)) * (1 - (player[1].car.skid / 100));
        player[2].speed = (geraRandom(player[2].car.speedMin , player[2].car.speedMax)) * (1 - (player[0].car.skid / 100));
        if (player[0].speed > player[1].speed && player[0].speed > player[2].speed) {
            player[0].voltas = player[0].voltas + 1
        }
        if (player[1].speed > player[0].speed && player[1].speed > player[2].speed) {
            player[1].voltas = player[1].voltas + 1
        }
        if (player[2].speed > player[1].speed && player[2].speed > player[0].speed) {
            player[2].voltas = player[2].voltas + 1
        }
    }
    //anuncio + distribui????o de EXP
    if (player[0].voltas > player[1].voltas && player[0].voltas > player[2].voltas){
        player[0].EXP = player[0].EXP + pontos[0];
        if (player[1].voltas > player[2].voltas) {
            player[1].EXP = player[1].EXP + pontos[1];
            player[2].EXP = player[2].EXP + pontos[2];
            winner.innerHTML = "1??: Pedro - 2??: Juca - 3??: Edna"
        } else {
            player[2].EXP = player[2].EXP + pontos[1];
            player[1].EXP = player[1].EXP + pontos[2];
            winner.innerHTML = "1??: Pedro - 2??: Edna - 3??: Juca"
        }
    } else if (player[1].voltas > player[0].voltas && player[1].voltas > player[2].voltas){
        player[1].EXP = player[1].EXP + pontos[0];
        if (player[0].voltas > player[2].voltas) {
            player[0].EXP = player[0].EXP + pontos[1];
            player[2].EXP = player[2].EXP + pontos[2];
            winner.innerHTML = "1??: Juca - 2??: Pedro - 3??: Edna"
        } else {
            player[2].EXP = player[2].EXP + pontos[1];
            player[0].EXP = player[0].EXP + pontos[2];
            winner.innerHTML = "1??: Juca - 2??: Edna - 3??: Pedro"
        }
    } else if (player[2].voltas > player[1].voltas && player[2].voltas > player[0].voltas){
        player[2].EXP = player[2].EXP + pontos[0];
        if (player[1].voltas > player[0].voltas) {
            player[1].EXP = player[1].EXP + pontos[1];
            player[0].EXP = player[0].EXP + pontos[2];
            winner.innerHTML = "1??: Edna - 2??: Juca - 3??: Pedro"
        } else {
            player[0].EXP = player[0].EXP + pontos[1];
            player[1].EXP = player[1].EXP + pontos[2];
            winner.innerHTML = "1??: Edna - 2??: Pedro - 3??: Juca"
        }
    } else {
        winner.innerHTML = "Empate"
        player[0].EXP = player[0].EXP + pontos[3]
        player[1].EXP = player[1].EXP + pontos[3]
        player[2].EXP = player[2].EXP + pontos[3]
    }
    //HUD
    exp0.innerHTML = "EXP: "+player[0].EXP;
    exp1.innerHTML = "EXP: "+player[1].EXP;
    exp2.innerHTML = "EXP: "+player[2].EXP;
    return true;
}
//gerador de aleat??rio
function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}