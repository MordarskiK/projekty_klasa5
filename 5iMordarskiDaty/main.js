const wydarzenie = document.getElementById("wydarzenie");
const data = document.getElementById("data");

const kalendarz = document.getElementById("kalendarz");

const dzisBtn = document.getElementById("dzisBtn");
const kalendarzBtn = document.getElementById("kalendarzBtn");

const display = document.getElementById("display");

dzisBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();

    if(wydarzenie.value == "none"){
        display.innerHTML = "Wybierz wydarzenie!"
    }else{
        let czas = new Date();
        czas = new Date(wydarzenie.value) - czas
        display.innerHTML = `Pozostało ${Math.round(czas/1000/60/60/24)+1} dni`;
    }
})

kalendarzBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(kalendarz.classList.contains('visually-hidden')){
        kalendarz.classList.remove('visually-hidden')
        kalendarzBtn.innerHTML = "ukryj kalendarz"

        if(wydarzenie.value == "none"){
            display.innerHTML = "Wybierz wydarzenie!"
        }else{
            data.addEventListener('change', (evt)=>{
                evt.preventDefault();
                
                console.log("dziala")

                let czas = new Date(data.value)
                czas = new Date(wydarzenie.value) - czas
                display.innerHTML = `Pozostało ${Math.round(czas/1000/60/60/24)} dni` ;
            })
        }
    }else{
        kalendarz.classList.add('visually-hidden')
        kalendarzBtn.innerHTML = "wyświetl kalendarz"
    }
})