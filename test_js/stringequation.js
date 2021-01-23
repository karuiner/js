function calculate(n1, op, n2) {
    let result = 0;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    if (op === "+") {
        result = n1 + n2;
    } else if (op === "-") {
        result = n1 - n2;
    } else if (op === "/") {
        result = n1 / n2;
    } else if (op === "*") {
        result = n1 * n2;
    }
    return String(result);
}

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

s = "( 1 + ( ( 1 + 2 ) + 3 ) ) + 4 ";
console.log(paren_Cal(s));
s = "( 1.2 + ( 3.4 + 4.5 ) ) + 5.6";
console.log(paren_Cal(s));
