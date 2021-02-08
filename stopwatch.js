const stopwatch=document.querySelector('.stopwatch');

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