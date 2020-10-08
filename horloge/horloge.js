var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

setInterval(function() {
    s++;

    if (s >= 60){
        s = 0;
        m++;
    }

    if (m >= 60){
        m = 0;
        h++;
    }

    if (h >= 24){
        h = 0;
    }

    var zS = s;
    var zM = m;
    var zH = h;

    if (zS < 10) {
        zS = '0' + s;
    }
    if (zM < 10) {
        zM = '0' + m;
    }
    if (zH < 10) {
        zH = '0' + h;
    }

    document.getElementById('hours').innerHTML = zH;
    document.getElementById('minutes').innerHTML = zM;
    document.getElementById('seconds').innerHTML = zS;

}, 1000);