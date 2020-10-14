$(document).ready(function(){
    displayDate()
    
    
    
   function displayDate(){
    var date= moment().format('LLLL');
    $("#currentDay").text(date); 
   }

   var hour = 9;
   var hourSuff = ':00am';
   var lStore = [];

   displayHourBlk(9);

   function displayHourBlk(WHoursInAday){
    if(!WHoursInAday){
       WHoursInAday = 1 
    }

    var time = moment().format('LT').toLowerCase().split('');
    var currenthour = getCurrHour(time) + ':00'  + time.slice(-2)[0] + time.slice(-1)[0];



   }


   function getCurrHour(timeArray){
    var i = 0;
    var hour = '';

    while(timeArray[i] !== ':' || i > 100){
        hour += timeArray[i];
        i++;
    }
    return hour;
   };




















});

