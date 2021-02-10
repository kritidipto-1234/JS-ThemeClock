const stopwatch=document.querySelector('.stopwatch');
const controller=document.querySelector('.control');
const timer=document.querySelector('.stop_time');
const lapList=document.querySelector('.lapList');
//------------------------------------------------------------------------------
//global variables
let mainTimer;
let lapTimer;
let time=0;
let lapTime=0;
let lapNo=0;
//--------------------------------------------------------------------------------
import {upto2Digit,renderTime} from './myUtility.js'
//---------------------------------------------------------------------------------
init();
function render_stopwatch(color)
{
    stopwatch.style.color=color;
}

function hideStopwatch()
{
    stopwatch.style.display='none';
}

function showStopwatch()
{
    stopwatch.style.display='flex';
}

export {render_stopwatch,hideStopwatch,showStopwatch};


function init()//makes the stopwatch functional
{
    const leftControl=document.createElement('div');
    const rightControl=document.createElement('div');
    controller.appendChild(leftControl);
    controller.appendChild(rightControl);
    leftControl.textContent='START';
    rightControl.textContent='LAP';
    controller.addEventListener('click',function(e)
    {
        if (e.target.classList.contains('control'))
            return;
        let pressedBtn=e.target.textContent;
        let currentState=leftControl.textContent+rightControl.textContent;
        if (currentState==='STARTLAP')
        {
            if (pressedBtn==='LAP')
            {
                //do nothing
            }
            else if (pressedBtn==='START')
            {
                startMainTimer();
                startLapTimer(createNewLap());
                leftControl.textContent="STOP";
                rightControl.textContent="LAP";
            }
        }
        else if(currentState==='STOPLAP')
        {
            if (pressedBtn==='STOP')
            {
                clearInterval(mainTimer);
                clearInterval(lapTimer);
                leftControl.textContent="START";
                rightControl.textContent="RESET";
            }
            else if(pressedBtn==='LAP')
            {
                clearInterval(lapTimer);
                lapTime=0;
                startLapTimer(createNewLap());
            }
        }
        else if (currentState==='STARTRESET')
        {
            if (pressedBtn==='RESET')
            {
                clearInterval(mainTimer);
                clearInterval(lapTimer);
                lapList.innerHTML='';
                lapNo=0;
                time=0;
                lapTime=0;
                timer.textContent='00:00:00';
                leftControl.textContent='START';
                rightControl.textContent='LAP';
            }
            else if (pressedBtn==='START')
            {
                startMainTimer();
                startLapTimer(lapList.firstChild);
                leftControl.textContent="STOP";
                rightControl.textContent="LAP";
            }
        }
    });
}


function startMainTimer()
{
    clearInterval(mainTimer);
    mainTimer=setInterval(function()
    {
        time++;//in nano seconds
        timer.textContent=renderTime(time);
    },10);
}

function startLapTimer(lap)
{
    clearInterval(lapTimer);
    lapTimer=setInterval(function()
    {
        lapTime++;//in nano seconds
        [...lap.children][1].textContent=renderTime(lapTime);
    },10);
}

function createNewLap()
{
    const lap=document.createElement('div');
    lap.classList.add('laps');
    const span1=document.createElement('span');
    span1.textContent=`LAP ${++lapNo}`
    const span2=document.createElement('span');
    span2.textContent=`00:00:00`;
    lap.appendChild(span1);
    lap.appendChild(span2);
    lapList.prepend(lap);
    return lap;
}