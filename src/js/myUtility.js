//a personal module for utility functions 

function upto2Digit(a)//upscales all numbers/strings to 2 chars
{
    if (Number(a)<10)
        a='0'+String(a);
    return a;
}

function renderTime(time)
{
    let time2=time;
    const min=Math.floor(time2/(60*100));
    time2=time2%(60*100);
    const sec=Math.floor(time2/(100));
    time2=time2%100;
    const nano=time2;
    return `${upto2Digit(min)}:${upto2Digit(sec)}:${upto2Digit(nano)}`;
}

export {upto2Digit,renderTime};