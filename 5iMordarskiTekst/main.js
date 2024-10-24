const lorem1 = document.querySelector("#lorem1");
const lorem2 = document.querySelector("#lorem2");
const lorem3 = document.querySelector("#lorem3");

const btn = document.querySelector("#btn");

const display = document.querySelector("#display")

btn.addEventListener('click', ()=>{
    // tableSentence = [lorem1.innerHTML.split(' '),lorem2.innerHTML.split(' '),lorem3.innerHTML.split(' ')];
    // count = [0,0,0];
    // numOfo = [0,0,0];
    // console.log(tableSentence);

    // for(i=0;i<tableSentence.length;i++){
    //     console.log(tableSentence[i])
    //     tableSentence[i].forEach(word =>{
    //         if(word.endsWith(".") || word.endsWith("!") || word.endsWith("?")){
    //             count[i]+=1;
    //         }
    //         if(word.includes("o")){
    //             numOfo[i]+=1
    //         }
    //     })
    // }
    
    // console.log(count)
    // console.log(numOfo)

    table1 = lorem1.innerHTML.split(' ');
    count1 = 0;
    numOfo1 = 0;
    table1.forEach(sentenceent => {
        if(sentenceent.endsWith(".") || sentenceent.endsWith("!") || sentenceent.endsWith("?")){
            count1+=1;
        }
        if(sentenceent.includes("o")){
            numOfo1+=1
        }
    });
    console.log(table1);
    console.log(count1);
    console.log(numOfo1);

    table2 = lorem2.innerHTML.split(' ');
    count2 = 0;
    numOfo2 = 0;
    table2.forEach(sentenceent => {
        if(sentenceent.endsWith(".") || sentenceent.endsWith("!") || sentenceent.endsWith("?")){
            count2+=1;
        }
        if(sentenceent.includes("o")){
            numOfo2+=1
        }
    });
    console.log(table2);
    console.log(count2);
    console.log(numOfo2);

    table3 = lorem3.innerHTML.split(' ');
    count3 = 0;
    numOfo3 = 0;
    table3.forEach(sentenceent => {
        if(sentenceent.endsWith(".") || sentenceent.endsWith("!") || sentenceent.endsWith("?")){
            count3+=1;
        }
        if(sentenceent.includes("o")){
            numOfo3+=1
        }
    });
    console.log(table3);
    console.log(count3);
    console.log(numOfo3);

    if(count1 > count2 && count1 > count3){
        display.innerHTML = `Najwiecej zdan ma lorem1 <br>`
    }else if(count2 > count3){
        display.innerHTML = `Najwiecej zdan ma lorem2 <br>`
    }else{
        display.innerHTML = `Najwiecej zdan ma lorem3 <br>`
    }

    display.innerHTML += `<br>Ilosc "o" w pierszym lorem wynosi ${numOfo1}`;
    display.innerHTML += `<br>Ilosc "o" w drugin lorem wynosi ${numOfo2}`;
    display.innerHTML += `<br>Ilosc "o" w trzecim lorem wynosi ${numOfo3}`;

})