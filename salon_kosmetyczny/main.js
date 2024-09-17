const peeling = document.getElementById("peeling")
const maska = document.getElementById("maska")
const masaz_twarzy = document.getElementById("masaz_twarzy")
const makijaz = document.getElementById("makijaz")

const Btn = document.getElementById("Btn");
const display = document.getElementById("display");

suma = 0

Btn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(peeling.checked){
        suma+=45
    }
    if(maska.checked){
        suma+=30
    }
    if(masaz_twarzy.checked){
        suma+=20
    }
    if(makijaz.checked){
        suma+=50
    }
    display.innerHTML = `Cena zabiegów: ${suma}`

})