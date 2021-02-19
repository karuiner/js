const main = document.querySelector(".entire");
const sky = document.querySelector(".sky");
const pillars = document.querySelectorAll(".Pillar");
const pillar1 = pillars[0];
let dragged;

function mk_plate(x) {
    let p = document.createElement("div");
    p.classList.add("plate");
    //    p.style.position = "fixed";
    p.style.width = `${x}px`;
    p.style.zIndex = 1;
    p.draggable = true;
    pillar1.append(p);
    return p;
}

document.addEventListener(
    "dragstart",
    function (event) {
        dragged = "";
        if (event.target === event.target.parentNode.lastElementChild) {
            // 드래그한 요소에 대한 참조 변수
            dragged = event.target;
            // 요소를 반투명하게 함
            event.target.style.opacity = 0.5;
        }
    },
    false
);

document.addEventListener(
    "dragend",
    function (event) {
        // 투명도를 리셋
        event.target.style.opacity = "";
    },
    false
);

document.addEventListener(
    "dragover",
    function (event) {
        // 드롭을 허용하도록 prevetDefault() 호출
        event.preventDefault();
    },
    false
);

document.addEventListener(
    "dragenter",
    function (event) {
        // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
        if (event.target.className == "Pillar") {
            event.target.style.background = "purple";
        }
    },
    false
);

document.addEventListener(
    "dragleave",
    function (event) {
        // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
        if (event.target.className == "Pillar") {
            event.target.style.background = "";
        }
    },
    false
);

document.addEventListener(
    "drop",
    function (event) {
        // 기본 액션을 막음 (링크 열기같은 것들)
        event.preventDefault();
        // 드래그한 요소를 드롭 대상으로 이동
        if (event.target.className == "Pillar") {
            if (event.target.lastElementChild === null) {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            } else if (parseFloat(dragged.style.width.split("px")[0]) < parseFloat(event.target.lastElementChild.style.width.split("px")[0])) {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
        }
        event.target.style.background = "";
    },
    false
);
