// ==UserScript==
// @name         Projeto JS- Arata-weak
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://bloble.io/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
})();
function titulo(){
var ti=document.getElementById("gameTitle");
ti.innerText="BLOBLE.KENGO";
ti.style.backgroundColor="rgba(0, 0, 0, 0.4)"
}
function cor(){
backgroundColor="#000000"
}
function remover(){
var web= document.getElementById('adContainer');
  var con=document.getElementById('smallAdContainer')
if (web.parentNode && con.parentNode) {
web.parentNode.removeChild(web);
  con.parentNode.removeChild(con);
}
var criador=document.getElementById('creatorLink');
var link=document.getElementById('infoLinks');
if (criador.parentNode && link.parentNode) {
link.parentNode.removeChild(link);
criador.parentNode.removeChild(criador);
}
}
remover()
function removerText(){
var rem=document.getElementById("instructionsText");
  if (rem.parentNode) {
rem.parentNode.removeChild(rem);
}
}
removerText();
function musica(){
var audio=document.getElementById('youtuberOf')
audio.innerHTML="<audio autoplay> <source src='https://api.soundcloud.com/tracks/308946187/stream?client_id=N2eHz8D7GtXSl6fTtcGHdSJiS74xqOUI' type='audio/ogg'><source src='https://api.soundcloud.com/tracks/308946187/stream?client_id=N2eHz8D7GtXSl6fTtcGHdSJiS74xqOUI' type='audio/mpeg'></audio>"
}

function box(){
var sup=document.getElementById('youtuberOf')
cax=document.createElement('div');
cax.id='box';
cax.style.backgroundColor="rgba(0, 0, 0, 0.4)";
cax.style.borde='15px solid green';
cax.style.padding='5px';
cax.style.margin='5px';
sup.appendChild(cax)
}
function texs(){
var tes=document.getElementById('box');
setTimeout(()=>{tes.innerText='O'},100)
setTimeout(()=>{tes.innerText='Ol'},200)
setTimeout(()=>{tes.innerText='Olá'},300)
setTimeout(()=>{tes.innerText='Olá'},400)
setTimeout(()=>{tes.innerText='Olá,'},500)
setTimeout(()=>{tes.innerText='Olá, S'},600)
setTimeout(()=>{tes.innerText='Olá, Se'},700)
setTimeout(()=>{tes.innerText='Olá, Sej'},800)
setTimeout(()=>{tes.innerText='Olá, Seja'},900)
setTimeout(()=>{tes.innerText='Olá, Seja B'},1000)
setTimeout(()=>{tes.innerText='Olá, Seja Be'},1100)
setTimeout(()=>{tes.innerText='Olá, Seja Bem'},1200)
setTimeout(()=>{tes.innerText='Olá, Seja Bem V'},1300)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vi'},1400)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vin'},1500)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vind'},1600)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo'},1700)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo a'},1800)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao'},1900)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao m'},2000)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao mo'},2100)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao mod'},2200)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao mod<'},2300)
setTimeout(()=>{tes.innerText='Olá, Seja Bem Vindo ao mod<3'},2400)
setTimeout(()=>{tes.innerText=' '},2700)
}
function fundo(){
  var fundo=document.getElementById('darkener');
  fundo.style.backgroundImage = 'url(https://i.pinimg.com/originals/b9/b1/2c/b9b12c6ac93b4272c5d627b3e216d041.png)';
  fundo.style.backgroundRepeat="no-repeat";
  fundo.style.backgroundSize="cover";
}

musica();
setTimeout(()=>{box()},1500);
setTimeout(()=>{titulo();},1500);
setTimeout(()=>{fundo()},1500);
setTimeout(()=>{texs()},1700);
setTimeout(()=>{cor();},1700);
