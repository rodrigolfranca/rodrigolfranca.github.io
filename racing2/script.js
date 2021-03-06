let count0, count1, count2, vel0, vel1, vel2, voltas, aux = 0;
const lapradio = document.querySelectorAll(".input");
const min0 = document.getElementById("min0").innerHTML;
const max0 = document.getElementById("max0").innerHTML;
const derrapagem0 = document.getElementById("derrapagem0").innerHTML;
const min1 = document.getElementById("min1").innerHTML;
const max1 = document.getElementById("max1").innerHTML;
const derrapagem1 = document.getElementById("derrapagem1").innerHTML;
const min2 = document.getElementById("min2").innerHTML;
const max2 = document.getElementById("max2").innerHTML;
const derrapagem2 = document.getElementById("derrapagem2").innerHTML;
const winner = document.getElementById("vencedor")

//carro criado
let car = {
    owner: ["Pedro" , "Juca" , "Edna"],
    rarity: ["" , "" , ""],
    speedMin: [0 , 0 , 0],
    speedMax: [0 , 0 , 0],
    slippage: [0 , 0 , 0]
}

//modelos de carro
let popular = {
    vmaxima: [180 , 200] ,
    vminima: [110 , 130] ,
    slippage: [3 , 4]
}
let sport = {
    vmaxima: [195 , 215] ,
    vminima: [125 , 145] ,
    slippage: [2 , 3]
}
let superSport = {
    vmaxima: [210 , 230] ,
    vminima: [125 , 145] ,
    slippage: [1 , 1,75]
}


//fabricando carros
function makeCar(id) {

    aux = geraRandom(0 , 100);
    if (aux < 60) {
        car.rarity[id] = "Popular"
    } else if ( aux < 95 ) {
        car.rarity[id] = "Sport"
    } else {
        car.rarity[id] = "Super Sport"
    }

    if ( car.rarity[id] == "Popular") {
        car.speedMin[id] = parseInt(geraRandom(popular.vminima[0] , popular.vminima[1]));
        car.speedMax[id] = parseInt(geraRandom(popular.vmaxima[0] , popular.vmaxima[1]));
        car.slippage[id] = geraRandom(popular.slippage[0] , popular.slippage[1]).toFixed(2);
    } else if (car.rarity[id] == "Sport") {
        car.speedMin[id] = parseInt(geraRandom(sport.vminima[0] , sport.vminima[1]));
        car.speedMax[id] = parseInt(geraRandom(sport.vmaxima[0] , sport.vmaxima[1]));
        car.slippage[id] = geraRandom(sport.slippage[0] , sport.slippage[1]).toFixed(2);
    } else {
        car.speedMin[id] = parseInt(geraRandom(superSport.vminima[0] , superSport.vminima[1]));
        car.speedMax[id] = parseInt(geraRandom(superSport.vmaxima[0] , superSport.vmaxima[1]));
        car.slippage[id] = geraRandom(superSport.slippage[0] , superSport.slippage[1]).toFixed(2);
    }

    document.getElementById("rarity"+id).innerHTML = "Raridade: "+car.rarity[id];
    document.getElementById("min"+id).innerHTML = "M??nima: "+car.speedMin[id]+"Km/h";
    document.getElementById("max"+id).innerHTML = "M??xima: "+car.speedMax[id]+"Km/h";
    document.getElementById("derrapagem"+id).innerHTML = "Derrapagem: "+car.slippage[id]+"%";
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
    if (lapradio[3].checked) {         
        if (lapradio[4].value > 0){
            voltas = parseInt(lapradio[4].value);
            race();
        } else if (lapradio[4].value < 0){
            voltas = parseInt(lapradio[4].value) * -1;
            race();
        } else {
            lapradio[4].style = "background-color: red;"
        }
    } 
}


//corrida
function race(){ 
    count0 = 0;
    count1 = 0;
    count2 = 0;
    
    for (let i=0; i<=voltas-1; i++) {
        console.log("Volta: "+(i+1))
        vel0 = geraRandom(car.speedMin[0] , car.speedMax[0]);
        vel0 = parseInt(vel0 - ((vel0 * car.slippage[0])/100));
        console.log("Velocidade do Pedro: "+vel0);
        vel1 = geraRandom(car.speedMin[1] , car.speedMax[1]);
        vel1 = parseInt(vel1 - ((vel1 * car.slippage[1])/100));
        console.log("Velocidade do Juca: "+vel1);
        vel2 = geraRandom(car.speedMin[2] , car.speedMax[2]);
        vel2 = parseInt(vel2 - ((vel2 * car.slippage[2])/100));
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

    if (count0 > count1 && count0 > count2){
        winner.innerHTML = "!! Vencedor: Pedro !!"
    } else if (count1 > count0 && count1 > count2){
        winner.innerHTML = "!! Vencedor: Juca !!"
    } else if (count2 > count1 && count2 > count0){
        winner.innerHTML = "!! Vencedor: Edna !!"
    } else {
        winner.innerHTML = "Empate"
    }
}


//gerador de aleat??rio
function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}