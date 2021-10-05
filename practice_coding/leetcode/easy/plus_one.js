/*
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let remain = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        let k = i === digits.length - 1 ? digits[i] + 1 + remain : digits[i] + remain;
        if (k < 10) {
            digits[i] = k;
            remain = 0;
            break;
        } else {
            digits[i] = k - 10;
            remain = 1;
        }
    }
    if (remain > 0) {
        digits = [remain].concat(digits);
    }

    return digits;
};
