let test_number1 = 12345678987654321;
let test_number2 = 1.2345678987654321;
let test_number3 = 0.00000000000000002;

function limited_number(num, size) {
    // size = 소수점 포함 크기
    let snum = String(num);
    let hasFloatpoint = snum.indexOf(".") >= 0;
    size = hasFloatpoint ? size : size - 1;
    let lengthOfNumber = snum.length;
    let leftNumber = snum.split("").filter();

    return;
}
