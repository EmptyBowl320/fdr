window.onload = function (){

document.querySelector('#title-text').onmouseover = h1SecretMessage;
document.querySelector('#title-text').onmouseout = h1NonSecretMessage;
document.querySelector('.generalSecretMessage').onmouseover = h1SecretMessage;
document.querySelector('.generalSecretMessage').onmouseout = GenralNonSecretMessage;


}

function h1SecretMessage(){
    this.innerHTML = "STALIN IS LOVE";
    this.style.color = "#d20f2e";
    this.style.background ="#7d7a77"; 
}

function h1NonSecretMessage(){
    this.innerHTML = "Franklin D. Roosevelt"
    this.style.background = "#8da1b9"
    this.style.color = 'black'
}

function GenralNonSecretMessage(){
    this.innerHTML = General Information
}