const button = document.getElementById('btn')
const table = document.getElementById('table')

button.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(button.classList.contains("btn-primary")){
        users.forEach(element => {
            const tr = document.createElement('tr')
            element.forEach(elem =>{
                const td = document.createElement('td')
                // console.log(elem);
                td.innerText = elem
                // console.log(td)
                tr.appendChild(td)
            });
            // console.log(tr)
            table.appendChild(tr)
        });
        button.classList.remove("btn-primary")
        button.classList.add("btn-danger")
        button.innerHTML = "Usuń tabelę"
    }else{
        table.innerHTML = ''
        button.classList.add("btn-primary")
        button.classList.remove("btn-danger")
        button.innerHTML = "Generuj tabelę"
    }
})