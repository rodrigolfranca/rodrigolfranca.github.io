//gerais
document.querySelector("*").style = "box-sizing: border-box;font-family: sans-serif;font-weight: bold;";

//body
document.querySelector("body").style = "width: auto;height: 900px;background-color: #1e1e1e;margin: 0;color: white;";

//cabeçalho
document.querySelector("header").style = "width:800px;height: 200px;display: flex;flex-wrap: wrap;margin: 0 auto;align-items: center;align-content: center;justify-content: space-evenly;";

//foto minha
document.querySelector("#me").style = "height: 150px;width: 150px;border-radius: 50%;";

//texto sobre mim
document.querySelector("#about-me").style = "font-size: 35px;font-weight: bold;";

//main
document.querySelector("main").style = "margin: 0 auto; text-align: center;";

//links
document.querySelector("#genre").style = "display: block";

//fotos
document.querySelector("figure").style = "height: 350px; width: 1200px;margin: 3em auto;";

//lista
document.querySelector("ul").style = "list-style-type: none;";

let links = document.querySelectorAll("a:visited, a:link, a:focus");
links.forEach(element => {
    //estilização nativa
    element.style = "color: white;text-decoration: none; padding: none;"
    //estilização hover
    element.addEventListener('mouseenter', function () { 
        element.style = "text-decoration: underline;color:white; padding: none"
    });
    element.addEventListener('mouseleave', function () { 
        element.style = "color: white;text-decoration: none; padding: none;"
    });    
});