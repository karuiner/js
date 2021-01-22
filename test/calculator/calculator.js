const calculator = document.querySelector(".calculator");
const display = document.querySelector(".lower_moniter");
const display2 = document.querySelector(".upper_moniter");
const operator = document.querySelector(".operator");
const buttons = calculator.querySelector(".buttons");
let firstNum,
    num1,
    num2,
    intermediateOperator,
    previousKey,
    previousNum,
    input,
    save,
    pinput,
    inv = false;

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

buttons.addEventListener("click", function (event) {
    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클

    console.log(`start\n button : ${buttonContent}, First Num : ${firstNum},
     Operator : ${intermediateOperator}, Previous Num : ${previousNum}, 
     Previous Key : ${previousKey}, Display : ${display.textContent}`);
    if (target.matches("button")) {
        if (action === "number") {
            // if (display.textContent === "0" || previousKey === "operator") {
            //     console.log("1");
            //     display.textContent = buttonContent;
            // } else {
            //     console.log("2");
            //     display.textContent += buttonContent;
            // }
            if (display.textContent === "0") {
                display.textContent = buttonContent;
            } else if (previousKey === "operator") {
                display.textContent += ` ${buttonContent}`;
            } else {
                display.textContent += buttonContent;
            }
            previousKey = "number";
        }

        if (action === "operator") {
            // if (display.textContent !== "0") {
            //     if (intermediateOperator === undefined) {
            //         firstNum = display.textContent;
            //     } else if (previousKey !== "operator" && previousKey !== "calculate") {
            //         firstNum = calculate(firstNum, intermediateOperator, display.textContent);
            //     }
            //     intermediateOperator = buttonContent;
            // }
            if (display.textContent !== "0") {
                if (display.textContent.split(" ").length % 2) {
                    display.textContent += ` ${buttonContent}`;
                } else {
                    display.textContent = display.textContent.split(" ")[0] + ` ${buttonContent}`;
                }
            }

            previousKey = "operator";
        }

        if (action === "fbutton") {
            // 미완성 기능 나중에 추가할것 (그전에 html  클래스  이름부터뜯어 고쳐야...)
            console.log(`fbutton : ${buttonContent}`);
            previousKey = "fbutton";
        }
        if (action === "decimal") {
            // if (previousKey === "operator") {
            //     display.textContent = buttonContent;
            // } else if (previousKey != "decimal" && display.textContent.indexOf(buttonContent) === -1) {
            //     display.textContent += buttonContent;
            // }
            previousKey = "decimal";
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
            if (display.textContent.split(" ").length === 3) {
                [num1, intermediateOperator, num2] = display.textContent.split(" ");
                display2.textContent = display.textContent;
                display.textContent = calculate(num1, intermediateOperator, num2);
            } else if (display.textContent.split(" ").length > 3) {
            } else {
                display2.textContent = "0";
            }

            previousKey = "calculate";
        }
    }

    console.log(`End\n button : ${buttonContent}, First Num : ${firstNum},
     Operator : ${intermediateOperator}, Previous Num : ${previousNum}, 
     Previous Key : ${previousKey}, Display : ${display.textContent}`);
});
