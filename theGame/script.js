class Hero {
    constructor(name, type, imagem, st, agi, int, atkText) {
    this.name = name                      //Nome
    this.type = type                      //Tipo
    this.imagem = imagem                  //Universo. Ex.: Disney, Marvel, League of Legends
    this.st = st		                  //Força
    this.agi = agi	                      //Agilidade
    this.int = int	                      //Inteligência
    this.hp = this.st * 10                //Pontos de Vida atual
    this.hpmax = this.st * 10             //Pontos de Vida Máximo   
    this.def = parseInt(this.agi * 0.2);  //Defesa
    this.atkPower = 5                     //Ataque base
    this.atkText = atkText;      
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
let p1 = 0;
let p2 = 0;
const selectCharacterAudio = new Audio("./audio/selectCharacter.mp3");
const hoverCharacter = new Audio("./audio/hoverCharacter.mp3");
const oneSelect = new Audio("./audio/oneSelect.mp3");
const twoSelect = new Audio("./audio/twoSelect.mp3");
const battleTheme = new Audio("./audio/battleSound.mp3");
const end = new Audio("./audio/end.mp3");

//  Instancias da Classe
chooseHero = [
    Chaves = new Hero("Chaves", 1, 'chaves', 14, 22, 14, 'Chaves deu uma sequencia de socos em '),
    Chiquinha = new Hero("Chiquinha", 3, 'chiquinha', 14, 16, 20, 'Chiquinha deu um pontapé em '),
    Quico = new Hero("Quico", 2, 'quico', 18, 14, 10, 'Quico disparou um socão em '),
    Madruga = new Hero("Seu Madruga", 2, 'madruga', 20, 12, 14, 'Seu Madruga deu um croque em '),
    Florinda = new Hero("Dona Florinda", 2, 'florinda', 20, 12, 16, 'Dona Florinda virou o tapão em '),
    Barriga = new Hero("Seu Barriga", 2, 'barriga', 26, 10, 12, 'Seu barriga deu uma barrigada em '),
    Professor = new Hero("Prof Girafales", 3, 'professor', 18, 10, 22, 'Professor Girafales deu uma lição de moral em '),
    Clotilde = new Hero("Dna Clotilde", 3, "clotilde", 8, 10, 28, 'Dona Clotilde enfeitiçou ')
]

//  Função para ataques normais
function ataque(atacante , defensor) {
    log(`${atacante.name} tentara atacar com um ataque normal \n`);
    let dado = parseInt(geraRandom(1,21));
    let def;
    (defStatus)? def = defensor.def * 2 : def = defensor.def;
    defStatus = 0;
    if (dado > def) {
        log(`${dado} => ${def} \n`);
        log(`${atacante.atkText}${defensor.name}\n`);
        defensor.hp -= atacante.atkPower;            
    } else {
        log(`${dado} => ${def}\n`);
        log(`Errou!\n`);
    }
    mostrarLutadores();
    checaVidas();
    return false
}

//  Função de Defesa
function defesa(p) {
    log( `${p.name} se prepara para receber um ataque, sua defesa dobra!\n` );
}

//  Função que sorteia as ações da CPU
function enemyAction(){
    setTimeout(() => {
        let action = geraRandom(1, 10);
        if (action > 4) {
            ataque(p2 , p1);
        } else {
            defesa(p2);
        }        
    }, 5000);
    $("#oneDef").prop("disabled", false);
    $('#oneAtk').prop("disabled", false);
}

//  Função para seleção de personagem
function selected(hero) {
    return chooseHero.filter(element =>{
        return hero === element.name;
    })[0] 
}

//  Função para enviar os logs para a textarea
function log(text) {
    let atual = $('#logText').val();
    atual += text;
    $('#logText').val(atual);
}

//  Gerador de aleatório
function geraRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//  Inicio
$('#inicio').click(function(){
    $('#logText').val("")
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
        $(`#${this.getAttribute('id')}`).text("P2");
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

        p2 = selected(this.getAttribute('value'))
        $(`#${this.getAttribute('id')}`).css("border", "solid 2px black")
        $(`#${this.getAttribute('id')}`).css("filter", "grayscale(100%)")
        twoSelect.play();
        $("#fight-btn").text("CLICK HERE TO BATTLE");
        $("#fight-btn").css("color", "yellow");
        
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

//  Função que preenche os dados dos lutadores no momento de batalha
function mostrarLutadores(){
    //  Player 1
    $('#img-one').attr("src", `./images/${p1.imagem}-large-right.png`);
    $('#oneSTR').text(`${p1.st}`);
    $('#oneAGI').text(`${p1.agi}`);
    $('#oneINT').text(`${p1.int}`);
    let porcentagemOne = (p1.hp * 100) / p1.hpmax
    $('#oneVida').css('width', `${porcentagemOne * 2}px`);
    //  CPU
    $('#img-two').attr("src", `./images/${p2.imagem}-large-left.png`);
    $('#twoSTR').text(`${p2.st}`);
    $('#twoAGI').text(`${p2.agi}`);
    $('#twoINT').text(`${p2.int}`);
    let porcentagemTwo = (p2.hp * 100) / p2.hpmax
    $('#twoVida').css('width', `${porcentagemTwo * 2}px`);    
}

//  Botoes durante a luta
$('#oneAtk').click(function(){
    ataque(p1, p2);
    $('#logText').scrollTop($('#logText')[0].scrollHeight);
    $("#oneDef").prop("disabled", true);
    $('#oneAtk').prop("disabled", true);
    enemyAction();
})

$('#oneDef').click(function(){
    defesa(p1);
    $("#oneDef").prop("disabled", true);
    $('#oneAtk').prop("disabled", true);
    enemyAction();
})

//  Função para Fim de Jogo
function checaVidas(){
    if (p1.hp < 1) {
        battleTheme.pause();
        $('main').fadeOut("slow")
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p2.name} Wins`);
        end.play();
    }
    if (p2.hp < 1) {
        battleTheme.pause();
        $('main').fadeOut("slow");
        $("#victory").fadeIn("slow");
        $('#victory').css("display","flex");
        $('#victoryText').text(`${p1.name} Wins`);
        end.play();
    }
    return false
}