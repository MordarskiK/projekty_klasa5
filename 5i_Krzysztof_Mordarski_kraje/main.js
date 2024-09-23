const kraje = document.querySelectorAll("[name=kraje]")
const nazwa_kraju = document.querySelector("#nazwa_kraju")
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")

kraje.forEach(element => {
    element.addEventListener('click', (evt)=>{
        evt.preventDefault;
        console.log(element.value)
        switch(element.value){
            case "wlochy":
                nazwa_kraju.innerHTML = "Włochy";
                img1.src = "img/wlochy1.jpg";
                img2.src = "img/wlochy2.jpg";
                break;
            case "norwegia": 
                nazwa_kraju.innerHTML = "Norwegia";
                img1.src = "img/norwegia1.jpg";
                img2.src = "img/norwegia2.jpg";
                break;  
            case "chorwacja":
                nazwa_kraju.innerHTML = "Chorwacja";
                img1.src = "img/chorwacja1.jpg";
                img2.src = "img/chorwacja2.jpg";
                break; 
        }
    })
});