let arr = [ ["","",""] ,
            ["","",""] ,
            ["","",""] ];
let player = 1;
let seletor
const hud1 = document.getElementById("hud")
const hud2 = document.getElementById("hud2")

function shoot(x , y){
    seletor = x+"x"+y;    
    if (arr[x][y] == "") {                
        if (player == 1) {
            document.getElementById(seletor).style.backgroundImage = "url(./images/circulo.png)";
            hud1.innerHTML = "Jogador 2"
            hud1.style.color = "#A62323"
            arr[x][y] = 1;
            win(player)
            player = 2;
        } else {
            document.getElementById(seletor).style.backgroundImage = "url(./images/xis.png)";
            hud1.innerHTML = "Jogador 1"
            hud1.style.color = "#2338A6"
            arr[x][y] = 2;
            win(player)
            player = 1;
        }
    }  
}

function win(playerID) {
    if ((arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] && arr[0][0] !== "") ||
        (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2] && arr[1][0] !== "") ||
        (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2] && arr[2][0] !== "") ||
        (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[0][0] !== "") ||
        (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[0][2] !== "") || 
        (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0] && arr[0][0] !== "") ||
        (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1] && arr[0][1] !== "") || 
        (arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2] && arr[0][2] !== "")  ) {
            if (playerID == 1)  {
                hud1.innerHTML = "End Game"
                hud1.style.color = "#2338A6";
                hud2.innerHTML = "Jogador "+playerID+" Ganhou :D"
                hud2.style.color = "#2338A6";
                for (x = 0; x < 4 ; x++){
                    for (y = 0; y < 4 ; y++){
                        arr[x][y] = 3;
                    }
                }
            } else {
                hud1.innerHTML = "End Game"
                hud1.style.color = "#A62323";
                hud2.innerHTML = "Jogador "+playerID+" Ganhou :D"
                hud2.style.color = "#A62323";
                for (x = 0; x < 4 ; x++){
                    for (y = 0; y < 4 ; y++){
                        arr[x][y] = 3;
                    }
                }
            }
    }    
}