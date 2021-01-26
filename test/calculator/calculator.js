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

function range(a, b, c) {
    let i,
        j,
        k,
        ans = [];
    if (b === undefined && c === undefined) {
        [i, j, k] = [0, a, 1];
    } else if (c === undefined) {
        [i, j, k] = [a, b, 1];
    } else {
        [i, j, k] = [a, b, c];
    }
    for (; i < j; i += k) {
        ans.push(i);
    }
    return ans;
}

function enumerate(arr) {
    let ans = [];
    let j = 0;
    for (let i of arr) {
        ans.push([j, i]);
        j++;
    }
    return ans;
}

function paren_Cal(s) {
    let ans = [],
        oper = ["*", "+", "-", "/"],
        k = 0,
        start,
        a,
        b,
        c,
        r = [],
        end,
        i,
        j,
        km = s.length;
    //    s = s.split(" ");
    [i, j] = [s.indexOf("("), s.lastIndexOf(")")];
    start = s.slice(0, i);
    end = s.slice(j + 1);
    s = s.slice(i + 1, j);
    while (s.length || k > km) {
        [i, j] = [s.indexOf("("), s.lastIndexOf(")")];
        if (i >= 0 || j >= 0) {
            a = s.slice(0, i);
            b = s.slice(j + 1);
            ans.unshift([a, b]);
            s = s.slice(i + 1, j);
        } else {
            ans.unshift(s);
            s = "";
        }
        k++;
        console.log(ans, s);
    }
    for (let k of ans) {
        if (k.length === 2) {
            [a, b] = k;
            r = a.concat(r, b);
        } else if (oper.includes(k[0][0])) {
            r = r.concat(k);
        } else {
            r = k.concat(r);
        }
        r = new_Calculate(r);
        if (r === "error") {
            return "error";
        }
        // if (k.split(" ").length === 3) {
        //     [a, b, c] = k.split(" ");
        //     r = calculate(a, b, c);
        // } else if (k.split(" ").length === 2) {
        //     [a, b] = k.split(" ");
        //     if (oper.includes(a)) {
        //         r = calculate(r, a, b);
        //     } else {
        //         r = calculate(a, b, r);
        //     }
        // } else {
        //     return "error";
        // }
    }

    return start.concat(r, end);
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
    if (in_Arr.length === 1) {
        ans = angle_obj[identifier](parseFloat(in_Arr));
    } else if (in_Arr.leanth % 2) {
        ans = angle_obj[identifier](new_Calculate(in_Arr));
    } else {
        return "error";
    }
    return ans;
}

function main_Calculation(arr) {
    let ans = 0;
    let isAngle = arr[0].indexOf("(") >= 0,
        isParen = arr[0] === "(";

    if (isAngle && !isParen) {
        ans = angle_function(arr);
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
        if (inp[i].indexOf("(") >= 0) {
            if (!isNaN(inp[i - 1]) || inp[i - 1] === ")") {
                inp[i - 1] = `${inp[i - 1]} X`;
            }
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
            } else if (previousKey === "operator" || previousKey === "(" || previousKey === "angle_function" || !(input.split(" ").length % 2)) {
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
            if (buttonContent === "sin" || buttonContent === "cos" || buttonContent === "tan") {
                if (input === "0") {
                    input = `${buttonContent}(`;
                } else {
                    input += ` ${buttonContent}(`;
                }
                previousKey = "angle_function";
            }

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
            console.log(input.split(" ").length, input.split(" ").length % 2);
            if (!(input.split(" ").length % 2) && input.indexOf("(") === -1) {
                pinput = "0";
            } else {
                if (input.split(" ").length >= 3) {
                    pinput = input;
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
