const resister = document.querySelector("#resister");
const input_list = document.querySelectorAll(".input_area");
const method = { text: limitedonlyNumberAndEnglish, tel: validPhoneNumber, email: validEmail, password: limitedstandardPassword };

let temp, target;

function input() {
    var input = document.getElementById(target).value;
    temp = input;
}

// [유효성 검증 함수]: n개의 글자 이상
function moreThanLength(str, n) {
    return str.length >= n;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
    return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

function limitedonlyNumberAndEnglish(str) {
    return /^[A-Za-z][A-Za-z0-9]*.{4,12}$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function validEmail(str) {
    return /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(str);
}

function validPhoneNumber(str) {
    return /(\d{3}).*(\d{3}).*(\d{4})/.test(str);
}

//적어도 소문자 하나, 대문자 하나, 숫자 하나가 포함되어 있는 문자열(8글자 이상 15글자 이하) - 올바른 암호 형식을 확인할 때 사용될 수 있음:
function limitedstandardPassword(str) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/.test(str);
}

resister.addEventListener("click", function () {
    let check = false,
        password1 = undefined;
    function turn_on(target, j) {
        let k = 0;
        for (let i of target) {
            console.log(i);
            if (k === j) {
                i.style.display = "";
            } else {
                i.style.display = "none";
            }
            k += 1;
        }
    }

    function back_change(i, check) {
        if (check) {
            i.style.backgroundColor = "pink";
            i.children[0].style.color = "red";
        } else {
            i.style.backgroundColor = "silver";
            i.children[0].style.color = "black";
        }
    }

    for (let i of input_list) {
        console.log(i.type);
        if (i.type === "text") {
            if (moreThanLength(i.value, 4) && onlyNumberAndEnglish(i.value)) {
                turn_on(i.parentElement.children[2].children, 0);
            } else if (moreThanLength(i.value, 4)) {
                turn_on(i.parentElement.children[2].children, 3);
                check = true;
            } else if (onlyNumberAndEnglish(i.value)) {
                turn_on(i.parentElement.children[2].children, 2);
                check = true;
            } else {
                turn_on(i.parentElement.children[2].children, 1);
                check = true;
            }
            back_change(i.parentElement, check);
        }
        check = false;
        if (i.type === "tel") {
            if (validPhoneNumber(i.value)) {
                turn_on(i.parentElement.children[2].children, 0);
            } else if (moreThanLength(i.value, 1)) {
                turn_on(i.parentElement.children[2].children, 2);
                check = true;
            } else {
                turn_on(i.parentElement.children[2].children, 1);
                check = true;
            }
            back_change(i.parentElement, check);
        }
        check = false;
        if (i.type === "email") {
            if (validEmail(i.value)) {
                turn_on(i.parentElement.children[2].children, 0);
            } else if (moreThanLength(i.value, 1)) {
                turn_on(i.parentElement.children[2].children, 2);
                check = true;
            } else {
                turn_on(i.parentElement.children[2].children, 1);
                check = true;
            }
            back_change(i.parentElement, check);
        }
        check = false;
    }
    if (strongPassword(input_list[3].value)) {
        turn_on(input_list[3].parentElement.children[2].children, 0);
    } else if (moreThanLength(input_list[3].value, 8)) {
        turn_on(input_list[3].parentElement.children[2].children, 3);
        check = true;
    } else if (moreThanLength(input_list[3].value, 1)) {
        turn_on(input_list[3].parentElement.children[2].children, 2);
        check = true;
    } else {
        turn_on(input_list[3].parentElement.children[2].children, 1);
        check = true;
    }
    back_change(input_list[3].parentElement, check);
    check = false;
    if (input_list[3].value === input_list[4].value && moreThanLength(input_list[4].value, 8)) {
        turn_on(input_list[4].parentElement.children[2].children, 0);
    } else if (moreThanLength(input_list[4].value, 8)) {
        check = true;
        turn_on(input_list[4].parentElement.children[2].children, 1);
    } else {
        check = true;
        turn_on(input_list[4].parentElement.children[2].children, 2);
    }
    back_change(input_list[4].parentElement, check);
});
