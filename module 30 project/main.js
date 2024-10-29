var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours +":" minutes":" seconds + " "+meridian;
    clock,innerText = clockTime;
}

setInterval(showCurrentTime,1000);

function changeImage(){
    var time = new Date ().getHours();

    var image="ds_clock.png"
    var imageHTML=document.getElementById('timeImage')
    if(time == wakeuptime){
        image=morning.gif
        
    }
}