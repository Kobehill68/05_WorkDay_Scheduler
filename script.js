
var currtentday = moment().format("dddd MMM Do YYYY");
var currentH24 = moment().format("HH");

bussinessHour = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
schedule = [];

init();

function init(){
    $("#currentDay").text(currtentday);

    makeSchedule();
    renderSchedule();
}

function makeSchedule(){
    for(var i = 0; i < bussinessHour.length; i++){
        var hoursIn = bussinessHour[i]
        var hoursToDis = moment(bussinessHour[i], "hh").format("LT")

        var hourShow = renderhourShow(hoursIn)

        var divR = $("<div>").attr("class", "row time-block");
        var divH = $("<div>").attr("class", "col-1 hour").text(hoursToDis);
        var textArea = $("<textarea>").attr("class", `col-10 testarea descripton ${hourShow}`).attr("id", bussinessHour[i]);
        var saveB = $("<button>").attr("class", "col-1 saveBtn").attr("button-index", bussinessHour[i]);

        $(saveB).append($("<i>").attr("class", "fas fa-save fa-2x"));
        $(divR).append(divH, textArea, saveB);
        $("#main-row").append(divR);

    }
}

function renderhourShow(hour){
    var hourShow = "";

    if(hour < currentH24){
        hourShow = "past";
    };

    if(hour < currentH24){
        hourShow = "present";
    };

    if(hour < currentH24){
        hourShow = "future";
    };

    return hourShow;
}


function renderSchedule(){
    var storeSchedule = JSON.parse(localStorage.getItem("schedule"));

    if(storeSchedule !== null) {
        schedule = storeSchedule;

        for(var i = 0; i < schedule.length; i++){
            $("#" + schedule[i].hour).val(schedule[i].event);
        };
    };
}

function theSavedSchedue(buttonIn){
    var nSchedule = {
        hour: buttonIn,
        event: $("#" + buttonIn).val() 
    };

    schedule.push(nSchedule);
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

$(".saveBtn").click(function(event){
    event.preventDefault();
    var buttonInd = $(this).attr("button-index");

    theSavedSchedue(buttonInd);
    renderSchedule();
})


