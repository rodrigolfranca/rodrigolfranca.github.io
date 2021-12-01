let count0, count1, count2, vel0, vel1, vel2, voltas = 0;
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

function race(){ 
    count0 = 0;
    count1 = 0;
    count2 = 0;   
    for (let i=0; i<=voltas-1; i++) {
        console.log("Volta: "+voltas)
        vel0 = geraRandom(parseInt(min0) , parseInt(max0));
        vel0 = vel0 - ((vel0 * derrapagem0)/100);
        console.log("Velocidade do Pedro: "+vel0);
        vel1 = geraRandom(parseInt(min1) , parseInt(max1));
        vel1 = vel1 - ((vel1 * derrapagem1)/100);
        console.log("Velocidade do Juca: "+vel1);
        vel2 = geraRandom(parseInt(min2) , parseInt(max2));
        vel2 = vel2 - ((vel2 * derrapagem2)/100);
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
        winner.innerHTML = "Vencedor: Pedro"
    }
    if (count1 > count0 && count1 > count2){
        winner.innerHTML = "Vencedor: Juca"
    }
    if (count2 > count1 && count2 > count0){
        winner.innerHTML = "Vencedor: Edna"
    }
}

function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function customCar(id) {
    document.getElementById("min"+id).innerHTML = parseInt(geraRandom(100, 150))
    document.getElementById("max"+id).innerHTML = parseInt(geraRandom(200, 280))
    document.getElementById("derrapagem"+id).innerHTML = parseInt(geraRandom(1, 8))
}