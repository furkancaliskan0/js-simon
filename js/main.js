//Visualizzare in pagina 5 numeri casuali.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



let resulte = document.getElementById("risultato");
let divTime = document.getElementById("time");
let divElements = document.getElementById("number");
let click = document.getElementById("Button");
divTime.classList.add("center");
let numbers = [];
let time = 10;

click.addEventListener("click",

    function(){
        for (let i = 0; i < 5; i ++){
            let number = Math.floor(Math.random() * 100) + 1;
            numbers.push(number);
            divElements.innerHTML += " " + number + " ";
        }
        console.log(numbers);

        setInterval(function (){
            if (time === 0){
                clearInterval(time);
                divElements.innerHTML = "è scaduto il tempo";          
                divTime.innerHTML = " ";   
            } else {
                time--;
                divTime.innerHTML = "Hai " + time + " secondi di tempo per memorizzarli";
            }
        }
    , 1000)

    let endtime = setInterval(
        function(){
            let numbUser;
            let count = 0;
            let i = 0
            alert("Bene, ora ti ricordi che numeri erano?");
            while (i < 5){
                numbUser = parseInt(prompt("Dimmi un numero"));
                console.log(numbUser);
            
                if(numbers.includes(numbUser)){
                    count++;
               }
    
               i++;
            }
            clearInterval(endtime);
            console.log("Hai indovinato: " + count + " numeri");
            switch (count){
    
                case 5:
                resulte.innerHTML = "Ottimo Hai indovinato tutti e " + count + " i numeri";
                break;
    
                case 4:
                resulte.innerHTML = "Bravo Hai indovinato " + count + " numeri";
                break;
    
                case 3:
                resulte.innerHTML = "Bene  Hai indovinato " + count + " numeri";
                break;
    
                case 2:
                resulte.innerHTML = "Potevi fare meglio. Hai indovinato " + count + " numeri";
                break;
    
                case 1:
                resulte.innerHTML = "Male, hai indovinato solo " + count + " numeri";
                break;
    
                case 0:
                resulte.innerHTML = "Pessimo non hai indovinato ne anche un numero";
                break;
            }
        }
    , 12000)
    }
)