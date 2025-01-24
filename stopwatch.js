/*let m1=document.querySelector('.m1');
let stop=document.getElementById('.stop');
let start=document.getElementById('.start');
let reset=document.getElementById('.reset');
let milli= 0 ;
let second=0;
let minutes=0;
let timerid=null;
start.addEventListener('click',function(){
    if(timerid!==null){
        clearInterval(timerid);
    }
    timerid=setInterval(start_timer,10);
})
stop.addEventListener('click',function(){
    clearInterval(timerid);
})
reset.addEventListener('click',function(){
    clearInterval(timerid);
    m1.innerHTML='00:00:00';
})
function start_timer(){
    milli++;
    if(milli==100){
        milli=0;
        second++;
        if(second==60){
            second=0
            minutes++;
        }
    }
    let msecond=milli<10?'0${milli}':milli;
    let usecond=second<10?'0${milli}':second;
    let uminutes=minutes<10?'0${milli}':minutes;
    m1.innerHTML='${uminutes} : ${usecond} : ${msecond}';
}
wrong code and corrected code below
*/

let m1 = document.querySelector('.m1');
let stop = document.getElementById('stop');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let milli = 0;
let second = 0;
let minutes = 0;
let timerid = null;

start.addEventListener('click', function() {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(start_timer, 10);
});

stop.addEventListener('click', function() {
    clearInterval(timerid);
});

reset.addEventListener('click', function() {
    clearInterval(timerid);
    milli = 0;
    second = 0;
    minutes = 0;
    m1.innerHTML = '00:00:00';
});

function start_timer() {
    milli++;
    if (milli == 100) {
        milli = 0;
        second++;
        if (second == 60) {
            second = 0;
            minutes++;
        }
    }
    let msecond = milli < 10 ? `0${milli}` : milli;
    let usecond = second < 10 ? `0${second}` : second;
    let uminutes = minutes < 10 ? `0${minutes}` : minutes;
    m1.innerHTML = `${uminutes} : ${usecond} : ${msecond}`;
}
