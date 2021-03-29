const buttons = document.querySelectorAll(".header_button");

buttons.forEach((x) => (x.onclick = button_active));

function nth(t, h) {
    let c = h.children,
        n = 0;
    for (let i of c) {
        if (t === i) {
            break;
        }
        n += 1;
    }
    return n;
}

function button_active(event) {
    let phdr = event.target.parentElement;
    console.log(phdr.style.height);
    setTimeout(
        function move(i) {
            if (i < 450) {
                phdr.style.height = `${5 + i / 10}%`;
            } else {
                phdr.style.height = `${5 + i / 10}%`;
                event.target.style.transform = `rotatex(${(90 / 500) * (i - 450)}deg)`;
            }

            if (i < 950) {
                setTimeout(move, 10, i + 1);
            } else {
                fadein(phdr.parentElement);
                console.log(i);
            }
        },
        10,
        0
    );
}

function fadein(pnode) {
    let x = pnode.children[0],
        y = pnode.children[1];
    console.log(x, y);
    for (let i of y.children) {
        i.style.opacity = 0;
    }
    let n = y.childElementCount;
    y.classList.replace("deactive", "active");
    x.classList.replace("active", "deactive");
    setTimeout(
        function fadeout(i, target, tn) {
            target[tn].style.opacity = i / 1000;
            if (i < 1000) {
                setTimeout(fadeout, 4, i + 1, target, tn);
            } else {
                if (tn < n - 1) {
                    setTimeout(fadeout, 4, 0, target, tn + 1);
                } else {
                    console.log(i);
                }
            }
        },
        4,
        0,
        y.children,
        0
    );
}
