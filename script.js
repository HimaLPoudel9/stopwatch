


let getMins = document.querySelector(`span.mins`);
let getSeconds = document.querySelector(`span.seconds`);
let getTens = document.querySelector(`span.tens`);




let start = document.querySelector(`.btn-start`);
let stop = document.querySelector(`.btn-stop`);
let reset = document.querySelector(`.btn-reset`);
let interval;


start.addEventListener(`click`, () => {
   clearInterval(interval);
 interval = setInterval(startTimer,10);
})
stop.addEventListener(`click`, ()=>{
    clearInterval(interval);
} )
reset.addEventListener(`click`,()=>{
    clearInterval(interval);
    tens = '00'; 
    seconds = '00' ;
    mins = '00';
    
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;

})

function startTimer(){
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;                   

    }
    if (seconds > 9) {
        getSeconds.innerHTML =   seconds;
    }
    
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = '0';
        getSeconds.innerHTML = '0' + 0;

    }
    
    if (mins > 9) {
        getSeconds.innerHTML =  mins;
     }
}
















