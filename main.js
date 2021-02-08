'use strict'
const colourPalette=document.querySelector('.color_palette');
const currentWidgetPalette=document.querySelector('.current_widget_palette');


//---------------------------------------------------------------------
import * as ClockModule from './clock.js';
import * as StopwatchModule from './stopwatch.js';
import * as StatesModule from './states.js';
//---------------------------------------------------------------------

function init()//to start app
{
    function generatePalette(colors=['red','blue','violet','yellow','aqua','pink','orange','brown'])
    {
        colors.forEach(color=>
            {
                const newOption=document.createElement('div');
                newOption.style.backgroundColor=color;
                newOption.setAttribute('value',color);
                newOption.classList.add('palette_option');
                colourPalette.appendChild(newOption);
            });
    }
    generatePalette();
    displayCorrectActiveOptions();
    ClockModule.render_clock(StatesModule.currentClockColor);
    StopwatchModule.render_stopwatch(StatesModule.currentStopwatchColor);
    renderApp();
}
init();

function displayCorrectActiveOptions()//display correct active colour and widget in palette after fetching states
{
    let currentOptionColor=(StatesModule.currentWidget==='clock')?StatesModule.currentClockColor:StatesModule.currentStopwatchColor;
    
    [...colourPalette.children].forEach(e=>
        {
            e.classList.remove('palette_option_selected');
            if (currentOptionColor===e.getAttribute('value')) e.classList.add('palette_option_selected');
        });
    [...currentWidgetPalette.children].forEach(e=>
        {
            e.classList.remove('widget_option_selected')
            if (StatesModule.currentWidget===e.getAttribute('value')) e.classList.add('widget_option_selected');
        });
}

function renderApp()//re renders both clock and stopwatch
{
    if (StatesModule.currentWidget==='clock')
    {
        ClockModule.render_clock(StatesModule.currentClockColor);
        ClockModule.showClock();
        StopwatchModule.hideStopwatch();
    }
    else
    {
        StopwatchModule.render_stopwatch(StatesModule.currentStopwatchColor);
        ClockModule.hideClock();
        StopwatchModule.showStopwatch();
    }
}


colourPalette.addEventListener('click',function(e)
{
    if (!e.target.classList.contains('palette_option'))
        return;
    let newColor=e.target.getAttribute('value');
    (StatesModule.currentWidget==='clock')?StatesModule.changeClockColor(newColor):StatesModule.changeStopwatchColor(newColor);
    displayCorrectActiveOptions();
    renderApp();
});

currentWidgetPalette.addEventListener('click',function(e)
{
    if (!e.target.classList.contains('current_widget_option'))
        return;
    let newWidget=e.target.getAttribute('value');
    StatesModule.changeCurrentWidget(newWidget);
    displayCorrectActiveOptions();
    renderApp();
});

