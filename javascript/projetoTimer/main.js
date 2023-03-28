let sec =0;
let timerInit;
const timer = document.querySelector('.timer')
const startTimer = document.querySelector('.startTimer')
const pauseTimer = document.querySelector('.pauseTimer')
const cleanTimer = document.querySelector('.cleanTimer')

function formatTimer(sec){
    const date = new Date(sec *1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    })
}

export function startTimer (){
    timerInit = setInterval(function (){
        sec++;
        timer.innerHTML = formatTimer(sec);
    },100);
}

export const pauseTimer = ()=>{
    return console.log("hey")
}

export const cleanTimer = ()=>{
    return console.log("hi")
}


