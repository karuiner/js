const calculator = document.querySelector(".calculator");
const display = document.querySelector(".lower_moniter");
const display2 = document.querySelector(".upper_moniter");
const operator = document.querySelector(".operator");
const buttons = calculator.querySelector(".buttons");
const ac = document.querySelector(".clear");
const Rad_Button = document.querySelector("#Rad");
const Deg_Button = document.querySelector("#Deg");
let firstNum,
    num1,
    num2,
    intermediateOperator,
    previousKey,
    previousNum,
    input = "0",
    save,
    pinput = "",
    acon = false,
    inv = false;
(answer = "0"), (isRadian = true);

function calculate(n1, operator, n2) {
    let result = 0;
    // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
    // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
    if (operator === "+") {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "-") {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "X") {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "/") {
        result = parseFloat(n1) / parseFloat(n2);
    }

    return String(result);
}

function new_Calculate(inp) {
    // 사칙 연산 우선 순위대로 계산하는 코드작성
    // 입력 inp는 arr을 가정
    //교환시 splice 활용
    let pI,
        mI,
        tI,
        dI,
        cI,
        cc = 0,
        cm = inp.length; // pulse index, minus index, times index, divide index
    if (inp.length === 1) {
        return inp;
    }

    while (inp.length > 1 && cc < cm) {
        pI = inp.indexOf("+");
        mI = inp.indexOf("-");
        tI = inp.indexOf("X");
        dI = inp.indexOf("/");
        if (tI >= 0 || dI >= 0) {
            cI = tI < dI ? (tI >= 0 ? tI : dI) : dI >= 0 ? dI : tI;
            [num1, intermediateOperator, num2] = inp.slice(cI - 1, cI + 2);
            inp.splice(cI - 1, 3, calculate(num1, intermediateOperator, num2));
        } else {
            cI = mI < pI ? (mI >= 0 ? mI : pI) : pI >= 0 ? pI : mI;
            [num1, intermediateOperator, num2] = inp.slice(cI - 1, cI + 2);
            inp.splice(cI - 1, 3, calculate(num1, intermediateOperator, num2));
        }
        cc++;
    }

    return cc < cm ? inp : "error";
}

function angle_function(arr) {
    let identifier = arr[0].slice(0, arr[0].length - 1),
        in_Arr = arr.slice(1, arr.length - 1),
        ans;
    let angle_obj = { sin: Math.sin, cos: Math.cos, tan: Math.cos };
    let toDeg = isRadian ? 1 : Math.pI / 180;
    if (in_Arr.length === 1) {
        ans = angle_obj[identifier](parseFloat(in_Arr) * toDeg);
    } else if (in_Arr.leanth % 2) {
        ans = angle_obj[identifier](new_Calculate(in_Arr) * toDeg);
    } else {
        return "error";
    }
    return ans;
}
function log_function(arr) {
    let identifier = arr[0].slice(0, arr[0].length - 1),
        in_Arr = arr.slice(1, arr.length - 1);
    let log_obj = { log: Math.log10, ln: Math.log };
    return log_obj[identifier](new_Calculate(in_Arr));
}

function main_Calculation(arr) {
    let ans = 0;
    let isString = arr[0].indexOf("(") >= 0,
        isParen = arr[0] === "(";

    if (isString && !isParen) {
        if (arr[0].indexOf("log") >= 0 || arr[0].indexOf("ln") >= 0) {
            ans = log_function(arr);
        } else {
            ans = angle_function(arr);
        }
    } else if (isParen) {
        in_Arr = arr.slice(1, arr.length - 1);
        ans = new_Calculate(in_Arr);
    } else {
        ans = new_Calculate(arr);
    }

    return String(ans);
}

function mk_Lmap(s) {
    let l = 0,
        lmap = [],
        ml = 0;
    for (let j of s) {
        if (j.indexOf("(") >= 0) {
            l += 1;
            lmap.push(l);
            ml = l > ml ? l : ml;
        } else if (j.indexOf(")") >= 0) {
            lmap.push(l);
            l -= 1;
        } else {
            lmap.push(l);
        }
    }
    return lmap;
}

function get_Level(arr, lmap, ml) {
    let i, j, k, v;
    for (let comb of lmap.entries()) {
        [k, v] = comb;
        if (v === ml) {
            i = i === undefined ? k : i;
            j = j === undefined ? k : k - j === 1 ? k : j;
        }
    }
    return [arr.slice(i, j + 1), [i, j]];
}

function put_Level(arr, lmap, index, v) {
    let [i, j] = index;
    arr.splice(i, j - i + 1, v);
    lmap.splice(i, j - i + 1, lmap[i] - 1);
    return [arr, lmap];
}

function string_Caculation_f(str_Arr) {
    let lmap = mk_Lmap(str_Arr); // 주어진 수식의 레벨 맵을 작성
    let ml = lmap.reduce((x, y) => (x > y ? x : y));
    let ps_Area, ps_Index, ps_Value; // ps: present_stage 현재 단계를 표현하기위한 약어
    while (ml >= 0) {
        [ps_Area, ps_Index] = get_Level(str_Arr, lmap, ml);
        ps_Value = main_Calculation(ps_Area);
        [str_Arr, lmap] = put_Level(str_Arr, lmap, ps_Index, ps_Value);
        ml = lmap.reduce((x, y) => (x > y ? x : y));
        console.log(ps_Area, ps_Value, str_Arr, ml);
    }
    return ps_Area;
}

function total_Calculate(inp) {
    if (inp.indexOf("(") >= 0) {
        let rc = inp.match(/[)]/gi) !== null ? inp.match(/[)]/gi).length : 0;
        let lc = inp.match(/[(]/gi).length;
        if (rc < lc) {
            for (let k = 0; k < lc - rc; k++) {
                inp += " )";
            }
        }
    }
    inp = inp.split(" ");
    let select_Index = [];
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].indexOf("(") >= 0 || inp[i].indexOf("Ans") >= 0) {
            if (!isNaN(inp[i - 1]) || inp[i - 1] === ")") {
                inp[i - 1] = `${inp[i - 1]} X`;
            }
        }
        if (inp.indexOf("PI") >= 0) {
            inp[inp.indexOf("PI")] = `${Math.PI}`;
        }

        if (inp.indexOf("e") >= 0) {
            inp[inp.indexOf("e")] = `${Math.E}`;
        }

        if (inp.indexOf("Ans") >= 0) {
            inp[inp.indexOf("Ans")] = `${answer}`;
        }
    }
    inp = inp.join(" ").split(" ");

    console.log(inp);
    inp = string_Caculation_f(inp);

    return inp.join(" ");
}

buttons.addEventListener("click", function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클

    console.log(`start\n button : ${buttonContent}, First Num : ${firstNum},
     Operator : ${intermediateOperator}, Previous Num : ${previousNum}, 
     Previous Key : ${previousKey}, Display : ${display.textContent}`);
    if (target.matches("button")) {
        if (action === "number") {
            console.log(previousKey === "operator", !(input.split(" ").length % 2));
            if (input === "0" || (previousKey === "calculate" && input.split(" ").length % 2)) {
                if (previousKey === "calculate") {
                    pinput = input;
                }
                input = buttonContent;
            } else if (previousKey === "number" || previousKey === "decimal") {
                input += buttonContent;
            } else if (previousKey === "Ans") {
                input += ` X ${buttonContent}`;
            } else {
                input += ` ${buttonContent}`;
            }
            previousKey = "number";
        }

        if (action === "operator") {
            if (input !== "0") {
                if (input.split(" ").length % 2 || input.match(/[(]/gi) !== null) {
                    input += ` ${buttonContent}`;
                } else {
                    input = input.split(" ")[0] + ` ${buttonContent}`;
                }
            }

            previousKey = "operator";
        }

        if (action === "fbutton") {
            if (buttonContent === "sin" || buttonContent === "cos" || buttonContent === "tan") {
                if (input === "0" || previousKey === "calculate") {
                    input = `${buttonContent}(`;
                } else {
                    input += ` ${buttonContent}(`;
                }
                previousKey = "angle_function";
            }

            if (buttonContent === "asin" || buttonContent === "acos" || buttonContent === "atan") {
                if (input === "0" || previousKey === "calculate") {
                    input = `${buttonContent}(`;
                } else {
                    input += ` ${buttonContent}(`;
                }
                previousKey = "angle_function";
            }

            if (buttonContent === "log") {
                if (input === "0" || previousKey === "calculate") {
                    input = `${buttonContent}(`;
                } else {
                    input += ` ${buttonContent}(`;
                }
                previousKey = "log_function";
            }

            if (buttonContent === "ln") {
                if (input === "0" || previousKey === "calculate") {
                    input = `${buttonContent}(`;
                } else {
                    input += ` ${buttonContent}(`;
                }
                previousKey = "log_function";
            }

            if (buttonContent === "Rad") {
                isRadian = true;
                Rad_Button.style.opacity = 1;
                Deg_Button.style.opacity = 0.3;
            }

            if (buttonContent === "Deg") {
                isRadian = false;
                Rad_Button.style.opacity = 0.3;
                Deg_Button.style.opacity = 1;
            }

            if (buttonContent === "pi") {
                if (input === "0" || previousKey === "calculate") {
                    input = "PI";
                } else {
                    input += ` ${"PI"}`;
                }
                previousKey = buttonContent;
            }
            if (buttonContent === "e") {
                if (input === "0" || previousKey === "calculate") {
                    input = "e";
                } else {
                    input += ` ${"e"}`;
                }
                previousKey = buttonContent;
            }

            if (buttonContent === "Ans") {
                if (input === "0" || previousKey === "calculate") {
                    input = "Ans";
                } else if (previousKey === "Ans") {
                    input += ` X ${"Ans"}`;
                } else {
                    input += ` ${"Ans"}`;
                }
                previousKey = buttonContent;
            }

            if (buttonContent === "(") {
                if (input === "0" || previousKey === "calculate") {
                    input = buttonContent;
                } else {
                    input += ` ${buttonContent}`;
                }
                previousKey = buttonContent;
            }

            if (buttonContent === ")") {
                let rc = input.match(/[)]/gi) !== null ? input.match(/[)]/gi).length : 0;
                let lc = input.match(/[(]/gi).length;
                if (rc < lc) {
                    input += ` ${buttonContent}`;
                }
                previousKey = buttonContent;
            }

            // 미완성 기능 나중에 추가할것 (그전에 html  클래스  이름부터뜯어 고쳐야...)
            console.log(`fbutton : ${buttonContent}`);
            // previousKey = "fbutton";
        }
        if (action === "decimal") {
            save = input;
            if (previousKey === "operator") {
                input += ` ${buttonContent}`;
            } else if (previousKey != "decimal" && save.split(" ")[save.split(" ").length - 1].indexOf(buttonContent) === -1) {
                input += buttonContent;
            }
            previousKey = "decimal";
        }

        if (action === "clear") {
            if (acon) {
                pinput = input;
                input = "0";
                ac.textContent = "CE";
                acon = false;
            } else {
                save = input.split(" ");
                console.log(save, input);
                if (input.length > 1) {
                    let end_string = save[save.length - 1];
                    if (!isNaN(end_string) && end_string.length > 1) {
                        save[save.length - 1] = save[save.length - 1].substring(0, end_string.length - 1);
                        input = save.join(" ");
                    } else {
                        input = save.slice(0, save.length - 1).join(" ");
                        input = input.length === 0 ? "0" : input;
                    }
                } else {
                    input = "0";
                }
            }
        }

        if (action === "Enter") {
            // 우선 삼요소가 다 입력 되었는지를 따진다.
            console.log(input.split(" ").length, input.split(" ").length % 2);
            if (!(input.split(" ").length % 2) && input.indexOf("(") === -1) {
                pinput = "0";
            } else {
                if (input.split(" ").length >= 3) {
                    pinput = input;
                    input = total_Calculate(input);
                    answer = input;
                } else {
                    pinput = "0";
                }
                ac.textContent = "AC";
                acon = true;
            }
            previousKey = "calculate";
        }
    }
    display2.textContent = pinput.split(" ").join("");
    display.textContent = input.split(" ").join("");

    console.log(`End\n button : ${buttonContent}, First Num : ${firstNum},
     Operator : ${intermediateOperator}, Previous Num : ${previousNum}, 
     Previous Key : ${previousKey}, Display : ${display.textContent}, action : ${action}\n
     input : ${input}, pinput : ${pinput}`);
});
