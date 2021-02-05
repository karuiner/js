function get_time() {
    let today = new Date(),
        db = {};
    db["year"] = today.getFullYear();
    db["month"] = today.getMonth() + 1;
    db["day"] = today.getDay();
    db["hour"] = today.getHours();
    db["minute"] = today.getMinutes();
    db["second"] = today.getSeconds();
    return db;
}

function get_formed_time() {
    db = get_time();
    return `${db["year"]}-${db["month"]}-${db["day"]} ${db["hour"]}:${db["minute"]}:${db["second"]}`;
}

function PrintTime() {
    var today = new Date();
    var hh = today.getHours();
    var mi = today.getMinutes();
    var ss = today.getSeconds();
    console.log(today);
}
timerId = null;
function StartClock() {
    PrintTime();
    timerId = setInterval(PrintTime, 1000);
}
function StopClock() {
    if (timerId != null) {
        clearInterval(timerId);
    }
}
