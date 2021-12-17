let count0, count1, count2, vel0, vel1, vel2, voltas, aux = 0;
const lapradio = document.querySelectorAll(".input");
const min0 = document.getElementById("min0")
const max0 = document.getElementById("max0")
const derrapagem0 = document.getElementById("derrapagem0")
const min1 = document.getElementById("min1")
const max1 = document.getElementById("max1")
const derrapagem1 = document.getElementById("derrapagem1")
const min2 = document.getElementById("min2")
const max2 = document.getElementById("max2")
const derrapagem2 = document.getElementById("derrapagem2");
const winner = document.getElementById("vencedor")
const exp0 = document.getElementById("exp0")
const level0 = document.getElementById("level0")
const exp1 = document.getElementById("exp1")
const level1 = document.getElementById("level1")
const exp2 = document.getElementById("exp2")
const level2 = document.getElementById("level2")

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
        EXP: 0,
        level: 1,
    }
]

//modelos de carro
let popular = {
    vmaxima: [180 , 200] ,
    vminima: [110 , 130] ,
    skid: [3 , 4]
}
let sport = {
    vmaxima: [195 , 215] ,
    vminima: [125 , 145] ,
    skid: [2 , 3]
}
let superSport = {
    vmaxima: [210 , 230] ,
    vminima: [125 , 145] ,
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
        player[id].car.speedMin = parseInt(geraRandom(popular.vminima[0] , popular.vminima[1]));
        player[id].car.speedMax = parseInt(geraRandom(popular.vmaxima[0] , popular.vmaxima[1]));
        player[id].car.skid = geraRandom(popular.skid[0] , popular.skid[1]).toFixed(2);
    } else if (player[id].car.rarity == "Sport") {
        player[id].car.speedMin = parseInt(geraRandom(sport.vminima[0] , sport.vminima[1]));
        player[id].car.speedMax = parseInt(geraRandom(sport.vmaxima[0] , sport.vmaxima[1]));
        player[id].car.skid = geraRandom(sport.skid[0] , sport.skid[1]).toFixed(2);
    } else {
        player[id].car.speedMin = parseInt(geraRandom(superSport.vminima[0] , superSport.vminima[1]));
        player[id].car.speedMax = parseInt(geraRandom(superSport.vmaxima[0] , superSport.vmaxima[1]));
        player[id].car.skid = geraRandom(superSport.skid[0] , superSport.skid[1]).toFixed(2);
    }

    player[id].car.level = 1;

    document.getElementById("rarity"+id).innerHTML = "Raridade: "+player[id].car.rarity;
    document.getElementById("min"+id).innerHTML = "Mínima: "+player[id].car.speedMin+"Km/h";
    document.getElementById("max"+id).innerHTML = "Máxima: "+player[id].car.speedMax+"Km/h";
    document.getElementById("derrapagem"+id).innerHTML = "Derrapagem: "+player[id].car.skid+"%";
}

//contando as voltas
function vai() {    
    if (lapradio[0].checked) {
        voltas = 10;
        race();
    }
    if (lapradio[1].checked) {
        voltas = 70;
        race();
    }
    if (lapradio[2].checked) {
        voltas = 160;
        race();
    }
}

//corrida
function race(){
    count0 = 0;
    count1 = 0;
    count2 = 0;
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
            min0.innerHTML = "Mínima: "+elem.car.speedMin+"Km/h";
            max0.innerHTML = "Máxima: "+elem.car.speedMax+"Km/h";
            exp0.innerHTML = "EXP: "+elem.EXP;
            level0.innerHTML = "Level: "+elem.level;
        } else if (elem.owner == "Juca") {
            min1.innerHTML = "Mínima: "+elem.car.speedMin+"Km/h";
            max1.innerHTML = "Máxima: "+elem.car.speedMax+"Km/h";
            exp1.innerHTML = "EXP: "+elem.EXP;
            level1.innerHTML = "Level: "+elem.level;
        } else {
            min2.innerHTML = "Mínima: "+elem.car.speedMin+"Km/h";
            max2.innerHTML = "Máxima: "+elem.car.speedMax+"Km/h";
            exp2.innerHTML = "EXP: "+elem.EXP;
            level2.innerHTML = "Level: "+elem.level;
        }
    });

    //A Corrida
    for (let i=0; i<=voltas-1; i++) {

        console.log("Volta: "+(i+1))
        vel0 = geraRandom(player[0].car.speedMin , player[0].car.speedMax);
        vel0 = parseInt(vel0 - ((vel0 * player[0].car.skid)/100));
        console.log("Velocidade do Pedro: "+vel0);
        vel1 = geraRandom(player[1].car.speedMin , player[1].car.speedMax);
        vel1 = parseInt(vel1 - ((vel1 * player[1].car.skid)/100));
        console.log("Velocidade do Juca: "+vel1);
        vel2 = geraRandom(player[2].car.speedMin , player[2].car.speedMax);
        vel2 = parseInt(vel2 - ((vel2 * player[2].car.skid)/100));
        console.log("Velocidade da Edna: "+vel2);
        if (vel0 > vel1 && vel0 > vel2) {
            count0 = count0 + 1
            console.log("Volta de Pedro")
        }
        if (vel1 > vel0 && vel1 > vel2) {
            count1 = count1 + 1
            console.log("Volta de Juca")
        }
        if (vel2 > vel1 && vel2 > vel0) {
            count2 = count2 + 1
            console.log("Volta de Edna")
        }
    }

    //anuncio + distribuição de EXP
    if (voltas == 10) {
        if (count0 > count1 && count0 > count2){
            player[0].EXP = player[0].EXP + 200;
            if (count1 > count2) {
                player[1].EXP = player[1].EXP + 120;
                player[2].EXP = player[2].EXP + 50;
                winner.innerHTML = "1º: Pedro - 2º: Juca - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 120;
                player[1].EXP = player[1].EXP + 50;
                winner.innerHTML = "1º: Pedro - 2º: Edna - 3º: Juca"
            }
        } else if (count1 > count0 && count1 > count2){            
            player[1].EXP = player[1].EXP + 200;
            if (count0 > count2) {
                player[0].EXP = player[0].EXP + 120;
                player[2].EXP = player[2].EXP + 50;
                winner.innerHTML = "1º: Juca - 2º: Pedro - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 120;
                player[0].EXP = player[0].EXP + 50;
                winner.innerHTML = "1º: Juca - 2º: Edna - 3º: Pedro"
            }
        } else if (count2 > count1 && count2 > count0){            
            player[2].EXP = player[2].EXP + 200;
            if (count1 > count0) {
                player[1].EXP = player[1].EXP + 120;
                player[0].EXP = player[0].EXP + 50;
                winner.innerHTML = "1º: Edna - 2º: Juca - 3º: Pedro"
            } else {
                player[0].EXP = player[0].EXP + 120;
                player[1].EXP = player[1].EXP + 50;
                winner.innerHTML = "1º: Edna - 2º: Pedro - 3º: Juca"
            }
        } else {
            winner.innerHTML = "Empate"
            player[0].EXP = player[0].EXP + 100;
            player[1].EXP = player[1].EXP + 100;
            player[2].EXP = player[2].EXP + 100;
        }
    } else if (voltas == 70) {
        if (count0 > count1 && count0 > count2){
            player[0].EXP = player[0].EXP + 220;
            if (count1 > count2) {
                player[1].EXP = player[1].EXP + 130;
                player[2].EXP = player[2].EXP + 75;
                winner.innerHTML = "1º: Pedro - 2º: Juca - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 130;
                player[1].EXP = player[1].EXP + 75;
                winner.innerHTML = "1º: Pedro - 2º: Edna - 3º: Juca"
            }
        } else if (count1 > count0 && count1 > count2){
            player[1].EXP = player[1].EXP + 220;
            if (count0 > count2) {
                player[0].EXP = player[0].EXP + 130;
                player[2].EXP = player[2].EXP + 75;
                winner.innerHTML = "1º: Juca - 2º: Pedro - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 130;
                player[0].EXP = player[0].EXP + 75;
                winner.innerHTML = "1º: Juca - 2º: Edna - 3º: Pedro"
            }
        } else if (count2 > count1 && count2 > count0){
            player[2].EXP = player[2].EXP + 220;
            if (count1 > count0) {
                player[1].EXP = player[1].EXP + 130;
                player[0].EXP = player[0].EXP + 75;
                winner.innerHTML = "1º: Edna - 2º: Juca - 3º: Pedro"
            } else {
                player[0].EXP = player[0].EXP + 130;
                player[1].EXP = player[1].EXP + 75;
                winner.innerHTML = "1º: Edna - 2º: Pedro - 3º: Juca"
            }
        } else {
            winner.innerHTML = "Empate"
            player[0].EXP = player[0].EXP + 115;
            player[1].EXP = player[1].EXP + 115;
            player[2].EXP = player[2].EXP + 115;
        }
    } else {
        if (count0 > count1 && count0 > count2){
            player[0].EXP = player[0].EXP + 250;
            if (count1 > count2) {
                player[1].EXP = player[1].EXP + 150;
                player[2].EXP = player[2].EXP + 90;
                winner.innerHTML = "1º: Pedro - 2º: Juca - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 150;
                player[1].EXP = player[1].EXP + 90;
                winner.innerHTML = "1º: Pedro - 2º: Edna - 3º: Juca"
            }
        } else if (count1 > count0 && count1 > count2){
            player[1].EXP = player[1].EXP + 250;
            if (count0 > count2) {
                player[0].EXP = player[0].EXP + 150;
                player[2].EXP = player[2].EXP + 90;
                winner.innerHTML = "1º: Juca - 2º: Pedro - 3º: Edna"
            } else {
                player[2].EXP = player[2].EXP + 150;
                player[0].EXP = player[0].EXP + 90;
                winner.innerHTML = "1º: Juca - 2º: Edna - 3º: Pedro"
            }
        } else if (count2 > count1 && count2 > count0){
            player[2].EXP = player[2].EXP + 250;
            if (count1 > count0) {
                player[1].EXP = player[1].EXP + 150;
                player[0].EXP = player[0].EXP + 90;
                winner.innerHTML = "1º: Edna - 2º: Juca - 3º: Pedro"
            } else {
                player[0].EXP = player[0].EXP + 150;
                player[1].EXP = player[1].EXP + 90;
                winner.innerHTML = "1º: Edna - 2º: Pedro - 3º: Juca"
            }
        } else {
            winner.innerHTML = "Empate"
            player[0].EXP = player[0].EXP + 130;
            player[1].EXP = player[1].EXP + 130;
            player[2].EXP = player[2].EXP + 130;
        }
    }
    
    //HUD
    exp0.innerHTML = "EXP: "+player[0].EXP;
    exp1.innerHTML = "EXP: "+player[1].EXP;
    exp2.innerHTML = "EXP: "+player[2].EXP;
}

//gerador de aleatório
function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}