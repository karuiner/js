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
// 기본 자료를 입력 받고 실행함수를 돌려주는 외장함수
function input_fire(target, stime) {
    let vx0 = 200,
        vy0 = -12;

    return function (ptime) {
        let t = (ptime - stime) / 1000,
            nx = vx0 * t,
            ny = vy0 * t + 0.5 * a0 * t ** 2;
        if (t < 3) {
            if (target.style.transition === "") {
                target.style.transition = "All 0.05s";
            }
            target.style.transform = `translate(${nx}px,${ny}vh )`;
        } else {
            target.style.background = "black";
            //            pa.removeChild(target);
            //            return "end";
            return make_inner_bomb(target, ptime);
        }
    };
}

function make_inner_bomb(pnode, stime) {
    let bomb_flag = [];

    for (let i = 0; i < 200; i++) {
        let target = mk_mote(pnode),
            func;
        let v = 20,
            theta = Math.PI * Math.random(),
            phi = 2 * Math.PI * Math.random();
        if (i === 0) {
            func = input_motion_in_gravity(target, stime, v, theta, phi, true);
        } else {
            func = input_motion_in_gravity(target, stime, v, theta, phi);
        }
        bomb_flag.push(func);
    }
    return function (ptime) {
        bomb_flag = bomb_flag.filter(function (x) {
            y = x(ptime);
            return y !== "end";
        });
        if (bomb_flag.length === 0) {
            return "end";
        }
    };
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

function fire2(target, t = 0) {
    let vx0 = 200,
        vy0 = -10,
        nx = vx0 * t,
        ny = vy0 * t + 0.5 * a0 * t ** 2;
    target.style.transform = `translate(${nx}px,${ny}vh )`;
    if (target.style.transition === "") {
        target.style.transition = "All 0.01s";
    }
    if (t > 6) {
        pa.removeChild(target);
    } else {
        setTimeout(fire2, 20, target, t + 0.02);
    }
}

function color_pick() {
    let z = Math.random() * 5;
    z = z > 4 ? 4 : parseInt(z);
    return color_set[z];
}

function mk_mote(pnode = pa) {
    let mote = document.createElement("div");
    mote.classList.add("mote");
    mote.style.position = "fixed";
    mote.style.background = color_pick();
    pnode.append(mote);
    return mote;
}

function input_motion_in_gravity(target, stime, v, theta, phi, check = false) {
    let vset = toxyz(v, theta, phi);
    return function (time) {
        let t = (time - stime) / 1000,
            x = vset[1] * t,
            y = vset[2] * t + 0.5 * a0 * t ** 2;

        if (t < 4) {
            if (target.style.transition === "") {
                target.style.transition = "All 0.05s";
            }
            target.style.opacity = 0.2 + Math.random() * 0.7;
            target.style.transform = `translate(${x}px,${y}px )`;
        } else if (t < 8) {
            target.style.opacity *= 0.7;
            target.style.transform = `translate(${x}px,${y}px )`;
        } else {
            if (check) {
                target.parentElement.parentElement.removeChild(target.parentElement);
            }
            return "end";
        }
    };
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
    if (pa.childElementCount < 1) {
        let target = mk_ball();
        target_list.push(input_fire(target, present));
    }
    target_list = target_list.map(function (x) {
        y = x(present);
        if (typeof y === "function") {
            return y;
        } else if (y !== "end") {
            return x;
        }
    });
    target_list = target_list.filter((x) => typeof x === "function");

    // 중심에서 불꽃을 원형으로 던져내는 예제를 만들어야한다.
    // fire_thrower();

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
