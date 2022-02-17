class Hero {
    constructor(name, type, imagem, st, agi, int, atkText, special) {
    this.name = name                      //Nome
    this.type = type                      //Tipo
    this.imagem = imagem                  //Universo. Ex.: Disney, Marvel, League of Legends
    this.st = st		                  //Força
    this.agi = agi	                      //Agilidade
    this.int = int	                      //Inteligência
    this.hp = this.st * 8                 //Pontos de Vida atual
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
        this.atkPower += this.st /2
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
let p1 = 0;
let p2 = 0;
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
    Clotilde = new Hero("Dna Clotilde", 3, "clotilde", 8, 10, 28, 'Dona Clotilde enfeitiçou ', "Dona Clotilde invoca o proprio Satanás contra seu oponente")
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
        attacked.play();

    } else {

        log(`Errou!\n` , atacante);
        defended.play();

    }

    mostrarLutadores();
    checaVidas();
    
}

//  Função de Defesa
function defesa(jogador) {
    
    $('#logText').val("");
    defStatus = 1;
    log( `${jogador.name} se prepara para receber um ataque, sua defesa dobra!\n` , jogador );

}

//  Função de ataque especial
function special(atacante, defensor) {

    let url = `./audio/${atacante.imagem}Special.mp3`
    new Audio(url).play();
    $('#logText').val("");
    log(atacante.special, atacante);
    defensor.hp -= atacante.atkPower * 3;
    defStatus = 0;
    cpuDanger = 0;
    $('#dangerAtk').css('display', 'none');
    mostrarLutadores();
    checaVidas();

}

//  Função que sorteia as ações da CPU
function enemyAction(){

    setTimeout(() => {

        let action = geraRandom(1, 10);
        if (action > 2 && cpuDanger === 1) {

            special(p2, p1);

        } else if (action > 4 || defStatus === 1) {

            ataque(p2 , p1);

        } else {

            defesa(p2);

        }

        $("#oneDef").prop("disabled", false);
        $('#oneAtk').prop("disabled", false);

    }, 1500);
    
}

//  Função para seleção de personagem
function selected(hero) {

    return chooseHero.filter(element =>{

        return hero === element.name;

    })[0] 

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

    if (typeof selectCharacterAudio.loop == 'boolean'){
        selectCharacterAudio.loop = true;
    } else {
        selectCharacterAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
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
        
    }
});

//  Inicio da Luta
$("#fight-btn").click(function(){
    
    if (p1 && p2) {

        $('#seletor-painel').fadeOut("slow");
        selectCharacterAudio.pause();
        $('main').fadeIn(1000);
        $('main').css('display', 'flex');
        mostrarLutadores();

        if (typeof battleTheme.loop == 'boolean'){
            battleTheme.loop = true;
        } else {
            battleTheme.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
        }
        battleTheme.play();    
    }

})

//  Função que preenche os dados dos lutadores durante a batalha
function mostrarLutadores(){

    //  Player 1
    $('#img-one').attr("src", `./images/${p1.imagem}-large-right.png`);
    $('#oneName').text(`${p1.name}`);
    $('#oneSTR').text(`${p1.st}`);
    $('#oneAGI').text(`${p1.agi}`);
    $('#oneINT').text(`${p1.int}`);
    let porcentagemOne = (p1.hp * 100) / p1.hpmax
    $('#oneVida').css('width', `${porcentagemOne * 2}px`);

    //  CPU
    $('#img-two').attr("src", `./images/${p2.imagem}-large-left.png`);
    $('#twoName').text(`${p2.name}`);
    $('#twoSTR').text(`${p2.st}`);
    $('#twoAGI').text(`${p2.agi}`);
    $('#twoINT').text(`${p2.int}`);
    let porcentagemTwo = (p2.hp * 100) / p2.hpmax
    $('#twoVida').css('width', `${porcentagemTwo * 2}px`); 

}

//  Botoes durante a luta
$('#oneAtk').click(function(){

    $("#oneDef").prop("disabled", true);
    $('#oneAtk').prop("disabled", true);
    ataque(p1, p2);    
    if (p1.hp>0 && p2.hp>0) enemyAction();

})

$('#oneDef').click(function(){

    $("#oneDef").prop("disabled", true);
    $('#oneAtk').prop("disabled", true);
    defesa(p1);
    if (p1.hp>0 && p2.hp>0) enemyAction();

})

$("#dangerAtk").click(function(){

    $("#oneDef").prop("disabled", true);
    $('#oneAtk').prop("disabled", true);
    special(p1, p2);
    if (p1.hp>0 && p2.hp>0) enemyAction();

})

//  Função para definição de Danger e Fim de Jogo
function checaVidas(){

    if ( ((p1.hp * 100)/ p1.hpmax) <= 50 && playerDanger === 0 && p1.hp >= 1 ) {
        danger.play();
        playerDanger = 1;
        $('#dangerAtk').css('display', 'block');
    }

    if ( ((p2.hp * 100)/ p2.hpmax) <= 50 && cpuDanger === 0 && p2.hp >= 1 ) {
        danger.play();
        cpuDanger = 1;
    }

    if (p1.hp < 1) {

        battleTheme.pause();
        $('main').fadeOut("slow")
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p2.name} Wins`);
        end.play();
        setTimeout(() => {
            let url = `./audio/${p2.imagem}Victory.mp3`
            new Audio(url).play();            
        }, 1500);


    }

    if (p2.hp < 1) {

        battleTheme.pause();
        $('main').fadeOut("slow");
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p1.name} Wins`);
        end.play();
        setTimeout(() => {
            let url = `./audio/${p1.imagem}Victory.mp3`
            new Audio(url).play();            
        }, 1500);

    } 

}