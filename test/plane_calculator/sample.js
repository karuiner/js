const display = document.querySelector(".result");
let input = [];
document.addEventListener("keydown", function (event) {
    const key = event.key;
    const lastindex = input.length - 1 > 0 ? input.length - 1 : 0;
    console.log(key);
    function isNum(x) {
        return !isNaN(x);
    }

    if (isNum(key)) {
        if (input.length === 0) {
            input = input.concat(key);
        } else if (isNum(input[lastindex])) {
            input[lastindex] += key;
        } else {
            input.push(key);
        }
    }
    if (key === "Enter") {
        input.push("\n");
    }
    display.textContent = input.length === 0 ? "0" : input.join("");
});
