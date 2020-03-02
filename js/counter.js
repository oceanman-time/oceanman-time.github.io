const initialDate = new Date('March 1, 2020 00:00:00 UTC+1:00');
const currentDate = new Date();

$(function(){

    //Displaying initial time
    document.getElementById('initial-time').innerHTML = initialDate.toLocaleString();
});