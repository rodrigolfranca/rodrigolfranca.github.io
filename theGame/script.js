class Hero {
    constructor(name, type, reference, str, agi, int, atkText, special) {
    this.name = name                      //Nome
    this.type = type                      //Tipo
    this.reference = reference            //Referencia para audio e imagem
    this.str = str		                  //Força
    this.agi = agi	                      //Agilidade
    this.int = int	                      //Inteligência
    this.hp = this.str * 8                //Pontos de Vida atual
    this.hpmax = this.hp                  //Pontos de Vida Máximo   
    this.def = parseInt(this.agi * 0.2);  //Defesa
    this.atkPower = 5                     //Ataque base
    this.atkText = atkText;               //Ataque speech
    this.special = special;               //Special Attack Speech
    this.dmgUp()
    }        
    /*
        Método que ajusta os pontos de ataque do personagem com base no seu tipo
    */
    dmgUp() {
        /* Types: 
            1 - Agility
            2 - Strength
            3 - Intelligence
        */
    switch (this.type) {
        case 1:
        this.atkPower += this.agi / 2
        break;

        case 2:
        this.atkPower += this.str /2
        break;

        case 3:
        this.atkPower += this.int / 2
        break;  
    }
    }
}

//  Variáveis Globais
let defStatus = 0
let playerDanger = 0;
let cpuDanger = 0;
let playerAlter = 0;
let cpuAlter = 0;   
let p1 = 0;
let p2 = 0;
let victoryAudio;
const selectCharacterAudio = new Audio("./audio/selectCharacter.mp3");
const hoverCharacter = new Audio("./audio/hoverCharacter.mp3");
const oneSelect = new Audio("./audio/oneSelect.mp3");
const twoSelect = new Audio("./audio/twoSelect.mp3");
const battleTheme = new Audio("./audio/battleSound.mp3");
const end = new Audio("./audio/end.mp3");
const erro = new Audio("./audio/erro.mp3");
const danger = new Audio("./audio/danger.mp3");
const attacked = new Audio("./audio/attacked.mp3");
const defended = new Audio("./audio/defended.mp3");


//  Instancias da Classe
chooseHero = [
    Chaves = new Hero("Chaves", 1, 'chaves', 14, 22, 14, 'Chaves deu uma sequencia de socos em ', "Chaves usa sua condição de pobre e faminto para distrair e então usa toda sua força para atacar seu oponente"),
    Chiquinha = new Hero("Chiquinha", 3, 'chiquinha', 14, 16, 20, 'Chiquinha deu um pontapé em ', "Chiquinha engana seu oponente fazendo com que ele ataque a si mesmo"),
    Quico = new Hero("Quico", 2, 'quico', 18, 14, 10, 'Quico disparou um socão em ', "Quico é rico e por isso tem tudo o que quer, inclusive o proprio exército, que atacou o inimigo"),
    Madruga = new Hero("Seu Madruga", 2, 'madruga', 20, 12, 14, 'Seu Madruga deu um croque em ', "Seu Madruga veste as luvas de pugilista e ataca o oponente"),
    Florinda = new Hero("Dona Florinda", 2, 'florinda', 20, 12, 16, 'Dona Florinda virou o tapão em ', "Dona Florinda usa seus dotes de mulher indefesa e destroi seu oponente em tapas"),
    Barriga = new Hero("Seu Barriga", 2, 'barriga', 26, 10, 12, 'Seu barriga deu uma barrigada em ', "Seu Barriga cobra todos os alugueis atrasados de seu oponente, com juros."),
    Professor = new Hero("Prof Girafales", 3, 'professor', 18, 10, 22, 'Professor Girafales deu uma lição de moral em ', "Professor Girafales usa todas as regras da aritmetica pra destruir seu oponente"),
    Clotilde = new Hero("Dona Clotilde", 3, "clotilde", 8, 10, 28, 'Dona Clotilde da um pirulito envenenado para ', "Dona Clotilde invoca o proprio Satanás contra seu oponente"),
    Chapolim = new Hero("Chapolim Colorado", 1, 'chapolim', 25, 25, 20, "Chapolim deu um golpe com sua Marreta Bionica em ", ""),
    Alma = new Hero("Alma Negra", 2, 'alma', 30, 20, 15, "Alma Negra puxa seu sabre e golpeia ", ""),
    Quase = new Hero("Quase Nada", 1, 'quase', 25, 25, 20, "Quase Nada mira e atira em ", ""),
    Baratuxa = new Hero("Bruxa Baratuxa", 3, 'baratuxa', 20, 15, 30, "Bruxa Baratuxa lança feitiço em ", ""),
    Rosa = new Hero("Rosa Rumorosa", 1, 'rosa', 20, 30, 15, "Rosa, a Rumorosa empresta a arma de seu pai e atira em ", ""),
    Bruxa = new Hero("Bruxa do 71", 3, 'bruxa', 15, 20, 30, "A Bruxa do 71 lança um feitiço em ", ""),
    Poucas = new Hero("Poucas Trancas", 1, 'poucas', 20, 30, 15, "Poucas Trancas atira em ", ""),
    Almôndega = new Hero("Almôndega", 1, 'almondega', 15, 35, 15, "Utilizando seu disfarce, Almondega se aproxima e golpeia ", "")
]

//  Função para ataques normais
function ataque(atacante , defensor) {

    $('#logText').val("");
    log(`${atacante.name} tentara atacar com um ataque normal \n` , atacante);
    let dado = parseInt(geraRandom(1,21));
    let def;
    (defStatus)? def = defensor.def * 2 : def = defensor.def;
    defStatus = 0;
    log(`${dado} => ${def} \n` , atacante);

    if (dado > def) {

        log(`${atacante.atkText}${defensor.name}\n` , atacante);
        defensor.hp -= atacante.atkPower;
        attacked.pause();
        attacked.currentTime = 0;
        attacked.play();
        (atacante === p1)? $('#playerTwo').effect('shake') : $('#playerOne').effect('shake');

    } else {

        log(`Errou!\n` , atacante);
        defended.pause();
        defended.currentTime = 0;
        defended.play()

    }

    if (atacante === p2) {
        toggleButtons();
    }

    mostrarLutadores();
    checaVidas();
    
}

//  Função de Defesa
function defesa(jogador) {
    
    $('#logText').val("");
    defStatus = 1;
    log( `${jogador.name} se prepara para receber um ataque, sua defesa dobra!\n` , jogador );
    if (jogador === p2) {
        toggleButtons();
    }

}

//  Função de ataque especial
function special(atacante, defensor) {

    let url = `./audio/${atacante.reference}Special.mp3`
    let specialAudio = new Audio(url);
    battleTheme.volume = 0.5;
    specialAudio.play();

    $('#logText').val("");
    log(atacante.special, atacante);
    defensor.hp -= atacante.atkPower * 3;
    defStatus = 0;

    $('#dangerAtk').css('display', 'none');
    specialAudio.onended = () => {
        battleTheme.volume = 1;
        mostrarLutadores();
        checaVidas();
        attacked.play();
        if (atacante === p2) {
            $('#playerOne').effect('shake')            
            toggleButtons();
        } else {
            $('#playerTwo').effect('shake');
            if (p1.hp>0 && p2.hp>0) enemyAction();
        }
    }


}

//  Função de troca de personagem (alter ego)
function alterEgo(player) {
    if (player === p1) {

        //  Player 1
        $('#playerOne').hide('explode');
        p1.hp = p1.hpmax;
        p1 = selectAlter(p1);
        p1 = selected(p1);
        p1.hp = p1.hp / 2;
        $('#dangerAtk').css('display', 'none');
        $('#alterEgo-btn').css('display', 'none');
        playerDanger = 2;
        playerAlter = 1;
        mostrarLutadores();
        $('#playerOne').fadeIn('slow');
        let comes = new Audio(`./audio/${p1.reference}Comes.mp3`);
        battleTheme.volume = 0.5;
        comes.play();
        comes.onended = function() {
            battleTheme.volume = 1;
            if (cpuAlter !== 2) {
                let calc = geraRandom(1, 11);
                console.log(calc);  
                (calc >= 3)? alterEgo(p2) : enemyAction();
            } else {
                enemyAction();
            }            
        }
        
        

    } else {

        //  CPU
        $('#playerTwo').effect('explode');
        p2.hp = p2.hpmax;
        p2 = selectAlter(p2);
        p2 = selected(p2);
        p2.hp = p2.hp / 2;
        cpuDanger = 2;
        cpuAlter = 2;
        mostrarLutadores();
        $('#playerTwo').fadeIn('slow');
        let comes = new Audio(`./audio/${p2.reference}Comes.mp3`);
        battleTheme.volume = 0.5;
        comes.play();
        comes.onended = function() {
            battleTheme.volume = 1;
            if (playerAlter !== 1) {
                let calc = geraRandom(1, 11);
                console.log(calc);
                (calc >= 3)? alterEgo(p1) : toggleButtons();
            } else {
                toggleButtons();
            }
        }

    }
}

//  Função que sorteia as ações da CPU
function enemyAction(){

    setTimeout(() => {

        let action = geraRandom(1, 11);
        if (cpuAlter === 1) {

            alterEgo(p2);            

        } else if (cpuDanger === 1) { 

            special(p2, p1);
            cpuDanger = 2;

        } else if (action > 4 || defStatus === 1) {

            ataque(p2 , p1);

        } else {

            defesa(p2);

        }

    }, 1500);
    
}

//  onload
$(document).ready(function(){    
    setInterval(() => {
        if ($('#inicioMsg').css('display') === 'block') {
            $('#inicioMsg').css('display', 'none');
        } else {
            $('#inicioMsg').css('display', 'block');
        }
    }, 450);
})

//  Função para seleção de personagem
function selected(hero) {

    return chooseHero.filter(element =>{

        return hero === element.name;

    })[0] 

}

//  Função para selecionar referencia de Alter Ego
function selectAlter(player) {
    switch (player.reference) {
        case 'chaves':
            return 'Chapolim Colorado'
        case 'chiquinha':
            return 'Bruxa Baratuxa'
        case 'quico':
            return 'Quase Nada'
        case 'madruga':
            return 'Alma Negra'
        case 'barriga':
            return 'Almôndega'
        case 'professor':
            return 'Poucas Trancas'
        case 'florinda':
            return 'Rosa Rumorosa'
        case 'clotilde':
            return 'Bruxa do 71'
    }
}

//  Função para enviar os logs para a textarea
function log(mensagem, player) {        

    let atual = $('#logText').val();
    atual += mensagem;
    (player === p1)? $('#logText').css('color' , 'blue') : $('#logText').css('color' , 'red');
    $('#logText').val(atual);    
    $('#logText').scrollTop($('#logText')[0].scrollHeight);    

}

//  Gerador de aleatório
function geraRandom(min, max) {

    return Math.random() * (max - min) + min;

}

//  Inicio
$('#starter').click(function(){

    $('#logText').val("");
    $('#starter').hide();    

    selectCharacterAudio.loop = true;
    selectCharacterAudio.play();

})

//  Seleção de Personagem : hover
$(".fighter").hover(function(){

    if (!p1) {

        $(`#${this.getAttribute('id')}`).css("border","solid 2px blue");
        $(`#${this.getAttribute('id')}`).css("color", "blue")
        $(`#${this.getAttribute('id')}`).text("P1");
        hoverCharacter.play();

    } else if (!p2) {

        $(`#${this.getAttribute('id')}`).css("border","solid 2px red");
        $(`#${this.getAttribute('id')}`).css("color", "red")
        $(`#${this.getAttribute('id')}`).text("CPU");
        hoverCharacter.play();

    }
    
},function(){

    $(`#${this.getAttribute('id')}`).css("border", "solid 2px black");
    $(`#${this.getAttribute('id')}`).text("");

});

//  Seleção de Personagem : click
$(".fighter").click(function(){
    if (!p1) {

        p1 = selected(this.getAttribute('value'));
        $(`#${this.getAttribute('id')}`).css("border", "solid 2px black")
        $(`#${this.getAttribute('id')}`).css("filter", "grayscale(100%)")
        oneSelect.play();
        $("#fight-btn").text("PLAYER TWO");
        $("#fight-btn").css("color", "red");

    } else if (!p2) {

        if (selected(this.getAttribute('value')) != p1) {
            p2 = selected(this.getAttribute('value'))
            $(`#${this.getAttribute('id')}`).css("border", "solid 2px black")
            $(`#${this.getAttribute('id')}`).css("filter", "grayscale(100%)")
            twoSelect.play();
            $("#fight-btn").text("CLICK HERE TO BATTLE");
            $("#fight-btn").css("color", "yellow");
        } else {
            erro.play();
        }        
    } else {
        erro.play();
    }
});

//  Inicio da Luta
$("#fight-btn").click(function(){
    
    if (p1 && p2) {

        $('#seletor-painel').hide();
        selectCharacterAudio.pause();
        $('main').fadeIn(1000);
        $("#oneDef").prop("disabled", false);
        $('#oneAtk').prop("disabled", false);
        $('#logText').val("");
        $('main').css('display', 'flex');
        $(`#${p1.reference}`).css("filter", "grayscale(0%)");
        $(`#${p2.reference}`).css("filter", "grayscale(0%)");
        mostrarLutadores();

        battleTheme.loop = true;
        battleTheme.currentTime = 0;
        battleTheme.play();
    }

})

//  Função que preenche os dados dos lutadores durante a batalha
function mostrarLutadores(){

    //  Player 1
    $('#img-one').attr("src", `./images/${p1.reference}-large-right.png`);
    $('#oneName').text(`${p1.name}`);
    $('#oneSTR').text(`${p1.str}`);
    $('#oneAGI').text(`${p1.agi}`);
    $('#oneINT').text(`${p1.int}`);
    let porcentagemOne = (p1.hp * 100) / p1.hpmax
    $('#oneVida').css('width', `${porcentagemOne * 2}px`);

    //  CPU
    $('#img-two').attr("src", `./images/${p2.reference}-large-left.png`);
    $('#twoName').text(`${p2.name}`);
    $('#twoSTR').text(`${p2.str}`);
    $('#twoAGI').text(`${p2.agi}`);
    $('#twoINT').text(`${p2.int}`);
    let porcentagemTwo = (p2.hp * 100) / p2.hpmax
    $('#twoVida').css('width', `${porcentagemTwo * 2}px`); 

}

// Função para desabilitar/habilitar botoes do jogador
function toggleButtons() {
    if ($("#oneAtk").prop("disabled") === true) {

        $("#oneDef").prop("disabled", false);
        $('#oneAtk').prop("disabled", false);
        $('#dangerAtk').prop('disabled', false);
        $('#alterEgo-btn').prop('disabled', false);

    } else {

        $("#oneDef").prop("disabled", true);
        $('#oneAtk').prop("disabled", true);
        $('#dangerAtk').prop('disabled', true);
        $('#alterEgo-btn').prop('disabled', true);

    }
}

//  Botoes durante a luta
$('#oneAtk').click(function(){

    toggleButtons();
    ataque(p1, p2);    
    if (p1.hp>0 && p2.hp>0) enemyAction();

})

$('#oneDef').click(function(){

    toggleButtons();
    defesa(p1);
    if (p1.hp>0 && p2.hp>0) enemyAction();

})

$("#dangerAtk").click(function(){

    toggleButtons();
    special(p1, p2);    

})

$('#alterEgo-btn').click(function(){

    toggleButtons();
    alterEgo(p1);

})

//  Função para definição de Danger e Fim de Jogo
function checaVidas(){

    //  Special enabler
    if ( ((p1.hp * 100)/ p1.hpmax) <= 50 && playerDanger === 0 && p1.hp >= 1 ) {

        danger.play();
        playerDanger = 1;
        $('#dangerAtk').css('display', 'block');

    }
    if ( ((p2.hp * 100)/ p2.hpmax) <= 50 && cpuDanger === 0 && p2.hp >= 1 ) {

        danger.play();
        cpuDanger = 1;

    }

    //  Alter Ego enabler
    if ( ((p1.hp * 100)/ p1.hpmax) <= 10 && playerAlter === 0 && p1.hp >= 1) {

        danger.play();
        playerAlter = 1;
        $('#alterEgo-btn').css('display', 'block');

    }
    if ( ((p2.hp * 100)/ p2.hpmax) <= 10 && cpuAlter === 0 && p2.hp >= 1 ) {

        danger.play();
        cpuAlter = 1;

    }


    //  End game
    if (p1.hp < 1) {

        battleTheme.pause();
        $('main').fadeOut("slow")
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p2.name} Wins`);
        $('#victoryText').css(`color`, 'red');
        $('#reset-btn').css('color', 'red');

        end.play();        
        end.onended = () => {
            let url = `./audio/${p2.reference}Victory.mp3`
            victoryAudio = new Audio(url);
            victoryAudio.play();
        }


    }

    if (p2.hp < 1) {

        battleTheme.pause();
        $('main').fadeOut("slow");
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p1.name} Wins`);
        end.play();
        end.onended = () => {
            let url = `./audio/${p1.reference}Victory.mp3`
            victoryAudio = new Audio(url);
            victoryAudio.play();
        }

    }
}

$('#reset-btn').click(function(){

    $('#victory').fadeOut();
    $('#seletor-painel').fadeIn();
    $('#fight-btn').css('color', 'blue');
    $('#fight-btn').text('PLAYER ONE');
    $('#alterEgo-btn').css('display', 'none');
    $('#dangerAtk').css('display', 'none');
    

    p1.hp = p1.hpmax;
    p2.hp = p2.hpmax;    
    cpuAlter = 0;
    cpuDanger = 0;
    playerAlter = 0;
    playerDanger = 0;
    p1 = 0;
    p2 = 0;

    victoryAudio.pause();
    selectCharacterAudio.currentTime = 0;
    selectCharacterAudio.loop = true;    
    selectCharacterAudio.play();

})