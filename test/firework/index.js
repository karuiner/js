let pa = document.querySelector(".page_A");
let canvas = document.querySelector(".canvas");
let present,
    start,
    lastfire,
    lct = 0,
    target_list = [],
    a0 = 4,
    mote_list = [];
color_set = ["red", "green", "yellow", "purple", "blue"];
function mk_ball() {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.position = "fixed";
    ball.style.top = "29vh";
    ball.style.left = "0vw";
    pa.append(ball);
    return ball;
}
function fire(arr) {
    [target, time] = arr;
    // 필요한것  위치 계산 인자
    // 위치 좌측 아래 고정
    // 속도 입력 필요
    let vx0 = 200,
        vy0 = -10,
        px = parseFloat(target.style.left.split("px")[0]),
        py = parseFloat(target.style.top.split("vh")[0]),
        dt = (present - lct) / 1000,
        t = (present - time) / 1000,
        nx = px + vx0 * dt,
        ny = py + vy0 * dt + a0 * t * dt;
    lct = present;
    target.style.left = `${nx}px`;
    target.style.top = `${ny}vh`;
    target.style.opacity = 0.5 + 0.5 * Math.random();

    // if (t > 5) {
    //     gotobomb(target);
    // }
    if (nx > 1500) {
        target_list = target_list.slice(1);
        pa.removeChild(target);
    }
}

function color_pick() {
    let z = Math.random() * 5;
    z = z > 4 ? 4 : parseInt(z);
    return color_set[z];
}

function mk_mote() {
    let mote = document.createElement("div");
    mote.classList.add("mote");
    mote.style.position = "fixed";
    mote.style.top = "14vh";
    mote.style.left = "50vw";
    mote.style.background = color_pick();
    pa.append(mote);
    return mote;
}

function motion_in_gravity(target, stime, time, st, v, theta, phi) {
    let vset = toxyz(v, theta, phi),
        px = parseFloat(target.style.left.split("px")[0]),
        py = parseFloat(target.style.top.split("vh")[0]),
        dt = (present - time) / 1000,
        t = (present - stime) / 1000,
        x = px + 6 * (vset[0] / 200) * dt,
        y = py + -6 * (vset[1] / 200) * dt + a0 * t * dt;
    if (t * 10 > st) {
        target.style.left = `${x}vw`;
        target.style.top = `${y}vh`;
        st += 1;
    }
    if (t > 1) {
        target.opacity = 1 - 0.5 * (t - 1);
    }
    if (t > 3 || y > 30) {
        mote_list = mote_list.filter(function (v) {
            return v[0] !== target;
        });
        if (target.parentElement === pa) {
            pa.removeChild(target);
        }
    }

    time = present;
    return [target, stime, time, st, v, theta, phi];
}

function toxyz(r, theta, phi) {
    let x = r * Math.sin(theta) * Math.cos(phi),
        y = r * Math.sin(theta) * Math.sin(phi),
        z = r * Math.cos(theta);
    return [x, y, z];
}

function gotohell(target, time, vx, vy) {
    let dt = (present - time) / 1000,
        x = vx * dt,
        y = vy * dt;
    time = present;
    target.style.transform = `translate(${x}px, ${y}px)`;
    return [target, time, vx, vy];
}

function fire_thrower() {
    // if (parseInt(present / 500) > mote_list.length) {
    if (100 > mote_list.length) {
        let target = mk_mote();
        target.parentElement;
        mote_list.push([target, present, present, 0, 100 + Math.random() * 100, 2 * Math.PI * Math.random(), 2 * Math.PI * Math.random()]);
        // console.log(mote_list.slice(-1));
        // console.log(mote_list.slice(-1));
    }
    mote_list.forEach(function (v, i, arr) {
        arr[i] = motion_in_gravity(...v);
    });
}
//top 29vh left 0vw
//넣을수 있다면 화면내에서의 마우스 위치 감지 그 위치 방향으로 포격..
// 포격 속도? 우선 초당

function frame(timestamp) {
    if (start === undefined) start = timestamp;
    present = timestamp;

    // 대포알 발사 예제 1개씩 무한히
    // if (pa.childElementCount < 1) {
    //     let target = mk_ball();
    //     target_list.push([target, present]);
    // }

    // for (let i of target_list) {
    //     fire(i);
    // }

    // 중심에서 불꽃을 원형으로 던져내는 예제를 만들어야한다.
    fire_thrower();

    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);

if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
}
