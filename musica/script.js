document.querySelector("*").style = "box-sizing: border-box;font-family: sans-serif;font-weight: bold;";

document.querySelector("body").style = "width: auto;height: 900px;background-color: #1e1e1e;margin: 0;color: white;";

document.querySelector("header").style = "width:800px;height: 200px;display: flex;flex-wrap: wrap;margin: 0 auto;align-items: center;align-content: center;justify-content: space-evenly;";

document.querySelector("#me").style = "height: 150px;width: 150px;border-radius: 50%;";

document.querySelector("#about-me").style = "font-size: 35px;font-weight: bold;";

document.querySelector("main").style = "margin: 0 auto; text-align: center;";

document.querySelector("#genre").style = "display: block";

document.querySelector("figure").style = "height: 350px; width: 1200px;margin: 3em auto;";

document.querySelector("ul").style = "list-style-type: none;";

let links = document.querySelectorAll("a:visited, a:link, a:focus");
links.forEach(element => {
    element.style = "color: white;text-decoration: none; padding: none;"
});