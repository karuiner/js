const ball = document.querySelector(".ball");
let isrunning = false;
ball.style.transform = "translate(200px, 200px)";
ball.style.transitionDuration = "5s";

function rot(x, y, rad) {
    let [cos, sin] = [Math.cos(rad), Math.sin(rad)];

    return [x * cos - y * sin, x * sin + y * cos];
}
function rot90(x, y) {
    return rot(x, y, Math.PI * 0.5);
}

function move(target) {
    let [px, py] = target.style.transform.split("(")[1].split(" ");
    px = parseFloat(px.split("px")[0]);
    py = parseFloat(py.split("px")[0]);
    let [nx, ny] = rot90(px, py);
    ball.style.transform = `translate(${nx}px, ${ny}px)`;
}
ball.addEventListener("click", function (event) {
    let target = event.target;
    if (!isrunning) {
        isrunning = true;
        let p1 = new Promise(function (resolve, reject) {
            setTimeout(move, 5000, target);
            resolve(target);
        });
        p1.then((target) => console.log(target));
        p1.catch(() => console.log("fail"));
    }
});
