const clock=document.querySelector('.clock');

function render_clock(color)
{
    clock.style.color=color;
}

function hideClock()
{
    clock.style.transform='scale(1)';
}

function showClock()
{
    clock.style.transform='scale(2)';
}

export {render_clock,hideClock,showClock};