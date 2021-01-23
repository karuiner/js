const calculator = document.querySelector(".calculator");
const display = document.querySelector(".lower_moniter");
const display2 = document.querySelector(".upper_moniter");
const operator = document.querySelector(".operator");
const buttons = calculator.querySelector(".buttons");
const ac = document.querySelector(".clear");
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

function paren_Cal(s) {
    let ans = [],
        oper = ["*", "+", "-", "/"],
        k = 0,
        start,
        a,
        b,
        c,
        r,
        end,
        i,
        j;
    s = s.split(" ");
    [i, j] = [s.indexOf("("), s.lastIndexOf(")")];
    start = s.slice(0, i).join(" ");
    end = s.slice(j + 1).join(" ");
    s = s.slice(i + 1, j);
    while (s.length || k > 20) {
        [i, j] = [s.indexOf("("), s.lastIndexOf(")")];
        if (j !== s.length - 1 && j > 0) {
            ans.unshift(s.slice(j + 1).join(" "));
        } else if (i > 0) {
            ans.unshift(s.slice(0, i).join(" "));
        } else if (i < 0 && j < 0) {
            ans.unshift(s.join(" "));
            s = "";
        }
        s = s.slice(i + 1, j);
        k++;
        console.log(ans, s);
    }
    for (let k of ans) {
        if (k.split(" ").length === 3) {
            [a, b, c] = k.split(" ");
            r = calculate(a, b, c);
        } else if (k.split(" ").length === 2) {
            [a, b] = k.split(" ");
            if (oper.includes(a)) {
                r = calculate(r, a, b);
            } else {
                r = calculate(a, b, r);
            }
        } else {
            return "error";
        }
    }

    return `${start} ${r} ${end}`.trim();
}

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

function new_calculate(inp) {
    // 사칙 연산 우선 순위대로 계산하는 코드작성
    // 입력 inp는 arr을 가정
    //교환시 splice 활용
    let pI,
        mI,
        tI,
        dI,
        cI,
        cc = 0; // pulse index, minus index, times index, divide index, calculate index
    while (inp.length > 1 && cc < 10) {
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

    return inp.join("");
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
        console.log(inp);
        inp = paren_Cal(inp);
        if (inp === "error") {
            return inp;
        }
    }
    save = inp.split(" ");
    while (save.length > 3) {
        [num1, intermediateOperator, num2] = save.slice(0, 3);
        save = save.slice(3);
        save.unshift(calculate(num1, intermediateOperator, num2));
    }

    [num1, intermediateOperator, num2] = save;
    inp = calculate(num1, intermediateOperator, num2);

    return inp;
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
            } else if (previousKey === "operator" || previousKey === "(" || !(input.split(" ").length % 2)) {
                console.log(previousKey === "operator" || !(input.split(" ").length % 2));
                input += ` ${buttonContent}`;
            } else {
                input += buttonContent;
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
            if (buttonContent === "(") {
                if (input === "0") {
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
                save = input;
                console.log(save[save.length - 1], save.substring(0, save.length - 1), save.substring(0, save.length - 3));
                if (input.length > 1) {
                    if (save[save.length - 1] === " ") {
                        input = save.substring(0, save.length - 3);
                    } else {
                        input = save.substring(0, save.length - 1);
                    }
                } else {
                    input = "0";
                }
            }
        }

        if (action === "Enter") {
            // 우선 삼요소가 다 입력 되었는지를 따진다.
            // if (intermediateOperator !== undefined) {
            //     if (previousKey === "calculate") {
            //         display.textContent = calculate(firstNum, intermediateOperator, previousNum);
            //         firstNum = display.textContent;
            //     } else {
            //         previousNum = display.textContent;
            //         firstNum = display.textContent = calculate(firstNum, intermediateOperator, previousNum);
            //     }
            // }
            console.log(input.split(" ").length, input.split(" ").length % 2);
            if (!(input.split(" ").length % 2) && input.indexOf("(") === -1) {
                pinput = "0";
            } else {
                if (input.split(" ").length >= 3) {
                    // save = input.split(" ");
                    // while (save.length > 3) {
                    //     [num1, intermediateOperator, num2] = save.slice(0, 3);
                    //     save = save.slice(3);
                    //     save.unshift(calculate(num1, intermediateOperator, num2));
                    // }
                    // [num1, intermediateOperator, num2] = save;
                    pinput = input;
                    // input = calculate(num1, intermediateOperator, num2);
                    input = total_Calculate(input);
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
