import * as StatesModule from './states.js';
import {upto2Digit} from './utility.js'

//-----------------------------------------------------------------------------------
const monthNames = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
const clock=document.querySelector('.clock');
//---------------------------------------------------------------------------------------

init();

const weekDays=[...document.querySelector('.week').children];

function render_clock(color)
{
    clock.style.color=color;
    weekDays.forEach(e=>e.style.color='grey');
    weekDays[(new Date()).getDay()].style.color=StatesModule.currentClockColor;
}

function hideClock()
{
    clock.style.display='none';
}

function showClock()
{
    clock.style.display='flex';
}

function init()//makes the digital clock
{
    const week=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    const date=document.createElement('div');
    const weekDays=document.createElement('div');
    week.forEach(day=>
        {
            const newDay=document.createElement('span');
            newDay.textContent=day;
            weekDays.appendChild(newDay);
        })
    const time=document.createElement('div');
    date.classList.add('date');
    weekDays.classList.add('week');
    time.classList.add('time');
    clock.appendChild(date);
    clock.appendChild(weekDays);
    clock.appendChild(time);
    function makeClock()
    {
        const d=new Date();
        date.textContent=`${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
        const hour=upto2Digit((d.getHours()%12==0)?'12':d.getHours()%12);
        time.textContent=`${hour} : ${upto2Digit(d.getMinutes())} : ${upto2Digit(d.getSeconds())} ${d.getHours()>=12?'pm':'am'}`;
    }
    setInterval(makeClock,1000);
}


export {render_clock,hideClock,showClock};
