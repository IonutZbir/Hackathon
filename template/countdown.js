function startTimer(date, display) {
    setInterval(function () {

        var now = new Date().getTime();
        var diff = date-now;
        var hours = Math.floor((diff / (1000 * 60 * 60)));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    
        display.text(String(hours).padStart(2,"0") + ":" + String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0"));
    }, 1000);
}

jQuery(function ($) {
    var end_date = 1743114533000
    console.log(new Date().getTime())
    var display = $('#countdown');
    startTimer(end_date, display);
});