
var currtentday = moment().format("dddd MMMM Do YYYY");
var currentH24 = moment().format("HH");

bussinessHour = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
schedule = [];

init();

function init(){
    $("#currentDay").text(currtentday)
}
