function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var p = 'AM';
    if(hour > 12){  var p = 'AM';
        hour -= 12;
        p = 'PM';
    }
    if(hour < 10){
        hour = "0"+hour;
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    if(second < 10){
        second = "0"+second;
    }

    var myTime = hour + ":" + minute + ":" + second +" " +p;

    document.getElementById('time').textContent = myTime;

    setTimeout(showTime, 1000);
}
showTime();

function dis_doctor(){
    document.getElementById('doctors').style.display = 'flex';
}
