//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let myNumbers = document.getElementById("numbers");
myNumbers.classList.add("covert");

let playButton = document.getElementById("bottone");
playButton.addEventListener("click",

    function(){

        myNumbers.classList.remove("covert");

        const arrayNumRandom = arrayRandom(5, 1, 100);
        console.log(arrayNumRandom);
        myNumbers.innerHTML = arrayNumRandom;

        for (let i = 0; i < arrayNumRandom.length; i++) {
        
            let cronometro = 10;
            let timer = setInterval(function(){
                if(cronometro === 0){
                    clearInterval(timer);
                    myNumbers.classList.add("covert");
                    
                    userNum = parseInt(prompt("Inserisci i numeri"));
                }else
                    cronometro--;
                    console.log(cronometro);
            },
            3000);
        };
    } 
)

function randomNumber(min, max){
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

