const stopwatch=document.querySelector('.stopwatch');

function render_stopwatch(color)
{
    stopwatch.style.color=color;
}

function hideStopwatch()
{
    stopwatch.style.transform='scale(1)';
}

function showStopwatch()
{
    stopwatch.style.transform='scale(2)';
}

export {render_stopwatch,hideStopwatch,showStopwatch};