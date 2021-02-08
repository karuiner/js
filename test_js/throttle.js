function throttle(func, wait) {
    let check = true;
    return function () {
        if (check) {
            check = false;
            setTimeout(() => {
                check = true;
                return func();
            }, wait);
        }
    };
}

function callback() {
    let i = 0;
    return console.log("test");
}
fn = throttle(callback, 100);
console.log(fn());
setTimeout(fn, 100);
setTimeout(fn, 10);
setTimeout(fn, 20);
setTimeout(fn, 80);
setTimeout(fn, 20);
