let currentWidget='clock',currentClockColor='red',currentStopwatchColor='red';

function changeClockColor(newColor)
{
    currentClockColor=newColor;
}

function changeStopwatchColor(newColor)
{
    currentStopwatchColor=newColor;
}

function changeCurrentWidget(newWidget)
{
    currentWidget=newWidget;
}

export {currentWidget,currentClockColor,currentStopwatchColor,changeClockColor,changeStopwatchColor,changeCurrentWidget};
