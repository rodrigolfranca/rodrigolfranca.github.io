const header = document.querySelector("header");
const main = document.querySelector("main");
const figure = document.querySelector("figure");

fillHeader();
fillMain();
const link = document.querySelector("a");
fillLink();
fillFigure();
const fotos = document.querySelectorAll(".fotos");
fillGalery();

function fillHeader() {
    header.innerHTML = "<img src='images/gatos.png' alt='Gatos :D' />";
}
function fillMain () {
    main.innerHTML = "<h1>Eu gosto de gatos</h1><p>O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular do mundo, estando numericamente atrás apenas dos peixes de aquário. <a></a></p>"
}
function fillFigure() {
    figure.innerHTML = '<img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" /><img class=fotos width="360px" height="210px" />'
}
function fillGalery() {
    let i = 1;
    fotos.forEach(element => {
        element.src ="./images/foto"+i+".png";
        i++;
    });    
}
function fillLink() {    
    link.href = "https://pt.wikipedia.org/wiki/Gato";
    link.target = "_blank";
    link.innerHTML = "Saiba mais."
    link.style = "color: white;"
}