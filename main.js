const minutes = document.getElementById('minutes');
const seconds= document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');
const start = document.getElementById('start');
const lap = document.getElementById('lap');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const list=document.getElementById('list');
start.addEventListener('click',start1);
lap.addEventListener('click',lap1);
pause.addEventListener('click',pause1);
reset.addEventListener('click',reset1);
let s=0;
let m=0;
let ms=0;
let interval;
function start1(){
  interval=setInterval(update,10);
  start.disabled=true;
}
function lap1(){
  let li=document.createElement('li');
  li.textContent=`Lap${list.childElementCount +1} : ${padding(m)}:${padding(s)}:${padding(ms)}`;
  list.appendChild(li);
}
function pause1(){
  clearInterval(interval);
  start.disabled=false;
}
function reset1(){
  m=0
  s=0;
  ms=0;
  clearInterval(interval);
  display();
  start.disabled=false;
  while (list.firstChild) {
  list.removeChild(list.firstChild);
}
}

function update(){
  ms++
  if(ms===99){
    ms=0;
    s++;
    if(s==59){
      s=0;
      m++;
    }
  }
  display();
}
function display(){
  minutes.textContent=padding(m);
  seconds.textContent=padding(s);
  milliseconds.textContent=padding(ms);
}
function padding(time){
  return time.toString().padStart(2,'0');
}