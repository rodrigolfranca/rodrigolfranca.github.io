const body = document.getElementById('body');
const header = document.getElementById('header');
const headerPhoto = document.getElementById('top-photo');
const headerTitle = document.getElementById('top-title');
const hobbyTitle = document.getElementById('top-sub-title');
const main = document.getElementById('main');
const hobbyText = document.getElementById('hobby');
const galery = document.getElementById('galery');
const link1 = document.getElementById('link1');
const photo1 = document.getElementById('game-photo1');
const link2 = document.getElementById('link2');
const photo2 = document.getElementById('game-photo2');

body.style.backgroundColor = "#1e2f4d";

header.style.boxSizing = "border-box"
header.style.margin = "70px auto 0";
header.style.width = "800px";
header.style.height = "90px";
header.style.borderTopLeftRadius = "13px";
header.style.borderTopRightRadius = "13px";
header.style.padding = "10px 1em 0 1em";
header.style.backgroundColor= "#1e1e1e";
header.style.color = "white";
header.style.display = "flex";
header.style.flexWrap = "wrap";
header.style.columnGap= "140px";

headerPhoto.src = "./assets/eu.jpg";
headerPhoto.style.height = "75px";
headerPhoto.style.width = "75px";
headerPhoto.style.borderRadius = "50%";

headerTitle.innerHTML = "Rodrigo, 29 anos, São Paulo";
headerTitle.style.margin = "17px 0 0";
headerTitle.style.height = "auto";
headerTitle.style.width = "450px";

main.style.width = "800px"
main.style.height = "400px"
main.style.borderBottomLeftRadius = "13px";
main.style.borderBottomRightRadius = "13px";
main.style.backgroundColor = "#082a1d";
main.style.margin = "0 auto";
main.style.textAlign = "center";
main.style.color = 'white';
main.style.paddingTop = "2em";

hobbyTitle.innerHTML = 'mainHobby: Gaming;';
hobbyTitle.style.fontSize = '22px';

hobbyText.innerHTML = 'Desde muito pequenininho joguei tudo quanto é jogo ao qual tive acesso. Por alívio, fuga, poder ou pura diversão os jogos sempre fizeram parte de mim. Abaixo os mais recentes (clique nas imagens para mais informações):';
hobbyText.style.margin = "0 auto";
hobbyText.style.display= "block";
hobbyText.style.fontSize = '14px';
hobbyText.style.width = "300px";
hobbyText.style.height = "7em";

galery.style.margin = "0 auto";
galery.style.width = "90%";
galery.style.height = "300px";
galery.style.display = "flex";
galery.style.flexWrap = "wrap";
galery.style.justifyContent = "space-between"

link1.href = "https://pt.wikipedia.org/wiki/Genshin_Impact";
link1.target= "_blank";
photo1.src = "./assets/photo-jogo1.png"
photo1.style.width = "340px"

link2.href = "https://en.wikipedia.org/wiki/Call_of_Duty:_Warzone";
link2.target= "_blank";
photo2.src = "./assets/photo-jogo2.png"
photo2.style.width = "340px"