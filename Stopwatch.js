var hr =0;
var min =0;
var sec=0;
var milisec =0;

var timer = false;
function start(){
    timer = true;
    stopwatch();

}
function stop(){
    timer=false

}
function reset(){
timer=false;
hr=0,min=0,sec=0,milisec=0;
document.getElementById('hour').innerHTML="00";
         document.getElementById('min').innerHTML='00';
    document.getElementById('sec').innerHTML='00';
    document.getElementById("milisec").innerHTML='00';

}


function stopwatch(){

if(timer==true){
    milisec=milisec+1;
    if(milisec==100){
        sec=sec+1;
        milisec=0;
         }
         if(sec==60){
            min=min+1;
            sec=0;
         }
         if(min==60){
            hr=hr+1;
            min=0;
            sec=0;
         }

         var hrstring = hr;
         var minstring = min;
         var secstring=sec;
         var milistring=milisec;

         if(hr<10){
            hrstring="0"+hrstring
         }
         if(min<10){
            minstring="0"+minstring;

         }
         if(sec<10){
            secstring="0"+secstring;

         }
         if(milisec<10){
            milistring="0"+milisec;
         }
         document.getElementById('hour').innerHTML=hrstring;
         document.getElementById('min').innerHTML=minstring;
    document.getElementById('sec').innerHTML=secstring;
    document.getElementById("milisec").innerHTML=milistring;
    setTimeout("stopwatch()",10);

}
}