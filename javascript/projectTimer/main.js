const timer = document.querySelector('.timer')
const startTimer = document.querySelector('.startTimer')
const pauseTimer = document.querySelector('.pauseTimer')
const cleanTimer = document.querySelector('.cleanTimer')
let sec = 0
let updateTimer

function initTimer (){
    updateTimer = setInterval(function(){
        sec ++;
        timer.innerHTML = formatTimer(sec)
    },1000);

}
function formatTimer(sec){
    const date = new Date(sec *1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'//a data é 01/01/70 com a hora 00:00:00
    })
}

startTimer.addEventListener('click',function(event){
    timer.classList.remove('pause')
    clearInterval(updateTimer)
    initTimer()
});

pauseTimer.addEventListener('click',function(event){
    clearInterval(updateTimer)
    timer.classList.add('pause')
});

cleanTimer.addEventListener('click',function(event){
    timer.classList.remove('pause')
    clearInterval(updateTimer)
    sec = 0
    timer.innerHTML = '00:00:00'

});

/* ou posso usar o document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('zerar')){
        clearInterval(timer)
        timer.innerHTML = '00:00:00',
        sec = 0
    }
}) */
