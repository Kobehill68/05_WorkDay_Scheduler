
var currtentday = moment().format("dddd MMMM Do YYYY");
var currentH24 = moment().format("HH");

bussinessHour = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
schedule = [];

init();

function init(){
    $("#currentDay").text(currtentday);
    makeSchedule();
}

function makeSchedule(){
    for(var i =0; i < bussinessHour.length; i++){
        var hoursIn = bussinessHour[i]
        var hoursToDis = moment(bussinessHour[i], "hh").format("LT")

        var 

        var divR = $("<div>").attr("class", "row time-block");
        var divH = $("<div>").attr("class", "col-1 hour").text(hoursToDis);
        var textArea = $("<textarea>").attr("class", `col-10 testarea descripton ${hour}`).
        var saveB = $("<button>").attr("class", "col-1 saveBtn").attr("")

    }
}

function renderhour(hour){
    var hourShow = "";
}


