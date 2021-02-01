const displaym = document.querySelector(".main_display");
const displays = document.querySelector(".sub_display");
function get_em(x) {
    return document.querySelector(x);
}
let input = [],
    subinput = "";

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const lastindex = input.length > 0 ? input.length - 1 : 0;
    const db = { operator: ["+", "/", "-", "*"] };

    if (isNaN(key)) {
        if (key === "(") {
            subinput = ")";
            input = input.concat("(");
        }
        if (key === ")") {
            subinput = "";
            input = input.concat(")");
        }
        if (db["operator"].includes(key)) {
            input = input.concat(key);
        }
        if (key === "q") {
            input = input.concat([get_em(".button").textContent, "("]);
            subinput = ")";
        }

        if (key === "Backspace") {
            if (isNaN(input[lastindex])) {
                input.pop();
            } else {
                if (input[lastindex].length > 1) {
                    input[lastindex] = input[lastindex].slice(0, -1);
                } else {
                    input.pop();
                }
            }
        }
    } else {
        if (input.length > 0) {
            if (!isNaN(input[lastindex])) {
                input[lastindex] += key;
            } else {
                input.push(key);
            }
        } else {
            input[lastindex] = key;
        }
    }

    if (subinput.length > 0) {
        displays.textContent = subinput;
        displays.style = "";
        displaym.textContent = input.length > 0 ? input.join("") : "0";
    } else {
        displays.textContent = subinput;
        displays.style = "display: none;";
        displaym.textContent = input.length > 0 ? input.join("") : "0";
    }
    console.log(input, subinput);
});
